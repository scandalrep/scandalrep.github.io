/*
Даны два массива A и B одинакового размера N.
Сформировать новый массив C того же размера, 
каждый элемент которого
равен максимальному из элементов массивов A и B с тем же индексом.
*/
let age = 49
let ages = [49, 16]

let N = 6
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let A = [];
let B = [];
let C = [];

for (let i = 0; i < N; i++) {
	A.push(getRandomInt(50, 100));
	B.push(getRandomInt(50, 100));
}

console.log(A)
console.log(B)
/*
План 
проходим по двум массивам: (for let k)
	сравниваем соответсвующие элементы массива -> выбираем бОльший 
	толкаем его в массив C  
*/
getArrayMaxElemFromAB(A, B, C);
console.log(C)

function getArrayMaxElemFromAB(A, B, C) {
	for (let j = 0; j < N; j++) {

		if (A[j] > B[j]) {
			C[j] = (A[j]);
		}
		else {
			C[j] = (B[j]);
		}

	}
}

