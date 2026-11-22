// 1. Обчислення знижки на основі промокоду
function applyPromoDiscount(price, promoCode) {
  if (promoCode === 'DISCOUNT10') {
    return price * 0.1;
  }
  if (promoCode === 'SUPER20') {
    return price * 0.8;
  }
  return price; //
}

// 2. Розрахунок вартості доставки
function calculateShipping(itemCount) {
  if (itemCount === 0) return 0;
  return itemCount > 3 ? 0 : 50; // Безкоштовно, якщо товарів більше 3, інакше 50 грн
}

// 3. Інтегральна функція: повна вартість замовлення (товари + знижка + доставка)
function calculateOrderTotal(items, promoCode) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discountedPrice = applyPromoDiscount(subtotal, promoCode);
  const shipping = calculateShipping(items.length);
  
  return discountedPrice + shipping;
}

module.exports = {
  applyPromoDiscount,
  calculateShipping,
  calculateOrderTotal
};
