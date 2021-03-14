import React, {useState, useCallback} from 'react';
import transactionsDataRaw from '../dummyData/transactions';

const transactionsData = transactionsDataRaw
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((e) => {
    e.id = String(e.id);
    return e;
  });

const TransactionsContext = React.createContext();

const TransactionsProvider = ({children}) => {
  const [transactions, setTransactions] = useState(transactionsData);

  const addReceipt = useCallback(
    (id, uri) => {
      const index = transactions.findIndex((item) => item.id === id);
      setTransactions(() => {
        const updated = [...transactions];
        updated[index].receipt_url = uri;
        return updated;
      });
    },
    [transactions, setTransactions],
  );

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addReceipt,
      }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export {TransactionsProvider, TransactionsContext};
