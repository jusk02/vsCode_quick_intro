const mainLoop = initFunctions => {
  initFunctions.forEach(initFunction => {
    initFunction();
  });
}

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

mainLoop(initFunctions);