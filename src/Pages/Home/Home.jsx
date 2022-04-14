import useTitle from '../../hooks/useTitle'
import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
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
          <Link to='/addnew'><button className="catalog-interactive__button">Добавить объявление</button></Link>
          <div className="catalog-interactive-filter"></div>
        </div>
      </section>
    </div>
  )
}
