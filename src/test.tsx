import { RainbowLoader } from "./index";
import * as React from "react";
import { create } from "react-test-renderer";

describe("RainbowLoader", () => {
  it("is truthy", () => {
    expect(RainbowLoader).toBeTruthy();
  });

  it("can override height and animation duration", () => {
    const component = create(
      <RainbowLoader css={{ height: "10px", animationDuration: "5s" }} />
    );
    const tree = component.toJSON();
    expect(tree.props.style.height).toBe("10px");
    expect(tree.props.style.animationDuration).toBe("5s");
  });

  it("will have animation keyframes css as children", () => {
    const component = create(<RainbowLoader />);
    const tree = component.toJSON();
    expect(tree.children[0].children[0]).toEqual(
      `
            @keyframes RainbowLoaderAnimation {
                0% {
                    background-position: 0%;
                  }
                  100% {
                    background-position: 100%;
                  }
            }
        `
    );
  });

  it("will have defaultStyling", () => {
    const component = create(<RainbowLoader />);
    const tree = component.toJSON();

    const defaultStyles: React.CSSProperties = {
      background: `linear-gradient(
            90deg,
            orange,
            yellow,
            lime,
            cyan,
            violet,
            magenta,
            red,
            orange,
            yellow,
            lime,
            cyan,
            violet,
            magenta,
            red,
            orange
          )`,
      backgroundSize: "200%",
      animationDuration: "2s",
      animationName: "RainbowLoaderAnimation",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      height: "1px"
    };

    expect(tree.props.style).toEqual(defaultStyles);
  });
});
