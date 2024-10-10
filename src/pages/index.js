import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import MyCategories from "../components/Category";
import PlusSign from "../../public/icons/PlusSign";
import OneRecord from "../components/OneRecord";
import { FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import RentIcon from "../../public/icons/RentIcon";
import FoodExpense from "../../public/icons/FoodExpenseIcon";
import AddRecord from "../components/AddRecord";
import axios from "axios";
import AddTransaction from "../components/Transaction";

const categories = [
  "Food & Drinks",
  "Lending & Renting",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

let checked = [
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
];
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [Transaction, setTransaction] = useState([]);

  const [showAdd, setShowAdd] = useState(false);

  const [selected, setSelected] = useState("All");
  const [myRecords, setRecords] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [selectedEyes, setSelectedEyes] = useState(checked);

  const [checkedCategories, setCheckedCategories] = useState(categories);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  // const [test, useTest] = useState([]);

  let userid = 1;
  if (typeof window !== "undefined") {
    userid = localStorage.getItem("userid");
  }
  async function getUser() {
    try {
      await axios
        .get("http://localhost:8000/transaction")
        .then(function (response) {
          setData(response.data.transaction);
        });
    } catch (error) {
      console.error(error);
    }
  }

  // async function getTransaction() {
  //   try {
  //     await axios
  //       .get("http://localhost:8000/transaction,{}")
  //       .then(function (response) {
  //         console.log(response.data.transaction);
  //         useTest(response.data.transaction);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    getUser();
    // getTransaction();
  }, []);

  // console.log(test);

  const handleCategory = (input, index) => {
    let myCategories = [...selectedEyes];
    if (input == "true") {
      myCategories[index] = "false";
    } else {
      myCategories[index] = "true";
    }
    setSelectedEyes(myCategories);
    let filteredCategories = [];
    for (let i = 0; i < categories.length; i++) {
      if (selectedEyes[i] == "true") {
        filteredCategories.push(selectedCategories[i]);
      }
    }
    setCheckedCategories();
  };

  const handleExpense = () => {
    const filtered = data.filter((data) => data.transaction_type === "Expense");
    setFilterData(filtered);
  };

  const handleIncome = () => {
    const filtered = data.filter((data) => data.transaction_type === "Income");
    setFilterData(filtered);
  };

  const handleAll = () => {
    setFilterData(data);
  };

  const handleChange = (option) => {
    setSelected(option);
  };

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then(function (response) {
        setRecords(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <div>
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddRecord
            onCloseModal={handleAdd}
            getUser={getUser}
            userid={userid}
          />
        </div>
      )}
      <div className={`bg-[#F3F4F6] flex flex-col gap-8 items-center relative`}>
        <Navbar />

        <div className="flex gap-6">
          <div className="bg-white flex flex-col px-6 py-4 w-[282px] gap-6 rounded-xl h-fit border border-[#E5E7EB]">
            <div className="flex flex-col gap-6">
              <p> Records </p>
              <button
                onClick={() => handleAdd()}
                className="flex gap-1 w-[225px] bg-[#0166FF] rounded-3xl text-white items-center justify-center"
              >
                <PlusSign color="white" /> Add
              </button>
            </div>
            <input
              placeholder="Search"
              className="border border-[#D1D5DB] rounded-lg px-4 py-1"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-base text-[#1F2937] mb-3">
                Types
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"All" === selected}
                  className="checkbox"
                  onChange={() => handleChange("All")}
                  onClick={() => handleAll()}
                />
                All
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"Income" === selected}
                  className="checkbox"
                  onChange={() => handleChange("Income")}
                  onClick={() => handleIncome()}
                />
                Income
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  checked={"Expense" === selected}
                  className="checkbox"
                  onChange={() => handleChange("Expense")}
                  onClick={() => handleExpense()}
                />
                Expense
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-semibold text-base">Category</p>
                <p className="font-normal text-base opacity-20"> Clear </p>
              </div>
              <div className="flex flex-col gap-2">
                {categories.map((category1, index) => {
                  return (
                    <div key={index}>
                      <MyCategories categoryName={category1} />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 py-1.5 pl-3 items-center">
                <PlusSign color={"#0166FF"} />
                <button onClick={() => handleAdd()}>Add category </button>
              </div>
            </div>
          </div>
          <div className="w-[894px] flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <button>
                    <FaChevronLeft />
                  </button>
                </div>
                <p className="font-normal text-base"> Last 30 Days</p>
                <div className="w-8 h-8 rounded-lg p-1.5 bg-[#E5E7EB]">
                  <button>
                    <FaAngleRight />
                  </button>
                </div>
              </div>
              <select className="w-[180px] py-3 px-4 rounded-lg font-semibold text-base text-[#1F2937] border border-[#D1D5DB]">
                <option selected>Newest First</option>
                <option> Latest First </option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-base"> Today </p>
              <div className="flex flex-col gap-3 mb-3">
                {/* {myRecords?.map((recordToday, index) => {
                  return (
                    <OneRecord
                      key={index}
                      categoryname={recordToday?.categoryname}
                      transactiontype={recordToday?.transactiontype}
                      image={recordToday.image}
                      time={recordToday.transactioncreatedat}
                      color={recordToday.color}
                      money={recordToday.amount}
                    />
                  );
                })} */}
              </div>

              <p className="font-semibold text-base"> Yesterday </p>
              <div className="flex flex-col gap-3">
                <AddTransaction data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// console.log(categories);

// axios
//   .get("http://localhost:8000/category")
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// useEffect(() => {
//   async function getUser() {
//     try {
//       const response = await axios.get("http://localhost:8000/category");
//       console.log(response.data.categories);

//       // setCategories(response.data.categories);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getUser();
// }, []);
