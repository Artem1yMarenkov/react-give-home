import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import validator from 'validator';

import './Form.scss';
import userIcon from '../../img/user.svg';
import mailIcon from '../../img/mail.svg';
import lockIcon from '../../img/lock.svg';

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
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__header">Войти</h2>
            <Input 
                img={userIcon} 
                placeholder="Логин" 
                onChange={handleChange}
                name="login"
            />
            <Input 
                img={lockIcon} 
                placeholder="Пароль" 
                onChange={handleChange}
                name="password"
                type="password"
            />
            <Button value="Зарегистрироваться"/>
        </form>
    );
}