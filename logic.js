
const salute = () => {
  console.log("hello");

}

const agSalute = () => {
  var corn = "corn";
  alert("hello!" + corn);
}

const initFunctions = [
  salute,
  agSalute
];

const mainLoop = initFunctions => {
  initFunctions.forEach(initFunction => {
    initFunction();
  });
}

mainLoop(initFunctions);