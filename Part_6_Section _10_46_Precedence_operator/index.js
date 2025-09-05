/* Operator Precedence ... */

const button = {
  width: 200,
  text: "Buy",
};

const redButton = {
  width: 300,
  ...button,
  color: "red",
  text: "Buy2",
};

console.table(redButton);

const buttonInfo = {
  text: "Buy",
};

const buttonStyle = {
  color: "red",
  width: 300,
  height: 50,
  text: "Buy2",
};

const buttonMain = {
  ...buttonInfo,
  ...buttonStyle,
};

console.table(buttonMain);
