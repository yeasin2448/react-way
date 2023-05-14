import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);

    let i = 0
    const addFive = () => {
      while ( i < 5) {
        setCount((prevState) => prevState + 1 );
        i = i + 1;
      }
    }

    return (
      <div className="bg-white rounded-md p-5 max-w-[500px] mx-auto shadow-md mt-4">
        <p className="mb-4">{count}</p>
        <div className="flex items-center gap-5">
          <button
            type="button"
            class="bg-sky-500 text-white py-2 px-8 rounded-md"
            onClick={() => setCount((prevState) => prevState + 1)}
          >
            Add One
          </button>
          <button
            type="button"
            class="bg-yellow-500 text-white py-2 px-8 rounded-md"
            onClick={addFive}
          >
            Add Five
          </button>
        </div>
      </div>
    );
}

export default Count;