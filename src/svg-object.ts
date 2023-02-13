import { createSVG, getSVGAttribute, setSVGAttribute } from "./svg-util";

export type color = string;

export class SVGObject {
  element: SVGElement;
  parent: SVGObject | undefined | null;
  children: SVGObject[];

  static svg(): SVGObject {
    return new SVGObject("svg");
  }

  constructor(name: string) {
    this.element = createSVG(name);
    this.children = [];
  }

  mount(elm: Element) {
    elm.appendChild(this.element);
  }

  addChild(child: SVGObject) {
    this.element.appendChild(child.element);
    this.children.push(child);
    child.parent = this;
  }

  removeChild(child: SVGObject) {
    this.element.removeChild(child.element);
    this.children.splice(this.children.indexOf(child));
    child.parent = null;
  }

  setAttribute(name: string, value: string) {
    setSVGAttribute(this.element, name, value);
  }

  getAttribute(name: string): string | null {
    return getSVGAttribute(this.element, name);
  }

  setFill(color: color) {
    this.setAttribute("fill", color);
  }

  setStroke(color: color) {
    this.setAttribute("stroke", color);
  }
}

export class RectObject extends SVGObject {
  x: number;
  y: number;
  height: number;
  width: number;
  constructor(x: number, y: number, width: number, height: number, option?: { fill?: color, stroke?: color, rx?: number }) {
    super("rect");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.setAttribute("x", x.toString());
    this.setAttribute("y", y.toString());
    this.setAttribute("width", width.toString());
    this.setAttribute("height", height.toString());
    if (option?.rx) {
      this.setAttribute("rx", option.rx);
    }
    if (option?.fill) {
      this.setFill(option.fill);
    }
    if (option?.stroke) {
      this.setStroke(option.stroke);
    }
  }

  move(x: number, y: number) {
    this.x += x;
    this.y += y;
    this.setAttribute("x", this.x.toString());
    this.setAttribute("y", this.y.toString());
  }

}