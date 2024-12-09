import { ImageBackground, View, TouchableOpacity, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite'

function SelectedCardScreen({ route }){

    const db = SQLite.openDatabaseAsync('OwnDB')
    const { cardID, cardName, cardImage, cardState, collectionId } = route.params;
    const [star, setStar] = useState(cardState)

    const updateState = async () => {
        const db = await SQLite.openDatabaseAsync('OwnDB')
        const newState = star ? 0 : 1
        const result = await db.runAsync('UPDATE cards SET state = ? WHERE id = ? AND collectionId = ?', newState, cardID, collectionId)
        setStar(newState)
    }

    const getCard = async (params) => {
        const db = await SQLite.openDatabaseAsync('OwnDB')
        const card = await db.getFirstAsync(`SELECT state FROM cards WHERE id = ? AND collectionId = ?`, cardID, collectionId)

        if (card) {
            setStar(card.state)
        }
    }

    useEffect(() => {
        getCard()
    }, [cardID, collectionId])

    return(
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: cardImage }}
                style={[styles.image, {opacity: star?1:0.15}]}>
            </ImageBackground>

            <TouchableOpacity style={styles.starButton} onPress={updateState}>
                {star ? (
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