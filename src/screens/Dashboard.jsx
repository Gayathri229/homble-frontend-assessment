import React, { useEffect, useState } from "react";
import useFetchDashboardData from "../utils/hooks/useFetchDashboardData";

const Dashboard = () => {
  const dashboardData = useFetchDashboardData();
  const [tableData, setTableData] = useState([]);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTableData, setFilteredTableData] = useState([]);

  useEffect(() => {
    setTableData(dashboardData);
    setFilteredTableData(dashboardData);
  }, [dashboardData]);

  const sortData = (column) => {
    const sortOrderChanger = sortOrder === "ASC" ? 1 : -1;

    const sortedData = [...tableData].sort((a, b) => {
      let valueA = a[column];
      let valueB = b[column];

      if (column === "id") {
        valueA = parseInt(valueA);
        valueB = parseInt(valueB);
      } else {
        valueA = typeof valueA === "string" ? valueA.toLowerCase() : valueA;
        valueB = typeof valueB === "string" ? valueB.toLowerCase() : valueB;
      }

      if (valueA < valueB) return -1 * sortOrderChanger;
      if (valueA > valueB) return 1 * sortOrderChanger;
      return 0;
    });

    setFilteredTableData(sortedData);
    setSortOrder(sortOrder === "ASC" ? "DSC" : "ASC");
  };

  useEffect(() => {
    setFilteredTableData(
      tableData.filter((data) => {
        return (
          data?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          data?.id.includes(searchQuery.toString())
        );
      })
    );
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCheckRow = (id) => {
    const filteredRows = filteredTableData.filter((data) => {
      return data?.id !== id;
    });
    setFilteredTableData(filteredRows);
    setTableData(filteredRows);
  };

  return tableData.length === 0 ? (
    <div className="loading-text">LOADING...</div>
  ) : (
    <div className="dashboard">
      <div className="search-container">
        <input
          type="text"
          onChange={(event) => handleSearch(event)}
          className="search-input"
        />
      </div>
      <div className="table-container">
        <table className="table">
          <thead className="table-heading">
            <tr>
              <th onClick={() => sortData("id")}>ID</th>
              <th onClick={() => sortData("name")}>Name</th>
              <th onClick={() => sortData("selling_price")}>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTableData.map((data) => (
              <tr key={data?.id}>
                <td>{data?.id}</td>
                <td>{data?.name}</td>
                <td>{data?.selling_price}</td>
                <td>
                  <button onClick={() => handleCheckRow(data?.id)}>
                    Check
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
