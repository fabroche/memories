import React from 'react';

function SliderControlButton({
                                 isNext = true,
                                 icon = ">",
                                 imagesList,
                                 imageActiveName,
                                 setImageActiveName
                             }) {
    function handleOnClick() {

        const currentImageIndex = imagesList.findIndex(image => image.name === imageActiveName);
        const imagesListMaxLength = imagesList.length - 1;


        if (isNext) {
            if (currentImageIndex + 1 <= imagesListMaxLength) {
                setImageActiveName(imagesList[currentImageIndex + 1].name);
                return;
            }
            setImageActiveName(imagesList[0].name);
        }

        if  (!isNext) {
            if (currentImageIndex - 1 >= 0) {
                setImageActiveName(imagesList[currentImageIndex - 1].name);
                return;
            }
            setImageActiveName(imagesList[imagesListMaxLength].name);
        }


    }

    return (
        <button
            id={`${isNext ? 'next' : 'prev'}`}
            onClick={handleOnClick}
        >
            {icon}
        </button>
    );
}

export default SliderControlButton;