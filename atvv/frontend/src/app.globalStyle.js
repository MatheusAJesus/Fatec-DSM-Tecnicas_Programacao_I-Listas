import { createGlobalStyle } from "styled-components";

const AppGlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        text-decoration:none;
        font-family: 'Roboto', sans-serif;
        color:#393939;
    }

    button{
        background-color:#ffacac;
        color:white;   
        border:none;
        padding: 10px 15px;
        border-radius:5px;
        margin:0 15px 10px 0px;
        font-weight: bold;
        font-size: medium;
        cursor:pointer;
    }
    .excluir{
        background-color:#ff6060;
        color:white;    
    }
    .editar{
        background-color:#4891ff;
        color:white;    
    }

    
    p{
        margin-bottom:5px;
    }

    body::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
    background: white;        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
    background-color: #fddbdb;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    }
    
`;

export default AppGlobalStyle;