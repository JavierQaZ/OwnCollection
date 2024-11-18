import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, StyleSheet, ImageBackground} from 'react-native'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite'
import * as ImagePicker from 'expo-image-picker'

export default function CollectionScreen({ navigation }) {

    const db = SQLite.openDatabaseAsync('OwnDB')

    const [collections, setCollections] = useState([])
    const [collectionName, setCollectionName] = useState('')
    const [collectionImageUri, setCollectionImageUri] = useState('')

    const [refresh, setRefresh] = useState(false)

    //Modal
    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);


    const getCollections = async () => {
        const db = await SQLite.openDatabaseAsync('OwnDB')
        const allCollections = await db.getAllAsync(`SELECT * FROM collections`)
        setCollections(allCollections)
    }
    const insertCollection = async () => {
        if(!collectionName) return;
        const db = await SQLite.openDatabaseAsync('OwnDB');
        const result = await db.runAsync(`INSERT INTO collections (name, coverImage) VALUES (?, ?)`, collectionName, collectionImageUri)
        closeModal()
        setRefresh(!refresh)
    }

    useEffect(() => {
        getCollections()
    }, [refresh])

    //ImagePicker
    const [imageUri, setImageUri] = useState(null);

    const selectImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Se requiere permiso para acceder a la galería.');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            aspect: [9,16],
        });
        setCollectionImageUri(pickerResult.assets[0].uri)

        if (!pickerResult.canceled) {
            setImageUri(pickerResult.uri);
        }
    };

    const takePhoto = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Se requiere permiso para acceder a la cámara.');
            return;
        }

        const pickerResult = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [9,16],
            quality: 1,
        });
        setCollectionImageUri(pickerResult.assets[0].uri)
        if (!pickerResult.canceled) {
            setImageUri(pickerResult.uri);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={collections}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Collection Name', { collectionId: item.id, collectionName: item.name })}
                    >
                        <ImageBackground
                            source={{ uri: item.coverImage }}
                            style={styles.cardImage}
                        >
                            <Text style={styles.cardText}>{item.name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={styles.addButton} onPress={openModal}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType='none'
                transparent={true}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Agregar Colección</Text>
                        <Text style={styles.label}>Título de la Colección</Text>
                        <TextInput
                            style={styles.input}
                            value={collectionName}
                            onChangeText={setCollectionName}/>
                        <Text style={styles.label}>Imagen de la Colección</Text>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
                                <Ionicons name="camera" size={20} color="gray" />
                                <Text style={styles.buttonCText}>  Tomar Foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.galleryButton} onPress={selectImage}>
                                <Ionicons name="image" size={20} color="gray" />
                                <Text style={styles.buttonCText}>  Subir Foto</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                                <MaterialIcons name='cancel' size={20} color='#000'/>
                                <Text style={styles.buttonCText}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.acceptButton} onPress={insertCollection}>
                                <AntDesign name='checkcircleo' size={18} color='#fff'/>
                                <Text style={styles.buttonAText}>Añadir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    card: {
        width: 180,
        height: 320,
        margin:8,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        overflow:'hidden'
    },
    cardText: {
        color:'white',
        margin: 8,
        fontSize: 16,
        textAlign: 'center'
    },
    cardImage: {
        width: '100%',
        height:'100%',
        justifyContent: 'flex-end'
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#4D0B0A',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between'
    },
    cancelButton: {
        flexDirection: 'row',
        backgroundColor: '#e4e4e4',
        borderWidth: 1,
        borderColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    acceptButton: {
        flexDirection: 'row',
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonAText: {
        color: 'white'
    },
    buttonBText: {
        color: 'black'
    },
    buttonCText: {
        color: 'gray'
    },
    imagePreview: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    cameraButton: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        width: '45%',
    },
    galleryButton: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        width: '45%',
    }
}
)