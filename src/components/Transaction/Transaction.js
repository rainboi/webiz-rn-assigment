import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import CURRENCIES from '../../constants/currencies';
import moment from 'moment';
const ReceiptPNG = require('../../assets/img/receipt.png');

const Transaction = ({
  item: {merchant, date, amount, currency, status, receipt_url, merchant_logo},
  pressable = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={pressable ? 0.85 : 1}
      onPress={onPress}>
      <View style={styles.info}>
        <View
          style={[
            styles.statusIndicator,
            {backgroundColor: COLORS.STATUSES[status]},
          ]}
        />
        <Image style={styles.merchantLogo} source={{uri: merchant_logo}} />
        <View style={styles.left}>
          <View style={styles.merchantAndReceipt}>
            <Text style={styles.merchant} numberOfLines={1}>
              {merchant}
            </Text>
            {status === 'CLEARED' || status === 'PENDING' ? (
              <Image
                style={[
                  styles.receipt,
                  receipt_url ? null : styles.receiptInactive,
                ]}
                source={ReceiptPNG}
              />
            ) : null}
          </View>
          <Text style={styles.date}>
            {moment(date).format('HH:mm DD/MM/YYYY')}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.currency}>{CURRENCIES[currency]}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 40,
    width: '100%',
    // backgroundColor: '#fff',
    display: 'flex',
    borderRadius: 5,
    overflow: 'hidden',
    padding: 5,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    display: 'flex',
    // backgroundColor: 'blue',
    flex: 4,
  },
  right: {
    // width: 80,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  merchant: {
    color: COLORS.WHITE,
    fontSize: 17,
  },
  date: {
    color: '#dfe2e8',
    fontSize: 12,
  },
  statusIndicator: {
    marginRight: 10,
    width: 4,
    marginTop: 5,
    height: '85%',
    borderRadius: 5,
  },
  amount: {
    fontSize: 18,
    color: COLORS.WHITE,
  },
  currency: {
    marginLeft: 3,
    fontSize: 20,
    color: COLORS.WHITE,
    width: 18,
  },
  merchantAndReceipt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  receipt: {
    marginLeft: 8,
    height: 16,
    width: 16,
  },
  receiptInactive: {
    opacity: 0.25,
  },
  merchantLogo: {
    marginRight: 10,
    borderRadius: 100,
    width: 40,
    height: 40,
  },
});

export default Transaction;
