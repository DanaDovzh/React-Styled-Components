import * as yup from 'yup';
const MESSAGE_FOR_FILL = 'Fill this field';
const userInfo = JSON.parse(localStorage.getItem('user'));

const confirmPassword = userInfo ? userInfo.data.password : '';
console.log(confirmPassword);

const schema = yup.object().shape({
    email:
        yup.string()
            .required(MESSAGE_FOR_FILL),
    password:
        yup.string()
            .required(MESSAGE_FOR_FILL)
            .oneOf([confirmPassword], 'Password must match')

});

export default schema;