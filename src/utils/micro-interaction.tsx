const getVisibleOn = (copyToClipBoard:any) => {
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

export { getVisibleOn, getVisibleOff, saveHex };
