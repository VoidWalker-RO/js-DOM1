const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

function getNumbers() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    errorEl.textContent = 'Будь ласка, введіть коректні числа у обидва поля!';
    resultEl.textContent = '';
    return null;
  }

  errorEl.textContent = '';
  return [num1, num2];
}

document.getElementById('add').addEventListener('click', () => {
  const nums = getNumbers();
  if (!nums) return;
  const [a, b] = nums;
  resultEl.textContent = (a + b).toFixed(2);
});

document.getElementById('subtract').addEventListener('click', () => {
  const nums = getNumbers();
  if (!nums) return;
  const [a, b] = nums;
  resultEl.textContent = (a - b).toFixed(2);
});

document.getElementById('multiply').addEventListener('click', () => {
  const nums = getNumbers();
  if (!nums) return;
  const [a, b] = nums;
  resultEl.textContent = (a * b).toFixed(2);
});

document.getElementById('divide').addEventListener('click', () => {
  const nums = getNumbers();
  if (!nums) return;
  const [a, b] = nums;
  if (b === 0) {
    errorEl.textContent = 'Ділення на нуль неможливе!';
    resultEl.textContent = '';
    return;
  }
  resultEl.textContent = (a / b).toFixed(2);
});