let array = [3, 1, 4, 3, 2, -5, 5, -12, -3, 2];
console.log(selectionSort(array));

function selectionSort(array) {
	let result = [];
	let length = array.length;

	for (let i = 0; i < length; i++) {
		let min = findSmall(array);
		result.push(array.splice(min, 1)[0]);
	}
	return result;
}

function findSmall(array) { 
	let minElem = array[0];
	let minIndex = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] < minElem) {
			minElem = array[i];
			minIndex = i;
		}
	}
	return minIndex;
}