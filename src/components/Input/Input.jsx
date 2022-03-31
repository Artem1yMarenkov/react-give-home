import { useEffect, useState } from "react";

import "./Input.scss";
import eyeIcon from '../../img/eye.svg';

export default function Input({img, placeholder, onChange, name, type="text"}) {
    const [isPass, setIsPass] = useState(false);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
        type == "password" && setIsPass(true);
    }, []);

    const changeType = (event) => {
        setInputType(inputType == "password" ? "text" : "password");
    }

    return (
        <div className="input">
            <img className="input__icon" src={img} alt="#" />
            <input 
                className="input__field"
                autoComplete="off"
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                type={inputType}
            />
            { 
                isPass && 
                <img 
                    className="input__icon input__change-type" 
                    src={eyeIcon} 
                    onClick={changeType}
                    alt="#"
                /> 
            }
        </div>
    );
}