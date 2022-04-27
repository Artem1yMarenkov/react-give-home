import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";

import { signupAction } from "../../redux/thunk/auth/signup";

import useValidate from "../../hooks/useVlidate";

import './Form.scss';

import signup from "../../redux/thunk/auth/signup";

export default function SignUpForm({onLoading}) {
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("error");

    const validate = useValidate(setError);

    /* TODO: REWRITE TO REDUX */
    const sendData = () => {
        dispatch(signup({login, email, password}));
    };
    
    useEffect(() => {
        !error && sendData();
    }, [error]);

    // Event Handlers
    const handleLogin = e => setLogin(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        validate({login, email, password});
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