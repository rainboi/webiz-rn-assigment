import React, {useContext, useCallback} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import COLORS from '../../constants/colors';
import {TransactionsContext} from '../../contexts/TransactionsContext';

const Receipt = ({url, transactionId}) => {
  const {addReceipt} = useContext(TransactionsContext);

  const handleAddReceipt = useCallback(() => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (e) => {
        console.log(e);
        addReceipt(transactionId, e.uri);
      },
    );
  }, [addReceipt, transactionId]);

  return (
    <View style={styles.container}>
      {url ? (
        <Image style={styles.image} source={{uri: url}} />
      ) : (
        <TouchableOpacity
          style={styles.receiptPicker}
          onPress={handleAddReceipt}>
          <Text style={styles.addReceiptText}>Add a receipt</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 465,
    width: '100%',
    overflow: 'hidden',
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  receiptPicker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addReceiptText: {
    color: COLORS.WHITE,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default Receipt;
