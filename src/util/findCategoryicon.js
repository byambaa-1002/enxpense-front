import FoodExpense from "../../public/icons/FoodExpenseIcon";
import RentIcon from "../../public/icons/RentIcon";
import Shopping from "../../public/icons/Shopping";
import Taxi from "../../public/icons/Taxi";
import Drink from "../../public/icons/Drink";
const icons = [
  {
    categoryid: 1,
    color: "#23E01F",
    image: <RentIcon />,
  },
  {
    categoryid: 2,
    color: "#F54949",
    image: <FoodExpense />,
    name: "bataa",
  },

  {
    categoryid: 3,
    color: "#F54949",
    image: <Shopping />,
  },

  {
    categoryid: 4,
    color: "#F54949",
    image: <Taxi />,
  },

  {
    categoryid: 5,
    color: "#F54949",
    image: <Drink />,
  },
];

export const categoryIconByCategoryId = (id) => {
  const icon = icons.find((icon) => icon.categoryid === id);

  return icon;
};
