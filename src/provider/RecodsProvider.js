import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import OneRecord from "../components/OneRecord";
const RecordsContext = createContext();

export const useRecords = () => useContext(RecordsContext);

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recordsTypeFilter, setRecordsTypeFilter] = useState(null);
  const [user, setUser] = useState(null);

  const filteredRecords = records.filter((record) => {
    if (!recordsTypeFilter) return true;

    if (record.transaction_type === recordsTypeFilter) {
      return true;
    }
  });

  const filterByCategories = filteredRecords.filter((record) => {
    const recordCategory = categories.find((category) => {
      if (category.categoryid === record.categoryid) {
        return true;
      } else {
        return false;
      }
    });

    return recordCategory?.isSelected;
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

  const selectCategory = (id) => {
    const updatedCategory = categories.map((category) => {
      if (category.categoryid === id) {
        return {
          ...category,
          isSelected: !category.isSelected,
        };
      }

      return category;
    });

    setCategories(updatedCategory);
  };

  const getCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/category");

      const addedCategories = data.categories.map((category) => {
        return {
          ...category,
          isSelected: true,
        };
      });

      setCategories(addedCategories);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/user");

      setUser(data.getUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecords();
    getCategories();
    getUser();
  }, []);

  return (
    <RecordsContext.Provider
      value={{
        records: filterByCategories,
        categories,
        recordsTypeFilter,
        filterByIncome,
        filterByExpense,
        filterReset,
        selectCategory,
      }}
    >
      {children}
    </RecordsContext.Provider>
  );
};
