import './Button.scss';

export default function Button({value}) {
    return (
        <button 
            className="button"
        >{value}</button>
    );
}