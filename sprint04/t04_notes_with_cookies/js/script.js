const addPlaceholder = (block) => {
  const textInput = document.createElement('p');
  textInput.innerHTML = `[Emptu]`;

  block.appendChild(textInput);
};

const createTxtBlock = (text) => {
  if (text === '') {
    return;
  }
  const textBlock = document.getElementById('block__text');
  const textInput = document.createElement('p');
  textInput.className = 'textInput';
  textInput.innerHTML = `-> ${text}`;

  textBlock.appendChild(textInput);
  if (textBlock.firstChild.innerHTML === '[Empty]') {
    textBlock.removeChild(textBlock.firstChild);
  }
  document.getElementById('txt').value = '';
};

const addCookes = () => {
  const textOutInput = document.getElementById('txt').value;
  if (textOutInput === '') {
    alert('Enter some text');
    return;
  }
  createTxtBlock(textOutInput);
  document.cookie = textOutInput + '=-> ' + textOutInput;
};
const deleteCock = () => {
  const child = document.getElementById('block__text');
  const a = document.cookie.split(' ');

  const b = a
    .map((val, i) => (!(i % 2 === 0) && val !== null ? val : ''))
    .filter((val) => val !== '');
  const c = b.map((val, i) =>
    i !== b.length - 1
      ? (document.cookie =
          val.slice(0, -1) + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;')
      : (document.cookie = val + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;')
  );
  console.log(c);
  while (child.firstChild) {
    child.removeChild(child.firstChild);
  }
};

const play = () =>
  document.cookie
    .split(' ')
    .map((val, i) =>
      !(i % 2 === 0) && val !== null ? createTxtBlock(val) : ''
    );
play();
const isEmptu = document.getElementById('block__text');
if (!isEmptu.children.length) {
  addPlaceholder(isEmptu);
}
