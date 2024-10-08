import FoodExpense from "../../public/icons/FoodExpenseIcon";
import RentIcon from "../../public/icons/RentIcon";
import Shopping from "../../public/icons/Shopping";

const icons = [
  {
    color: "#23E01F",
    image: <RentIcon />,
    name: "2",
    iconColor: "#0166FF",
  },
  {
    color: "#F54949",
    image: <FoodExpense />,
    name: "xdfsz",
    iconColor: "#FF4545",
  },
  {
    color: "#F54949",
    image: <Shopping />,
    name: "dsSdf",
    iconColor: "#FF4545",
  },
];

export const categoryIconByCategoryName = (props) => {
  const icon = icons.find((icon) => icon.name === props.categoryname);
  return icon;
};
