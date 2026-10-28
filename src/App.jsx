import { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: "Wireless Headphones", price: 299 },
  { id: 2, name: "Mechanical Keyboard", price: 459 },
  { id: 3, name: "USB-C Hub", price: 189 },
  { id: 4, name: "Webcam 1080P", price: 259 },
  { id: 5, name: "Mouse Pad", price: 79 },
  { id: 6, name: "Monitor Light Bar", price: 169 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: 20, display: 'flex', gap: 40 }}>
      <div>
        <h2>Products</h2>
        {products.map(p => (
          <div key={p.id} style={{ marginBottom: 10 }}>
            <span>{p.name} - ¥{p.price}</span>
            <button onClick={() => addToCart(p)} style={{ marginLeft: 10 }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        {cart.length === 0 && <p>Cart is empty</p>}
        {cart.map(item => (
          <div key={item.id} style={{ marginBottom: 10 }}>
            <span>{item.name} - ¥{item.price} × {item.quantity} </span>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
        ))}
        <h3>Total: ¥{total}</h3>
      </div>
    </div>
  );
}