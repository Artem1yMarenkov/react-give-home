import { Link } from "react-router-dom";
import dogPhoto from "../../img/sobaka.jpg"
import './MyAds.css'
import { useState } from "react";
import Modal from "../Modal/Modal";


export default function MyAds() {
    const [modalActive, setModalActive] = useState(false)
    const [dogList, setDogList] = useState([
        { phone: '03005988', name: 'Joseph Francis Tribbiani Jr', date: 32, adress: 'm' },
        { phone: '03005988', name: 'SlimShady', date: 16, adress: 'z' },
        { phone: '03005988', name: 'NK', date: 2, adress: 'x' },
        { phone: '03005988', name: 'Larsen', date: 3, adress: 'c' },
        { phone: '03005988', name: 'Chili', date: 67, adress: 'b' },
    ]);
    const MappedDogs = () => {
        return dogList.map(({name, date}) => 
            <div key={date} className="dog">
                <img src={dogPhoto}></img>
                <div className="dog-data">
                    <h2 className="dog__name">{name}</h2>
                    <p className="dog__date">Дата публицации: {date}</p>
                    <div className="dog-data-interactive">
                        <Link to={'/addnew'} className="dog__change">Редактировать</Link>
                        <p className="dog__delete" onClick={() => setModalActive(true)}>Удалить</p>
                    </div>
                </div>
            </div>  
        );
    }

    return (
    <>
        <MappedDogs />
        <Modal active={modalActive} setActive={setModalActive}/> 
    </>
    );
}