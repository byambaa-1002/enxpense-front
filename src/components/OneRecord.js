import moment from "moment";

import { categoryIconByCategoryName } from "../util/findCategoryicon";

const OneRecord = (props) => {
  const { categoryname, image, color, money, transactiontype } = props;

  const iconColor = transactiontype === "EXP" ? "#0166FF" : "#FF4545";

  const icon = categoryIconByCategoryName(props);

  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full bg-[${
            (icon, image)
          }]`}
          style={{
            backgroundColor: iconColor,
          }}
        >
          {icon?.image}
        </div>
        <div className="flex flex-col">
          <p className="font-normal text-base">{categoryname}</p>
          <p className="font-normal text-xs text-[#6B7280]"></p>
          {moment().format("LTS")}
        </div>
      </div>
      <p
        className={`font-semibold text-base text-[${color}]`}
        style={{ text: color }}
      >
        {money}$
      </p>
    </div>
  );
};

export default OneRecord;
