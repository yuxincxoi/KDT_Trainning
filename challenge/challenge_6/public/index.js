const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민",
];

const name = document.getElementById("name");
const nameValidation = document.getElementById("nameValidation");
const password = document.getElementById("password");
const passwordValidation = document.getElementById("passwordValidation");
const passwordCheck = document.getElementById("passwordCheck");
const passwordCheckValidation = document.getElementById(
  "passwordCheckValidation"
);
const email = document.getElementById("email");
const emailValidation = document.getElementById("emailValidation");
const phoneNum = document.getElementById("phoneNum");
const phoneNumValidation = document.getElementById("phoneNumValidation");
const checkAllValidation = document.getElementById("checkAllValidation");

name.addEventListener("change", () => {
  Name(name);
  checkValidation();
});
password.addEventListener("change", () => {
  Password(password);
  checkValidation();
});
passwordCheck.addEventListener("change", () => {
  PasswordCheck(passwordCheck);
  checkValidation();
});
email.addEventListener("change", () => {
  Email(email);
  checkValidation();
});
phoneNum.addEventListener("change", () => {
  PhoneNum(phoneNum);
  checkValidation();
});

// 이름
function Name(name) {
  let a;
  for (let i = 0; i < names.length; i++) {
    if (name.value === names[i]) {
      a = true;
    }
  }
  if (a === true) {
    nameValidation.style.backgroundColor = "#4AFF51";
    return true;
  } else {
    nameValidation.style.backgroundColor = "#ff4a4a";
    return false;
  }
}

// 비밀번호
function Password(password) {
  if (!(password.value === "") && !isNaN(Number(password.value.slice(-4)))) {
    passwordValidation.style.backgroundColor = "#4AFF51";
    return true;
  } else {
    passwordValidation.style.backgroundColor = "#ff4a4a";
    return false;
  }
}

// 비밀번호 확인
function PasswordCheck(passwordCheck) {
  if (!(password.value === "") && passwordCheck.value === password.value) {
    passwordCheckValidation.style.backgroundColor = "#4AFF51";
    return true;
  } else {
    passwordCheckValidation.style.backgroundColor = "#ff4a4a";
    return false;
  }
}

// 이메일
function Email(email) {
  if (email.value.indexOf("@") > 0) {
    emailValidation.style.backgroundColor = "#4AFF51";
    return true;
  } else {
    emailValidation.style.backgroundColor = "#ff4a4a";
    return false;
  }
}

// 핸드폰 번호
function PhoneNum(phoneNum) {
  if (
    (phoneNum.value.indexOf("-") === 2 || phoneNum.value.indexOf("-") === 3) &&
    phoneNum.value.slice(-5).indexOf("-") === 0 &&
    phoneNum.value.length >= 11 &&
    phoneNum.value.length <= 13
  ) {
    phoneNumValidation.style.backgroundColor = "#4AFF51";
    return true;
  } else {
    phoneNumValidation.style.backgroundColor = "#ff4a4a";
    return false;
  }
}

function checkValidation() {
  let array = [
    Name(name),
    Password(password),
    PasswordCheck(passwordCheck),
    Email(email),
    PhoneNum(phoneNum),
  ];
  if (
    array[0] === true &&
    array[1] === true &&
    array[2] === true &&
    array[3] === true &&
    array[4] === true
  ) {
    checkAllValidation.innerText = "모든 입력란이 유효합니다.";
    checkAllValidation.style.backgroundColor = "#4AFF51";
  }
}
