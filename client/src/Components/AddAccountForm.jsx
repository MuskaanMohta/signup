import React, { useState } from "react";
import { addAccount } from "../api";
import './AddAccountForm.css'
function AddAccountForm() {
  const [formData, setFormData] = useState({
    holderName: "",
    accountNumber: "",
    ifscCode: "",
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAccount(formData);
    setFormData({ holderName: "", accountNumber: "", ifscCode: "", balance: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="add-account-form">
      <label>
        Account Holder Name:-
        <input name="holderName" value={formData.holderName} onChange={handleChange} placeholder="Holder Name" />
      </label>
      <label>
        Account Number:-
        <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" />
      </label>
      <label>
        IFSC CODE:-
        <input name="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder="IFSC Code" />
      </label>
      <label>
        Balance:-
        <input name="balance" type="number" value={formData.balance} onChange={handleChange} placeholder="Balance" />
      </label>
      
      <button type="submit" className="submit-button">Add Account</button>
    </form>
  );
}

export default AddAccountForm;
