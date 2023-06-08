import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { MovieInfo } from '../types'

type Props = {
    movie: MovieInfo,

}

export default function BigCatalog(props:Props):JSX.Element{
    return(
        <TouchableOpacity>
            <Image source={{uri:props.movie.large_cover_image}}
            //화면의 가로사이즈를 얻어와서 이미지의 가로 사이즈로 지정.
                    style={{width:'100%',  height:300}}></Image>
            
        </TouchableOpacity>
    )
}