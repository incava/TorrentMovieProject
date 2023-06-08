
//1. 최상위 Stack Navigator의 화면 리스트 타입
export type RootScreenList= {
    Intro: undefined,
    LoginNav: undefined,
    MainNav: undefined,
}

//2. LoginNav Stack Navigator의 화면 리스트 타입
export type LoginNavScreenList= {
    Login: undefined,
    Signup: undefined
    ResetPassword: undefined,

    //MainNav 화면으로 전환할 수 있도록 등록
    MainNav: undefined,
}


//3. MainNav BottomTab Navigator 화면 리스트 타입
export type MainNavScreenList= {
    MovieNav: undefined,
    Favorite: undefined,
    Community: undefined,
}

//4. MovieNav Stack Navigator 화면 리스트 타입
export type MovieNavScreenList= {
    MovieList: undefined,
    MovieDetail: undefined,

    //로그아웃시에 Intro 화면으로 이동하기 위해 리스트 등록 추가
    Intro: undefined,
}

export interface MovieInfo{
    id:string,
    title:string,
    year:string,
    genres:string[],
    large_cover_image:string,
}