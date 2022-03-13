import { ToastAndroid, StyleSheet, Text,Image, SafeAreaView,Alert, StatusBar, TouchableHighlight, View, Modal } from 'react-native';
import NewsListScreen from './app/screens/NewsListScreen';
import GetAllLinks from './app/services.js/GetAllLinks';
import { useState } from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { Card,Button, Icon } from 'react-native-elements'
import colors from './app/config/colors';
import AddLinkPage from './app/screens/AddLinkPage'

export default function App() {
  var [arr,setArr] = useState([]);
  var [isVisible,setVisible] = useState(true);
  var [link,setLink] = useState('');

  const handleViewButtonPress = () => {
    setVisible(!isVisible)
  }

  const setLinkVar = (link) => {
    if(link=== undefined || link==='' || (!link.includes('https://') && !link.includes('http://')) || !link.includes('.')){
      console.log('Problem with link, no data added')
      ToastAndroid.show('Problem with link, no data added', ToastAndroid.SHORT)
    }else{
      setLink(link);
      setVisible(true);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ link: link, text: 'asd', image_url: 'asd' })
      };

      const prodUrl = 'https://trackyourimportantfeeds.herokuapp.com/insert';
      fetch(prodUrl,requestOptions)
        .then((res)=> {
            console.log('Response code: '+res.status)
            if(res.status === 200) {
              ToastAndroid.show('Your link successfully added', ToastAndroid.SHORT)
            }
            else{
              ToastAndroid.show('Problem occured while storing your link, No data added', ToastAndroid.SHORT)
            }
          }, (errReason)=>{
            console.log(errReason);
        })
    }
  }

  const onBack = () =>{
    setVisible(true)
  }
  var value = [];
  const devUrl = 'http://192.168.1.104:3000/getAll';
  const prodUrl = 'https://trackyourimportantfeeds.herokuapp.com/getAll';
  fetch(prodUrl)
    .then((value)=>value.json(), (errReason)=>{
        console.log(errReason);
    })
    .then((jsonval)=>{
        value.push(...jsonval.arr)
    })

  return (
        <View>
          {isVisible && <Modal>
                <Button onPress={()=>setArr(value)} title="Fetch"/>
                <Button onPress={handleViewButtonPress} buttonStyle={styles.addButton} title="Add Value" />
            <NewsListScreen value={[arr,setArr]} />
          </Modal>}
          <AddLinkPage func={[setLinkVar,onBack]}/>
          <StatusBar style='auto' />
        </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
      width: '100%',
      borderRadius: 1,
      borderColor: 'black',
      textAlignVertical: 'top',

  },
  footerView: {
      width: '100%', 
      height: 50, 
      flex: 1,
      // flexBasis: 100,
      backgroundColor: colors.white,
      elevation: 0 
  }
});
