import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3em 0 !important;

    .left {
        width: 73%;
    }
    
    .left .view-all-container {
        margin-top: 1.5em;
        text-align: center;
    }

    .left .view-all-button {
        text-align: center;
        cursor: pointer;
       border: none;
        background-color: var(--button-bg-color);
        color: var(--button-text-color);
        -webkit-appearance: none;
        appearance: none;
        font-size: 0.875rem;
        letter-spacing: .5px;
        font-weight: 400;
        text-transform: uppercase;
        padding: 0.75rem 1.25rem 0.5rem;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
        outline: none;

     } 
        
     
    .left .view-all-button:hover {
        background: var(--button-bg-hover-color);
        color: #fff;
     }

    .right {
        width: 25%;
    }

     .tab-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5em;
        background: var(--footer-bg-color);
        border: none !important;
    }

    .tab-navs button {
        border: none;
        outline: none;
        margin-left: 10px;
    }

    .tab-content {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 1em;
        margin-top: 1em;
    }


    @media screen and (max-width: 1025px) {
        flex-direction: column;


        .right{
            display: flex;
            justify-content: space-between;
            // align-items: center;
            margin-top: 2em;



        }

        .right > div, .right form {
           width: 48%;
        }

        .left, .right {
            width: 100%;
        }

        .left {
            margin-bottom: 1em;
        }

        .tab-head {
            flex-direction: column;
            background: transparent;
        }
            
        .tab-head .trending-title {
            text-align: center;
            padding: 0.5em;
            background: var(--footer-bg-color);
            width: 100% !important;
        }

        .tab-navs button {
            background-color: transparent;
        }

        .tab-content {
            grid-template-columns: repeat(8, 12.25rem) !important;
            overflow-x: auto;
            margin-top: 1em;


        }
    }

    @media screen and (max-width: 480px) {

         .right {
            display: flex;
            flex-direction: column;
            align-items:center;
        }

          .right > div, .right form {
           width: 85%;
        }
    }
`