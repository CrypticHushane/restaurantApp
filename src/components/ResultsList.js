import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import ResultsDetailts from './ResultsDetailts';

const ResultsList = ({title, results , navigation}) => {

    if(!results.length){
        return null;
    }
    return (
        <View style={{padding: 15}}> 
            <Text style={styles.headerText}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('ResultsShow', {id: item.id}, {body: item})}>
                            <ResultsDetailts imageSource={item.image_url} name={item.name} stars={item.rating} reviews={item.review_count}/>
                        </TouchableOpacity>
                    
                    )
                }}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    headerText: {
        fontWeight: "bold",
        fontSize: 25,
    },
});
export default withNavigation(ResultsList);