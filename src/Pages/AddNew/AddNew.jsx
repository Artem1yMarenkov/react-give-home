import logo from '../../../src/img/logo.svg'
import './AddNew.css'

export default function AddNew() {
    return (
      <>
        <div className="wrapper">
            <header>
              <img src={logo}></img>
              <button className="wrapper__button-quit">Выйти</button>
            </header>
            <div className='wrapper__div'>Добавление записи</div>
              <div className='wrapper__main'>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <div className='wrapper__photo'>
                  <div class="example-1">
                    <div class="form-group">
                      <label class="label">
                        <div class="title">Загрузить фото (из UI либы)</div>
                        <input type="file"></input>
                      </label>
                    </div>
                  </div>
                </div>
                    
                <div className='wrapper__description'>
                  <div className='wrapper__div2'>О животном</div>
                  <div className='wrapper__div3'>Название / имя / кличка животного</div>
                  <input className='wrapper__div4' placeholder='Введите что-то там'></input>
                  <div className='wrapper__div5'>Пару слов туда-сюда сделай</div>
                  <textarea className='wrapper__div6' placeholder='Введите что-то там'></textarea>
                  <div className='wrapper__div7'>Контактная информация</div>
                  <div className='wrapper__div5'>Номер телефона</div>
                  <input className='wrapper__div4' placeholder='Введите что-то там'></input>
                  <div className='wrapper__div5'>Адрес электронной почты</div>
                  <input className='wrapper__div4' placeholder='Введите что-то там'></input>
                  <div >
                    <button className='wrapper__button-save'>Сохранить</button>
                  </div>
                </div>    
              </div>
        </div>
      </>
    );
}