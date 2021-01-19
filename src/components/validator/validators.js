const REGEX_EMAIL = /^[0-9a-zA-Z]{3,}[@]{1}[a-z]{2,}[.]{1}[a-z]{2,}$/i;
const REGEX_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
const REGULAR_NOT_NUMBER = /^([^0-9]*)$/;

const changeBorder = (valueInput, validator) => {
    const currentBlock = document.querySelector('.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline')
    currentBlock.style.border = valueInput ? `1px solid ${validator ? 'green' : 'red'}` : `1px solid rgba(182, 186, 188, 1)`;
}
const validatorNames = (e) => {
    const valueInput = e.target.value;
    const validator = (valueInput.match(REGULAR_NOT_NUMBER)
        && (valueInput.length >= 3)
        ? true : false);
    changeBorder(valueInput, validator);
}

const validatorEmail = (e) => {
    const valueInput = e.target.value;
    console.log(valueInput)
    const validator = (valueInput.match(REGEX_EMAIL) ? true : false);
    changeBorder(valueInput, validator);
}

const validatorPassword = (e) => {
    const valueInput = e.target.value;
    const validator = (valueInput.match(REGEX_PASSWORD) ? true : false);
    changeBorder(valueInput, validator);
}

export { REGULAR_NOT_NUMBER, REGEX_PASSWORD, validatorNames, validatorEmail, validatorPassword }