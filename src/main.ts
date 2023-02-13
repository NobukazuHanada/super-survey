import "./style.css";
import { RectObject, SVGObject } from "./svg-object";

const surveyBoardElm = document.getElementById("survey-board")!;
const svg = SVGObject.svg();
svg.mount(surveyBoardElm);

svg.addChild(
  new RectObject(10, 10, 100, 100, { fill: "#fff", stroke: "#ccc", rx: 10 })
);