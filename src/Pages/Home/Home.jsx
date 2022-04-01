import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import './Home.css'
import { useState } from "react";
import logo from "../../img/logo.svg"
import { Button } from "@mui/material";
import TabPanel from "../../components/Tabs/Tabs";
import MyAds from "../../components/MyAds/MyAds";
import LastAds from "../../components/LastAds/LastAds";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#969696',
    },
  },
});

export default function Home() {
    useTitle('Главная');
    const tabs = {
        'Последние объявления':  <LastAds />,
        'Мои объявления': <MyAds />
    }
    return (
        <>
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <header>
                    <img src={logo}></img>
                    <Button sx={{ color: 'white', }} color="secondary" className="header__button" variant="contained">Выйти</Button>
                </header>
                <section className="catalog">
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <div className="catalog-ads">
                            <TabPanel tabs={tabs} />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className="catalog-interactive">
                                <Button sx={{ color: 'white', }} color="secondary" variant="contained" className="catalog-interactive__button">Добавить объявление</Button>
                                <div className="catalog-interactive-filter"></div>
                            </div>
                        </Grid>
                    </Grid>
                </section>
            </div>
        </ThemeProvider>
        </>
    );
}