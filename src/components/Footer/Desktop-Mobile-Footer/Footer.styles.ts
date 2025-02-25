import styled from "styled-components";




export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3.125em 0;
    color: var(--footer-text-color);
    font-size: 0.875rem;


    .footer-left {
        width: 30%;
        border-right: 0.5px solid grey;

    }

    .footer-right {
        width: 65%;
    }
    
    .footer-right .footer-description {
        text-align: center;
        margin-bottom: 3em;

    }

    .footer-right .footer-description img {
        max-width: 100%;
    }

    .footer-right .footer-description p {
        margin: 1em 0;
        padding: 0 0.5em;

    }

    .footer-right .booststrap-accordion {
        display: none !important;
    }



    @media screen and (max-width:1025px) {
        display: block;

        .footer-left {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            border: none;
        }

        .footer-right {
            width: 100%;
        }

        .footer-right .booststrap-accordion {
            display: block !important;
            width: 100%;
        }

         .footer-right .booststrap-accordion h6 {
            font-weight: bold !important;
            color: var(--footer-heading-color);
        }

        // Booststrap inbuilt class
        .footer-right .booststrap-accordion .accordion-button {
            background: var(--footer-bg-color) !important;
        }

        // Booststrap inbuilt class
        .footer-right .booststrap-accordion .accordion-button:focus {
            box-shadow: none !important;
            outline: none !important;
            border: none;
        }

         // Booststrap inbuilt class
        .footer-right .booststrap-accordion .accordion-item {
            border: none !important;
            background: var(--footer-bg-color) !important;
            paddding: 0 !important;
            margin: 0 !important;
        }

        .footer-right .booststrap-accordion .item {
            line-height: 2em;
        }

        .footer-right .booststrap-accordion .mobile-store-info-flex {
            display: flex;
            align-items: center;
        }

        .footer-right .booststrap-accordion .mobile-store-info-flex div {
           margin-left: 1em;
        }

        .footer-right .booststrap-accordion .item:hover {
            color: var(--footer-text-hover-color);
            cursor: pointer;

        }
    }


    @media screen and (max-width:480px) {

        .footer-left {
            display: grid;
            grid-template-columns: 1fr;
        }

    }

`

export const Services = styled.div`
    display: flex;
    letter-spacing: 0.3px;

    h6 {
        font-weight: bold;
        color: var(--footer-heading-color);

    }
    
    .icon {
        color: var(--footer-text-hover-color);
    }

    div {
        margin:0 0 1.5em 1.5em;
    }

    &:hover {
        cursor: pointer;

        h6 {
            color: var(--footer-text-hover-color);
        }
        
        .icon {
            color: black;
        }

       
    }

    @media screen and (max-width: 1025px) {

        display: block;
        text-align: center;
        line-height: 2px;

        .icon {
            margin-bottom: 0.2em;
        }

        p {
            margin-bottom: 4em;
        }
    
    }

`

export const Menu = styled.div`
    
    display: flex;
    justify-content: space-between;

    h6 {
      color: var(--footer-heading-color);
      font-weight: bold;
    }

    ul {
        list-style: none;
        line-height: 2em;
    }

    .store-info-flex {
        display: flex;
        align-items: center;
    }

    li {
        margin-left: 1em;
    }

    li:hover {
        color: var(--footer-text-hover-color);
        cursor: pointer;

    }


    @media screen and (max-width:1025px) {
            display: none;
    }

` 

export const Footer_bottom = styled.div`
    background: var(--footer-bottom-bg-color);
    color: var(--footer-bottom-text-color);
    border-top: 1px solid #e9e9e9;
    padding-top: 1em;
    text-align: center;

    .container {
        display: flex;
        justify-content: space-between;
    }

    .list {
        list-style: none;
        display: flex;
    }

    .list-payment_item {
        margin-left: 0.2em;
    }


    @media screen and (max-width: 1025px) {
         .container {
            flex-direction: column;
            align-items: center;
        }
    }
   

`