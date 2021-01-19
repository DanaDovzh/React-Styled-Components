import { FormControlLabel, Checkbox } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Input from '../ParstForPage/Input';
import ButtonSubmit from '../ParstForPage/ButtonSubmit';
import ButtonText from '../ParstForPage/ButtonText';
import Heading from '../ParstForPage/Heading';
import {REGEX_PASSWORD, validatorEmail, validatorPassword } from '../validator/validators';

import '../sign.sass';
import './sign-in.sass';

const MESSAGE_FOR_FILL = 'Fill this field';

function SignIn() {
    
    const infoUser = JSON.parse(localStorage.getItem('user'));
    const [confirmEmail, setConfirmEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const schema = yup.object().shape({
        email:
            yup.string()
                .required(MESSAGE_FOR_FILL)
                .oneOf([confirmEmail], 'Password or e-mail do not match'),
        password:
            yup.string()
                .required(MESSAGE_FOR_FILL)
                .matches(REGEX_PASSWORD, 'Bad password')
                .matches([confirmPassword], 'Password or e-mail do not match')

    });
    const { register, handleSubmit, errors, watch } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    const isRemember = watch('Remember');
    const [present, setPresent] = useState(false);

    const inputRemember = JSON.parse(localStorage.getItem('remembered'));

    const onSubmit = (data) => {
        (isRemember) ?
            localStorage.setItem('remembered', JSON.stringify({ data }))
            : localStorage.removeItem('remembered')
        console.log(data);
        setPresent(true);
    }
    
      return (
        <>
            {present && <Confetti />}
            <div className='sign'>
                <Heading>Sign In</Heading>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        ref={register}
                        id='email'
                        type='email'
                        label='E-mail'
                        name='email'
                        required
                        onChange={(e) => { validatorEmail(e); setConfirmEmail(infoUser ? infoUser.data.email : '')}}
                        defaultValue={inputRemember ? inputRemember.data.email : ''}
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                    />
                    <Input
                        ref={register}
                        id='password'
                        type='password'
                        label='Password'
                        name='password'
                        onChange={(e) => {validatorPassword(e);  setConfirmPassword(infoUser ? infoUser.data.password : '')}}
                        defaultValue={inputRemember ? inputRemember.data.password : ''}
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                    <FormControlLabel control={
                        <Checkbox
                            inputRef={register}
                            name='Remember'
                            color="primary"
                        />
                    } label="Remember me" />
                    <ButtonSubmit>Sign In</ButtonSubmit>
                </form>
                <div className='btn-text'>
                    <ButtonText>Forgot password?</ButtonText>
                    <ButtonText><Link to='/signUp'>Don't have an account? Sign up</Link> </ButtonText>
                </div>
            </div>
        </>
    )
}

export default SignIn;