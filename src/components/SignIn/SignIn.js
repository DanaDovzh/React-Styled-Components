import React, { useState, useEffect } from 'react';
import '../sign.sass';
import './sign-in.sass';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Input from '../ParstForPage/Input';
import ButtonSubmit from '../ParstForPage/ButtonSubmit';
import ButtonText from '../ParstForPage/ButtonText';
import Heading from '../ParstForPage/Heading';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validatorEmail, validatorPassword } from '../validator/validators';
import schema from './schema';
import Confetti from 'react-confetti'
function SignIn() {
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
                    onChange={e => validatorEmail(e)}
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
                    onChange={e => validatorPassword(e)}
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