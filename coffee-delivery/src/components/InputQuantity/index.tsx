import { InputButton, InputContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function InputQuantity() {
    return(
        <InputContainer>
            
            <InputButton>
                <Minus size={22}/>
            </InputButton>
            <input type="number" readOnly value={1} />
            <InputButton>
                <Plus size={22} weight="fill"/>
            </InputButton>
        </InputContainer>
    )
}