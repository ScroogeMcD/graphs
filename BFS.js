function BFS(graph, srcRow, srcCol, destRow, destCol){
	var queue = [];
	queue.unshift(graph.matrix[srcRow][srcCol]);
	graph.matrix[srcRow][srcCol].visited = 1;
	
	graph.matrix[srcRow][srcCol].isSource = 1;
	graph.matrix[srcRow][srcCol].blocked = 0;
	graph.matrix[destRow][destCol].isDestination = 1;
	graph.matrix[destRow][destCol].blocked = 0;
	
	triggerCellStateChange(graph.matrix[srcRow][srcCol],"MARKED_SOURCE");
	triggerCellStateChange(graph.matrix[destRow][destCol],"MARKED_DESTINATION");

	delayedProcessQueueBFS(queue, graph, destRow, destCol);	
}

function delayedProcessQueueBFS(queue, graph, destRow, destCol) {
    if (queue.length <= 0 || graph.matrix[destRow][destCol].visited == 1) {
		printPath(graph.matrix, destRow, destCol);
        return;
    }
	//console.log("queue processing in progress");
    processQueueBFS(queue, graph);
    setTimeout(delayedProcessQueueBFS.bind({}, queue, graph, destRow, destCol), 50);
}

function processQueueBFS(queue, graph) {
	var currNode = queue.pop();
	if(currNode.isDestination == undefined &&  currNode.isSource == undefined)
		triggerCellStateChange(currNode,"COMPLETED_EXPLORATION");
	var currRow = currNode.row;
	var currCol = currNode.col;
	// add the non-blocked and non-visited nodes to the queue, from the eight nodes surrounding this node
	// row above
	var node1 = isValidCell(currRow-1, currCol-1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow-1][currCol-1] : undefined;
	visitNode(node1, queue, currNode);
	
	var node2 = isValidCell(currRow-1, currCol, graph.rows-1, graph.cols-1) ? graph.matrix[currRow-1][currCol] : undefined;
	visitNode(node2, queue, currNode);
	
	var node3 = isValidCell(currRow-1, currCol+1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow-1][currCol+1] : undefined;
	visitNode(node3, queue, currNode);
	
	// same row
	var node4 = isValidCell(currRow, currCol-1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow][currCol-1] : undefined;
	visitNode(node4, queue, currNode);
	
	var node5 = isValidCell(currRow, currCol+1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow][currCol+1] : undefined;
	visitNode(node5, queue, currNode);
	
	// row below
	var node6 = isValidCell(currRow+1, currCol-1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow+1][currCol-1] : undefined;
	visitNode(node6, queue, currNode);
	
	var node7 = isValidCell(currRow+1, currCol, graph.rows-1, graph.cols-1) ? graph.matrix[currRow+1][currCol] : undefined;
	visitNode(node7, queue, currNode);
	
	var node8 = isValidCell(currRow+1, currCol+1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow+1][currCol+1] : undefined;
	visitNode(node8, queue, currNode);	
}

function visitNode(node, queue, currNode){
	if(node != undefined && node.blocked == 0 && node.visited == 0){
			node.visited = 1;
			node.prevRow = currNode.row;
			node.prevCol = currNode.col;
			// push into the queue
			queue.unshift(node);
			var cellState = "ADDED_TO_QUEUE";
			triggerCellStateChange(node, cellState);
	}
}