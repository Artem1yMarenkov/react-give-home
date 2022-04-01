import "./LastAds.css"
import { Link } from "react-router-dom";
import dogPhoto from "../../img/sobaka.jpg"

export default function LastAds() {
    const dogs = [
        { phone: '03005988', name: 'Joseph Francis Tribbiani Jr', date: 32, adress: 'm' },
        { phone: '03005988', name: 'SlimShady', date: 16, adress: 'z' },
        { phone: '03005988', name: 'NK', date: 2, adress: 'x' },
        { phone: '03005988', name: 'Larsen', date: 3, adress: 'c' },
        { phone: '03005988', name: 'Chili', date: 67, adress: 'b' },
       ]
    const MappedDogs = () => {
        return dogs.map((element, index) => 
            <div className="dog">
                <img src={dogPhoto} alt="Dog-photo"></img>
                <div className="dog-data">
                    <h2 className="dog__name">{element.name}</h2>
                    <p className="dog__date">Дата публицации: {element.date}</p>
                    <p className="dog__phone">{element.phone}</p>
                    <p className="dog__adress">{element.adress}</p>
                   
                </div>
            </div>
        );
    }

    return <MappedDogs />;
}