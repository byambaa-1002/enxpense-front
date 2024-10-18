import Navbar from "../components/Navbar";
import Income from "../components/Income";
import ExpenseLogo from "../../public/icons/ExpenseLogo";
import IncomeLogo from "../../public/icons/IncomeLogo";
import { useEffect, useState } from "react";
import Record from "../components/OneRecord";

const Dashboard = () => {
  const [showAdd, setShowAdd] = useState(false);

  const OneRecord = () => {};

  return (
    <div className=" w-full bg-[#F3F4F6] flex flex-col gap-8 items-center">
      <Navbar />
      <div className="flex flex-col gap-6 w-full px-[120px]">
        {showAdd && (
          <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
            <lastRecords onCloseModal={OneRecord} />
          </div>
        )}
        <div className="flex gap-6">
          <div className="w-full rounded-[18px] bg-[#0166FF]"></div>
          <Income
            color={"#84CC16"}
            title={"Your Income"}
            money={"1,200,000₮"}
            text={"Your Income Amount"}
            description={"32% from last month"}
            icon={<IncomeLogo />}
          />
          <Income
            color={"#0166FF"}
            title={"Your Expense"}
            money={"-1,200,000₮"}
            text={"Your Expense Amount"}
            description={"32% from last month"}
            icon={<ExpenseLogo />}
          />
        </div>
      </div>
      <div className="px-6">
        <div className="w-full">
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
          <a className="link link-hover" onClick={() => OneRecord()}>
            last Records
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
