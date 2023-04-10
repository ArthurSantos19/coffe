import styled from "styled-components";

export const InputContainer = styled.div`
    flex: 1;
    background: ${({theme}) => theme.colors["base-button"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    border-radius: 6px;

    padding: 0.5rem;

    input {
        text-align: center;
        width: 100%;
        background: none;
        border: none;
        color: ${({theme}) => theme.colors["brand-purple-dark"]};
    }
`;