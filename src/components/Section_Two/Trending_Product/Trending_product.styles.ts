import styled from "styled-components";

type Props = {
    flag?: string;
}


export const Trending_Card = styled.div<Props>`
    border: 3px solid #f6f7f8;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
       

    .product-flag {
        display: flex;
        justify-content: space-between;
        align-item: center;
        padding: 1em  0.4em;
    }

    .sale {
        display: ${( { flag } ) => flag == "sale" ? "grid !important" : "none !important"};
        display: grid;
        place-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        color: var(--sale-text-color);
        background: var(--sale-bg-color);
        font-size: 10px;
        font-weight: 600;
       
    }

    .sold-out {
        display: ${({flag})=> flag == "sold" ? "grid !important" : "none !important"};
        display: grid;
        place-content: center;
        background: var(--soldout-bg-color);
        text-align: center;
        padding: 0.5em 1em !important;
        margin: 0 !important;
        height: fit-content !important;
        color: var(--soldout-text-color);
        font-size: 9px;
        font-weight: 600;
        border-radius: 4px;
    }

    .image {
        display: flex;
        justify-content: center;
        padding: 1em 0 0;
        backgroun: red;

    }

    img {
        width: 50%;
    }

    .icons {
        display: flex;
        justify-content: center;
        margin: 1em 0;
    }

    .content { 
        width: 100%;
        padding: 1.5em 0 3em;
        text-align: center;
        line-height: 0.5rem;
        background: var(--footer-bg-color);
        align-self: end !important;
        

    }

    small {
        color: var(--brand-secondary);
        font-weight: bold;
    }




`