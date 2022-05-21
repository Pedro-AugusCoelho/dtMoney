import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps{
    OnModalNewTransaction:() => void;
}

export const Header = ({OnModalNewTransaction}:HeaderProps) => {
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Logo" /> 
                <button type='button' onClick={OnModalNewTransaction}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
};