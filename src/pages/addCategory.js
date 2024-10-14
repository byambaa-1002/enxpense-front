import Drink from "../../public/icons/Drink";
import { IoClose } from "react-icons/io5";

const addCategory = (props) => {
  const { onCloseModal, data } = props;

  return (
    <div>
      <div className=" w-[494px] h-[234px] border rounded-xl flex flex-col items-center justify-center gap-10">
        <div className="w-[494px]  gap-10 py-3 px-4 flex justify-between ">
          <p className="text-2xl ">Add Category</p>
          <IoClose size={24} onClick={onCloseModal} />
        </div>
        <div className=" flex  justify-between">
          <select className="select w-[84px] h-[48px]">
            <option disabled selected>
              Pick your favorite Simpson
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <input
            placeholder="Name"
            className="w-[310px] h-[48px] border rounded-xl "
          />
        </div>
        <button className=" border w-[464px] h-[48px] rounded-xl bg-[#16A34A]">
          Add
        </button>
      </div>
    </div>
  );
};
export default addCategory;
