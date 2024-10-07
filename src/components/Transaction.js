import axios from "axios";
import OneRecord from "./OneRecord";
import { get } from "https";
import { useState } from "react";

const AddTransaction = () => {
  const [data, setData] = useState([]);

  async function getUser() {
    try {
      const datas = await axios.get("http://localhost:8000/transaction");
      setData(datas.data.transaction);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();

  return (
    <div>
      {" "}
      {data.map((item) => {
        return (
          <OneRecord
            key={index}
            // text={recordToday.text}
            image={recordToday.image}
            time={recordToday.time}
            color={recordToday.color}
            money={recordToday.money}
            iconColor={recordToday.iconColor}
          />
        );
      })}
    </div>
  );
};
export default AddTransaction;
