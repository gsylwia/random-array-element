const arr = [1, 2, 3, 4];

function randomItem (arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}

console.log(randomItem(arr));
