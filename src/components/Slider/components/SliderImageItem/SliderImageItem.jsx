import React from 'react';

function SliderImageItem({imageName, imageUrl, imageActiveName,imageDescription,imageEmoji}) {
    return (
        <div
            key={imageName}
            className={`item ${imageActiveName === imageName ? "active" : ""}`}
        >
            <img src={imageUrl}/>
            <div className="content">
                <p>{`Memories${imageEmoji}`}</p>
                <h2>{imageName}</h2>
                <p>
                    {imageDescription}
                </p>
            </div>
        </div>
    );
}

export default SliderImageItem;