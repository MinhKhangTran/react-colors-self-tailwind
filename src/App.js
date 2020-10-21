import React from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

export default function App() {
  const [color, setColor] = React.useState("");
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState(new Values("#bada55").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      const farben = new Values(color).all(10);
      setList(farben);
      console.log(list);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-5 flex-wrap">
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={`${
              error
                ? "px-2 py-1 rounded-l border-red-500 border-2"
                : "px-2 py-1 rounded-l"
            }`}
            placeholder="#BADA55"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <button
            type="submit"
            className="bg-blue-500 px-2 py-1 rounded-r text-blue-100 hover:bg-blue-700 hover:text-blue-100"
          >
            Generate
          </button>
        </form>
      </div>

      <SingleColor list={list} />
    </div>
  );
}
