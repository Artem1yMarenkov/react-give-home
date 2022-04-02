import { Link } from "react-router-dom";
import dogPhoto from "../../img/sobaka.jpg"
import './MyAds.css'
export default function MyAds() {
    // А зачем второй абсолютно такой же компонент?
    const dogs = [
        { phone: '03005988', name: 'Joseph', date: 32, adress: 'm' },
        { phone: '03005988', name: 'SlimShady', date: 16, adress: 'z' },
        { phone: '03005988', name: 'NK', date: 2, adress: 'x' },
        { phone: '03005988', name: 'Larsen', date: 3, adress: 'c' },
        { phone: '03005988', name: 'Chili', date: 67, adress: 'b' },
       ]
    const MappedDogs = () => {
        return dogs.map((element, index) => 
            <div className="dog">
                <img src={dogPhoto}></img>
                <div className="dog-data">
                    <h2 className="dog__name">{element.name}</h2>
                    <p className="dog__date">Дата публицации: {element.date}</p>
                    <div className="dog-data-interactive">
                        <Link to={'/addnew'} className="dog__change">Редактировать</Link>
                        <p className="dog__delete">Удалить</p>
                    </div>
                </div>
            </div>
        );
    }

    return <MappedDogs />;
}