const arr = [1, 2, 3, 4];

randomItem = (arr) => {
	if (Array.isArray(arr) && arr.length != 0 && arr != null && arr != undefined) {
		const randomNumber = Math.floor(Math.random()*arr.length);
		return arr[randomNumber];
	} else {
		console.log("It's not an array!");
	}
}

console.log(randomItem(arr));
