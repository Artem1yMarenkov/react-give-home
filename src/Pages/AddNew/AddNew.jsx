import logo from '../../../src/img/logo.svg'
import './AddNew.css'
import actionCreator from '../../redux/actions'
import { ADD_ANIMAL } from '../../redux/actions/AddAnimal'
import { useDispatch } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { ERRORS_VALIDATE } from '../../vars/errorsValidate'
import { fetching } from '../../fetching'

export default function AddNew() {
  const dispatch = useDispatch()

  const name = useInput('', { isEmpty: true, minLength: 1 })
  const description = useInput('', { isEmpty: true, minLength: 1 })
  const phone = useInput('', { isEmpty: true, minLength: 1 })
  const email = useInput('', { isEmpty: true, minLength: 1, isEmail: true })

  function handlerSubmit(e) {
    e.preventDefault()
    const animal = { title: name.value, description: description.value, phone: phone.value, address: email.value }
    console.log(animal)
    const action = actionCreator(ADD_ANIMAL)(animal)
    dispatch(action)
    fetching(action)
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

          <form className="wrapper__description" onSubmit={(e) => handlerSubmit(e)}>
            <div className="wrapper__div2">О животном</div>
            <div className="wrapper__div3">Название / имя / кличка животного</div>
            {name.isDirty && name.isEmpty && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
            {name.isDirty && name.minLengthError && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
            <input
              onChange={(e) => name.onChange(e)}
              onBlur={(e) => name.onBlur(e)}
              value={name.value}
              name="name"
              type="text"
              className="wrapper__div4"
              placeholder="Введите что-то там"
            />
            <div className="wrapper__div5">Пару слов туда-сюда сделай</div>
            {description.isDirty && description.isEmpty && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
            {description.isDirty && description.minLengthError && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
            <textarea
              onChange={(e) => description.onChange(e)}
              onBlur={(e) => description.onBlur(e)}
              value={description.value}
              name="description"
              type="text"
              className="wrapper__div6"
              placeholder="Введите что-то там"
            />
            <div className="wrapper__div7">Контактная информация</div>
            <div className="wrapper__div5">Номер телефона</div>
            {phone.isDirty && phone.isEmpty && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
            {phone.isDirty && phone.minLengthError && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
            <input
              onChange={(e) => phone.onChange(e)}
              onBlur={(e) => phone.onBlur(e)}
              value={phone.value}
              name="phone"
              type="number"
              className="wrapper__div4"
              placeholder="Введите что-то там"
            />
            <div className="wrapper__div5">Адрес электронной почты</div>
            {email.isDirty && email.isEmpty && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
            {email.isDirty && email.minLengthError && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
            {email.isDirty && email.emailError && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.EMAIL}</div>}
            <input
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
              value={email.value}
              name="email"
              type="email"
              className="wrapper__div4"
              placeholder="Введите что-то там"
            />
            <div className="wrapper__div8">
              {(!name.inputValid || !description.inputValid || !phone.inputValid || !email.inputValid) &&
                email.isDirty &&
                phone.isDirty &&
                description.isDirty &&
                name.isDirty && <div style={{ color: 'red' }}>{ERRORS_VALIDATE.ALL}</div>}
              <button disabled={!name.inputValid || !description.inputValid || !phone.inputValid || !email.inputValid} className="wrapper__button-save">
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
