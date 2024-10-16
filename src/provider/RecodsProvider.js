import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const RecordsContext = createContext();

export const useRecords = () => useContext(RecordsContext);

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recordsTypeFilter, setRecordsTypeFilter] = useState(null);

  const filteredRecords = records.filter((record) => {
    if (!recordsTypeFilter) return true;
    console.log(record, recordsTypeFilter);

    if (record.transaction_type === recordsTypeFilter) {
      return true;
    }
  });

  const filterByIncome = () => {
    setRecordsTypeFilter("Income");
  };

  const filterByExpense = () => {
    setRecordsTypeFilter("Expense");
  };

  const filterReset = () => {
    setRecordsTypeFilter(null);
  };

  const getRecords = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/transaction");

      setRecords(data.transaction);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/category");

      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecords();
    getCategories();
  }, []);

  return (
    <RecordsContext.Provider
      value={{
        records: filteredRecords,
        categories,
        recordsTypeFilter,
        filterByIncome,
        filterByExpense,
        filterReset,
      }}
    >
      {children}
    </RecordsContext.Provider>
  );
};
