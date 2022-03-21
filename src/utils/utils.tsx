type RandomHex = () => string;
const randomHex: RandomHex = () => {
    return ("#" + Math.floor(Math.random() * 0XFFFFF as any).toString(16).padEnd(6, "0")); 
}

interface Palette {
    class: string,
    id: number,
    backGround:string
}
const palette: Palette[] = [
  { class: "palette", id: 0, backGround: randomHex() },
  { class: "palette", id: 1, backGround: randomHex() },
  { class: "palette", id: 2, backGround: randomHex() },
  { class: "palette", id: 3, backGround: randomHex() },
  { class: "palette", id: 4, backGround: randomHex() },
];


export {
    randomHex,
    palette
}