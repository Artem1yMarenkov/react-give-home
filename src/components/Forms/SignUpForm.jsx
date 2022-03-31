import { useState } from "react";
import { Button, TextField } from "@mui/material";

import useValidate from "../../hooks/useVlidate";

import './Form.scss';

export default function SignUpForm({onLoading}) {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const validate = useValidate(setError);

    /* TODO: REWRITE TO REDUX */
    const sendData = data => {
        onLoading(true);
        setTimeout(() => onLoading(false), 1000);
    };

    // Event Handlers
    const handleLogin = e => setLogin(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        validate({login, email, password});
        console.log(error);

        !error && sendData();
    }

    return (
        <form className="form" onSubmit={handleSubmit} >
            <h2 className="form__header">Регистрация</h2>
            <TextField 
                className="form__input"
                label="Логин" 
                name="login"
                variant="outlined"
                onChange={handleLogin}
            />
            { error == "login" && <p className="form__danger">Длина логина должна быть от 3 до 100 символов</p> }
            <TextField 
                className="form__input"
                label="Почта" 
                variant="outlined" 
                name="email"
                onChange={handleEmail}
            />
            { error == "email" && <p className="form__danger">Введите почту</p> }
            <TextField 
                className="form__input"
                label="Пароль" 
                variant="outlined" 
                name="password"
                type="password"
                onChange={handlePassword}
            />
            { error == "password" && <p className="form__danger">Длина пароля должна быть от 8 до 20 символов</p> }
            <Button 
                variant="outlined"
                type="submit"
            >Зарегистрироваться</Button>
        </form>
    );
}