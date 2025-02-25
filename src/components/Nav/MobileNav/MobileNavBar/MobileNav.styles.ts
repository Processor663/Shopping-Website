import styled from "styled-components";

type Props = {
    close?: boolean;
}

const Wrapper = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625em 0;

    .search {
        position: relative;
    }

    .search .inputContainer {
        display: ${( { close }  )=> (close ? "flex" : "none")};
        position: absolute;
        margin-top: 1em;
        background-color: white;
        border: 1px solid #eee;
        padding: 0.5em 0.2em;
        background: #fff;
        color: #777;
        border-radius: 2px;

    }

       

    .search .inputContainer input {
        min-width: 15em;
        border: none;
        outline: none;
        padding-left: 10px;
    }

    .search .inputContainer input::placeholder {
        letter-spacing: 0.8px;
        color: #777;
    }
    
    .menu-left, .menu-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    .menu-right .cart-container {
        display: flex;
        position: relative;

    }

    .menu-right .cart-container .circle {
        position: absolute;
        left: 50%;
        top: 0.2vh;
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

    @media screen and (min-width: 1025px) {
        display: none;
        
    }

    @media screen and (max-width: 480px) {
        .image {
            max-width: 35%;
        }
        
    }
`

export default Wrapper