import { ImageBackground, View, TouchableOpacity, StyleSheet} from "react-native";
import React, {useState} from "react";
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite'

function SelectedCardScreen({ route }){

    const db = SQLite.openDatabaseAsync('OwnDB')

    const { cardID, cardName, cardImage, cardState } = route.params;

    const [star, setStar] = useState(cardState)


    const handleStar = async (cardID) => {
        const newState = star === 0 ? 1 : 0;
        const result = await db.runAsync(`UPDATE cards SET state = ? WHERE id = ?`, newState, cardID)
    }

    return(
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: cardImage }}
                style={[styles.image, {opacity: star?1:0.15}]}>
            </ImageBackground>

            <TouchableOpacity style={styles.starButton} onPress={handleStar}>
                {star === 1 ? (
                    <Ionicons name="star" size={24} color="white"/>
                ) : (
                <Ionicons name="star-outline" size={24} color="white"/>)}
            </TouchableOpacity>
        </View>
    )
}

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    image: {
        width: '100%',
        height:'100%',
        justifyContent: 'flex-end'
    },
    starButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#4D0B0A',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:1
    }
});


export default SelectedCardScreen;