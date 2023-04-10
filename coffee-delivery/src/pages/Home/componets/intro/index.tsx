import { BenefContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introCoffe from '../../../../assets/introCoffe.svg'
import { RegularText } from "../../../../components/Typography";
import { InfoIcon } from "../../../../components/InfoIcon";
import { ShoppingCart, Coffee, Timer, ToteSimple } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
    const {colors} = useTheme();
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefContainer>
                        <InfoIcon
                           iconColor={colors["brand-yellow-dark"]}
                           icon={<ShoppingCart weight="fill"/>}
                           text="Compra simples e segura" />
                           <InfoIcon
                           iconColor={colors["brand-purple-dark"]}
                           icon={<Coffee weight="fill"/>}
                           text="Compra simples e segura" />
                           <InfoIcon
                           iconColor={colors["brand-yellow"]}
                           icon={<Timer weight="fill"/>}
                           text="Compra simples e segura" />
                           <InfoIcon
                           iconColor={colors["brand-purple"]}
                           icon={<ToteSimple weight="fill"/>}
                           text="Compra simples e segura" />
                        
                    </BenefContainer>
                    
                </div>

                <img src={introCoffe} alt="" />
            </IntroContent>
        </IntroContainer>
    )
}