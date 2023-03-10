import { useState } from "react";
import SageataIntrebari from "../../../../public/imagini/SageataIntrebari.svg";
interface IDropdownInfo {
  intrebare: string;
  raspuns: string;
  ultimaIntrebare?: boolean;
}

const DropdownIntrebare = ({
  intrebare,
  raspuns,
  ultimaIntrebare,
}: IDropdownInfo) => {
  const [showRaspuns, setShowRaspuns] = useState(false);
  const handleClick = () => {
    console.log("ckicked");
    setShowRaspuns(!showRaspuns);
  };
  return (
    <div className="flex flex-col" id="container-dd">
      <button
        onClick={handleClick}
        className="flex items-center justify-between text-start"
      >
        <h4 className=" text-start text-white ">{intrebare}</h4>

        <div
          className={`flex h-6 w-6 items-center justify-center ${
            showRaspuns ? "rotate-180" : ""
          } `}
          id="sageata-container"
        >
          <SageataIntrebari
            fill="#ffff"
            className="text-white"
            alt="sageata-intrebari"
          />
        </div>
      </button>
      <p
        className={` px-1 pb-4 pt-10 text-start  text-white opacity-60   lg:opacity-80 ${
          !showRaspuns ? "hidden" : "block"
        } `}
      >
        {raspuns}
      </p>
    </div>
  );
};

export default DropdownIntrebare;
