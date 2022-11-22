const singleOut = [...Array(180).keys()].map((i) => i + 1);
const doubleOut = [[...Array(157).keys()].map((i) => i + 2), 160, 161, 164, 167, 170].flat();
const masterOut = [
  [...Array(161).keys()].map((i) => i + 2),
  164,
  165,
  167,
  168,
  170,
  171,
  174,
  177,
  180,
].flat();

export { singleOut, doubleOut, masterOut };
