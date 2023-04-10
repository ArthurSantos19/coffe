import { InputQuantity } from "../../../../components/InputQuantity";
import { AddCart, CoffeCardContainer, FooterDescription, Name, Tag, TextDescription } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function CoffeCard() {
    return(
        <CoffeCardContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1682294400&Signature=X6jZO9ZLu10Gq0zgqkPwD0nOnfiJShgO1vzCWWkXZW6mG3mU-nayoRV2uulUI6UlETp~bND4ffT6I-WFP68kQhsGu2PPmbrOKstcWPJcLLrf8bJm9qHeauHs0Ce3dylL2g42IXmWI9BMFPu4Exw-Z32K3581Iq52k41daKzWoESj4n1XggNFjvQNEwzHixqajzHCFb8OVetU2jUZVfz2lWQ2RQyuZYZUDbMt8fUegJOqwrVfHtSbX4LLncF7-Jv4GQYMoeyowQ5G3jmMRehwWIab0MV1A1kGdq7TMOTaUgcQRSdyM9XAhwbYO7fr7UGaEK2WI2em5s3FGAci9~9Y6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <Tag>
                <span>Tradicional</span>
            </Tag>
            <Name>Expresso Tradicional</Name>
            <TextDescription>O tradicional café feito com água quente e grãos moídos</TextDescription>
            <FooterDescription>
                <div>
                R$ 9,90
                </div>
                <AddCart>
                    <InputQuantity/>
                    <button>
                        <ShoppingCart size={21} weight="fill"/>
                    </button>
                </AddCart>
                
            </FooterDescription>
        </CoffeCardContainer>
    )
}