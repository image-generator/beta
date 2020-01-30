import React from 'react';
import './styles.css'

const ModalBackground = ({ backgrounds, onClick }) => {

    function handleClick(e, bg) {
        onClick()
        localStorage.setItem('background', bg)
    };

    return (
        <div className="modalWrapper">
            <div className="modal">
                {backgrounds.map(bg => (
                    <div key={bg.id} className="card" onClick={(e) => handleClick(e, bg.largeImageURL)}>
                        {console.log(bg)}
                        <img src={bg.largeImageURL} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ModalBackground;