//语言常量枚举
export enum Language{
    En='en',
    Zh='zh-cn',
}

//判断开发条件
export enum Environment{
    Development = 'development',
    Production = 'production'
}
//判断路由模式
export enum RouterMode{
    Hash = 'hash',
    HISTORY = 'history'
}
//判断离线储存的类型
export enum TokenStorageName{
    LocalStorage = 'localStorage',
    SessionStorage = 'sessionStorage',
    Cookie = 'cookie'
}

