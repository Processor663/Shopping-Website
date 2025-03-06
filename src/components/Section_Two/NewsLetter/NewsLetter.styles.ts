import styled from "styled-components";



export const Wrapper = styled.form`
    text-align: center;
    padding: 3.4em 0;
    margin-top: 2em;
    background: var(--footer-bg-color);
    color: var(--navbar-text-color);

    h6 {
        color: #000;
    }

    input {
        width: 90%;
        background: var(--footer-bg-color);
        outline: none;
        border: 0.1px solid gainsboro;
        padding: 0.5em;

    }

    input::placeholder {
        padding: 0.5em;
    }

    button {
        border: none;
        background-color: var(--button-bg-color);
        color: var(--button-text-color);
        font-size: 14px;
        letter-spacing: .5px;
        padding: 12px 20px 8px;
        -webkit-appearance: none;
        appearance: none;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }

    button:hover {
        background: var(--brand-secondary);
        color: white;
    }

`