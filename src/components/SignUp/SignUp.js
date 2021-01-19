import { FormControlLabel, Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';

import Input from '../ParstForPage/Input';
import { validatorNames, validatorEmail, validatorPassword } from '../validator/validators';
import schema from './schema';
import ButtonSubmit from '../ParstForPage/ButtonSubmit';
import ButtonText from '../ParstForPage/ButtonText';
import Heading from '../ParstForPage/Heading';

import '../sign.sass';
import './sign-up.sass';

function SignUp() {
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        localStorage.setItem('user', JSON.stringify({ data }));
        history.push('./signIn');
    }

    return (
        <div className='sign'>
            <Heading>Sign Up</Heading>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div className='form__names'>
                    <Input
                        ref={register}
                        id='firstName'
                        label='First Name'
                        name='firstName'
                        required
                        onChange={e => validatorNames(e)}
                        error={!!errors.firstName}
                        helperText={errors?.firstName?.message}
                    />
                    <Input
                        ref={register}
                        id='lastName'
                        label='Last Name'
                        name='lastName'
                        required
                        onChange={e => validatorNames(e)}
                        error={!!errors.lastName}
                        helperText={errors?.lastName?.message}
                    />
                </div>
                <Input
                    ref={register}
                    id='email'
                    type='email'
                    label='E-mail'
                    name='email'
                    required
                    onChange={e => validatorEmail(e)}
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
                    required
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            value="allowExtraEmails"
                            color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
                <ButtonSubmit>Sign Up</ButtonSubmit>
            </form>
            <div>
                <ButtonText><Link to='/signIn'>Already have an account? Sign In</Link></ButtonText>
            </div>
        </div>
    )
}

export default SignUp;