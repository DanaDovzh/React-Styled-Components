import {REGULAR_NOT_NUMBER} from '../validator/validators';
import * as yup from 'yup';

const MESSAGE_FOR_FILL = 'Fill this field';

const schema = yup.object().shape({
    firstName:
        yup.string()
            .matches(REGULAR_NOT_NUMBER, 'First name should be without numbers')
            .required(MESSAGE_FOR_FILL)
            .min(3, "At least 3 characters"),
    lastName:
        yup.string()
            .matches(REGULAR_NOT_NUMBER, 'Last name should be without numbers')
            .required(MESSAGE_FOR_FILL)
            .min(3, "At least 3 characters"),
    email:
        yup.string()
            .required(MESSAGE_FOR_FILL),
    password:
        yup.string()
            .required(MESSAGE_FOR_FILL)

});


export default schema;