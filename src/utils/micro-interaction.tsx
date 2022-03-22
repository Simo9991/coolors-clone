// import { rgbToHex } from "./utils";
// const Values = require("values.js");

const getVisibleOn = (copyToClipBoard: any) => {
  copyToClipBoard.current.style.opacity = "1";
};
const getVisibleOff = (copyToClipBoard:any) => {
  copyToClipBoard.current.style.opacity = "0";
};
const saveHex = (currColor:any,copyToClipBoard:any) => {
    navigator.clipboard.writeText(currColor.current.innerText);
    copyToClipBoard.current.innerText = "copied";
    setTimeout(() => {
        copyToClipBoard.current.innerText = "copy";
    }, 1500);
};






    //shadow function
    const showName = (e: any) => {
      let target = e.target;
      let ch = target.children[1];
      if (target.classList.value === "shadow-palette") {
        target.style.zIndex = "1001";
        ch.style.zIndex = "10";
        ch.style.transform = "translate(-50%,0px)";
        ch.style.transition = "0.5s";
        ch.style.opacity = "1";
      }
    };

    const showNameOff = (e: any) => {
      let target = e.target;
      let ch = target.children[1];
      if (target.classList.value === "shadow-palette") {
        target.style.zIndex = "3";
        ch.style.zIndex = "1";
        ch.style.transform = "translate(-50%,30px)";
        ch.style.transition = "0.5s";
        ch.style.opacity = "0";
      }
    };

    const shadowGen = (e: any) => {
      let target = e.target;
    };

    /*
    const newFunc = (e: any) => {
      let target = e.target.parentNode.parentNode;
      let preC = target.style.backgroundColor.slice(4, -1).split(", ");
      const all = new Values(
        rgbToHex(Number(preC[0]), Number(preC[1]), Number(preC[0]))
      ).all(20);
      all.forEach((e: any) => {
        let elem = document.createElement("div");
        elem.style.backgroundColor = e.hex;
      });
    };
    */




export {
  getVisibleOn,
  getVisibleOff,
  saveHex,
  showName,
  showNameOff,
  shadowGen,
};




