import Lottie from "lottie-react";
import medicalAnimation from "../../assets/animations/medical.json";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[#DDDDDD] p-7">
      <Helmet>
        <title>Medical Store | Home</title>
      </Helmet>
      <div className="w-full h-full flex items-center justify-center">
        <Lottie
          className="w-1/2 h-1/2"
          animationData={medicalAnimation}
        ></Lottie>
      </div>
    </div>
  );
};

export default Dashboard;
