const SVG_NS = 'http://www.w3.org/2000/svg'

export function createSVG(name: string): SVGElement {
  return document.createElementNS(SVG_NS, name);
}

export function setSVGAttribute(elm: SVGElement, name: string, value: string) {
  elm.setAttributeNS(null, name, value);
}

export function getSVGAttribute(elm: SVGElement, name: string): string | null {
  return elm.getAttributeNS(null, name);
}
