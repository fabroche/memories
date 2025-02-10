import './Slider.css';
import React, {useState} from "react";
import SliderImageList from "./components/SliderImageList/SliderImageList.jsx";
import {images} from "../../api/images.js";
import SliderControlButton from "./components/SliderControlButton/SliderControlButton.jsx";
import SliderThumbnailList from "./components/SliderThumbnailList/SliderThumbnailList.jsx";
import SliderImageItem from "./components/SliderImageItem/SliderImageItem.jsx";
import SliderThumbnailItem from "./components/SliderThumbnailItem/SliderThumbnailItem.jsx";

function Slider() {
    const [imageActiveName, setImageActiveName] = useState(images[0].name)

    return (
        <div className="slider">
            <SliderImageList>
                {
                    images.map((image) => (
                        <SliderImageItem
                            key={image.name}
                            imageName={image.name}
                            imageActiveName={imageActiveName}
                            imageUrl={image.url}
                            imageDescription={image.description}
                            imageEmoji={image.emoji}
                        />
                    ))
                }
            </SliderImageList>

            <div className="arrows">
                <SliderControlButton isNext={false} icon={"<"}/>
                <SliderControlButton isNext={true} icon={">"}/>
            </div>

            <SliderThumbnailList>
                {
                    images.map((image) => (
                        <SliderThumbnailItem
                            key={image.name}
                            imageName={image.name}
                            imageUrl={image.url}
                            imageActiveName={imageActiveName}
                            setImageActiveName={setImageActiveName}
                        />
                    ))
                }
            </SliderThumbnailList>
        </div>
    );
}

export default Slider;