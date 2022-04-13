import './Ad.css'
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom'
import dogPhoto from '../../img/sobaka.jpg'
export default function Ad () {
    return (
        <div className="wrapper">
            <header>
                <img src={logo}></img>
                <button className="header__button">Выйти</button>
            </header>
            <div className="main-page__link">
            <Link to={'/'}>вернуться на главную</Link>
            </div>
            <div className="ad">
                <p className="ad__name">Сабака</p>
                <div className="ad-info">
                    <img src={dogPhoto} className="ad__picture"></img>
                    <div className="ad-contacts">
                        <p className="ad__phone">+7(999)993-22-22</p>
                        <p className="ad__email">nweris@yandex.ru</p>
                    </div>
                </div>
                <div className="ad-description">
                <hr></hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet blanditiis incidunt sint. Ipsam nemo tenetur eius qui, explicabo necessitatibus expedita reprehenderit voluptate, ratione aperiam voluptatem nostrum natus sint! Quos.</p>
                </div>
            </div>
        </div>
    )
}