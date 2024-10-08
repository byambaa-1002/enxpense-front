import axios from "axios";
import OneRecord from "./OneRecord";
import { get } from "https";
import { useEffect, useState } from "react";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";

const AddTransaction = (props) => {
  const { data } = props;
  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  console.log(data);

  return (
    <div>
      {data.map((recordToday, index) => {
        return (
          <OneRecord
            key={index}
            categoryname={recordToday.name}
            image={recordToday.image}
            time={recordToday.createdat}
            color={recordToday.color}
            money={recordToday.amount}
            iconColor={recordToday.iconColor}
          />
        );
      })}
    </div>
  );
};
export default AddTransaction;
