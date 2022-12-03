// import { api } from '../../services/api';

import './removestyleAbrirFecharModal.css'
import { Modal } from './modalExluir.style'

function PaginaModal(props) {
    // fechar
    function fechar() {
        document.querySelector('.modal').classList.remove('show')

    }
    async function remover() {
        switch(props.tipoObjeto){
            case 'cliente':
                window.alert(props.objeto.nome)
                break;
            case 'servico':
                window.alert(props.objeto.nome)
                break;
            case 'produto':
                window.alert(props.objeto.nome)
                break;
            default:
                break;
        }
        // await api.delete(`/associados/${id}`);
        document.querySelector('.modal').classList.remove('show')
    }


    return (
        <Modal className="modal">
            <div className='content'>
            <p><b>Excluir {props.objeto.nome}?</b></p>
            <br></br>
            <div className="buttons">
                <button className='editar' onClick={fechar}>Cancelar</button>
                <button className='excluir' onClick={remover}>Excluir</button>
            </div>
            </div>
        </Modal>
    )
}

export default PaginaModal;