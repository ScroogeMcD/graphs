function MinHeap () {
	this.minHeap = [];
	this.heapSize = 0;
}
MinHeap.prototype.size = function(){return this.heapSize;}
MinHeap.prototype.parent = function(i){ return Math.floor((i-1)/2); }
MinHeap.prototype.left = function(i) {return i*2+1};
MinHeap.prototype.right = function(i) {return i*2+2};

MinHeap.prototype.swap = function(i,j) {
	var node = this.minHeap[i];
	this.minHeap[i] = this.minHeap[j];
	this.minHeap[j] = node;
}
	
MinHeap.prototype.push = function(data, priority, nodeNumber) {
	this.minHeap[this.heapSize] = {"data" : data, "priority" : priority, "nodeNumber" : nodeNumber};
	this.heapSize++;
	this.heapify(this.heapSize-1);
}

MinHeap.prototype.pop = function() {
	this.swap(0, this.heapSize-1);
	var poppedElement = this.minHeap[this.heapSize-1];
	this.heapSize--;
	
	var currIndex = 0;
	while(true){
		var initialCurrIndex = currIndex;
		var leftIndex = this.left(currIndex);
		var rightIndex = this.right(currIndex);
		if(leftIndex <= (this.heapSize-1) && (this.minHeap[initialCurrIndex].priority > this.minHeap[leftIndex].priority )){
			this.swap(initialCurrIndex, leftIndex);
			currIndex = leftIndex;
		}  
		if (rightIndex <= (this.heapSize-1) && (this.minHeap[initialCurrIndex].priority > this.minHeap[rightIndex].priority )){
			this.swap(initialCurrIndex, rightIndex);
			currIndex = rightIndex;
		}
		if(initialCurrIndex == currIndex){
			break;
		}
	}
	return poppedElement;
}
	
MinHeap.prototype.heapify = function(index) {
	var i = index;
	while(this.parent(i) >= 0 && this.minHeap[i].priority < this.minHeap[this.parent(i)].priority){
		this.swap(i, this.parent(i));
		i = this.parent(i);
	}
}
	