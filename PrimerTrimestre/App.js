import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, Pressable, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const imgStyle = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  stretch: {
    width: 300,
    height: 200,
    resizeMode: 'stretch',
  },
  List: {
    width: 350,
    height: 350,
    resizeMode: 'stretch',
  }
});

//APP

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator >
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Sevilla"
          component={SevillaScreen}
        />
        <AppStack.Screen
          name="Valencia"
          component={ValenciaScreen}
        />
        <AppStack.Screen
          name="Tenerife"
          component={TenerifeScreen}
        />
        <AppStack.Screen
          name="Madrid"
          component={MadridScreen}
        />
        <AppStack.Screen
          name="Barcelona"
          component={BarcelonaScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

//BARRA INFERIOR

function Home() {
  return (

    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'copy-outline' : 'ios-list-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'red',
    })}
    >

      <Tab.Screen name="INFO" component={InfoScreen} />
      <Tab.Screen name="LISTA" component={ListaScreen} />
    </Tab.Navigator>

  );
}

//PANTALLA DE DESCRIPCION

const InfoScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Para usar la App, vaya a la pestaña "LISTA" y seleccione el pais deseado.</Text>

    </View>
  );
}

//PANTALLA DE LA LISTA

const ListaScreen = ({ navigation }) => {
  return (

    <ScrollView>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => navigation.navigate('Sevilla')}>

        <Text>1. SEVILLA</Text>
        <Image
          style={imgStyle.stretch}
          source={require('./img/Sevilla.jpg')}

          

        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Valencia')}>
      <Text>2. VALENCIA</Text>

        <Image
          style={imgStyle.stretch}
          source={require('./img/Valencia.jpg')}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Barcelona')}>
      <Text>3. BARCELONA</Text>

        <Image
          style={imgStyle.stretch}
          source={require('./img/Barcelona.jpg')}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Madrid')}>
      <Text>4. MADRID</Text>

        <Image
          style={imgStyle.stretch}
          source={require('./img/Madrid.jpg')}
        />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Tenerife')}>
      <Text>5. TENERIFE</Text>

        <Image
          style={imgStyle.stretch}
          source={require('./img/Tenerife.jpg')}
        />
      </Pressable>

    </View>

    </ScrollView>

  );
}

//PANTALLA INTERNA DE CADA DESTINO TURISTICO

const SevillaScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={imgStyle.List}
        source={require('./img/Sevilla2.jpg')}
      />

      <Text>Localizado en Andalucia, España, Sevilla cuenta con una impecable historia, grastronomia, monumentos,
         y clima perfecto para visitarlo en cualquier epoca del año.</Text>

      <Text>Periodo optimo de turismo: 1 de Enero - 31 de Diciembre.</Text>

    </View>
  );
}

function ValenciaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={imgStyle.List}

        source={require('./img/Valencia2.jpg')}
      />
      <Text>Localizado en España, Valencia es conocida como la ciudad de las artes
         y las ciencias por sus emblematicas construcciones futuristas, como el planetario y oceanario.</Text>

      <Text>Periodo optimo de turismo: 1 de Marzo - 30 de noviembre.</Text>

    </View>
  );
}

function BarcelonaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={imgStyle.List}
        source={require('./img/Barcelona2.jpg')}
      />
      <Text>Localizado en Cataluña, España, Barcelona cuenta con una arquitectura 
        modernista que puede deslumbrar a cualquier persona gracias a sus grandes monumentos y museos.</Text>

      <Text>Periodo optimo de turismo: 1 de Mayo - 31 de Septiembre.</Text>

    </View>
  );
}

function MadridScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={imgStyle.List}
        source={require('./img/Madrid2.jpg')}
      />
      <Text>Localizada en España, La capital de España destaca 
        por sus afables monumentos y fuentes, sus plazas y parques y la belleza de sus castizos barrios.</Text>

      <Text>Periodo optimo de turismo: Primavera (1 de Marzo - 30 de Mayo) y Otoño (1 de Septiembre - 30 de Noviembre).</Text>

    </View>
  );
}

function TenerifeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={imgStyle.List}
        source={require('./img/Tenerife2.jpg')}
      />
      <Text>Localizado en las Islas Canarias, España, Tenerife cuenta con un clima 
        suave perfecto para visitar, gastronima llena de sabores y miradores que cortan las respiracion.</Text>

      <Text>Periodo optimo de turismo: 1 de Abril - 30 de Octubre.</Text>

    </View>
  );
}








