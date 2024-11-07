import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import iphone from "../assets/iphone.png";
import { useNavigate } from "react-router-dom";

function Home  () {
  const navigate = useNavigate()  
  const onClickHandler = ()=>{
    navigate("/dashboard")
  }
  return (
    <div className="max-w-[90rem]  mx-auto min-h-[110vh] h-[100vh] flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:p-10 gap-10 md:gap-0">
      <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-6 md:gap-10 ">
        <Heading text={"Crypto Tracker"} styles={"text-center md:text-left mt-2 md:mt-0 "}/>
        <Heading text={"Real Time."} styles={"text-[#3A80E9] text-center md:text-left"}/>
        <p className="text-md px-5 md:px-2 text-slate-500 font-nunito">Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className="flex items-center justify-between md:justify-normal md:gap-12">
        <Button 
          text={"Dashboard"} 
          styles={"px-6 text-slate-100 bg-[#3A80E9] hover:shadow-xl "}
          onClickHandler={onClickHandler}
          />
        <Button disabled text={"Share"} styles={"w-28 text-slate-800 bg-slate-100 border-2 border-blue-700 hover:text-slate-100 hover:bg-[#3A80E9] hover:border-[#3A80E9]"} />
        </div>
      </div>
      <div className="w-full md:w-[30%] h-full relative">
        <div className="w-[60%] md:w-[70%] h-[100%] md:h-[80%] bg-[#63A1DD] absolute bottom-0 md:bottom-20 right-14 md:right-10 rounded-3xl">
        </div>
        <img className="w-[65%] md:w-[75%] h-[110%] md:h-[90%] absolute top-0 left-10  animate-up-down" src={iphone} alt="iphone" />
      </div>
    </div>
  ) 
}

export default Home