import { useTransition } from '../../hooks/UseTransactions';
import { Container, ContainerMobile } from './styles';


export const TransactionsTable = () => {

    const {transactions} = useTransition();
    
    return(
        <>
        
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((val) => (
                        <tr key={val.id}>
                            <td>{val.title}</td>
                            
                            <td className={val.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style:'currency',
                                    currency:'BRL',
                                }).format(val.amount)}
                            </td>
                            
                            
                            <td>{val.category}</td>
                            
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(val.createAt))}
                            </td>
                        
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </Container>

        <ContainerMobile>
            {transactions.map((val) => (
                <div className='table' key={val.id}>
                
                <div className='thead'>
                    <p>Título</p>
                    <p>Valor</p>
                    <p>Categoria</p>
                    <p>Data</p>
                </div>
                
                <div className='tbody'>
                    
                    <p>{val.title}</p>
                            
                    <p className={val.type}>
                        {new Intl.NumberFormat('pt-BR', {
                            style:'currency',
                            currency:'BRL',
                        }).format(val.amount)}
                    </p>
                            
                            
                    <p>{val.category}</p>
                            
                    <p>
                        {new Intl.DateTimeFormat('pt-BR').format(new Date(val.createAt))}
                    </p>
                </div>
                
                </div>
            ))
            }
        </ContainerMobile>
        
        </>
    )
}