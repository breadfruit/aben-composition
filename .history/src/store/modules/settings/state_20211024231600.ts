import {useStore} from 'vuex'
import layoutSettings from '@/config/default/layout'
import elementVariables from '@/styles/element-variables.scss'
export interface SettingsState {
    theme: string,
    fixedHeader: boolean,
    showSettings: boolean,
    showTagsView: boolean,
    showSidebarLogo: boolean,
    sidebarTextTheme: boolean
}


export const state: SettingsState = {
    theme: ele
}