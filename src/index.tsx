import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer, Model } from 'miragejs';


createServer({
  models:{
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
        id:1,
        title:'Freelancer de website',
        category:'Dev',
        amount:12000,
        type:'deposit',
        createAt: new Date('2022-02-15 09:00:00'),
        },

        {
          id:2,
          title:'Hamburguer',
          category:'Comida',
          amount:50,
          type:'withdraw',
          createAt: new Date('2022-02-29 18:00:00'),
          },
    
        ],
    })
  },
  
  routes(){
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });
    
    this.post('/transactions' , (schema , request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction' , data);
    });
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
