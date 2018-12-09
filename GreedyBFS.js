function GreedyBFS(graph, srcRow, srcCol, destRow, destCol){
	var queue = new MinHeap();
	queue.push(graph.matrix[srcRow][srcCol], greedyBFSHeuristsic(srcRow, srcCol, destRow, destCol), graph.matrix[srcRow][srcCol].nodeNumber);
	graph.matrix[srcRow][srcCol].visited = 1;
	
	graph.matrix[srcRow][srcCol].isSource = 1;
	graph.matrix[destRow][destCol].isDestination = 1;
	
	graph.matrix[srcRow][srcCol].blocked = 0;
	graph.matrix[destRow][destCol].blocked = 0;
	
	triggerCellStateChange(graph.matrix[srcRow][srcCol],"MARKED_SOURCE","grid2_");
	triggerCellStateChange(graph.matrix[destRow][destCol],"MARKED_DESTINATION","grid2_");

	delayedProcessQueueGreedyBFS(queue, graph, destRow, destCol);	
}

function delayedProcessQueueGreedyBFS(queue, graph, destRow, destCol) {
    if (queue.size() <= 0 || graph.matrix[destRow][destCol].visited == 1) {
		printPath(graph.matrix, destRow, destCol, "grid2_");
        return;
    }
	//console.log("queue processing in progress");
    processQueueGreedyBFS(queue, graph, destRow, destCol);
    setTimeout(delayedProcessQueueGreedyBFS.bind({}, queue, graph, destRow, destCol), 50);
}

function processQueueGreedyBFS(queue, graph, destRow, destCol) {
	var currNode = queue.pop().data;
	if(currNode.isDestination == undefined &&  currNode.isSource == undefined)
		triggerCellStateChange(currNode,"COMPLETED_EXPLORATION","grid2_");
	var currRow = currNode.row;
	var currCol = currNode.col;
	// add the non-blocked and non-visited nodes to the queue, from the eight nodes surrounding this node
	// row above
	var node1 = isValidCell(currRow-1, currCol-1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow-1][currCol-1] : undefined;
	visitGreedyBFSNode(node1, queue, currNode, destRow, destCol);
	
	var node2 = isValidCell(currRow-1, currCol, graph.rows-1, graph.cols-1) ? graph.matrix[currRow-1][currCol] : undefined;
	visitGreedyBFSNode(node2, queue, currNode, destRow, destCol);
	
	var node3 = isValidCell(currRow-1, currCol+1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow-1][currCol+1] : undefined;
	visitGreedyBFSNode(node3, queue, currNode, destRow, destCol);
	
	// same row
	var node4 = isValidCell(currRow, currCol-1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow][currCol-1] : undefined;
	visitGreedyBFSNode(node4, queue, currNode, destRow, destCol);
	
	var node5 = isValidCell(currRow, currCol+1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow][currCol+1] : undefined;
	visitGreedyBFSNode(node5, queue, currNode, destRow, destCol);
	
	// row below
	var node6 = isValidCell(currRow+1, currCol-1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow+1][currCol-1] : undefined;
	visitGreedyBFSNode(node6, queue, currNode, destRow, destCol);
	
	var node7 = isValidCell(currRow+1, currCol, graph.rows-1, graph.cols-1) ? graph.matrix[currRow+1][currCol] : undefined;
	visitGreedyBFSNode(node7, queue, currNode, destRow, destCol);
	
	var node8 = isValidCell(currRow+1, currCol+1, graph.rows-1, graph.cols-1) ? graph.matrix[currRow+1][currCol+1] : undefined;
	visitGreedyBFSNode(node8, queue, currNode, destRow, destCol);	
}

function visitGreedyBFSNode(node, queue, currNode, destRow, destCol){
	if(node != undefined && node.blocked == 0 && node.visited == 0){
			node.visited = 1;
			node.prevRow = currNode.row;
			node.prevCol = currNode.col;
			// push into the queue
			queue.push(node, greedyBFSHeuristsic(node.row, node.col, destRow, destCol), node.nodeNumber);
			var cellState = "ADDED_TO_QUEUE";
			triggerCellStateChange(node, cellState,"grid2_");
	}
}

function greedyBFSHeuristsic(currRow, currCol, destRow, destCol){
	return manhattanDistance(currRow,currCol,destRow,destCol);
}