const OPERATORS = {
	1: '+',
	2: '-',
	3: '*',
	4: '/'
};

class Problem {
	constructor({ operand_a, operand_b, operator, result }) {
		this.operand_a = operand_a;
		this.operand_b = operand_b;
		this.operator = operator;
		this.result = result;
	}

	format() {
		const { operand_a: a, operand_b: b, operator: o, result } = this;
		const expression = `${a} ${OPERATORS[o]} ${b}`;
		return { expression, result };
	}
}

class _ProblemCaster {
	randomNum(from = 1, to = 10) {
		return from + Math.floor(Math.random() * (to - from + 1));
	}

	getRandomNumbers(count, range) {
		const [from, to] = range.sort((a, b) => a - b);
		const result = [];
		for (let i = 0; i < count; i++) {
			result.push(this.randomNum(from, to));
		}
		return result;
	}

	castAddition(range = [1, 10]) {
		const [a, b] = this.getRandomNumbers(2, range);
		return new Problem({
			operand_a: a,
			operand_b: b,
			operator: 1,
			result: a + b
		});
	}

	castSubtraction(range = [1, 10]) {
		const [a] = this.getRandomNumbers(1, range);
		const [b] = this.getRandomNumbers(1, [1, a]);
		return new Problem({
			operand_a: a,
			operand_b: b,
			operator: 2,
			result: a - b
		});
	}

	castMultiplication(range = [1, 10]) {
		const [a, b] = this.getRandomNumbers(2, range);
		return new Problem({
			operand_a: a,
			operand_b: b,
			operator: 3,
			result: a * b
		});
	}

	castDivision(range = [1, 10]) {
		const [a, b] = this.getRandomNumbers(2, range);
		return new Problem({
			operand_a: a * b,
			operand_b: b,
			operator: 4,
			result: a
		});
	}

	castProblem(operator = this.randomNum(1, 4)) {
		switch (operator) {
			case '+':
			case 1:
				return this.castAddition();
			case '-':
			case 2:
				return this.castSubtraction();
			case '*':
			case 3:
				return this.castMultiplication();
			case '/':
			case 4:
				return this.castDivision();
			default:
				return null;
		}
	}

	castFormatedProblem() {
		return this.castProblem().format();
	}

	castFormatedProblems(n = 20) {
		const problems = [];
		for (let i = 1; i <= n; i++) {
			problems.push(this.castFormatedProblem());
		}
		return problems;
	}
}

export const ProblemCaster = new _ProblemCaster();
