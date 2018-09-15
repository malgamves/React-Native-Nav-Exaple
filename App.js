import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
        Home Screen! Nothing to see here!</Text>
        <Button
          title="Don't click me"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.header}
        >You clicked :/</Text>
        <Button
          title="Don't click this one though"
          onPress={() => this.props.navigation.navigate('Details2')}
        />
      </View>
    );
  }
}

class DetailsScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.header}
        >Yeah nothing interesting, I'm just another scene on an finite stack</Text>
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Details2: DetailsScreen2,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171516',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    paddingBottom: 25,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  image: {
    width: 400,
    height: 400,
  },
});
