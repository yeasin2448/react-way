import { useState } from "react";


function Todo () {
    const [todo, setTodo] = useState();
    const [warning, setWarning] = useState();
    
    const handleInput = (e) => {
      const inputValue = e.target.value;
      const updatedWarning = inputValue.includes('.js') ? 'You need javascript skill to complete the task. Do you have it?': null;

      setTodo(inputValue);
      setWarning(updatedWarning);
    }
    

    return (
      <div className="max-w-[500px] bg-white drop-shadow-lg rounded-md mx-auto p-5 mt-8">
        <p>{todo}</p>
        <p>
          <textarea
            rows=""
            cols=""
            name="todo"
            value={todo}
            onChange={handleInput}
            className="border border-black rounded-md w-full p-2"
          ></textarea>
        </p>
        <br />
        <h2>{warning || "Good Choice!."}</h2>
      </div>
    );

}

export default Todo