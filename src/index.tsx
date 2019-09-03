import * as React from "react";

export interface RainbowLoaderProps {
  css?: React.CSSProperties;
}

export const RainbowLoader: React.FC<RainbowLoaderProps> = ({ css }) => {
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

  const style = Object.assign({}, defaultStyles, css);

  return (
    <div style={style}>
      <style>{`
            @keyframes RainbowLoaderAnimation {
                0% {
                    background-position: 0%;
                  }
                  100% {
                    background-position: 100%;
                  }
            }
        `}</style>
    </div>
  );
};
