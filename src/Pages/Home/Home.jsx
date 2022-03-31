import useTitle from "../../hooks/useTitle";
import './Home.css'
import logo from "../../img/logo.svg"
import { Button } from "@mui/material";
export default function Home() {
    useTitle('Главная');
    return (
        <>
            <div className="wrapper">
                <header>
                    <img src={logo}></img>
                    <Button className="header__button" variant="contained">Выйти</Button>
                </header>
            </div>
        </>
    );
}