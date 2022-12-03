import { Nav, Pages } from './navbar.style'

function NavBar(props){

    let buttons = props.buttons.map( button => {
        return <a href={`/${button === 'Serviços'? 'servicos': button.toLowerCase()}`} key={button}><b>{button}</b></a>
    
    })        

    return(
        <>
            <Nav>
                <p><b>WB Hair Stylist</b></p>
                <Pages>
                    <a href="/"><b>Home</b></a>
                    {buttons}
                </Pages>

            </Nav>
        </>
    )
}

export default NavBar;