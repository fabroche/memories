import React from 'react';

function SliderControlButton({
                                 isNext = true,
                                 icon = ">"
                             })
{
    function handleOnClick() {
        if (isNext) {
            console.log("next");
            return;
        }

        console.log("previous");
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