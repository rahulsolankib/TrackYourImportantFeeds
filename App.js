import { StyleSheet, Text,Image, SafeAreaView,Alert, StatusBar, TouchableHighlight, Button, View } from 'react-native';
import NewsListScreen from './app/screens/NewsListScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  let handlePress = () => {
    console.log('item pressed');
    Alert.alert('My title', 'This is message text', [{
    onPress: ()=>{console.log('Hey this submit has been pressed')},
    text: 'Submit'
    },
    {
      onPress: ()=>{console.log('Hey this Alert has been pressed')},
      text: 'Alert'
    }]);
  }
  return <NewsListScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
