type RandomHex = () => string;
const randomHex: RandomHex = () => {
  return (
    "#" +
    Math.floor((Math.random() * 0xffffff) as any)
      .toString(16)
      .padEnd(6, "0")
  );
};

type RGBTOHEX = (r: number, g: number, b:number) => string
const rgbToHex:RGBTOHEX = (r: number, g: number, b:number) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')
    


interface Palette {
  class: string;
  id: number;
  backGround: string;
}
const palette: Palette[] = [
  { class: "palette", id: 0, backGround: randomHex() },
  { class: "palette", id: 1, backGround: randomHex() },
  { class: "palette", id: 2, backGround: randomHex() },
  { class: "palette", id: 3, backGround: randomHex() },
  { class: "palette", id: 4, backGround: randomHex() },
];

export { randomHex, rgbToHex, palette };
