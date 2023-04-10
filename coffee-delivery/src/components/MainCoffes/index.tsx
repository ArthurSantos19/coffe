import { CoffeCard } from "../../pages/Home/componets/CoffeCard";
import { TitleText } from "../Typography";
import { CoffeeList, MainContainer } from "./styles";

export function MainCoffes() {
    return(
        <MainContainer className="container">
            <TitleText>
                Nossos cafés
                <CoffeeList>
                    <CoffeCard/>
                    <CoffeCard/>
                    <CoffeCard/>
                    <CoffeCard/>
                </CoffeeList>
            </TitleText>
        </MainContainer>
    )
}