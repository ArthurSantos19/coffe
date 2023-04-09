import { HeaderButoon, HeaderButtonsContainer, HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={logo} alt="" />
                <HeaderButtonsContainer>
                    <HeaderButoon variant="purple">
                        <MapPin size={20} weight="fill"/>
                        Florianópolis, SC
                    </HeaderButoon>
                    <HeaderButoon variant="yellow">
                        <ShoppingCart size={20} weight="fill"/>
                    </HeaderButoon>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}