import { MainCoffes } from "../../components/MainCoffes";
import { Intro } from "./componets/intro";
import { HomeContainer } from "./styles";

export function HomePage() {
    return(
        <HomeContainer>
            <Intro/>
            <MainCoffes/>
        </HomeContainer>
    )
}