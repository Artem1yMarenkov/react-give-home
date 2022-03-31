import { useState } from "react";
import Input from "../Input/Input";
import validator from 'validator';
import { Button } from "@mui/material";

import './Form.scss';
import userIcon from '../../img/user.svg';
import mailIcon from '../../img/mail.svg';
import lockIcon from '../../img/lock.svg';

export default function SignUpForm({onLoading}) {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("error");
    // const [readyToSend, setReadyToSend] = useState(false);
    
    const validate = () => {
        if (validator.isEmpty(login, {min: 3, max: 100})) {
            return setError("login");
        }
        
        if (!validator.isEmail(email)) {
            return setError("email");
        }
        
        if (validator.isEmpty(password, {min: 8, max: 20})) {
            return setError("password");
        }

        return setError(null);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validate();

        !error && sendData();
    }

    const sendData = data => {
        onLoading(true);
        setTimeout(() => {
            onLoading(false);
        }, 1000);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        switch (name) {
            case 'login':
                return setLogin(value);
            case 'email': 
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                break;
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit} >
            <h2 className="form__header">Регистрация</h2>
            <Input 
                img={userIcon} 
                placeholder="Логин" 
                onChange={handleChange}
                name="login"
            />
            { error == "login" && <p className="form__danger">Длина логина должна быть от 3 до 100 символов</p> }
            <Input 
                img={mailIcon} 
                placeholder="Почта" 
                onChange={handleChange}
                name="email"
            />
            { error == "email" && <p className="form__danger">Введите почту</p> }
            <Input 
                img={lockIcon} 
                placeholder="Пароль" 
                onChange={handleChange}
                name="password"
                type="password"
            />
            { error == "password" && <p className="form__danger">Длина пароля должна быть от 8 до 20 символов</p> }
            <Button 
                variant="outlined"
            >Зарегистрироваться</Button>
        </form>
    );
}