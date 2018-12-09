/* Grid 1  */
var graph1 = new Graph(25, 25);
var grid1Data = graph1.matrix;

var grid1 = d3.select("#grid1").append("svg").attr("width","500px").attr("height","500px");
var row1 = grid1.selectAll(".row").data(grid1Data).enter().append("g").attr("class","row");

var column1 = row1.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
	.attr("class","square")
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
	.attr("rowNum", function(d) {return d.row;})
	.attr("id", function(d) {return d.nodeNumber;})
	.attr("colNum", function(d) {return d.col;})
	.style("fill", function(d) {
		if(d.blocked != undefined && d.blocked == 1)
			return "#9E9E9E";
		else
			return "#fff";
		})
	.style("stroke", "#222");
	
BFS(graph1,19,19, 2, 3);
console.log("DONE with BFS");

/* Grid 2  */

var graph2 = new Graph(25, 25);
var grid2Data = graph2.matrix;

var grid2 = d3.select("#grid2").append("svg").attr("width","500px").attr("height","500px");
var row2 = grid2.selectAll(".row").data(grid2Data).enter().append("g").attr("class","row");

var column2 = row2.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
	.attr("class","square")
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
	.attr("rowNum", function(d) {return d.row;})
	.attr("id", function(d) {return "grid2_"+d.nodeNumber;})
	.attr("colNum", function(d) {return d.col;})
	.style("fill", function(d) {
		if(d.blocked != undefined && d.blocked == 1)
			return "#9E9E9E";
		else
			return "#fff";
		})
	.style("stroke", "#222");
GreedyBFS(graph2, 19,19, 2,3,);
console.log("DONE with Greedy BFS");
/* Grid 3  */