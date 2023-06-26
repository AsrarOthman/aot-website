import React from "react";
import SideNav from "../component/SideNav";
import Box from "@mui/material/Box";
import TimelineCards from "../component/TimelineCards";

function Home() {
  return (
    <div>
      <Box sx={{ display: "flex", backgroundColor: "white" }}>
        <SideNav />
        <div sx={{ display: "flex" }} className="mt mother ">
          <div>
            <p> Nama saya Asrar Bin Othman</p>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Home;
