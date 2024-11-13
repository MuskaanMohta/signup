import React from "react";
import BankAccountList from "./BankAccountList";
import AddAccountForm from "./AddAccountForm";
import './Bank.css'
function Bank() {
  return (
    <div className="container">
      <h1>E-Wallet Bank System</h1>
      <AddAccountForm />
      <BankAccountList />
    </div>
  );
}

export default Bank;
