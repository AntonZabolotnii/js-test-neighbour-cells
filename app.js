var NeighborCells = (function () {
	var arr = [],
		checkedCells = [],
		resultArray = [],
		rowCount,
		columnCount,
		targetValue;

	function fillArray (a, b, factor) {
		rowCount = a;
		columnCount = b;
		if (!factor) {
			factor = 10;
		}
		for ( var i=0; i<a; i++ ) {
			arr[i]=[];
			checkedCells[i] = [];
			resultArray[i] = [];
			for ( var j=0; j<b; j++ ) {
				arr[i][j] = Math.floor( Math.random() * factor );
				checkedCells[i][j] = false;
				resultArray[i][j] = "-";		
			}
		}
		
		// arr = [
		// 	[0, 1, 1, 2, 5, 9, 2],
		// 	[4, 7, 1, 1, 1, 5, 8],
		// 	[4, 9, 4, 6, 1, 1, 5],
		// 	[0, 7, 8, 1, 1, 6, 1],
		// 	[3, 8, 2, 1, 1, 6, 5],
		// 	[2, 5, 2, 8, 8, 1, 3],
		// 	[9, 4, 9, 0, 0, 3, 4]
		// ];

		// checkedCells = [
		// 	[false, false, false, false, false, false, false],
		// 	[false, false, false, false, false, false, false],
		// 	[false, false, false, false, false, false, false],
		// 	[false, false, false, false, false, false, false],
		// 	[false, false, false, false, false, false, false],
		// 	[false, false, false, false, false, false, false],
		// 	[false, false, false, false, false, false, false]
		// ];

		// resultArray = [
		// 	["-", "-", "-", "-", "-", "-", "-"],
		// 	["-", "-", "-", "-", "-", "-", "-"],
		// 	["-", "-", "-", "-", "-", "-", "-"],
		// 	["-", "-", "-", "-", "-", "-", "-"],
		// 	["-", "-", "-", "-", "-", "-", "-"],
		// 	["-", "-", "-", "-", "-", "-", "-"],
		// 	["-", "-", "-", "-", "-", "-", "-"]
		// ];

		// rowCount = 7;
		// columnCount = 7;
	}

	function getInitialArray () {
		return arr;
	}

	function findNeighbor (i, j) {

		if ( i<0 || i>= rowCount || j<0 || j>=columnCount) {
			return;
		}

		var currentVal = arr[i][j];
		
		if (targetValue === undefined) {
			targetValue = currentVal;
		}
		if ( targetValue !== currentVal) {
			return;
		}

		if (checkedCells[i][j] === true) {
			return;
		}
		
		checkedCells[i][j] = true;
		resultArray[i][j] = "+";
		
		findNeighbor(i-1, j, currentVal);
		findNeighbor(i+1, j, currentVal);
		findNeighbor(i, j-1, currentVal);
		findNeighbor(i, j+1, currentVal);
	}

	function getResult () {
		return resultArray;
	}

	return {
		fillArray: fillArray,
		getInitialArray: getInitialArray,
		findNeighbor: findNeighbor,
		getResult: getResult
	}

})();

NeighborCells.fillArray(7, 7, 2);
console.log(NeighborCells.getInitialArray());
NeighborCells.findNeighbor(1,1);
console.log(NeighborCells.getResult());