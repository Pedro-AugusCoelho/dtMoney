import styled from "styled-components";


interface HighlightBackgroundProps {
    amount:string;
}

export const Container = styled.div<HighlightBackgroundProps>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:2rem;
    margin-top: -10rem;
    @media(max-width:768px){
        display: flex;
        flex-wrap: wrap;
        gap:4%;
    }
    .deposits{
        @media(max-width:768px){
        width: 48%;
        }
        @media(max-width:550px){
        width: 100%;
        }
    }
    .withdraws{
        @media(max-width:768px){
        width: 48%;
        }
        @media(max-width:550px){
        width: 100%;
        margin-top: 2rem;
        }
    }
    .total{
        @media(max-width:768px){
        width: 100%;
        margin-top: 2rem;
        } 
        @media(max-width:550px){
        width: 100%;
        }
    }
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color:var(--text-title);
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 500;
        }
        &.highlight_background{
            background:var(${props => props.amount});
            color:#fff;
        }
    }
`;