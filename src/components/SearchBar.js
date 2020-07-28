import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange} 
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical:10,
        flexDirection: "row",
    },
    input: {
      flex: 1,
      fontSize: 17
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal:15,
    }
})
export default SearchBar;

// marginTop: 10