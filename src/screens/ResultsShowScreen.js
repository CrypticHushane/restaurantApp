import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    const [err, setErr] = useState('');

    const getResult = async (id) => {
        try {
             const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (error) {
            setErr(error.toString);
        }
       
    };
     
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null
    }
        return (
            <>
                <Text style={styles.heading}>{result.name}</Text>
                <> 
                    <Text style={styles.details}>Phone #: {result.display_phone}</Text>
                    <Text style={styles.details}>City: {result.location.city}</Text>
                    <Text style={styles.details}>Location: </Text>
                    <FlatList
                        horizontal
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        data={result.location.display_address}
                        centerContent={true}
                        keyExtractor={((address) => address)}
                        renderItem={ ({item}) => <Text style={styles.locaton}>{item}</Text>}
                    />
                    <FlatList 
                        data={result.photos}
                        keyExtractor={((photo) => photo)}
                        renderItem={({item}) => <Image style={styles.images} source={{ uri: `${item}`}}/>}
                    />
                </>
            </>
        )
}

export default ResultsShowScreen;

const styles = StyleSheet.create({
    images:{
         width: 350, 
         height: 200, 
         marginTop:10,
         marginLeft:10,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    details: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 3,
    },
    locaton: {
        bottom: 5,
        paddingTop:-20, 
        paddingBottom:6,
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 3,
    }
})
