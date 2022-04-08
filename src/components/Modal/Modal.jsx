import React from "react";
import "./Modal.css"

const Modal = ({active, setActive, deleteAd, adId}) => {
    return (
        <div className={active ? `modal active modal-${adId}` : `modal modal-${adId}`} onClick={() => setActive(false)} >
            <div className="modal__content" onClick={e => e.stopPropagation()}>
            <p>Вы действительно хотите удалить объявление?</p>
            <div className="modal__buttons">
                <button className="modal__buttons-yes" onClick={() => deleteAd()}>Да</button>
                <button className="modal__buttons-no" onClick={() => setActive(false)} >Нет</button>
            </div>
            </div>
        </div>
    )
}
export default Modal;