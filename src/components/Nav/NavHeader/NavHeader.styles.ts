import styled from "styled-components";


export const NavHeader = styled.div`
    background: var(--navbar-background-color);
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    color: var(--navbar-text-color);

   .container {
        display: flex;
        justify-content: space-between;
        padding: 0.8em 0 0;
   }

    // Media query screen less than 1024px
   @media screen and (max-width: 1024px) {
        .container {
            margin: auto;
            width: fit-content;
        }

        .navHeader-order {
            display: none;
        }
   }


`


