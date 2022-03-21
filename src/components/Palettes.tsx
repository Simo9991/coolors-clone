import React, {useState} from 'react';
import SinglePalette from "./SinglePalette";
import { palette,randomHex } from '../utils/utils';



const Palettes: React.FC = (): JSX.Element => {

  const [countPalette, setCountPalette] = useState(palette.length);

  interface PalInterface {
    (): void;
  }
  const addPal: PalInterface = () => {
    if (countPalette < 10) {
      setCountPalette((c) => c + 1);
      palette.push({
        class: "palette",
        id: countPalette,
        backGround: randomHex(),
      });
    } 
  };

  const removePal: PalInterface = () => {
    if (countPalette > 2) {
      setCountPalette((c) => c - 1);
      palette.pop();
    }
  }

    return (
      <>
        <div className="palette-container">
          <SinglePalette />
        </div>
        <div className="btn-container">
          <div className='btn-remove' onClick={removePal}>click to remove</div>
          <div className='btn-add' onClick={addPal}>click to add</div>
        </div>
      </>
    );
} 
export default Palettes