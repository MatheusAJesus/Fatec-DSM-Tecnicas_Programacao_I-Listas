import styled from "styled-components";

export const ListaAtendimentos = styled.div`
    padding:15px;
    summary{
        cursor:pointer;
        padding:15px 15px;
        margin-bottom:1px;
        border-bottom:solid 1px  #eaeaea;
        border-radius: 5px;;
    }
    summary::marker {
        content: "";
    }

    summary:hover{
        background-color:#fddbdb;
    }

    details div{
        padding: 15px 25px; 
        border-bottom:solid 1px  #eaeaea;
    }

`;