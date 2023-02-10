import { createSVG, getSVGAttribute, setSVGAttribute } from "./svg-util";

export class SVGObject {
  element: SVGElement;
  parent: SVGObject | undefined;
  children: SVGObject[];

  static svg(): SVGObject {
    return new SVGObject("svg");
  }

  constructor(name: string) {
    this.element = createSVG(name);
    this.children = [];
  }

  addChild(child: SVGObject) {
    this.element.appendChild(child.element);
    this.children.push(child);
    child.parent = this;
  }

  setAttribute(name: string, value: string) {
    setSVGAttribute(this.element, name, value);
  }

  getAttribute(name: string): string | null {
    return getSVGAttribute(this.element, name);
  }
}
