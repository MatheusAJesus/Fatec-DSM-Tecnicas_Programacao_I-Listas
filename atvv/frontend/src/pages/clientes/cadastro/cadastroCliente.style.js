import styled from "styled-components";

export const Formulario = styled.form`
	display: flex;
	flex-direction: column;
	gap:5px;
	align-items: flex-start;
	margin: auto;
	margin-top: 50px;
	max-width: 400px;
	width: 80vw;
	input{
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
`;

