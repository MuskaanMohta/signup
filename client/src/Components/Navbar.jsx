import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bank">Bank Details</Link></li>
        <li><Link to="/fund-transfer">Fund Transfer</Link></li>
        <li><Link to="/pay-contacts">Pay Contacts</Link></li>
        <li><Link to="/scan-qr">QR Code </Link></li>
        <li><Link to="/upi">UPI</Link></li>
        <li><Link to="/bill-payment">Bill Payment</Link></li>
        <li><Link to="/recharge">Recharge</Link></li>
        <li><Link to="/check-balance">Check Balance</Link></li>
        <li><Link to="/transaction-history">Transaction  History</Link></li>
        <li><Link to="/rewards">Rewards</Link></li>
        <li><Link to="/customer-support">Customer Support</Link></li>
      </ul>
      <Link to='/login' className='logout-link'>Logout</Link>
    </nav>
  );
};

export default Navbar;
