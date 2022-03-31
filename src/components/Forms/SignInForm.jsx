import { useState } from "react";

import { Button, TextField } from "@mui/material";
import validator from 'validator';

import './Form.scss';

export default function SignInForm() {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit')
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        let valid;
        switch (name) {
            case 'login':
                valid = validator.isLength(value, {min: 3, max: 100});
                break;
            case 'mail':
                valid = validator.isEmail(value);
                break;
            case 'password':
                valid = validator.isLength(value, {min: 3, max: 100});
                break;
            default:
                break;
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__header">Войти</h2>
            <TextField 
                className="form__input"
                label="Логин" 
                name="login"
                variant="outlined"
                onChange={handleChange}
            />
            <TextField 
                className="form__input"
                label="Пароль" 
                variant="outlined" 
                name="password"
                type="password"
                onChange={handleChange}
            />
            <Button 
                variant="outlined"
            >Войти</Button>
        </form>
    );
}