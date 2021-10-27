import {useStore} from 'vuex'

export interface SettingsState {
    theme: string,
    fixedHeader: boolean,
    showSettings: boolean,
    showTagsView: boolean,
    showSidebarLogo: boolean,
    sidebarTextTheme: boolean
}


export const state: SettingsState = {
}