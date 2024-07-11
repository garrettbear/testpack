"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = greeter;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const metachak_1 = require("metachak");
/**
 * Example function that returns a greeting for the given name.
 *
 * @param name - The name to greet.
 * @returns The greeting.
 */
function greeter(name) {
    return `Hello, ${name}!`;
}
const App = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("h1", null, "Test CustomButton"),
    react_1.default.createElement(metachak_1.CustomButton, { label: "Click Me" })));
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('root'));
