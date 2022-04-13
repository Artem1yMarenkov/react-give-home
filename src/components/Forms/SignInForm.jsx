import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import './Form.scss';
import { useDispatch } from "react-redux";
import { signinAction } from "../../redux/thunk/auth/signin";
import useValidate from "../../hooks/useVlidate";

export default function SignInForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("error");

    const validate = useValidate(setError);

    /* TODO: REWRITE TO REDUX */
    const sendData = () => {
        dispatch(signinAction({email, password}));
    };
    
    useEffect(() => {
        !error && sendData();
    }, [error]);

    // Event Handlers
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        validate({email, password});
        console.log('test')
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__header">Войти</h2>
            <TextField 
                className="form__input"
                label="Почта" 
                name="email"
                variant="outlined"
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
            >Войти</Button>
        </form>
    );
}