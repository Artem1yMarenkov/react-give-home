import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors";
import logo from '../../img/logo.svg';
import { logout } from "../../redux/slices/auth";

export default function Header() {
    const auth = useSelector(getAuth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            { auth.token &&
                <header className="wrapper">
                    <Link to='/'><img src={logo} alt=""></img></Link>
                    <button className="header__button" onClick={handleLogout}>Выйти</button>
                </header>
            }
        </>
    );
}