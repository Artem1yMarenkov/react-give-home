import { ClassNames } from '@emotion/react';
import logo from '../../../src/img/logo.svg'
import './AddNew.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";

const theme = createTheme({
    palette: {
      secondary: {
        main: '#969696',
      },
    },
  });

export default function AddNew() {
    return (
        <>
        <ThemeProvider theme={theme}>
        <div className="wrapper">
        <header>
            <img src={logo}></img>
            <button color="secondary" className="header__button" variant="outlined">Выйти</button>
        </header>
        <div className='wrapper__div'>Добавление записи</div>
        <div className='wrapper__main'>
            
                
            <input className='wrapper__photo' placeholder='Загрузить фото из UI либы'></input>
                
            
            <div className='wrapper__description'>
            <div className='wrapper__div2'>О животном</div>
            <div className='wrapper__div3'>Название / имя / кличка животного</div>
            <input className='wrapper__div4' placeholder='Введите что-то там'></input>
            <div className='wrapper__div5'>Пару слов туда-сюда сделай</div>
            <input className='wrapper__div6' placeholder='Введите что-то там'></input>
            <div className='wrapper__div7'>Контактная информация</div>
            <div className='wrapper__div5'>Номер телефона</div>
            <input className='wrapper__div4' placeholder='Введите что-то там'></input>
            <div className='wrapper__div5'>Адрес электронной почты</div>
            <input className='wrapper__div4' placeholder='Введите что-то там'></input>
            <button className='wrapper__button-save'>Сохранить</button>
            </div>
        </div>
        
        </div>
        </ThemeProvider>
        </>
    );
}