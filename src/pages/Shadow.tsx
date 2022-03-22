
import { useState } from 'react';
import {
  showName,
  showNameOff,
  shadowGen,
} from "../utils/micro-interaction";
import dt2 from "./colors2.json";
import "../styles/Shadow.css";

const Shadow = () => {

    const [txt, setTxt] = useState("");
    const handleChange = (e: any) => {
        setTxt(e.target.value);
    }

    return (
      <>
        <div className="shadow-container">
                <div className='input-container'>
                    <h1 className='input-title'>search palette</h1>
            <input type="text" value={txt} onChange={handleChange} />
          </div>

          {Object.entries(dt2)
            .filter((e) => e[1].match(new RegExp(txt, "i")))
            .map((e, i) => {
              return (
                <div
                  onMouseOver={showName}
                  onMouseLeave={showNameOff}
                  onClick={shadowGen}
                  style={{ backgroundColor: e[0] }}
                  className="shadow-palette"
                  key={i}
                >
                  <h1 className="name-palette">{e[1]}</h1>
                  <h2 className="hex-title">{e[0]}</h2>
                </div>
              );
            })}
        </div>
      </>
    );
}

export default Shadow