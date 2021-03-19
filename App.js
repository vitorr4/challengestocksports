/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import type {Node} from 'react';

// A list where data retrieved from the backend would stored.
const TEAMS = [
  {
    key: {
      name: 'Athletico Paranaense',
      logo: require('./logos/cap.png'),
      description: 'Sobre o ',
    },
  },
  {
    key: {
      name: 'Bahia',
      logo: require('./logos/ecb.png'),
      description: 'Sobre o ',
    },
  },
  {
    key: {
      name: 'Botafogo',
      logo: require('./logos/bfc.png'),
      description: 'Sobre o ',
    },
  },
  {
    key: {
      name: 'São Paulo',
      logo: require('./logos/spfc.png'),
      description: 'Sobre o ',
    },
  },
  {
    key: {
      name: 'Red Bull Bragantino',
      logo: require('./logos/rbb.png'),
      description: 'Sobre o ',
    },
  },
  {
    key: {
      name: 'Atlético Mineiro',
      logo: require('./logos/cam.png'),
      description: 'Sobre o ',
    },
  },
];

const Stack = createStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#1947e6',
  },
};

// Root component is used for setting react Navigation routes.
const App: () => Node = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Lista de times" component={TeamsList} />
        <Stack.Screen name="Time" component={Team} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Home screen
const Home: () => Node = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>StockSports.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Lista de times')}>
        <Text style={styles.homeBtn}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  );
};

/*  Where the list of soccer teams appear. FlatList was used to display the list.
    Information about about each team is fetched from TEAMS list above, and saved in the data prop.
    Then, the FlatList component uses sort of a map list to create each list item.
*/
const TeamsList: () => Node = ({navigation}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={TEAMS}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Time', {
                name: item.key.name,
                logo: item.key.logo,
                description: item.key.description,
              })
            }>
            <View style={styles.listItem}>
              <Image source={item.key.logo} style={styles.imgMini} />
              <Text style={styles.itemLabel}>{item.key.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// When the user presses a list item (team), he/she is redirect to the dynamically generate team page.
const Team = ({route}) => {
  const {name, logo, description} = route.params;
  return (
    <View style={styles.teamContainer}>
      <Image source={logo} style={styles.logoFull} />
      <View style={styles.snippet}>
        <View style={styles.nameView}>
          <Text style={styles.itemLabel}>{name}</Text>
        </View>
        <Text style={styles.description}>
          {description}
          {name}.
        </Text>
      </View>
    </View>
  );
};

// Styles used in the components.
const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#1947e6',
  },
  homeTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  homeBtn: {
    color: '#1947e6',
    backgroundColor: '#fff',
    padding: 10,
    width: 200,
    fontSize: 20,
    textAlign: 'center',
  },
  listContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 15,
    backgroundColor: '#f4f4f4',
    elevation: 3,
  },
  imgMini: {
    width: 75,
    height: 75,
    marginRight: 15,
  },
  itemLabel: {
    fontSize: 20,
  },
  teamContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 700,
    backgroundColor: '#fff',
  },
  logoFull: {
    position: 'relative',
    marginTop: 20,
    width: 250,
    height: 250,
  },
  snippet: {
    position: 'relative',
    marginTop: 30,
    backgroundColor: '#fff',
    elevation: 4,
    width: 300,
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  description: {
    fontSize: 18,
    padding: 20,
  },
  nameView: {
    borderBottomWidth: 2,
    borderColor: '#eaeaea',
    borderStyle: 'solid',
    padding: 20,
  },
});

export default App;
