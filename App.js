// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Modal } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Menu, PaperProvider } from 'react-native-paper';

// Screens
import CollectionScreen from './screens/CollectionScreen';
import CardScreen from './screens/CardScreen';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

const Stack = createStackNavigator();

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  //const toggleOptionsModal = () => setOptionsModalVisible(!optionsModalVisible);

  return (
    <PaperProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#573333' },
            headerTintColor: '#ffffff',
            contentStyle: { backgroundColor: '#614c4c' },
          }}
        >
          <Stack.Screen
            name="OwnCollection"
            component={CollectionScreen}
            options={{
              headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {optionsModalVisible ? (
                    <>
                      <TouchableOpacity onPress={() => { console.log('Editar'); toggleOptionsModal(); }} style={{ marginRight: 16 }}>
                        <AntDesign name="edit" size={24} color="white" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => { console.log('Eliminar'); toggleOptionsModal(); }} style={{ marginRight: 16 }}>
                        <Ionicons name="trash" size={24} color="white" />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <Menu
                      visible={menuVisible}
                      onDismiss={closeMenu}
                      anchor={
                        <AntDesign
                          name="filter"
                          size={24}
                          color="white"
                          onPress={openMenu}
                          style={{ marginRight: 16 }}
                        />
                      }
                    >
                      <Menu.Item onPress={() => { console.log("Opción 1"); closeMenu(); }} title="Recientes" />
                      <Menu.Item onPress={() => { console.log("Opción 2"); closeMenu(); }} title="A - Z" />
                    </Menu>
                  )}
                </View>
              ),
            }}
            //initialParams={{ onLongPressCard: toggleOptionsModal }}
          />
          <Stack.Screen name='Collection Name' component={CardScreen}/>
          {/*<Stack.Screen name='Yes Card Name' component={YesCardScreen}/>}
          /*<Stack.Screen name='No Card Name' component={NoCardScreen}/>*/}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#614c4c',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
