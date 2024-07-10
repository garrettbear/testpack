import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "metachak/src/components/CustomButton";

const CustomButtonTest: React.FC = () => {
  return (
    <div>
      <h1>Test CustomButton</h1>
      <CustomButton onClick={() => alert("Button clicked!")}>
        Click Me
      </CustomButton>
    </div>
  );
};

ReactDOM.render(<CustomButtonTest />, document.getElementById("root"));
