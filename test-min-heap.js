var heap = new MinHeap();

heap.push("ABC", 50);
heap.push("D", 25);
heap.push("E", 35);
heap.push("F", 40);
heap.push("G", 38);
heap.push("H", 20);
heap.push("I", 15);
heap.push("J", 12);
heap.push("K", 1);
heap.push("L", 10);
heap.push("M", 5);

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());

heap.push("N", 7);
heap.push("O", 54);
heap.push("P", 3);

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());


console.log("Test 1");