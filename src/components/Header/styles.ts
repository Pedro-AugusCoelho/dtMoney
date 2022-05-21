import styled from 'styled-components';


export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin:0 auto;
    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content:space-between;
    @media(max-width:425px){
        flex-direction: column;
    }
    button{
        font-size: 1rem;
        color:#FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.25s;
        &:hover{
            filter: brightness(0.9);
        }
        @media(max-width:425px){
            margin-top: 2rem;
        }
    }
`;