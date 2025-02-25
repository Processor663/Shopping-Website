import styled from "styled-components";


export const Wrapper = styled.div`
    .dropdown-toggle::after {
            display: none !important;
            border: none !important; 
    }

    .dropdown-menu {
        min-width: 16.875rem;
        padding: 0.5em !important;

    }
    
    #dropdown-basic {
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-width: 16.875rem;
        padding: 10px 30px;
        margin: 0px !important;
        font-family: var(--font-body-family);
        letter-spacing: 1.5px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        font-weight: 600;
        color: var(--button-text-color);
        background: var(--button-bg-color);

    }

    .dropdown-item {
        border-bottom: 0.5px solid gainsboro;
        padding: 0.5em !important;
        color: var(--color-free-shipping-indicator)!important;
    }

    .dropdown-item:last-child {
        border: none;
    }

    .dropdown-item:hover {
        color: var(--button-bg-hover-color) !important;


    }


`