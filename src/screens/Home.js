import React, {useState, useCallback, useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Transaction from '../components/Transaction/Transaction';
import COLORS from '../constants/colors';
import SearchBar from '../components/SearchBar/SearchBar';
import {TransactionsContext} from '../contexts/TransactionsContext';

const HomeScreen = ({navigation}) => {
  const {transactions} = useContext(TransactionsContext);
  const [searchResults, setSearchResults] = useState(transactions);

  const onTermChange = useCallback(
    (term) => {
      //  Search
      term = term.toLowerCase();
      setSearchResults(() =>
        transactions.filter(({merchant}) =>
          merchant.toLowerCase().includes(term),
        ),
      );
    },
    [setSearchResults, transactions],
  );

  const TransactionWithNav = ({item}) => {
    return (
      <Transaction
        item={item}
        pressable={true}
        onPress={() =>
          navigation.navigate('Transaction', {transactionId: item.id})
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar onChange={onTermChange} />
      </View>
      <FlatList
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={styles.listHeader}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        data={searchResults}
        renderItem={TransactionWithNav}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ONYX,
    flex: 1,
  },
  itemSeperator: {
    height: 10,
  },
  searchBarContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    zIndex: 2,
  },
  listHeader: {
    height: 20,
  },
  list: {
    paddingHorizontal: 20,
    marginTop: -5,
  },
});

export default HomeScreen;
