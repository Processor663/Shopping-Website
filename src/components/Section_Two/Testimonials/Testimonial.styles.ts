import styled from "styled-components";



export const Wrapper = styled.div`
    border: 3px solid  var(--footer-bg-color);

    .fullwidth{ 
        width: 100% !important;
    }

    h5 {
        padding: 0.5em;
        background: var(--footer-bg-color);
        border: none !important;
        text-align: center;
    }

    .user-container {
        position: relative;
        height: fit-content;
        margin: 6.5em 0.5em 0;
        padding: 2em 0 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 2em;
        background: var(--footer-bg-color);
        color: var(--navbar-text-color)
    }

    img {
        position: absolute;
        bottom: 5em;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solidvar(--footer-bg-color);
        object-fit: cover;
        object-position: right;
    }

    .user-designation {
        color: var(--brand-secondary);

    }

   .testimonial-desc {
        padding: 1em 0.2em;
        text-align: center;
   }


`