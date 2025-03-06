import styled from "styled-components";



export const Wrapper = styled.div`
    overflow: hidden !important;
    &:hover {
        .swiper-button-next::after, .swiper-button-prev::after{
            opacity: 1;
            transform: translateX(-10px);

        }
    }

    // Swiper Js Styles
.swiper-button-next::after, .swiper-button-prev::after {
    font-size: 20px;
    border-radius: 5px;
    padding: 0.5em 1em;
    position: relative;
    right: 40px;
    background-color: var(--button-bg-color) !important;
    opacity: 0;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    color: var(--button-text-color);

}

    // Swiper Js Styles
.swiper-button-prev::after {
    position: relative;
    left: 50px;
}

.slider-container .sub-title {
    font-size: 1.25rem;
    color: var( --button-bg-hover-color);
}

.slider-container .title {
    font-size: 2.625rem;
    font-weight: 600;
}

.slider-container input {
    color: #666666;
    border: 0.5px solid;
    background-color: #ffffff;
    padding: 0.5em;
    width: 18rem;
    outline: none;
}

.slider-container button {
    background-color: var(--button-bg-color);
    box-shadow: none;
    border: none;
    color: var(--button-text-color);
    -webkit-appearance: none;
    appearance: none;
    font-size: 14px;
    letter-spacing: .5px;
    font-weight: 400;
    padding: 0.75rem 1.25rem 0.5rem;
    line-height: 20px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    outline: none;

}

.slider-container button:hover {
    background: var( --button-bg-hover-color);
    color: #fff;
}

@media screen and (max-width: 1025px) {
    .swiper-button-next::after, .swiper-button-prev::after {
        display: none;
    }

    .slider-container {
        position: static !important;
        padding-left: 1em; 
        text-align: left !important;
    }

    .slider-container .sub-title {
        font-size: 1rem
    }

    .slider-container .title {
        font-size: 2rem;
    }

    .slider-container input {
        padding: 0.2em;
        width: 18rem;
    }

    .slider-container button {
        padding: 0.5rem 1rem;
    }

    
}

`