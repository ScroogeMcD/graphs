function Node(nodeNumber, nodeData, row, col, blocked){
	this.nodeNumber = "cell"+nodeNumber;
	this.nodeData = nodeData;
	this.row = row;
	this.col = col;
	this.blocked = blocked;
	this.visited = 0;
	this.prevRow = -1;
	this.prevCol = -1;
	this.width = 15;
	this.height = 15;
	this.xpos = 1;
	this.ypos = 1;
}