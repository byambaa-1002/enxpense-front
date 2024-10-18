import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AddRecord = (props) => {
  const router = useRouter();
  const { userid } = props;
  const [incomeExpense, setIncomeExpense] = useState("Expense");
  const [categories, setCategories] = useState([]);
  const [categoryname, setcategoryname] = useState(0);
  const [category_image, setcategory_image] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [transactionType, setTransactionType] = useState("EXP");
  const [name, setName] = useState("");

  const handleIncomeOrExpense = (props) => {
    const { name } = props;
    setIncomeExpense(name);
    if (incomeExpense === "Expense") {
      setIncomeExpense("Income");
    } else {
      setIncomeExpense("Expense");
    }
  };
  const onCloseModal = () => {
    router.back();
  };

  const handleadd = async () => {
    await axios
      .post("http://localhost:8000/transaction", {
        userid: 1,
        name: name,
        amount: amount,
        description: description,
        transaction_type: incomeExpense,
        username: categoryname,
        categoryid: 1,
        category_image: category_image,
      })
      .then(function (response) {
        console.log(response);
        onCloseModal();
      })
      .catch(function (error) {
        console.log(userid);
      });
  };
  const Expensebackground = incomeExpense === "Expense" ? "#0166FF" : "#F3F4F6";
  const Incomebackground = incomeExpense === "Income" ? "#16A34A" : "#F3F4F6";
  const buttonColor = incomeExpense === "Income" ? "#16A34A" : "#0166FF";

  const textColorIncome =
    incomeExpense === "Income" ? "text-white" : "text-base";
  const textColorExpense =
    incomeExpense === "Expense" ? "text-white" : "text-base";

  const today = new Date();
  const day = String(today.getDate());
  const year = String(today.getFullYear());
  const month = "0" + String(today.getMonth());
  const hour = String(today.getHours());
  const minutes = String(today.getMinutes());

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[792px] flex flex-col rounded-xl  border-b border-[#E2E8F0] bg-slate-200">
        <div className="py-5 px-6 flex justify-between">
          <p className="font-semibold text-xl">Add Record</p>
          <IoClose size={24} onClick={onCloseModal} />
        </div>
        <div className="flex w-full">
          <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
            <div className="rounded-[100px] bg-[#F3F4F6] flex gap-1">
              <div
                onClick={() => handleIncomeOrExpense("Expense")}
                className={`py-2 px-[55.5px] ${textColorExpense} font-normal text-base rounded-3xl bg-[${Expensebackground}]`}
                style={{ backgroundColor: Expensebackground }}
              >
                Expense
              </div>
              <div
                onClick={() => handleIncomeOrExpense("Income")}
                onChange={(e) => setTransactionType(e.target.value)}
                className={`py-2 px-[55.5px] ${textColorIncome} font-normal text-base rounded-3xl bg-[${Incomebackground}]`}
                style={{ backgroundColor: Incomebackground }}
              >
                Income
              </div>
            </div>
            <div className="flex flex-col mb-3 gap-[22px]">
              <div className="flex flex-col py-3 px-4 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl">
                <p className="font-normal text-base"> Name </p>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="font-normal text-xl bg-[#F3F4F6]"
                />
              </div>

              <div className="flex flex-col py-3 px-4 bg-[#F3F4F6] border border-[#D1D5DB] rounded-xl">
                <p className="font-normal text-base"> Amount </p>
                <input
                  type="number"
                  name="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="₮ 000.00"
                  className="font-normal text-xl bg-[#F3F4F6]"
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* <p> Category </p> */}
                <select
                  className="bg-[#F9FAFB] py-3 px-4 text-base font-normal border border-[#D1D5DB] rounded-lg"
                  onChange={(e) => setCategories(e.target.value)}
                >
                  <option defaultChecked> Find or choose category</option>
                  <option value="Food" className="px-[18px] py-2 flex gap-3">
                    Food & Drinks
                  </option>
                  <option value="Lending & Renting"> Lending & Renting </option>
                  <option value="Shopping"> Shopping </option>
                  <option value="Housing"> Housing </option>
                  <option value="Transportation">Transportation </option>
                  <option value="Vehicle"> Vehicle </option>
                  <option value="Life & Entertainment">
                    Life & Entertainment
                  </option>
                  {/* <option value="Communication, PC"> Communication, PC </option>
                <option value="Financial expenses"> Financial expenses</option>
                <option value="Investments">Investments</option>
                <option value="Income">Income</option>
                <option value="Others">Others</option> */}
                  {categories?.categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} {category_image}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <p>Date</p>
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    name="date"
                    defaultValue={`${year}-${month}-${day}`}
                    className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <p>Time</p>
                  <input
                    onChange={(e) => setTime(e.target.value)}
                    name="time"
                    type="time"
                    defaultValue={`${hour}:${minutes}`}
                    className="py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => handleadd()}
              type="submit"
              className={`bg-[${buttonColor}] flex items-center justify-center py-2 rounded-3xl text-white`}
              style={{ backgroundColor: buttonColor }}
            >
              Add Record
            </button>
          </div>

          <div className="flex flex-col gap-2 px-6 pb-6 pt-[18px] w-full ">
            <p className="text-[#1F2937]">Description</p>

            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              placeholder="Write here"
              className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;
