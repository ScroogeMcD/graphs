function triggerCellStateChange(node, cellState, divMarker){
	divMarker = divMarker == undefined ? "" : divMarker;
	var id = "#" + divMarker + node.nodeNumber;
	if(cellState == "MARKED_SOURCE"){
		d3.select(id).style("fill",'RED');
	} else if (cellState == "MARKED_DESTINATION"){
		d3.select(id).style("fill",'GREEN');
	} else if (cellState == "ADDED_TO_QUEUE" && node.isDestination == undefined && node.isSource == undefined){
		d3.select(id).style("fill",'YELLOW');
	} else if (cellState == "COMPLETED_EXPLORATION" && node.isDestination == undefined && node.isSource == undefined){
		d3.select(id).style("fill",'#00ffe2');
	} else if (cellState == "MARKED_PATH" && node.isDestination == undefined && node.isSource == undefined){
		d3.select(id).style("fill",'GREEN');
	}
	
}

function manhattanDistance(x1, y1, x2, y2){
	return Math.abs(x1-x2) + Math.abs(y1-y2);
}


function isValidCell(row, col, maxRow, maxCol){
	if(row >= 0 && col >= 0 && row <= maxRow && col <= maxCol)
		return 1;
	else
		return 0;
}

function printPath(matrix, destRow, destCol, divMarker){
	var path = "";
	var row = destRow;
	var col = destCol;
	
	while(row != -1 || col != -1){
		path = "[" + row + "][" + col + "] " + path;
		var currCell = matrix[row][col];
		row = currCell.prevRow;
		col = currCell.prevCol;
		//console.log(row + "," + col);
		triggerCellStateChange(currCell, "MARKED_PATH", divMarker);
	}
	
	return path;
}