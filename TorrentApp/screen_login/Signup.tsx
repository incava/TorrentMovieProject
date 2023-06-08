import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

// 공통사용 컴포넌트 import
import TabComponent from '../components/TabComponent'
import InputComponent from '../components/InputComponent'

import { StackScreenProps } from '@react-navigation/stack'
import { LoginNavScreenList } from '../types'
type SignupProps = StackScreenProps<LoginNavScreenList, "Signup">

export default function Signup(props: SignupProps): JSX.Element { // props객체{navigation, route}

    //1. 우선 테스트 목적의 화면
    // return(
    //     <View style={style.root}>
    //         <Text>SIGN UP</Text>
    //     </View>
    // )

    // 탭 작업에서 사용 할 state 변수
    const [tabs, setTabs] = useState(['전화번호', '이메일']) // 탭 라벨을 string배열로 만들기
    const [tabIndex, setTabIndex] = useState(0) //현재 선택된 탭번호
    const signup = () => {
        //서버에 이메일, 비밀번호, 전화번호를 전송하는 코드 작성.

        //전송작업이 끝나면.. 회원가입화면 종료 및 이전 로그인화면으로 이동.
        props.navigation.goBack()
    }
    //


    return (
        <View style={style.root}>
            {/* content, footer 영역 2개로 구성 */}
            {/* 1.content영역 */}
            <View style={style.content}>
                {/* 1.1 전화번호와 이메일 중 원하는 정보로 회원가입 할 수 있도록 탭으로 구성 */}
                <View style={style.tabContainer}>
                    {/* <TabComponent label='전화번호' selected={true}></TabComponent>
                    <TabComponent label='이메일' selected={false}></TabComponent> */}

                    {
                        tabs.map((value, index) => {
                            return <TabComponent
                                label={value} key={index}
                                selected={index == tabIndex} onPress={() => setTabIndex(index)}></TabComponent>
                        })
                    }

                </View>

                {/* 1.2 정보입력 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>
                {/* 1.3 이메일 탭일때는 비밀번호 입력컴포넌트가 추가로 존재함 */}

                {
                    //&& 연산자 - 앞의 조건값이 true일때만 뒤에 있는 실행문이 실행됨.
                    tabIndex == 1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                }
                {/* 1.4 전화번호 탭일때의 [다음] 버튼 */}
                {
                    tabIndex === 0 && <View style={{ width: '100%', margin: 16 }}><Button title='다음' onPress={() => setTabIndex(1)}></Button></View>
                }
                {/* 1.5 이메일 탭일때의 [완료] 버튼 */}
                {
                    tabIndex === 1 && <View style={{ width: '100%', margin: 16 }}><Button title='완료' onPress={() => signup()}></Button></View>
                }
                {/* 1.6 전화번호 탭일 때 입력에 대한 이유를 안내하는 메세지 표시 */}
                {
                    tabIndex === 0 && <Text style={style.telMessage}>TorrentApp의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소 할 수 있습니다.</Text>
                }


            </View>

            {/* 2. footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerMsg}>
                    이미 계정이 있으신가요? <Text style={style.goBack} onPress={()=>props.navigation.goBack()}>로그인 화면 돌아가기</Text>
                </Text>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    root: { flex: 1, backgroundColor: 'FEFFFF' },
    content: {
        flex: 1,  // footer 영역 제외한 모든 공간 사용
        alignItems: 'center',
        padding: 32,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8,
    },
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8,
    },
    footerMsg:{
        color:'#929292',
        textAlign:'center',
    },
    goBack:{
        color:'#3796EF'
    }
})