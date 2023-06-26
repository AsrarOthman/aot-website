import React, { useState } from "react";
import { saveAs } from "file-saver";

const ExcelTable = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Bob Johnson", age: 35 },
  ]);

  const [title, setTitle] = useState("Excel Table");

  const handleInputChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleDownload = () => {
    const csvData = convertToCSV();
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "table_data.csv");
  };

  const convertToCSV = () => {
    const header = Object.keys(data[0]).join(",");
    const rows = data.map((item) => Object.values(item).join(","));
    return `${title}\n${header}\n${rows.join("\n")}`;
  };

  const tableStyle = {
    marginTop: "20px",
    borderCollapse: "collapse",
    color:"blue"
  };

  const captionStyle = {
    captionSide: "top",
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const cellStyle = {
    padding: "8px",
    border: "1px solid black",
  };

  const firstCellStyles = {
    ...cellStyle,
    borderLeft: "none",
  };

  return (
    <div>
      <table style={tableStyle}>
        <caption style={captionStyle}>{title}</caption>
        <tbody>
          <tr>
            <th style={firstCellStyles}></th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Age</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={firstCellStyles}>{item.id}</td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    handleInputChange(item.id, "name", e.target.value)
                  }
                />
              </td>
              <td style={cellStyle}>
                <input
                  type="number"
                  value={item.age}
                  onChange={(e) =>
                    handleInputChange(item.id, "age", parseInt(e.target.value))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default ExcelTable;
