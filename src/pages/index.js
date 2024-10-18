import Navbar from "../components/Navbar";
import PlusSign from "../../public/icons/PlusSign";
import Record from "../components/OneRecord";
import { FaChevronLeft, FaSearchengin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import AddCategory from "../components/addCategory";
import { useRecords } from "../provider/RecodsProvider";
import { useRouter } from "next/router";
import Categories from "../components/Category";

const Home = () => {
  const router = useRouter();
  // const userid = localStorage.getItem("userid");

  const {
    categories,
    records,
    filterByIncome,
    filterByExpense,
    recordsTypeFilter,
    filterReset,
  } = useRecords();

  const handleAdd = () => {
    router.push("/add-record");
  };

  return (
    <div>
      {false && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <AddCategory onCloseModal={() => AddCategory()} />
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
                  className="checkbox"
                  checked={!recordsTypeFilter}
                  onClick={filterReset}
                />
                All
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={recordsTypeFilter === "Income"}
                  onClick={filterByIncome}
                />
                Income
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={recordsTypeFilter === "Expense"}
                  onClick={filterByExpense}
                />
                Expense
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-semibold text-base">Category</p>
                <p className="font-normal text-base opacity-20">Clear</p>
              </div>

              <div className="flex flex-col gap-2">
                {/* <MyCategories /> */}

                {categories?.map((category) => {
                  return (
                    <div key={category.categoryid}>
                      <Categories
                        id={category.categoryid}
                        categoryName={category?.categoryname}
                        isSelected={category.isSelected}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2 py-1.5 pl-3 items-center">
                <PlusSign color={"#0166FF"} />

                <button onClick={() => AddCategory()}>Add category </button>
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
              <div className="flex flex-col gap-3 mb-3">
                {records.map((record, index) => {
                  return (
                    <Record
                      key={index}
                      type={record.transaction_type}
                      name={record.name}
                      time={record.time}
                      color={record.color}
                      money={record.amount}
                      iconColor={record.iconColor}
                      categoryid={record.categoryid}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
