// graph using adjacency matrix
function Graph(rows, cols) {
	this.rows = rows;
	this.cols = cols;
	
	var xpos = 1;
	var ypos = 1;
	
	var height = 15;
	var width = 15;
	
	var maxBlockedCount = (rows*cols) * 0.3; // 40% of the cells to be blocked
	var blockedCount = 0;
	this.matrix = [];
	for(var i=0;i<rows;i++){
		this.matrix[i] = [];
		for(var j=0; j<cols; j++){
			var nodeNumber = i*cols + j;
			var blocked = 0;
			if(blockedCount < maxBlockedCount && Math.random() > 0.5){
				blockedCount++;
				blocked = 1;
			}
			var node = new Node(nodeNumber,"",i,j, blocked);
			node.x = xpos;
			node.y = ypos;
			this.matrix[i][j] = node;
			
			xpos += width;
		}
		xpos = 1;
		ypos += height;
	}
}