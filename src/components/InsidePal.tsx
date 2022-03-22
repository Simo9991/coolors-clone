import React, { useState, useRef } from "react";
import {
  getVisibleOn,
  getVisibleOff,
  saveHex,
} from "../utils/micro-interaction";

interface BG {
  bg: string;
}
const InsidePal: React.FC<BG> = ({ bg }) => {
  //drug button
  const refToDrag = useRef<HTMLDivElement>(null);
  const refTochange = useRef<HTMLInputElement>(null);
  const fromLeft = useRef<HTMLDivElement>(null);
  const currColor = useRef<HTMLDivElement>(null);
  const lock = useRef<any>(null);
  const copyToClipBoard = useRef<HTMLDivElement>(null);

  const [block, setBlock] = useState(false);
  const handleBlock = () => {
    setBlock((b) => !b);
    if (!block) {
      lock.current.innerText = "locked";
    } else {
      lock.current.innerText = "unlocked ";
    }
  };

  const [color, setColor] = useState("#B0B0B0");
  function handleChange(e: any) {
    let target = e.target;
    setColor(target.value);
  }



  return (
    <>
      <div className="inside-palette">
        {/* initial color label */}
        <div
          style={{ opacity: 0 }}
          ref={copyToClipBoard}
          className="copyToClipBoard"
        >
          copy
        </div>
        <div
          onClick={() => saveHex(currColor, copyToClipBoard)}
          onMouseOver={() => getVisibleOn(copyToClipBoard)}
          onMouseOut={() => getVisibleOff(copyToClipBoard)}
          ref={currColor}
          className="copyValue"
        >
          {bg}
        </div>
        {/* initial color label */}

        <div ref={fromLeft} className="fromLeft"></div>

        {/* btn locked color palette */}
        <div
          onClick={handleBlock}
          ref={lock}
          className={block ? "btn-is-blocked" : "btn-not-blocked"}
        >
          <p className="locked">unlocked</p>
        </div>
        {/* btn locked color palette */}

        {/* drag and drob palette */}
        <div ref={refToDrag} className="dragMe">
          <img
            src={require("../assets/drag.svg").default}
            alt="drag-icon"
            className="drag-icon"
          />
        </div>
        {/* drag and drob palette */}

        {/* change color */}
        <input
          ref={refTochange}
          className="refTochange"
          onChange={handleChange}
          value={color}
          type="color"
        />
        {/* change color */}
      </div>
    </>
  );
};

export default InsidePal;
