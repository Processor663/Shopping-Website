import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    min-width: 13.5%;

    .cart {
        display: flex;
    }

    .circle {
        position: relative;
        right: 50%;
        border-radius: 50%;
        background-color: var(--button-bg-color);
        color: var(--button-text-color);
        font-size: 11px;
        font-weight: 400;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text {
        font-weight: bold;
    }

    .price {
        color: #666666;
    }


`