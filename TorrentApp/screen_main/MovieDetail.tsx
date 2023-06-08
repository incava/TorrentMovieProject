import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function MovieDetail():JSX.Element{
    //0. 먼저 테스트 화면
    return (
        <View style={style.root}>
            <Text>MOVIE DETAIL</Text>
        </View>        
    )
}

const style = StyleSheet.create({
    root:{
        flex:1
    },
})