import './Loading.scss';

export default function Loading({isActive}) {
    return (
        <>
            { isActive &&
                <div className="loading__wrapper">
                    <div className="loading__circle"></div>
                </div>
            }
        </>
    );
}