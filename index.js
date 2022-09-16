const dobInput = document.querySelector('#date-of-birth');
const luckyNumInput = document.querySelector('#lucky-number');
const checkBtn = document.querySelector('.check-btn');
const resultField = document.querySelector('.output-result');

const calculateSum = num => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + Number(num.charAt(i));
  }
  return sum;
};

const checkLucky = (sum, luckyNum) => {
  return sum % luckyNum == 0 ? true : false;
};

const onCheckBtnClick = () => {
  const dob = dobInput.value.replaceAll('-', '');
  const sum = calculateSum(dob);
  const isLucky = checkLucky(sum, luckyNumInput.value);
  resultField.innerText = isLucky
    ? 'Yes! its lucky 😎🎉'
    : 'Oops! its unlucky 😅';
};

checkBtn.addEventListener('click', onCheckBtnClick);
