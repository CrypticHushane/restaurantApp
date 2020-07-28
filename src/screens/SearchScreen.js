import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = ({ }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{flex: 1}}> 
            <SearchBar 
                term={term} 
                onTermChange={ newTerm => setTerm(newTerm)} 
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
                <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender!' />
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({});
export default SearchScreen


