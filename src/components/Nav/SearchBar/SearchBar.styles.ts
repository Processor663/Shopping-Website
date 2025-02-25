import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    input {
        min-width: 300px;
        width: 100%;
        border: 1px solid #eee;
        outline: none;
        padding: 5px 15px;
        background: #fff;
        text-transform: capitalize;
        color: #777;
        border-radius: 30px 0 0 30px;
    }

    button {
        background: var(--button-bg-hover-color);
        color: var(--button-text-hover-color);
        padding: 0 25px;
        border-radius: 0 30px 30px 0;
        border: none;
    }

    button:hover {
        background: var(--button-bg-color);
        color: var(--button-text-color);
    }

`