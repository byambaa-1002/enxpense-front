import moment from "moment";
import { categoryIconByCategoryId } from "../util/findCategoryicon";

const Record = (props) => {
  const { money, date, categoryid, name, type } = props;

  const icon = categoryIconByCategoryId(categoryid);
  const formattedDate = moment(date).locale("mn").format("LLL");
  const recordTypeColor = type === "Income" ? "green" : "red";
  const recordSimbol = type === "Income" ? "+" : "-";

  return (
    <div className="w-full px-6 py-3 border bg-white border-[#E5E7EB] items-center justify-between flex rounded-xl">
      <div className="flex gap-4">
        <div
          className={`flex justify-center items-center w-10 h-10 rounded-full`}
          style={{
            backgroundColor: icon?.color,
          }}
        >
          {icon?.image}
        </div>

        <div className="flex flex-col">
          <p className="font-normal text-lg">{name}</p>
          <p className="font-normal text-xs text-[#6B7280]">{formattedDate}</p>
        </div>
      </div>
      <p
        className={`font-semibold text-base`}
        style={{ color: recordTypeColor }}
      >
        {recordSimbol} {money}
      </p>
    </div>
  );
};

export default Record;
