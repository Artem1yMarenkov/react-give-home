import "./LastAds.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import dogPhoto from "../../img/sobaka.jpg"
import { useDispatch, useSelector } from "react-redux";
import { fetchLastAds } from "../../redux/asyncActions/lastAdsArray";

export default function LastAds() {
    useEffect(() => {
        dispatch(fetchLastAds());
    }, []);
    const dispatch = useDispatch();
    const lastAds = useSelector(state => state.ads.lastAds);
    const MappedDogs = () => {
        return lastAds.map(({title, id, phone, address}) => 
            <div key={id} className="dog">
                <img src={dogPhoto} alt="Dog"></img>
                <div className="dog-data">
                    <h2 className="dog__name">{title}</h2>
                    <p className="dog__date">Дата публицации: {id}</p>
                    <p className="dog__phone">{phone}</p>
                    <p className="dog__adress">{address}</p>
                    <Link className="dog__link" to={`/ad/${id}`}>Узнать подробнее</Link>
                </div>
            </div>
        );
    }

    return <MappedDogs />;
}