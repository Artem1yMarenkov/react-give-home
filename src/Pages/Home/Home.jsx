import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import './Home.css'
import { useState } from "react";
import logo from "../../img/logo.svg"
import { Button } from "@mui/material";
import TabPanel from "../../components/Tabs/Tabs";
import MyAds from "../../components/MyAds/MyAds";
import LastAds from "../../components/LastAds/LastAds";

export default function Home() {
    useTitle('Главная');
    const tabs = {
        'Последние объявления':  <MyAds />,
        'Мои объявления': <LastAds />
    }
    return (
        <>
            <div className="wrapper">
                <header>
                    <img src={logo}></img>
                    <Button className="header__button" variant="contained">Выйти</Button>
                </header>
                <section>
                    <div className="catalog-ads">
                    <TabPanel tabs={tabs} />
                    </div>
                    <div className="catalog-interactive">
                        <Button className="catalog-interactive__button">Добавить объявление</Button>
                        <div className="catalog-interactive-filter"></div>
                    </div>
                </section>
            </div>
        </>
    );
}