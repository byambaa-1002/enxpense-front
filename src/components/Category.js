import EyeIcon from "../../public/icons/EyeIcon";
import ClosedEyeIcon from "../../public/icons/ClosedEyeIcon";
import { useState } from "react";
import { useRecords } from "../provider/RecodsProvider";

const Categories = (props) => {
  const { selectCategory } = useRecords();
  const { id, categoryName, isSelected } = props;

  const icon = isSelected ? <EyeIcon /> : <ClosedEyeIcon />;

  const onSelect = () => {
    selectCategory(id);
  };
  return (
    <div
      className="w-full pl-3 py-1.5 gap-2 items-center btn flex justify-start bg-transparent border-none shadow-none"
      onClick={onSelect}
    >
      {icon}
      <p className="font-normal text-base text-[#1F2937]">{categoryName}</p>
    </div>
  );
};

export default Categories;
