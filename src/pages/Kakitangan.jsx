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



  return (
    <div>
      <table>
        <caption>{title}</caption>
        <tbody>
          <tr>
            <th></th>
            <th>Nasme</th>
            <th>Age</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    handleInputChange(item.id, "name", e.target.value)
                  }
                />
              </td>
              <td>
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
