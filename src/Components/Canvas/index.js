import React from 'react';
import './styles.css';

const Canvas = ({ title, subtitle, verticalPosition, horizontalPosition }) => {
    const imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuOSwzPM4D_w-qZ1OKk6RcYbKTqKi8WK04lfd-NLv03LDeiiBw';
    
    const showTitle = true;
    const showSubtitle = true;

    console.log(verticalPosition, horizontalPosition);

    // Position
    const position = 'centerCenter';
    const titleColor = '#FFF';
    const subtitleColor = '#FFF';

    const textPosition = {
        display: 'flex',
        justifyContent: verticalPosition,
    };

    const textStyles = {
        textAlign: horizontalPosition,
        color: titleColor,
        width: '100%',
        margin: 0
    };
    
    return (
        <main className="mainScreen">
            <div className="textScreen">
                <div className="textContainer">
                    <div className={`${'basePosition'} ${position}`} style={textPosition}>
                        {showTitle && (
                            <h1 style={textStyles}>{title}</h1>
                        )}
                        {showSubtitle && (
                            <p style={textStyles}>{subtitle}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="filterScrren" />
            <div className="bg">
                <img src={imageSrc} alt="Test"/>
            </div>
        </main>
    );
};

export default Canvas;
