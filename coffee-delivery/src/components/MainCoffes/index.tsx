import { Cookie } from "phosphor-react";
import { coffees } from "../../data/coffees";
import { CoffeCard } from "../../pages/Home/componets/CoffeCard";
import { TitleText } from "../Typography";
import { CoffeeList, MainContainer } from "./styles";

export function MainCoffes() {
    return(
        <MainContainer className="container">
            <TitleText>
                Nossos cafés
                <CoffeeList>
                    {coffees.map((coffee) =>(
                        <CoffeCard key={coffee.id} coffee={coffee}/>
                    ))}
                </CoffeeList>
            </TitleText>
        </MainContainer>
    )
}