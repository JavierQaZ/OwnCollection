// CollectionScreen.js
import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Components
import AddCollection from '../components/AddCollection';

// Navigation
import { useNavigation } from '@react-navigation/native';

const CollectionScreen = () => {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const handlePress = () => {
    navigation.navigate('Collection Name');
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.card}
                    onPress={handlePress}
                >
                    <ImageBackground
                        source={{ uri: 'https://pbs.twimg.com/media/GbnKWvxbUAARDVS?format=jpg&name=large' }} // Reemplaza con la URL de la imagen
                        style={styles.cardImage}
                    >
                        <Text style={styles.cardText}>Collection Name</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={openModal}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <AddCollection/>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 2,
        justifyContent: 'center'
    },
    card: {
        width: 180,
        height: 300,
        margin:8,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        overflow:'hidden'
    },
    cardImage: {
        width: '100%',
        height:'100%',
        justifyContent: 'flex-end'
    },
    cardText: {
    //backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color:'white',
        margin: 8,
        fontSize: 16,
        textAlign: 'center'
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#8B0000',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CollectionScreen;

