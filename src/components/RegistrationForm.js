// import { useEffect, useRef, useState, useCallback } from "react"
import { useForm } from 'react-hook-form'

import Input from "./Input"
import Button from "./Button"

export default function RegistrationForm() {

    const { register, handleSubmit, formState: { errors, isValid,isSubmitting } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // console.log(errors.name.message);
        // console.log(errors.name.message);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="name"
                label="Name"
                type="text"
                register={register}
                constraints={{
                    required: 'Name is required',
                    minLength: {
                        value: 3,
                        message: 'Name should be atleast 3 characters long'
                    }
                }}
                error={errors.name}
            />
            <Input
                name="email"
                label="Email"
                type="email"
                register={register}
                constraints={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Invalid email address'
                    }
                }}
                error={errors.email}
            />
            <Input
                name="password"
                label="Password"
                type="password"
                register={register}
                constraints={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password should be atleast 6 characters long '
                    }
                }}
                error={errors.password}
            />
            
            <Button type="submit"
                disabled={!isValid || isSubmitting} 
                text="Register"
            />
        </form>
    )
}
