import React from "react";
import SideNav from "../component/SideNav";
import Box from "@mui/material/Box";

function Tracking() {
  return (
    <div>
      <Box sx={{ display: "flex", backgroundColor: "#f5f5f5" }}>
        <SideNav />
        <div sx={{ display: "flex" }} className="mt mother ">
          <div>test</div>
        </div>
      </Box>
    </div>
  );
}

export default Tracking;
