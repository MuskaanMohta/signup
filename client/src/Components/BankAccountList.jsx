import React, { useEffect, useState } from "react";
import { getAccounts, deleteAccount } from "../api";
import './BankAccountList.css'
function BankAccountList() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await getAccounts();
        console.log("Fetched accounts:", response.data);
        setAccounts(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
        setAccounts([]); // Ensure accounts is an array if the API call fails
      }
    };
    fetchAccounts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteAccount(id);
      setAccounts(accounts.filter(account => account._id !== id));
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="bank-account-list">
      <h2>Bank Accounts</h2>
      <div className="accounts-container">
        {Array.isArray(accounts) ? (
          accounts.map(account => (
            <div className="account-card" key={account._id}>
              <p><strong>Account Holder Name:-</strong> {account.holderName}</p>
              <p><strong>Account Number:- </strong>{account.accountNumber}</p>
              <p><strong>Balance:-</strong> Rs {account.balance}</p>
              <button onClick={() => handleDelete(account._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No accounts available</p>
        )}
      </div>
      
    </div>
  );
}

export default BankAccountList;
