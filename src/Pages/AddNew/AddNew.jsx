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
            
                <div className='wrapper__photo'>
                    <div className='wrapper__photo_input_text'>Загрузить фото из UI либы</div>
                </div>
            
            <div className='wrapper__description'>
            <div className='wrapper__div2'>О животном</div>
            <div className='wrapper__div3'>Название / имя / кличка животного</div>
            <div className='wrapper__div4'>Введите что-то там</div>
            <div className='wrapper__div5'>Пару слов туда-сюда сделай</div>
            <div className='wrapper__div6'>Введите что-то там</div>
            <div className='wrapper__div7'>Контактная информация</div>
            <div className='wrapper__div5'>Номер телефона</div>
            <div className='wrapper__div4'>Введите что-то там</div>
            <div className='wrapper__div5'>Адрес электронной почты</div>
            <div className='wrapper__div4'>Введите что-то там</div>
            <button className='wrapper__button-save'>Сохранить</button>
            </div>
        </div>
        
        
       
        </>
    );
}