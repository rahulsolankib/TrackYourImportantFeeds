import { View, Text } from 'react-native'
import { useState } from 'react';
import { Button, Input } from 'react-native-elements'

export default function AddLinkPage(props) {
    var [link,setLink] = useState('');
    var propArr = props.func;
    const func = propArr[0]; // change isVisible
    const onBack = propArr[1]; // change isVisible

    return (
    <View>
        <Input placeholder='Add link here' onChangeText={(value)=>setLink(value)} value={link}/>
        <Button onPress={()=>{setLink(''); func(link)}} title="Submit"/>
        <Button onPress={()=>{setLink(''); onBack()}} title="Back"/>
    </View>
    )
}