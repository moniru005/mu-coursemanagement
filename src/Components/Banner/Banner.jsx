
import image from "../../assets/images/banner.jpg"
// import BannerCard from "./BannerCard";
const Banner = () => {

    return (
      <div>
        <div className="relative">
          <img src={image} alt="" />
          <div className="absolute flex items-center h-full top-0 left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] "></div>
  
          <div>
            {/* Banned Text */}
            <div className="absolute top-14 ml-28 lg:top-[150px]  lg:ml-12 ">
                    <h1 className="text-xl lg:text-5xl text-white font-semibold uppercase">
                    Course Management
                    </h1>
                    <p className="text-sm text-white w-[550px] pt-6">Welcome to Your Educational Command Center: Take Control of Your Learning Experience with Our State-of-the-Art Course Management Website - Where Innovation and Education Collide to Ignite Your Potential!</p>
                    <button className="btn mt-6 bg-gradient-to-tr from-[#0064A5] to-[#27BDBE] text-white w-[200px] ">Get Started</button>
            </div>

            {/* BannerCard */}
            <div className="hidden lg:flex absolute top-5 right-0">
                {/* <BannerCard></BannerCard> */}
            </div>
          </div>

        </div>
      </div>
    );
  };
  
  export default Banner;
  