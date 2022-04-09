import { Link } from "react-router-dom";
import dogPhoto from "../../img/sobaka.jpg"
import './MyAds.css'
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";


export default function MyAds() {
    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(false);
    const myAds = useSelector(state => state.myAds.myAds);
    const [id, setId] = useState('')
    const deleteAd = () => {
        dispatch({type: "DELETE_AD", payload: id})
    }
    const MappedDogs = () => {
        const handleClick = (date) => {
            setModalActive(true)
            setId(date)
        }
        return myAds.map(({name, date}) => 
            <div key={date} className="dog">
                <img src={dogPhoto}></img>
                <div className="dog-data">
                    <h2 className="dog__name">{name}</h2>
                    <p className="dog__date">Дата публицации: {date}</p>
                    <div className="dog-data-interactive">
                        <Link to={'/addnew'} className="dog__change">Редактировать</Link>
                        <p className="dog__delete" onClick={() => handleClick(date)}>Удалить</p>
                    </div>
                </div>
            </div>  
        );
    }

    return (
    <>
        {myAds.length > 0 ?
        <>
        <MappedDogs />
        <Modal active={modalActive} setActive={setModalActive} deleteAd={deleteAd} adId={id}/> 
        </>
        :
        <p className="dogs__null">Ваш список объявлений пуст!</p>
        }
    </>
    );
}