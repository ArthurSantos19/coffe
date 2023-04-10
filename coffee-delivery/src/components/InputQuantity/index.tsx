import { InputContainer } from "./styles";

export function InputQuantity() {
    return(
        <InputContainer>
            <input type="number" readOnly value={1} />
        </InputContainer>
    )
}