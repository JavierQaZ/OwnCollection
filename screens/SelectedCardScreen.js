import { ImageBackground, View, TouchableOpacity, StyleSheet  } from "react-native";
import React, {useState} from "react";
import { Ionicons } from '@expo/vector-icons';

function SelectedCardScreen(){
  const [star, setStar] = useState(true)

  const handleStar = () =>
    setStar(!star)
  
  return(
    <>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://pbs.twimg.com/media/GbnKWvxbUAARDVS?format=jpg&name=large' }} // Reemplaza con la URL de la imagen
          style={[styles.image, {opacity: star?1:0.15}]}>
        </ImageBackground>

        <TouchableOpacity style={styles.starButton} onPress={handleStar}>
          {star ? (<Ionicons name="star" size={24} color="white"/>):
          (<Ionicons name="star-outline" size={24} color="white"/>)}
        </TouchableOpacity>
      </View>
    </>
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
