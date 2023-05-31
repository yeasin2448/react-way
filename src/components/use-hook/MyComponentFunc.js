import { useEffect, useState } from "react";

function MyComponentFunc () {
    const [count, setCount] = useState(0);
    // const [date, setDate] = useState;

    // const tick = () => {
    //     setDate (new Date());
    // }
    
    useEffect(() => {
        console.log('Updating document title');
        document.title = `clicked ${count} times`;
    });

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    return (
      <div className="bg-white p-3 rounded-md shadow-md">
        {/* <p>Time : {date.toLocaleTimeString()}</p> */}
        <button
          type="button"
          onClick={addClick}
          className="bg-sky-300 py-2 px-4 rounded-md text-white"
        >
          click
        </button>
      </div>
    );
}

export default MyComponentFunc