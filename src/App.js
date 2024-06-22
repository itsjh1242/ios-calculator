import { useState } from "react";

function App() {
  const [value, setValue] = useState("0");

  const pressNumber = ({ number }) => {
    const newValue = parseInt(value + number).toString();
    setValue(newValue);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-[320px] h-[600px] bg-black p-4">
        <div className="w-full h-1/3 flex justify-end items-end p-5">
          <p className="text-6xl text-white text-right">{value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="w-full h-2/3 flex justify-center items-start">
          <div className="grid grid-cols-4 gap-4">
            {/* Row 1 */}
            <Circle bg="bg-light-gray">
              <p className="text-2xl font-semibold">AC</p>
            </Circle>
            <Circle bg="bg-light-gray">
              <p className="text-2xl font-semibold">+/-</p>
            </Circle>
            <Circle bg="bg-light-gray">
              <p className="text-2xl font-bold">%</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">÷</p>
            </Circle>
            {/* Row 2 */}
            <Circle
              bg="bg-deep-gray"
              onClick={() => {
                pressNumber({ number: "7" });
              }}
            >
              <p className="text-2xl font-semibold text-gray-200">7</p>
            </Circle>
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">8</p>
            </Circle>
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">9</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">×</p>
            </Circle>
            {/* Row 3 */}
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">4</p>
            </Circle>
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">5</p>
            </Circle>
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">6</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">−</p>
            </Circle>
            {/* Row 4 */}
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">1</p>
            </Circle>
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">2</p>
            </Circle>
            <Circle bg="bg-deep-gray">
              <p className="text-2xl font-semibold text-gray-200">3</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">+</p>
            </Circle>
            {/* Row 5 */}
            <div className={`w-full h-14 rounded-full flex justify-start items-center bg-deep-gray col-span-2 pl-5`}>
              <p className="text-3xl font-semibold text-gray-200">0</p>
            </div>
            <Circle bg="bg-deep-gray">
              <p className="text-3xl font-semibold text-gray-200">.</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">=</p>
            </Circle>
          </div>
        </div>
      </div>
    </main>
  );
}

// Circle Component
const Circle = ({ children, bg, onClick }) => {
  return (
    <div className={`w-14 h-14 rounded-full flex justify-center items-center ${bg}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default App;
