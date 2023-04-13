import { InputQuantity } from "../../../../components/InputQuantity";
import { coffees } from "../../../../data/coffees";
import { formatNumber } from "../../../../utils/formatNumber";
import { AddCart, CoffeCardContainer, FooterDescription, Name, Tag, TextDescription } from "./styles";
import { ShoppingCart } from "phosphor-react";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeCard({ coffee }: CoffeeProps) {
    const formatPrice = formatNumber(coffee.price)
    return(
        <CoffeCardContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />
            <Tag>
                {coffee.tags.map((tag) => 
                <span key={`${coffee.id}${tag}`}>{tag}</span>
                )}
            </Tag>
            <Name>{coffee.name}</Name>
            <TextDescription>{coffee.description}</TextDescription>
            <FooterDescription>
                <div>
                {formatPrice}
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