const total = 100;
let ordered = 50;

function answer(orderedAmount) {
	return orderedAmount > total ? "На складі недостатньо товарів!" : "Замовлення оформлено, з вами зв'яжеться менеджер";
}

console.log(answer(ordered));
ordered = 101;
console.log(answer(ordered));
ordered = 10;
console.log(answer(ordered));
ordered = 2000;
console.log(answer(ordered));