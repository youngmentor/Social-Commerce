// import React from 'react'
import "./ForgetPassword.css"
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '../../SCHEMA/schema';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Forminput } from '../../TYPE/type.check';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { forgetPassword } from '../../API/mutation';

const ForgetPassword = () => {
    const navigate = useNavigate()
    const { control, handleSubmit, formState: { errors }, reset } = useForm<Forminput>({
        defaultValues: {
            email: "",
        },
        resolver: yupResolver<any>(forgotPasswordSchema),
    });
    const onSubmit: SubmitHandler<Forminput> = (data) => {
        console.log(data);
        reset();
    };
    const { } = useMutation(["forgetpassword"], forgetPassword, {
        onSuccess: () => {

        },
        onError: () => {

        },
    })
    return (
        <div className='ForgetPasswordMain'>
            <h1>Social  Commerce</h1>
            <div className='ForgetPasswordWrap'>
                <h3>Forget Password</h3>
                <hr className='ForgetPasswordGreyLine' />
                <div className='ForgetPasswordText'>
                    <p>
                        Please enter your email address or mobile number to search for your account.
                    </p>
                </div>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <input
                            type="text"
                            {...field}
                            className='ForgetPasswordInputs'
                            placeholder="Enter your email address or mobile number "
                        />
                    )}
                    name='email'
                />
                {errors.email && <p style={{ color: "red" }}>{errors?.email?.message}</p>}
                <button className='ForgetPasswordButton' onClick={handleSubmit(onSubmit)}>Submit</button>
                <div className='ForgetPasswordBackToLogin'>
                    <button className='ForgetPasswordBackToLoginButton' onClick={() => navigate('/')} >Back login </button>
                </div>
            </div>

        </div>
    )
}

export default ForgetPassword