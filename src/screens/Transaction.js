import React, {useMemo, useContext} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Transaction from '../components/Transaction/Transaction';
import COLORS from '../constants/colors';
import Receipt from '../components/Receipt/Receipt';
import {TransactionsContext} from '../contexts/TransactionsContext';

const TransactionScreen = ({route}) => {
  const {transactions} = useContext(TransactionsContext);

  const transaction = useMemo(() => {
    return transactions.find((item) => item.id === route.params.transactionId);
  }, [route.params.transactionId, transactions]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Transaction item={transaction} />
      <View style={styles.content}>
        <View style={styles.receiptContainer}>
          <Text style={styles.receiptText}>RECEIPT</Text>
          <Receipt
            transactionId={transaction.id}
            url={transaction.receipt_url}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ONYX,
  },
  contentContainer: {
    minHeight: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  receiptContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  receiptText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 30,
  },
});

export default TransactionScreen;
