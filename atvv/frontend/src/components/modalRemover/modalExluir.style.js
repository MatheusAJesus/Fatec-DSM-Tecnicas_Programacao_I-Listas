import styled from 'styled-components'

export const Modal = styled.div`
    
    position:fixed;
    top: 40%;
    display: none;
    width: 100vw;   
    .content{
        padding: 15px 0 15px 15px;
        border: 2px solid #ffacac;
        border-radius: 20px;
        background: #fff;
        box-shadow: -10px 10px 10px 2px rgba(0, 0, 0, 0.2);
    }
    p{
        padding-right:15px ;
    }
    .buttons{
        width: 100%;
        display: flex;
        justify-content:center;
    }
`;