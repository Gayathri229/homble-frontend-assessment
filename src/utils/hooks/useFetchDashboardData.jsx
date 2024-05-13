import { useEffect, useState } from "react";
import { getRequest } from "../../axios";

const useFetchDashboardData = () => {
  const [dashboardData, setDashboardData] = useState([]);

  const fetchDashboardData = async () => {
    const response = await getRequest("/dashboard");
    setDashboardData(response?.data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData;
};

export default useFetchDashboardData; 
