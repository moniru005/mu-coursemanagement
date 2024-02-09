import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "../Layout/Dashboard.css";



const Dashboard = () => {

  //Dashboard Menu


 


  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      {/* Dashboard Sidebar */}
      <div className="w-full lg:w-3/12 ">
        <div className="text-md font-workSans flex flex-col lg:flex-row gap-2 p-4 ">
          <ul className="sidebar flex flex-col gap-2 font-medium w-full ">
         
          
          </ul>
        </div>
      </div>

      {/* Dashboard Contents */}
      <div className="w-full lg:w-9/12 flex p-4 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
