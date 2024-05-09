import React, { useState } from 'react';
import './OrderList.css';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [newOrderTitle, setNewOrderTitle] = useState('');
  
  const handleChange = (e) => {
    setNewOrderTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newOrderTitle.trim()) return;
    const newOrder = {
      id: Math.floor(Math.random() * 1000000), 
      title: newOrderTitle.trim()
    };
    setOrders([...orders, newOrder]);
    setNewOrderTitle('');
  };

  return (
    <div className="App">
      <h1>My Order List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="You can Add here "
          value={newOrderTitle}
          onChange={handleChange}
        />
        <div className="center-button">
          <button type="submit">Add Order</button>
        </div>
      </form>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className="Order-list">
            <span>{order.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;




