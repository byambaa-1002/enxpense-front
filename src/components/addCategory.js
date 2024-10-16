import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const AddCategory = (props) => {
  const { onCloseModal } = props;
  const [incomeExpense, setIncomeExpense] = useState("Expense");
  const [categories, setCategories] = useState([]);
  const [categoryname, setcategoryname] = useState(0);
  const [userid, setuserid] = useState("");
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

  const handleadd = async () => {
    await axios
      .post("http://backendexpense-fr82.onrender.com/transaction", {
        userid: userid,
        name: name,
        amount: amount,
        description: description,
        transaction_type: incomeExpense,
        username: categoryname,
        categoryid: 1,
      })
      .then(function (response) {
        if (response.data.users.length === 1) {
          localStorage.setItem("userid", response.data.users[0].userid);

          Router.push("/");
        } else {
          toast.error("unsuccessful");
        }
        console.log(response);
        onCloseModal();
        getUser();
      })
      .catch(function (error) {
        console.log(error);
        toast.error("unsuccessful");
      })
      .finally(function () {});
  };

  const textColorIncome =
    incomeExpense === "Income" ? "text-white" : "text-base";
  const textColorExpense =
    incomeExpense === "Expense" ? "text-white" : "text-base";

  return (
    <div className="w-[792px] flex flex-col rounded-xl  border-b border-[#E2E8F0] bg-slate-200">
      <div className="py-5 px-6 flex justify-between">
        <p className="font-semibold text-xl">AddCategory</p>
        <IoClose size={24} onClick={onCloseModal} />
      </div>
      <div className="flex w-full">
        {/* <form onSubmit={handleAdd}> */}
        <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
          <div className="flex flex-col mb-3 gap-[22px]">
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
                  {" "}
                  Life & Entertainment{" "}
                </option>
                <option value="Communication, PC"> Communication, PC </option>
                <option value="Financial expenses"> Financial expenses</option>
                <option value="Investments">Investments</option>
                <option value="Income">Income</option>
                <option value="Others">Others</option>
                {categories?.categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => onCloseModal()}
            type="submit"
            className={` flex items-center justify-center py-2 rounded-3xl text-white  bg-[#0166FF] `}
            // style={{ backgroundColor: buttonColor }}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col gap-2 px-6 pb-6 pt-[18px] w-full ">
          {/* <p className="text-[#1F2937]">Description</p> */}

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Write here"
            className="bg-[#F3F4F6] pt-4 pl-4 border border-[#D1D5DB] w-full h-full rounded-lg"
          />
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default AddCategory;
