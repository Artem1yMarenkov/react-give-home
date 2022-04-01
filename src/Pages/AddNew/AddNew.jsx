import { ClassNames } from '@emotion/react';
import logo from '../../../src/img/logo.svg'
import './AddNew.css'

export default function AddNew() {
    return (
        <>
        <div className='wrapper__header'>
            <img className='img' src={logo} alt={'logo'}></img>
            <button className='wrapper__button-quit'>Выйти</button>
        </div>
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
        
        
       
        </>
    );
}