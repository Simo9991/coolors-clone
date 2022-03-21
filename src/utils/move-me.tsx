//flags
type F = {
  isDraggable: boolean;
  currentElem?: any;
};
const flags: F = {
  isDraggable: false,
  currentElem: null,
};

//inital coordinate on mouseDown
type OFF = {
  x: number;
  currentOffset: number;
};
const offset: OFF = {
  x: 0,
  currentOffset: 0,
};

const mouseUp = (e: MouseEvent) => {
  flags.isDraggable = false;
};

const mouseDown = (e: MouseEvent) => {
  flags.isDraggable = true;
  let target = e.target as HTMLDivElement;
  flags.currentElem = target.parentNode?.parentNode;
  offset.x = e.clientX - flags.currentElem.offsetLeft;
};

const moveMe = (e: MouseEvent) => {
  if (flags.isDraggable) {
    flags.currentElem.style.position = "absolute";
    flags.currentElem.style.zIndex = "999";
    flags.currentElem.style.left = `${e.clientX - offset.x + "px"}`;
  }
};

export { mouseUp, mouseDown, moveMe };
