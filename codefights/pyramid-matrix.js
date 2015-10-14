function pyramidMatrix(N) {
	var matrix = new Array(N);
	for (var i = 0; i < N; i++) { //populate an empty matrix of width N
		matrix[i] = new Array(N);
	} 
	var noOfRings = Math.ceil(N/2) + 1;
	for (var j = 1; j < noOfRings; j++) { //find i-th ring in matrix
		var top = j-1, bot = N-j;
		for (var k = top; k <= bot; k++) { //populate i-th ring in matrix with i
			matrix[top][k] = j; //top line = matrix[j-1][j-1] to matrix[j-1][N-j] populate with j
			matrix[bot][k] = j; //bottom line = matrix[N-i][j-1] to matrix[N-j][N-j}]
		}
		for (var l = top + 1; l < bot; l++) {
			matrix[l][top] = j;
			matrix[l][bot] = j;
		}
	}	
	return matrix;
}

console.log(pyramidMatrix(5));
console.log(pyramidMatrix(10));