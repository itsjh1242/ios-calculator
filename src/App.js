import { useState } from "react";

function App() {
  const [value, setValue] = useState("0");

  const pressNumber = ({ number }) => {
    const newValue = parseInt(value + number).toString();
    if (newValue.length < 10) {
      setValue(newValue);
    }
  };

  // 초기화
  const pressAC = () => {
    setValue("0");
  };

  // 양수, 음수형 변경
  const pressNegative = () => {
    var newValue;
    if (value === "0") {
      newValue = "-0";
    } else {
      newValue = (parseInt(value) * -1).toString();
    }
    setValue(newValue);
  };

  // Circle Component
  const Circle = ({ children, bg, f }) => {
    const onClickHandler = () => {
      switch (f) {
        case "AC":
          pressAC();
          break;
        case "+/-":
          pressNegative();
          break;
        default:
          pressNumber({ number: f });
          break;
      }
    };
    return (
      <div
        className={`w-14 h-14 rounded-full flex justify-center items-center ${f === 0 ? "col-span-2 w-full" : ""} ${bg}`}
        onClick={() => {
          onClickHandler();
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <main className="relative w-screen h-screen flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-[345px] -translate-y-[345px] w-[700px] h-[500px]">
        <img src="./iphone.png" alt="iphone" />
      </div>
      <div className="z-20 w-[325px] h-[660px] bg-black p-4 rounded-[50px]">
        <div className="w-full h-1/3 flex justify-end items-end p-5">
          <p
            className={`text-white text-right ${value.length >= 9 ? "text-4xl" : value.length >= 8 ? "text-5xl" : value.length >= 7 ? "text-6xl" : "text-7xl"}`}
          >
            {value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <div className="w-full h-2/3 flex justify-center items-start">
          <div className="grid grid-cols-4 gap-4">
            {/* Row 1 */}
            <Circle bg="bg-light-gray" f={"AC"}>
              <p className="text-2xl font-semibold">AC</p>
            </Circle>
            <Circle bg="bg-light-gray" f={"+/-"}>
              <p className="text-2xl font-semibold">+/-</p>
            </Circle>
            <Circle bg="bg-light-gray">
              <p className="text-2xl font-bold">%</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">÷</p>
            </Circle>
            {/* Row 2 */}
            <Circle bg="bg-deep-gray" f={7}>
              <p className="text-2xl font-semibold text-gray-200">7</p>
            </Circle>
            <Circle bg="bg-deep-gray" f={8}>
              <p className="text-2xl font-semibold text-gray-200">8</p>
            </Circle>
            <Circle bg="bg-deep-gray" f={9}>
              <p className="text-2xl font-semibold text-gray-200">9</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">×</p>
            </Circle>
            {/* Row 3 */}
            <Circle bg="bg-deep-gray" f={4}>
              <p className="text-2xl font-semibold text-gray-200">4</p>
            </Circle>
            <Circle bg="bg-deep-gray" f={5}>
              <p className="text-2xl font-semibold text-gray-200">5</p>
            </Circle>
            <Circle bg="bg-deep-gray" f={6}>
              <p className="text-2xl font-semibold text-gray-200">6</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">−</p>
            </Circle>
            {/* Row 4 */}
            <Circle bg="bg-deep-gray" f={1}>
              <p className="text-2xl font-semibold text-gray-200">1</p>
            </Circle>
            <Circle bg="bg-deep-gray" f={2}>
              <p className="text-2xl font-semibold text-gray-200">2</p>
            </Circle>
            <Circle bg="bg-deep-gray" f={3}>
              <p className="text-2xl font-semibold text-gray-200">3</p>
            </Circle>
            <Circle bg="bg-deep-orange">
              <p className="text-3xl font-semibold text-white">+</p>
            </Circle>
            {/* Row 5 */}
            <Circle bg="bg-deep-gray" f={0}>
              <p className="text-3xl font-semibold text-gray-200">0</p>
            </Circle>
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

export default App;
