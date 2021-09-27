// CIPHRE
const btnClean = document.querySelector('.js-btn-clean');
const btnCopy = document.querySelector('.js-btn-copy');
const txtAreaOriginal = document.querySelector('.js-original-txt-area');
const txtAreaCiphre = document.querySelector('.js-ciphred-txt-area');
const selectRot = document.querySelector('.js-select-rot');

if(btnClean){
  btnClean.addEventListener('click', function(){
    txtAreaOriginal.value = "";
  });
}

if(btnCopy){
  btnCopy.addEventListener('click', function(){
    txtAreaCiphre.select();
    txtAreaCiphre.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtAreaCiphre.value);
  });
}

if(txtAreaOriginal){
  txtAreaOriginal.addEventListener('keyup', function(){
    txtAreaCiphre.value = cipher();
  });  
}

function cipher() {  
  const myString = txtAreaOriginal.value.toUpperCase();;
  const addition = Number(selectRot.value);
  const myArr = [];
  let result = "";
  const min = 64;
  const max = 91;

  for (let i = 0; i < myString.length; i++) {
    if (myString.charCodeAt(i) > min && myString.charCodeAt(i) < max && myString.charCodeAt(i) + addition < max) {
      myArr.push(myString.charCodeAt(i) + addition);
    } else if (myString.charCodeAt(i) + addition >= max) {
      myArr.push(min + myString.charCodeAt(i) + addition - 90);
    } else {
      myArr.push(myString.charCodeAt(i));
    }
  }

  for (let i = 0; i < myArr.length; i++) {
    result += String.fromCharCode((myArr[i])).toLowerCase();
  }
  return result;
}

// DECIPHER
const decBtnClean = document.querySelector('.js-dec-btn-clean');
const decBtnCopy = document.querySelector('.js-dec-btn-copy');
const txtAreaCiphered = document.querySelector('.js-ciphered-txt-area');
const txtAreaDeciphered = document.querySelector('.js-deciphered-txt-area');

if(decBtnClean){
  decBtnClean.addEventListener('click', function(){
    txtAreaCiphered.value = "";
  });
}

if(decBtnCopy){
  decBtnCopy.addEventListener('click', function(){
    txtAreaDeciphered.select();
    txtAreaDeciphered.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(txtAreaDeciphered.value);
  });
}

if(txtAreaCiphered){
  txtAreaCiphered.addEventListener('keyup', function(){
    txtAreaDeciphered.value = decipher();
  });  
}

function decipher(){
  const myString = txtAreaCiphered.value.toUpperCase();
  // FREE LOVE?
  const deduction = Number(selectRot.value);
  const myArr = [];
  let result = "";
  const min = 64;
  const max = 91;

  for (let i = 0; i < myString.length; i++) {
    if (myString.charCodeAt(i) > min && myString.charCodeAt(i) < max && myString.charCodeAt(i) - deduction > min) {
      myArr.push(myString.charCodeAt(i) - deduction);
    } else if(myString.charCodeAt(i) <= min)   {
      myArr.push(myString.charCodeAt(i));
    } else if (myString.charCodeAt(i) - deduction <= min) {
      myArr.push(max + myString.charCodeAt(i) - deduction - min - 1);
    }
  }

  for (let i = 0; i < myArr.length; i++) {
    result += String.fromCharCode((myArr[i]));
  }
  console.log(result);
  return result.toLowerCase();  
}


