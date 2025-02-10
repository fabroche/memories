import React from 'react';

function SliderThumbnailItem({imageUrl,imageName,imageActiveName,setImageActiveName}) {

    function handleOnClickThumbnailItem() {
        setImageActiveName(imageName)
    }

    return (
        <div
            key={imageName}
            className={`item ${imageActiveName === imageName ? "active" : ""}`}
            onClick={handleOnClickThumbnailItem}
        >
            <img src={imageUrl}/>
            <div className="content">
                {imageName}
            </div>
        </div>
    );
}

export default SliderThumbnailItem;