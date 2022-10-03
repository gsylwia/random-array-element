const arr = [1, 2, 3, 4];

const randomItem = (arr) => {
	if (Array.isArray(arr) && arr.length != 0 && arr != null && arr != undefined) {
		const randomNumber = Math.floor(Math.random()*arr.length);
		return arr[randomNumber];
	}

	return []
}
console.log(randomItem(arr));
