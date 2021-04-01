import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div>
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../static/001.jpg" />
                </div>
                <div>
                    <img src="../static/002.jpg" />
                </div>
                <div>
                    <img src="../static/003.jpg" />
                </div>
            </Carousel>
        </div>
        </div>
    );
}

{/* <div className="content__sub__main__img">
      <img className="w-vw" src="../static/001.jpg"/>
    </div> */}
{/* <div className="content__sub__img__wrap pt-1 flex">
<div className="w-1/4">
<img className="w-full" src="../static/001.jpg"></img>
</div>
<div className="w-1/4">
<img className="w-full" src="../static/002.jpg"></img>
</div>
<div className="w-1/4">
<img className="w-full" src="../static/003.JPG"></img>
</div>
<div className="w-1/4">
<img className="w-full" src="../static/004.JPG"></img>
</div>
</div> */}