import Lottie from "lottie-react";
import progressAnimation from "../../assets/animations/workInProgress.json";
import { Helmet } from "react-helmet-async";

const Reporting = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[#DDDDDD] p-7">
      <Helmet>
        <title>Medical Store | Reporting</title>
      </Helmet>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-error">
          Work in Progress . . .
        </h2>
        <Lottie
          className="w-1/2 h-1/2"
          animationData={progressAnimation}
        ></Lottie>
      </div>
    </div>
  );
};

export default Reporting;
