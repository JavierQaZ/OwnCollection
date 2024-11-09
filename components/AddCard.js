import { StyleSheet, View, TouchableOpacity, Modal, Text, TextInput} from 'react-native';
import {AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons';

// Navigation
import React, { useState } from 'react';

function AddCard(){

    const closeModal = () => setModalVisible(false);
    
    return (
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Agregar Carta</Text>
                <Text style={styles.label}>Título de la Carta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre Carta"
                />
                <Text style={styles.label}>Imagen de la Categoría</Text>
                <View style={styles.imageInputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="image.png"
                        editable={false}
                    />
                    <TouchableOpacity style={styles.cameraButton}>
                        <Ionicons name="camera" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                    <Text style={styles.label}>ID de la Carta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0001"
                    />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                        <MaterialIcons name="cancel" size={20} color="black" />
                        <Text style={styles.buttonCText}> Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.acceptButton} onPress={closeModal}>
                        <AntDesign name="checkcircleo" size={18} color="white" />
                        <Text style={styles.buttonAText}>  Aceptar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 14,
        color: 'gray',
        marginTop: 10
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 5
    },
    imageInputContainer: {
        marginLeft: -40,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginTop: 5,
    },
    cameraButton: {
        marginLeft: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    cancelButton: {
        flexDirection: 'row',
        backgroundColor: '#e4e4e4',
        borderWidth: 1,
        borderColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    acceptButton: {
        flexDirection: 'row',
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonAText: {
        color: 'white'
    },
    buttonCText: {
        color: 'black'
    }
});
export default AddCard;
