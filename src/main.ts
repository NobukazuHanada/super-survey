import './style.css'

const SVG_NS = "http://www.w3.org/2000/svg";

function createSVG(name: string): SVGElement {
  return document.createElementNS(SVG_NS, name);
}
function setSVGAttributes(elm: SVGElement, attributes: { [key in string]: string }) {
  for (let [key, value] of Object.entries(attributes)) {
    elm.setAttribute(key, value);
  }
}

const surveyBoardElm = document.getElementById("survey-board")!;
const surveryBoardSvg = createSVG("svg");
setSVGAttributes(surveryBoardSvg, {
  width: "500",
  height: "500",
  viewBox: "0 0 200 200",
});


surveyBoardElm.appendChild(surveryBoardSvg);
const rect = createSVG("rect");
surveryBoardSvg.appendChild(rect);
setSVGAttributes(rect, {
  x: "100",
  y: "100",
  width: "100",
  height: "100"
})
