const passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector("button");
const copyBtn = document.querySelector("img");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]?></-=";
const allChars = upperCase + lowerCase + numbers + symbols;


generateBtn.addEventListener("click", () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordBox.value).then(() => {
        alert(`Password Copied: ${passwordBox.value}`);
    }).catch((err) => {
        alert('Failed to copy password: ', err);
    });
    
});