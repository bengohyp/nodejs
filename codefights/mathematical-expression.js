function mathematicalExpression(expression) {
	var result = eval(expression);
	return result;
}

console.log(mathematicalExpression("2+5-4*10/2"));