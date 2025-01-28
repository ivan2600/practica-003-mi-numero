const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const input3 = document.getElementById('num3');
const input4 = document.getElementById('num4');
const input5 = document.getElementById('num5');
const input6 = document.getElementById('num6');
const input7 = document.getElementById('num7');
const input8 = document.getElementById('num8');
const btnMiNum = document.querySelector(".btn-minum");
const numeroFinal = document.querySelector(".numero-final");

btnMiNum.addEventListener('click', () => {
  const num1 = parseInt(input1.value);
  const num2 = parseInt(input2.value);
  const num3 = parseInt(input3.value);
  const num4 = parseInt(input4.value);
  const num5 = parseInt(input5.value);
  const num6 = parseInt(input6.value);
  const num7 = parseInt(input7.value);
  const num8 = parseInt(input8.value);
  const result = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8;
  numeroFinal.textContent = result;
});
