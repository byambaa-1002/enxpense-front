import OneRecord from "./OneRecord";

const AddTransaction = (props) => {
  const { data } = props;
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

// categoryname, image, color, money, transactiontype

// userid: userid,
// name: name,
// amount: amount,
// description: description,
// transaction_type: incomeExpense,
// username: categoryname,
// categoryid: 1,
