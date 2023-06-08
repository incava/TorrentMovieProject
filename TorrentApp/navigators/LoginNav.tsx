import React from 'react'

// LoginNav의 Stack Navigator 객체 생성

import { createStackNavigator } from '@react-navigation/stack'

// LoginNav에서 전환할 화면 스크린들 타입 

import { LoginNavScreenList } from '../types'

// 네비게이터가 보여줄 화면 컴포넌트들 import
import Login from '../screen_login/Login'
import Signup from '../screen_login/Signup'
import ResetPassword from '../screen_login/ResetPassword'

const Stack = createStackNavigator<LoginNavScreenList>()

export default function LoginNav() : JSX.Element{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
            <Stack.Screen name='ResetPassword' component={ResetPassword}></Stack.Screen>
        </Stack.Navigator>
    )
}