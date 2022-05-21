import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/stylesGlobal";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/UseTransactions";


Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen , setIsNewTransactionModalOpen] = useState(false);
    
    const handleOpenNewTransactionModal = () => {
        setIsNewTransactionModalOpen(true);
    }

    const handleCloseNewTransactionModal = () => {
        setIsNewTransactionModalOpen(false);
    }
  
  
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header OnModalNewTransaction={handleOpenNewTransactionModal} />
      <NewTransactionModal 
        isNewTransactionModalOpen={isNewTransactionModalOpen} 
        OnModalNewTransactionClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionsProvider>
  );
}
