import "./LastAds.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import dogPhoto from "../../img/sobaka.jpg"

export default function LastAds() {
    // Мы в реакте всё таки, а не в js
    const [dogList, setDogList] = useState([
        { phone: '03005988', name: 'Joseph Francis Tribbiani Jr', date: 32, adress: 'm' },
        { phone: '03005988', name: 'SlimShady', date: 16, adress: 'z' },
        { phone: '03005988', name: 'NK', date: 2, adress: 'x' },
        { phone: '03005988', name: 'Larsen', date: 3, adress: 'c' },
        { phone: '03005988', name: 'Chili', date: 67, adress: 'b' },
    ]);

    const MappedDogs = () => {
        // Тут лучше использовать деструкторизацию элемента
        // Согласись, читается лучше
        return dogList.map(({name, date, phone, adress}) => 
            <div key={date} className="dog">
                <img src={dogPhoto} alt="Dog"></img>
                <div className="dog-data">
                    <h2 className="dog__name">{name}</h2>
                    <p className="dog__date">Дата публицации: {date}</p>
                    <p className="dog__phone">{phone}</p>
                    <p className="dog__adress">{adress}</p>
                    <Link className="dog__link" to='/addnew'>Узнать подробнее</Link>
                </div>
            </div>
        );
    }

    return <MappedDogs />;
}