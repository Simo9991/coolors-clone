import React, { useState, useRef, useEffect } from 'react'
// import { mouseDown, moveMe, mouseUp } from '../utils/move-me';


const InsidePal: React.FC = () => {
    //drug button
    const refToDrag = useRef<any>(HTMLDivElement);
    const refTochange = useRef<any>(HTMLDivElement);
    const fromLeft = useRef<any>(HTMLDivElement);


    const [block, setBlock] = useState(false);
    const handleBlock = () => {
        setBlock((b) => !b);
    };


  useEffect(() => {
    // refToDrag.current.addEventListener("mousedown", mouseDown);
    // window.addEventListener("mouseup", mouseUp);
    // window.addEventListener("mousemove",moveMe.bind(this,fromLeft));
  }, []);

    
  return (
    <>
          <div className="inside-palette">
              <div ref={fromLeft} className='fromLeft'></div>
              
        {/* btn locked color palette */}
        <div
          onClick={handleBlock}
          className={block ? "btn-is-blocked" : "btn-not-blocked"}
        ></div>
        {/* drag and drob palette */}
        <div ref={refToDrag} className="dragMe"></div>

        {/* change color */}
        <input ref={refTochange} className="refTochange" type="color" />
      </div>
    </>
  );
};

export default InsidePal