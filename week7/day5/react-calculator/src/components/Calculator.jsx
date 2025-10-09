// src/components/Calculator.jsx
import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res = 0;
    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "sub":
        res = n1 - n2;
        break;
      case "mul":
        res = n1 * n2;
        break;
      case "div":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#CFE4FB] transition-all duration-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#284D9C] mb-6">React Calculator</h1>

        <div className="flex flex-col gap-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D86CB]"
          />

          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D86CB]"
          />

          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#82D4E8]"
          >
            <option value="add">➕ Addition</option>
            <option value="sub">➖ Subtraction</option>
            <option value="mul">✖️ Multiplication</option>
            <option value="div">➗ Division</option>
          </select>

          <button
            onClick={handleCalculate}
            className="bg-[#3D86CB] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#284D9C] transition"
          >
            Calculate
          </button>
        </div>

        {result !== null && (
          <div className="mt-6 text-2xl font-bold text-[#2A3045]">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
