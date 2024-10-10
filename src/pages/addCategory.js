import Drink from "../../public/icons/Drink";

const addCategory = () => {
  return (
    <div className="w-[792px] flex flex-col rounded-xl  border-b border-[#E2E8F0] bg-slate-200">
      <p>Add Category</p>
      <></>
      <div>
        <div>
          <select
            className="bg-[#F9FAFB] py-3 px-4 text-base font-normal border border-[#D1D5DB] rounded-lg"
            onChange={(e) => setCategories(e.target.value)}
          >
            <option defaultChecked> Find or choose category</option>
            <option value="Food" className="px-[18px] py-2 flex gap-3">
              Food
            </option>
            <option value="Home">
              {" "}
              <Drink />
            </option>
            <option value="delguur">delguur</option>
            {/* {addCategory?.addCategory?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))} */}
          </select>
          <input />
        </div>
        <button></button>
      </div>
    </div>
  );
};
export default addCategory;
