import React, { useEffect, useRef} from "react";
import { palette, randomHex, rgbToHex } from "../utils/utils";
import InsidePal from "./InsidePal";
import "../styles/Palette.css";

const SinglePalette: React.FC = (): JSX.Element => {
  interface REFS {
    current: HTMLDivElement[];
  }
  let refs: REFS = useRef([]);

  useEffect(() => {
    window.addEventListener("keypress", (e: KeyboardEvent) => {
      if (e.code === "Space") {
        refs.current.forEach((e) => {
          if (e.children[0].children[3].classList.value === "btn-not-blocked") {
            e.style.backgroundColor = randomHex();
            let rgb = e.style.backgroundColor.slice(4, -1).split(", ");
            (e.children[0].children[1] as HTMLElement).innerText = rgbToHex(
              Number(rgb[0]),
              Number(rgb[1]),
              Number(rgb[2])
            );
          }
        });
      }
    });
  }, []);



  return (
    <>
      {palette.map((e, i) => {
        return (
          <div
            ref={(el) => (refs.current[e.id] = el as HTMLDivElement)}
            key={e.id}
            style={{
              backgroundColor: e.backGround,
              position: "absolute",
              left: i * (100 / palette.length) + "%",
              width: 100 / palette.length + "%",
            }}
            className={e.class}
          >
            <InsidePal
              bg={e.backGround}
            />
          </div>
        );
      })}
    </>
  );
};

export default SinglePalette;
