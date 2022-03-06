import { StyleSheet, Text, View,ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { Card,Button, Icon } from 'react-native-elements'
import colors from '../config/colors';


export default function NewsListScreen() {
    const handleViewButtonPress = () => {
        console.log('Handle this view button pressed');
    }
    const allTopics = [{ key: 'title1', title: 'Title 1', text: 'Text 1'},{ key: 'title2',title: 'Title 2', text: 'Text 2'},{ key: 'title3',title: 'Title 3', text: 'Text 3'},{ key: 'title4',title: 'Title 4', text: 'Text 4'}];

    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: colors.white, flex: 1}}>
                <ScrollView>
                    <View style={styles.container}>
                        {
                            allTopics.map(el => <Card key={el.key}>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Divider />
                                <Card.Image style={styles.cardImage} source={require('../assets/welcome.jpg')}/>
                                <Text style={styles.cardText}>
                                    {el.text}
                                </Text>
                                <Button
                                    onPress={handleViewButtonPress}
                                    icon={
                                        <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{ marginRight: 10 }}
                                        />
                                    }
                                    buttonStyle={{
                                        borderRadius: 20,
                                        width: '50%',
                                        alignSelf: 'center'
                                    }}
                                    title="VIEW NOW"
                                />
                            </Card>)
                        }
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footerView}>
                <Button onPress={handleViewButtonPress} buttonStyle={styles.addButton} title="Add Value" />
            </View>
            <StatusBar style='auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardText: { marginTop: 10, marginBottom: 10 },
    cardImage: {padding: 0},
    footerView: {
        width: '100%', 
        height: 50, 
        // flexBasis: 100,
        backgroundColor: colors.white,
        elevation: 0 
    },
    addButton: {
        width: '100%',
        height: 70,
        borderRadius: 0,
        textAlignVertical: 'top'
    }
})