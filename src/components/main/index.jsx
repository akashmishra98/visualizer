import ReactSwitch from "react-switch";
import { useState } from "react";
import { InputComp } from "../inputPrameters/input";
import "./index.css";
import TreeVisual from "../treeVisualizer/treeVisual";

function LandingPage() {
  const [checked, setChecked] = useState(false);
  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <>
      <div className={checked == true ? "lightMode" : "darkMode"}>
        <div className="headingcomp">
          <div className="head">
            <div className="title">
              <h2>Json Tree Visualizer</h2>
            </div>
            <div className="themeMode">
              <ReactSwitch
                height={20}
                width={40}
                handleDiameter={15}
                checked={checked}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="heroSection">
          <InputComp />
        </div>
      </div>
    </>
  );
}
export default LandingPage;
