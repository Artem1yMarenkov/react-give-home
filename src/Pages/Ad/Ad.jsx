import './Ad.css'
import logo from '../../img/logo.svg'
import { Link, useParams } from 'react-router-dom'
import dogPhoto from '../../img/sobaka.jpg'
import { useEffect, useState } from 'react'

const token = localStorage.getItem('token')

export default function Ad () {
    const {id} = useParams()
    const [ad, setAd] = useState(null)

    useEffect(() => {
        fetch(`https://fathomless-gorge-97474.herokuapp.com/post/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            }
        })
        .then(res => res.json())
        .then(data => setAd(data))
    }, [id]);

    return (
        <>
            {ad && (
            <div className="wrapper">
                <div className="main-page__link">
                <Link to={'/'}>Вернуться на главную</Link>
                </div>
                <div className="ad">
                    <p className="ad__name">{ad.title}</p>
                    <div className="ad-info">
                        <img src={dogPhoto} className="ad__picture"></img>
                        <div className="ad-contacts">
                            <p className="ad__phone">{ad.phone}</p>
                            <p className="ad__email">{ad.address}</p>
                        </div>
                    </div>
                    <div className="ad-description">
                    <hr></hr>
                    <p>{ad.description}</p>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}