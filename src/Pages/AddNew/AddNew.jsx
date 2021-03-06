import './AddNew.css'
import {ADD_ANIMAL} from '../../redux/actions/AddAnimal'
import {useDispatch} from 'react-redux'
import {useInput} from '../../hooks/useInput'
import {ERRORS_VALIDATE} from '../../vars/errorsValidate'
import {fetching} from '../../fetching'
import {add_animal} from "../../redux/slices/AddNew";

export default function AddNew() {
    const dispatch = useDispatch()

    const title = useInput('', {isEmpty: true, minLength: 1})
    const description = useInput('', {isEmpty: true, minLength: 1})
    const phone = useInput('', {isEmpty: true, minLength: 1})
    const address = useInput('', {isEmpty: true, minLength: 1, isEmail: true})

    function handlerSubmit(e) {
        e.preventDefault()
        const animal = {type: ADD_ANIMAL, title: title.value, description: description.value, phone: phone.value, address: address.value}
        dispatch(add_animal(animal))
        fetching(animal)
    }

    return (
        <>
            <div className="wrapper">
                <div className="wrapper__div">Добавление записи</div>
                <div className="wrapper__main">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                    <div className="wrapper__photo">
                        <div className="example-1">
                            <div className="frm-group">
                                <label className="label">
                                    <div className="title">Загрузить фото (из UI либы)</div>
                                    <input type="file"/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <form className="wrapper__description" onSubmit={(e) => handlerSubmit(e)}>
                        <div className="wrapper__div2">О животном</div>
                        <div className="wrapper__div3">Название / имя / кличка животного</div>
                        {title.isDirty && title.isEmpty && <div style={{color: 'red'}}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
                        {title.isDirty && title.minLengthError &&
                        <div style={{color: 'red'}}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
                        <input
                            onChange={(e) => title.onChange(e)}
                            onBlur={(e) => title.onBlur(e)}
                            value={title.value}
                            name="name"
                            type="text"
                            className="wrapper__div4"
                            placeholder="Введите что-то там"
                        />
                        <div className="wrapper__div5">Пару слов туда-сюда сделай</div>
                        {description.isDirty && description.isEmpty &&
                        <div style={{color: 'red'}}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
                        {description.isDirty && description.minLengthError &&
                        <div style={{color: 'red'}}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
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
                        {phone.isDirty && phone.isEmpty && <div style={{color: 'red'}}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
                        {phone.isDirty && phone.minLengthError &&
                        <div style={{color: 'red'}}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
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
                        {address.isDirty && address.isEmpty &&
                        <div style={{color: 'red'}}>{ERRORS_VALIDATE.IS_EMPTY}</div>}
                        {address.isDirty && address.minLengthError &&
                        <div style={{color: 'red'}}>{ERRORS_VALIDATE.MIN_LENGTH}</div>}
                        {address.isDirty && address.emailError &&
                        <div style={{color: 'red'}}>{ERRORS_VALIDATE.EMAIL}</div>}
                        <input
                            onChange={(e) => address.onChange(e)}
                            onBlur={(e) => address.onBlur(e)}
                            value={address.value}
                            name="email"
                            type="email"
                            className="wrapper__div4"
                            placeholder="Введите что-то там"
                        />
                        <div className="wrapper__div8">
                            {(!title.inputValid || !description.inputValid || !phone.inputValid || !address.inputValid) &&
                            address.isDirty &&
                            phone.isDirty &&
                            description.isDirty &&
                            title.isDirty && <div style={{color: 'red'}}>{ERRORS_VALIDATE.ALL}</div>}
                            <button
                                disabled={!title.inputValid || !description.inputValid || !phone.inputValid || !address.inputValid}
                                className="wrapper__button-save">
                                Сохранить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
