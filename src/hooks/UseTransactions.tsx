import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type TransactionsType = {
    id:number,
    title:string,
    category:string,
    amount:number,
    type:string,
    createAt:string,
};

type TransactionInput = Omit<TransactionsType, 'id' | 'createAt'>

interface TransactionsContextData {
    transactions:TransactionsType[],
    createTransactions:(transaction:TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children:ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export const TransactionsProvider = ({children}:TransactionsProviderProps) => {
    
    const [transactions , setTransactions] = useState<TransactionsType[]>([]);

    useEffect(() => {
       api.get('/transactions').then(response => setTransactions(response.data.transactions));
    },[]);

    const createTransactions = async(transactionInput:TransactionInput) => {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createAt: new Date(),
        });
        
        const { transaction } = response.data;
        
        setTransactions([
            ...transactions,
            transaction
        ]);
    }
    
    
    return(
        <TransactionsContext.Provider value={{transactions , createTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}


export const useTransition = () => {
    const context = useContext(TransactionsContext);
    return context;
}


