import styled from "styled-components";


export const Wrapper = styled.div`
    background: var(--menu-bg-color);
    padding: 5px 0;
    border-top: 1px solid rgba(0,0,0,.08);
    border-bottom: 1px solid rgba(0,0,0,.08);
    
    .container {
        display: flex;
        justify-content: space-between;
    }

    .container .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container .links .link-item {
        font-weight: 600;
        list-style: none;
        color: var(--menu-text-color);
        font-size: 14px;
        letter-spacing: 0.5px;
        line-height: 16px;
        padding: 15px 10px;
        text-decoration: none;
    }

    .container .links .link-item:hover {
        color: var(--button-bg-hover-color);

    }

    .container button {
        min-width: 16.875rem;
        font-size: 0.875rem;
        font-family: var(--font-body-family);
        letter-spacing: 1.5px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        font-weight: 600;
        color: var(--button-text-color);
        background: var(--button-bg-color);

    }

    @media screen and (max-width: 1025px) {
        display: none;
    }

`