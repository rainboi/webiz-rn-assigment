import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const SearchBar = ({onChange}) => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={term}
        onChangeText={(val) => {
          setTerm(val);
          onChange(val);
        }}
        placeholder="Search"
        autoCapitalize="sentences"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    color: COLORS.ONYX,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
