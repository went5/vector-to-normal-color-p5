import "./styles.css";
import p5Types from "p5";
import Sketch from "react-p5";
import { useControls } from "leva";

const VectorToColor = (x: number, y: number, z: number) => {
  return {
    r: Math.ceil((x / 2 + 0.5) * 255),
    g: Math.ceil((y / 2 + 0.5) * 255),
    b: Math.ceil((z / 2 + 0.5) * 255)
  };
};

const GetPositionFromColumn = (
  p: p5Types,
  column: number,
  maxColumn: number = 10
) => {
  return (p.windowWidth / maxColumn) * column;
};

const GetPositionFromRow = (p: p5Types, row: number, maxRow: number = 10) => {
  return (p.windowHeight / maxRow) * row;
};

export default function App() {
  const data = useControls(() => ({
    X: {
      value: 0,
      min: -1,
      max: 1,
      step: 0.1
    },
    Y: {
      value: 0,
      min: -1,
      max: 1,
      step: 0.1
    },
    Z: {
      value: 1,
      min: -1,
      max: 1,
      step: 0.1
    }
  }));
  const DefalutRectSize = (p: p5Types) => {
    return p.width / 15;
  };
  const setup = (p: p5Types, canvasParentref: Element) => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasParentref);
    p.rectMode(p.CENTER);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(p.width / 20);
    p.textFont("Arial");
  };
  const draw = (p: p5Types) => {
    p.background(255, 255, 255);
    p.stroke(0, 0, 0, 255);

    p.textSize(p.width / 40);

    const resultColor = VectorToColor(data[0].X, data[0].Y, data[0].Z);
    p.fill(resultColor.r, resultColor.g, resultColor.b);

    p.rect(
      GetPositionFromColumn(p, 5),
      GetPositionFromRow(p, 5),
      DefalutRectSize(p),
      DefalutRectSize(p)
    );
    p.fill("#000");

    p.text(
      `(${resultColor.r},${resultColor.g},${resultColor.b})`,
      GetPositionFromColumn(p, 5),
      GetPositionFromRow(p, 4)
    );

    p.textSize(p.width / 20);
  };
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
