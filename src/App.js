import React, { useState } from "react";
import SearchImages from "./Components/SearchImages";
import DisplayImage from "./Components/DisplayImage";

const App = () => {
  const [image, setImage] = useState([]);
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <h1 className="titlehead">ImageBazar</h1>
          <SearchImages addImage={setImage} />
        </div>
<div>
        <DisplayImage className="imagecontainer" images={image} />
        </div>
      </div>
    </div>
  );
};
export default App;
