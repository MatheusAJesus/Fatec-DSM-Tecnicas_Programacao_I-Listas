import styled from "styled-components";

export const ListaClientes = styled.div`
    padding:15px;
    summary{
        cursor:pointer;
        padding:15px 15px;
        margin-bottom:1px;
        border-bottom:solid 1px  #eaeaea;
    }
    summary::marker {
        content: "";
    }
    summary:hover{
        background-color:#fcd2f7;
    }
    details div{
        padding: 15px 25px; 
        border-bottom:solid 1px  #eaeaea;
    }
 
`;