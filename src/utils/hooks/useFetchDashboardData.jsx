import { useEffect, useMemo, useState } from "react";
import { getRequest } from "../../axios";

const useFetchDashboardData = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = useMemo(
    () => async () => {
      try {
        const response = await getRequest("/dashboard");
        setDashboardData(response?.data);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    },
    [dashboardData]
  );

  return dashboardData;
};

export default useFetchDashboardData;
