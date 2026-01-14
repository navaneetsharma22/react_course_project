import React from "react";

const Filter = (props) => {
  const { filterData, category, setCategory } = props;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
          key={data.title}
          onClick={() => filterHandler(data.title)}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white 
            transition-all duration-300 cursor-pointer
            ${
             category === data.title
                 ? "bg-green-800 border-2 border-white"
                : "bg-black border border-transparent hover:bg-green-800"
            }`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
