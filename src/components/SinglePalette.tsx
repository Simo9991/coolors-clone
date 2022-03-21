import React, { useEffect, useRef } from "react";
import { palette, randomHex } from "../utils/utils";
import InsidePal from "./InsidePal";
import "../styles/Palette.css";

const SinglePalette: React.FC = (): JSX.Element => {

  interface REFS {
    current: any[];
    }
    let refs: REFS = useRef([]);
    
  useEffect(() => {
    window.addEventListener("keypress", (e: KeyboardEvent) => {
      if (e.code === "Space") {
        refs.current.forEach(e => {
          if (e.children[0].children[1].classList.value === "btn-not-blocked") {
            e.style.backgroundColor = randomHex();
          }
        })
      }
    });
  }, []);


  return (
    <>
      {palette.map((e,i) => {
        return (
          <div
            ref={(el) => (refs.current[e.id] = el as any)}
            key={e.id}
            style={{ backgroundColor: e.backGround ,position:"absolute",left:i * (100 / palette.length) + "%",width:100/palette.length + "%"}}
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
