import { Container , RadioBox, TransactionTypeContainer } from "./styles";
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg  from '../../assets/outcome.svg';
import React, { useContext, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext, useTransition } from "../../hooks/UseTransactions";

interface NewTransactionModalProps {
    isNewTransactionModalOpen:boolean;
    OnModalNewTransactionClose:() => void;
}

export const NewTransactionModal = ({isNewTransactionModalOpen , OnModalNewTransactionClose}:NewTransactionModalProps) => {

    const [title , setTitle] = useState('');
    const [amount, setAmount ] = useState(0);
    const [category , setCategory] = useState('');
    const [type , setType] = useState<'deposit' | 'withdraw'>('deposit');

    const {createTransactions} = useTransition();

    const handleCreateNewTransaction = async (e:React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        await createTransactions({
            title,
            amount,
            category,
            type
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        OnModalNewTransactionClose();
    }
    
    return(
        <Modal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={OnModalNewTransactionClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            
            <Container onSubmit={handleCreateNewTransaction}>
                <button 
                    type='button' 
                    onClick={OnModalNewTransactionClose} 
                    className='react-modal-close'
                >
                    <img src={closeImg} alt='closeImg' />
                </button>
                
                <h2>Cadastrar Transação</h2>
                
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input 
                    type='number'
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type='button' 
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        ActiveColor="green"
                    >
                    
                        <img src={incomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox 
                        type='button' 
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        ActiveColor="red"
                    >
                        <img src={outcomeImg} alt='Retirada' />
                        <span>Saída</span>
                    </RadioBox>
                
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"  
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        
        </Modal>
    );
}