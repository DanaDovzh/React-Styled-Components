import * as yup from 'yup';
const MESSAGE_FOR_FILL = 'Fill this field';
const userInfo = JSON.parse(localStorage.getItem('user'));

const schema = yup.object().shape({
    email:
        yup.string()
            .required(MESSAGE_FOR_FILL),
    password:
        yup.string()
            .required(MESSAGE_FOR_FILL)
            .oneOf([userInfo.data.password, null], 'Password must match')

});

export default schema;