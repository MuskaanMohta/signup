import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api/bank" });

export const addAccount = (accountData) => API.post("/add", accountData);
export const getAccounts = async () => {
    const response = await API.get("/");
    console.log("getAccounts response:", response.data); // Log response
    return response; // Return the full response so we can check the data structure in BankAccountList
  };
  
export const updateAccount = (id, updatedData) => API.put(`/update/${id}`, updatedData);
export const deleteAccount = (id) => API.delete(`/delete/${id}`);
