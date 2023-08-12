// Отображение статуса корзины Пустая / Полная
function toggleCartStatus() {

	const cartWrapper = document.querySelector('.cart-wrapper')
	const cartEmptyBadge = document.querySelector('[data-cart-empty]')

	// Когда товатов в корзине больше 0, скрываем надпись "корзина пуста"
	if (cartWrapper.children.length > 0) {
		cartEmptyBadge.style.display = 'none'

		// Если корзина не пуста, то покфзываем надпись "корзина пуста"
	} else {
		cartEmptyBadge.style.display = 'block'
	}
}
