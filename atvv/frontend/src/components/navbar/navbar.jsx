import { Nav } from './navbar.style'

function NavBar(props){

    let buttons = props.buttons.map( button => {
        return <a href={`/${button === 'Serviços'? 'servicos': button.toLowerCase()}`} key={button}>{button}</a>
    
    })        

    return(
        <>
            <Nav>
                <a href="/">Home</a>
                {buttons}
            </Nav>
        </>
    )
}

export default NavBar;