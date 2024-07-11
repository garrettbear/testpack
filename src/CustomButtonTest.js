"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const CustomButton_1 = __importDefault(require("metachak/src/components/CustomButton"));
const CustomButtonTest = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Test CustomButton"),
        react_1.default.createElement(CustomButton_1.default, { onClick: () => alert("Button clicked!") }, "Click Me")));
};
react_dom_1.default.render(react_1.default.createElement(CustomButtonTest, null), document.getElementById("root"));
