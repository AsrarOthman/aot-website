import React from "react";

function TimelineCards() {
  return (
    <div className="container">
      <h2>Jumlah rekod semasa</h2>
      <hr class="new1"></hr>
      <div className="row">
        <div className="card01">
          <h4 className="mt2 txtCard01">Terima Tandan</h4>
          <h3 className="txtCard01 fs30">342</h3>
          {/* <h3 className="txtCard01 fs15">@@@</h3> */}
           <div className="test"></div>
        </div>
        <div> </div>
        <div className="card01">
          <h4 className="mt2 txtCard01">Melerai</h4>
          <h3 className="txtCard01 fs30">452</h3>
        </div>
        <div className="card01">
          {" "}
          <h4 className="mt2 txtCard01">Depericarp</h4>
          <h3 className="txtCard01 fs30">8782</h3>
        </div>
        <div className="card01">
          {" "}
          <h4 className="mt2 txtCard01">Rendam Biji Segar</h4>
          <h3 className="txtCard01 fs30">876</h3>
        </div>
        <div className="card01">
          {" "}
          <h4 className="mt2 txtCard01">Jemur</h4>
          <h3 className="txtCard01 fs30">76767</h3>
        </div>
      </div>
      <div className="row">
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
      </div>
      <div className="row">
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
      </div>
      <div className="row">
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
        <div className="card01"></div>
      </div>
      <hr style={{ marginTop:"30px"}} class="new1"></hr>
    </div>
  );
}

export default TimelineCards;
