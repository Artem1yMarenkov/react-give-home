import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import SignUpForm from "../../components/Forms/SignUpForm";
import SingInForm from "../../components/Forms/SignInForm";
import Loading from "../../components/Loading/Loading";

import useTitle from "../../hooks/useTitle";

import './Auth.scss';
import authImage from "../../img/auth-image.png"
import logo from '../../img/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors";
import { CHECK_AUTH } from "../../redux/actions/auth";


export default function Auth() {
    useTitle('Авторизация');
    const auth = useSelector(getAuth);
    const dispatch = useDispatch();

    const [activeForm, setActiveForm] = useState('singup');
    const [isLoading, setIsLoading] = useState(false);

    const [query] = useSearchParams();
    const navigate = useNavigate();
    
    // Check Auth
    useEffect(() => {
        auth.token && navigate('/');
    }, [auth]);

    // Check Query Serch
    useEffect(() => {
        query.get('type') && setActiveForm(query.get('type')) 
    }, [query]);


    const forms = {
        'singup': <SignUpForm onLoading={setIsLoading}/>,
        'singin': <SingInForm />
    }

    return (
        <section className="auth">
            <Loading isActive={isLoading} />
            <div 
                className="auth__image" 
                style={ {backgroundImage: `url(${authImage})`}} 
            />
            <div className="auth__form">
                <img 
                    className="auth__form__logo" 
                    src={logo}
                    alt="#"
                />
                <p className="text-pr">Помогаем Вам найти новых друзей</p>
                { forms[activeForm] }
                {   activeForm === 'singup'
                        ? <p>Уже есть аккаунт? <Link to="?type=singin">Войти</Link></p>
                        : <p>Нет аккаунта? <Link to="?type=singup">Зарегистрироваться</Link></p>
                }
            </div>
        </section>
    );
}