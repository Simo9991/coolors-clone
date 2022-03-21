import React, { useEffect, useRef } from "react";
import { palette, randomHex } from "../utils/utils";
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
        refs.current?.forEach((e: any) => {
          if (e.children[0].children[0].classList.value === "btn-not-blocked") {
            e.style.backgroundColor = randomHex();
          }
        });
      }
    });
  }, []);

  return (
    <>
      {palette.map((e) => {
        return (
          <div
            ref={(el) => (refs.current[e.id] = el as HTMLDivElement)}
            key={e.id}
            style={{ backgroundColor: e.backGround }}
            className={e.class}
          >
            <InsidePal />
          </div>
        );
      })}
    </>
  );
};


export default SinglePalette;
