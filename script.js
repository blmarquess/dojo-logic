const input1 = document.querySelector('#numb1');
const input2 = document.querySelector('#numb2');
const resultLoc = document.querySelector('.display');

function getInput1() {
  const num1 = parseInt(input1.value);
  return num1;
}

function getInput2() {
  const num2 = parseInt(input2.value);
  return num2;
}

const opSoma = document.querySelector('.soma');
opSoma.addEventListener('click', () => {
  const nu1 = getInput1();  const nu2 = getInput2();
  const rest = nu1 + nu2; resultLoc.innerHTML = rest;
});

const opSubit = document.querySelector('.subtraction');
opSubit.addEventListener('click', () => {
  const nu1 = getInput1();  const nu2 = getInput2();
  const rest = nu1 - nu2; resultLoc.innerHTML = rest;
});

const opMult = document.querySelector('.multiplic');
opMult.addEventListener('click', () => {
  const nu1 = getInput1();  const nu2 = getInput2();
  const rest = nu1 * nu2; resultLoc.innerHTML = rest;
});


const opDivis = document.querySelector('.division');
opDivis.addEventListener('click', () => {
  const nu1 = getInput1();  const nu2 = getInput2();
  const rest = nu1 / nu2; resultLoc.innerHTML = rest;
});
