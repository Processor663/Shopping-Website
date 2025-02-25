import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    // position: static !important;

    .left {
        width: 70%;
    }

    .right {
        width: 25%;
        background: grey;
    }

    // Bootstrap inbuit class
    .nav-tabs {
        display: flex;
        justify-content: flex-end;
        background: var(--footer-bg-color);
        border: none !important;

    }

    .nav-tabs .nav-link {
        border: none !important;
        color: #232323;
    }
        
    .nav-tabs li:first-child {
        margin-right: auto !important;
        font-weight: bold;
    }

    .nav-tabs .nav-link.active {
        background: transparent !important;
        color: var(--brand-secondary) !important;

    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(4, 12.1rem);
        gap: 0.5em;
    }

`