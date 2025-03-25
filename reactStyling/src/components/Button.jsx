import {styled} from 'styled-components'

const MainActionButton = styled.button`
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;

    &:hover {
        background-color: #f0920e;
    }
`

const SecondaryActionButton = styled.button`
    color: #f0b322;
    border: none;

    &:hover {
        color: #f0920e;
    }
`

export function CustomMainActionButton({buttonText, ...props}) {
    return (
        <MainActionButton type="button" {...props} >
            {buttonText}
        </MainActionButton>
    );
}

export function CustomSecondaryActionButton({buttonText, ...props}) {
    return (
        <SecondaryActionButton type="button" {...props} >
            {buttonText}
        </SecondaryActionButton>
    );
}