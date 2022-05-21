import styled from "styled-components";


export const Container = styled.div`
    margin-top: 4rem;
    @media(max-width:550px){
        display: none;
    }
    table{
        width: 100%;
        border-spacing: 0 0.5rem;
    }
    tr{
        display: flex;
    }
    th{
        flex:1;
        color:var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;  
    }
    td{
        flex:1;
        padding: 1rem 2rem;
        margin-top: 1rem;
        border:0;
        background: var(--shape);
        color:var(--text-body);
        border-radius: 0.25rem;
        &:first-child{
            color:var(--text-title);
        }
        &.deposit{
            color:var(--green);
        }
        &.withdraw{
            color:var(--red);
        }
    }
`;

export const ContainerMobile = styled.div`
    display: none;
    margin-top: 4rem;
    @media(max-width:550px){
        display: block;
    }
    .table{
        display: flex;
        margin-top: 2rem;
        padding: 1rem;
        background: var(--shape);
        box-shadow: .25rem .25rem .7rem #444;
        border-radius: 0.5rem;
    }
    .thead{
        display: flex;
        flex-direction: column;
        margin-right: 1rem;
        p{
        flex:1;
        color:var(--text-body); 
    }
    }
    .tbody{
        display: flex;
        flex-direction: column;
        p{
            flex:1;
            color:var(--text-title);  
    }
    .deposit{
        color:var(--green);
    }
    .withdraw{
        color:var(--red);
    }
    }
`;