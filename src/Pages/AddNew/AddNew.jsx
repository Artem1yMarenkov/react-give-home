import logo from '../../../src/img/logo.svg'
import './AddNew.css'
import { useState } from 'react'

export default function AddNew() {
  const [nameAnimal, setNameAnimal] = useState()
  const [descriptionAnimal, setDescriptionAnimal] = useState()
  const [telNumber, setTelNumber] = useState()
  const [mail, setMail] = useState()

  const animal_record = {
    name: nameAnimal,
    descripton: descriptionAnimal,
    telephone: telNumber,
    mail: mail,
  }

  console.log(animal_record)

  function set_name_animal(event) {
    event.preventDefault()
    setNameAnimal(event.target.children[0].value)
  }

  function set_description_animal(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault()
      setDescriptionAnimal(event.target.value)
    }
  }

  function set_tel_number(event) {
    event.preventDefault()
    setTelNumber(event.target.children[0].value)
  }

  function set_mail(event) {
    event.preventDefault()
    setMail(event.target.children[0].value)
  }

  return (
    <>
      <div className="wrapper">
        <header>
          <img src={logo} alt=""></img>
          <button className="wrapper__button-quit">Выйти</button>
        </header>
        <div className="wrapper__div">Добавление записи</div>
        <div className="wrapper__main">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <div className="wrapper__photo">
            <div className="example-1">
              <div className="frm-group">
                <label className="label">
                  <div className="title">Загрузить фото (из UI либы)</div>
                  <input type="file" />
                </label>
              </div>
            </div>
          </div>

          <div className="wrapper__description">
            <div className="wrapper__div2">О животном</div>
            <div className="wrapper__div3">Название / имя / кличка животного</div>
            <form onSubmit={set_name_animal}>
              <input className="wrapper__div4" placeholder="Введите что-то там" />
            </form>
            <div className="wrapper__div5">Пару слов туда-сюда сделай</div>
            <textarea className="wrapper__div6" placeholder="Введите что-то там" onKeyDown={set_description_animal} />
            <div className="wrapper__div7">Контактная информация</div>
            <div className="wrapper__div5">Номер телефона</div>
            <form onSubmit={set_tel_number}>
              <input className="wrapper__div4" placeholder="Введите что-то там" />
            </form>
            <div className="wrapper__div5">Адрес электронной почты</div>
            <form onSubmit={set_mail}>
              <input className="wrapper__div4" placeholder="Введите что-то там" />
            </form>
            <div>
              <button className="wrapper__button-save">Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
