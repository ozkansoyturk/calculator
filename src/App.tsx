import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value: string) => {
    setDisplay((prev) => (prev === "0" ? value : prev + value));
  };

  const handleClear = () => setDisplay("0");

  const handleClearLast = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const handleEquals = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center content-center items-center bg-slate-50 text-white">
        <div className="bg-gray-800 p-4 rounded-lg w-64 shadow-2xl shadow-gray-800">
          <div className="bg-gray-700 text-right text-3xl p-2 mb-2 rounded">{display}</div>
          <div className="grid grid-cols-4 gap-2">
            {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"].map((btn) => (
              <button
                key={btn}
                onClick={() => (btn === "=" ? handleEquals() : handleClick(btn))}
                className={`p-3 rounded-full text-xl ${
                  ["+", "-", "*", "/"].includes(btn)
                    ? "bg-orange-500 text-white"
                    : btn === "="
                    ? "bg-orange-700 text-white"
                    : "bg-gray-600 text-white"
                } hover:opacity-80`}
              >
                {btn}
              </button>
            ))}
            <button onClick={handleClear} className="p-3 rounded-full text-xl bg-gray-500 text-white hover:opacity-80">
              C
            </button>
            <button
              onClick={handleClearLast}
              className="p-3 rounded-full text-xl bg-gray-500 text-white hover:opacity-80"
            >
              &larr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
