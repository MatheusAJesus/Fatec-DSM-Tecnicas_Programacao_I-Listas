import { Component } from "react";
import { Menu } from "./menuBar";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

type props = {
    textoApp: string
}
type state = {
    botao: string
}
class App extends Component<props, state> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.state = {
            botao: 'clientes'
        }
        this.selecionarBotao = this.selecionarBotao.bind(this)
    }
    public selecionarBotao(clique: string) {
        this.setState({
            botao: clique
        })
    }
    render() {

            return (
                <>
                <Menu/>
                </>
            )


    }
}
export default App;