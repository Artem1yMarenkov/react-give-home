


export default function LastAds() {
    const dogs = [
        { id: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
        { id: '03005988', name: 'SlimShady', age: 16, sex: 'z' },
        { id: '03005988', name: 'NK', age: 2, sex: 'x' },
        { id: '03005988', name: 'Larsen', age: 3, sex: 'c' },
        { id: '03005988', name: 'Chili', age: 67, sex: 'b' },
       ]
    const MappedDogs = () => {
        return dogs.map((element, index) => 
            <div className="dog">
                <img src="#"></img>
                <div className="dog-data">
                    <h2 className="dog__name">{element.name}</h2>
                    <p className="dog__date">{element.age}</p>
                </div>
            </div>
        );
    }

    return <MappedDogs />;
}