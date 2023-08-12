// Функция стоимость всех товаров в корзине
function calcCartPrice() {
	const cartWrapper = document.querySelector('.cart-wrapper')
	const cartItems = cartWrapper.querySelectorAll('.cart-item')
	const totalPriceEl = document.querySelector('.total-price')

	// Заранее объявяем переменную через let!!!!
	let tottalPrice = 0;


	// Для каждого товара в корзине получаем его кол-во и цену и перемножаем их
	cartItems.forEach(function (item) {

		// Получаем кол-во и цену
		const amountEl = item.querySelector('[data-counter]')
		const priceEl = item.querySelector('.price__currency')

		// Перемножаем кол-во на цену
		const currentPrice = (parseInt(amountEl.innerHTML) * parseInt(priceEl.innerHTML))

		// Суммируем цены карточек
		tottalPrice += currentPrice
	})

	// Выводим сумму на страницу
	totalPriceEl.innerHTML = tottalPrice
}