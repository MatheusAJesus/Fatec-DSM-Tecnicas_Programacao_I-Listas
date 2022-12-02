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


`;

export default AppGlobalStyle;