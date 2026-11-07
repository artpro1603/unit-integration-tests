// tests/cart.test.js
const { applyPromoDiscount, calculateShipping, calculateOrderTotal } = require('../src/cart');

// --- МОДУЛЬНІ ТЕСТИ (Unit Tests) ---

test('Модульний 1: Застосування дійсного промокоду DISCOUNT10 знижує ціну на 10%', () => {
  expect(applyPromoDiscount(100, 'DISCOUNT10')).toBe(90);
});

test('Модульний 2: Невідомий промокод не змінює початкову ціну', () => {
  expect(applyPromoDiscount(200, 'UNKNOWN')).toBe(200);
});

test('Модульний 3: Вартість доставки дорівнює 0, якщо у кошику більше 3 товарів', () => {
  expect(calculateShipping(4)).toBe(0);
});


// --- ІНТЕГРАЦІЙНІ ТЕСТИ (Integration Tests) ---

test('Інтеграційний 1: Розрахунок загальної суми замовлення з урахуванням промокоду та платної доставки', () => {
  const cartItems = [
    { name: 'Товар 1', price: 200 },
    { name: 'Товар 2', price: 300 }
  ];
  
  const total = calculateOrderTotal(cartItems, 'SUPER20');
  expect(total).toBe(450); // (200 + 300) * 0.8 + 50 за доставку = 450
});

test('Інтеграційний 2: Розрахунок загальної суми замовлення з безкоштовною доставкою для великої кількості товарів', () => {
  const cartItems = [
    { name: 'Книга', price: 100 },
    { name: 'Ручка', price: 50 },
    { name: 'Зошит', price: 50 },
    { name: 'Олівець', price: 50 }
  ]; // 4 товари (доставка 0 грн), сума товарів = 250 без знижки
  
  const total = calculateOrderTotal(cartItems, 'NONE');
  expect(total).toBe(250);
});