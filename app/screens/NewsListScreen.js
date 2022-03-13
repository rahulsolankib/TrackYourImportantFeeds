import { StyleSheet, Text, View,ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Card,Button, Icon } from 'react-native-elements'
import { Linking, ToastAndroid} from 'react-native'


export default function NewsListScreen(props) {
    var arr = (props.value)[0];
    var setArr = (props.value)[1];

    const handleViewButtonPress = (link) => {
        Linking.openURL(link);
    }
    const handleDoneButtonPress = (link) => {
        const requestOptions = {
            method: 'DELETE'
        };
        let mainURL = (link.split("://"))[1].split('/'); 
        const prodUrl = 'https://trackyourimportantfeeds.herokuapp.com/clear/'+mainURL[0];
        fetch(prodUrl,requestOptions)
            .then((res)=> {
                console.log('Response code: '+res.status)
                
                let newArr = arr.filter((value)=> !value.link.includes(link))
                setArr(newArr)
                console.log(newArr)
                if(res.status === 200) {
                    ToastAndroid.show('Link marked as done', ToastAndroid.SHORT)
                }
                else{
                    ToastAndroid.show('Please try again', ToastAndroid.SHORT)
                }
                }, (errReason)=>{
                console.log(errReason);
            })
    }

    var allTopics = [];
    if(arr.length !==0)
        arr.forEach((element, i) => {
            allTopics.push({
                key: element.title_text + i,
                title: element.title_text,
                text: element.title_text,
                link: element.link,
                image_url: element.image_url
            }); 
        });
    return (
                <ScrollView style={{marginBottom: 10 ,backgroundColor: '#F6D860'}}>
                    <View>
                        {
                            allTopics.map(el => <Card key={el.key}>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Divider />
                                <Card.Image style={styles.cardImage} source={{uri: el.image_url}}/>
                                <Text style={styles.cardText}>
                                    {el.text}
                                </Text>
                                <View style={{marginLeft: 5, marginRight: 5, flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                    <View style={{justifyContent:'flex-start',  flex: 1}}>
                                        <Button
                                            onPress={() => {handleViewButtonPress(el.link)}}
                                            icon={
                                                <Icon
                                                name="code"
                                                color="#53bdeb"
                                                iconStyle={{ marginRight: 10 }}
                                                />
                                            }
                                            buttonStyle={{
                                                borderRadius: 10,
                                                flex: 1,
                                                width: '90%',
                                                backgroundColor: '#d9fdd3'
                                            }}
                                            titleStyle={{
                                                color: "black"
                                            }}
                                            title="VIEW"
                                        />
                                    </View>
                                    <View style={{justifyContent:'flex-end',  flex: 1}}>
                                        <Button
                                            onPress={() => {handleDoneButtonPress(el.link)}}
                                            icon={
                                                <Icon
                                                name="checkmark-done-outline"
                                                color="#53bdeb"
                                                type='ionicon'
                                                iconStyle={{ marginRight: 10 }}
                                                />
                                            }
                                            buttonStyle={{
                                                borderRadius: 10,
                                                flex: 1,
                                                width: '90%',
                                                backgroundColor: "#d9fdd3"
                                            }}
                                            titleStyle={{
                                                color: 'black'
                                            }}
                                            title="DONE"
                                        />
                                    </View>
                                </View>
                            </Card>)
                        }
                    </View>
                </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#F6D860'
    },
    cardText: { marginTop: 10, marginBottom: 10 },
    cardImage: {padding: 0}
})