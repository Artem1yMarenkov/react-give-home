import useTitle from '../../hooks/useTitle'
import './Home.css'
import { useState } from 'react'
import logo from '../../img/logo.svg'
import { Button } from '@mui/material'
import TabPanel from '../../components/Tabs/Tabs'
import MyAds from '../../components/MyAds/MyAds'
import LastAds from '../../components/LastAds/LastAds'

export default function Home() {
  useTitle('Главная')
  const tabs = {
    'Последние объявления': <LastAds />,
    'Мои объявления': <MyAds />,
  }
  return (
    <div className="wrapper">
      <header>
        <img src={logo}></img>
        <button className="header__button">Выйти</button>
      </header>
      <section className="catalog">
        <div className="catalog-ads">
          <TabPanel tabs={tabs} />
        </div>
        <div className="catalog-interactive">
          <button className="catalog-interactive__button">Добавить объявление</button>
          <div className="catalog-interactive-filter"></div>
        </div>
      </section>
    </div>
  )
}
