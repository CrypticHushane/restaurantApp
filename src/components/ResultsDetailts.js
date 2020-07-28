import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Divider} from 'react-native-elements';

const ResultsDetailts = ({imageSource, name, stars, reviews}) => {
    return (
        <View>
            <Image source={{uri:`${imageSource}`}} style={styles.imageStyle}/>
            <Text style={styles.secondHeaderText}>{name}</Text>
            <Text style={{ marginBottom: 10}}>{stars} Stars, {reviews} reviews</Text>
            <Divider style={{ backgroundColor: 'gray' }}/>
        </View>
    )
}


const styles = StyleSheet.create({
    secondHeaderText: {
        fontWeight: "700",
        marginBottom: 10
    },
    imageStyle: {
        marginTop: 10,
        marginBottom: 10,
        width: 250,
        height: 250,
        marginRight: 5,
    }
});

export default ResultsDetailts;