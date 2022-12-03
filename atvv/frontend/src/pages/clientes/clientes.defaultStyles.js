import styled from "styled-components";

export const ListaClientes = styled.div`
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

export const Formulario = styled.form`
	display: flex;
	flex-direction: column;
	gap:4px;
	align-items: flex-start;
	margin: 25px auto;
	max-width: 400px;
	width: 80vw;
	input, select{
		width: 100%;
		padding: 7px;
		border-radius: 5px;
		border: solid 1px;
		
	}
	div{
		display: flex;
		justify-content:center;
		width: 100%;
	}
	button{
		margin:0;
	}
	label{
		font-size:12px;
	}
`;