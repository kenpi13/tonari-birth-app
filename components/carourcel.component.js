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
                    <img src="../static/001.jpg" />
                </div>
                <div>
                    <img src="../static/002.jpg" />
                </div>
            </Carousel>
        </div>
        </div>
    );
}