import Navbar from "../components/Navbar";
import Income from "../components/Income";
import ExpenseLogo from "../../public/icons/ExpenseLogo";
import IncomeLogo from "../../public/icons/IncomeLogo";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F4F6] flex flex-col gap-8 items-center">
      <Navbar />
      <div className="flex flex-col gap-6 w-full px-[120px]">
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
          <p className="font-semibold text-base py-4"> last Records </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
