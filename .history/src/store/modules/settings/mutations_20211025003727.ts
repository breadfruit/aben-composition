import { MutationTree } from 'vuex'
import { SettingsState } from './state'
import { SettingsMutationTypes } from './mutation-types'


export type Mutaions<S = SettingsState> = {
    [SettingsMutationTypes.CHANG_SETTING](state: S, payload: {key: string, value: any}):void
}


export const mutaions: Mutaions<SettingsState> & Mutaions = {
    [SettingsMutationTypes.CHANG_SETTING](state: SettingsState, payload: {key: string, value: any}){
        const {key, value} = payload;
        switch (key) {
            case 'theme':
                state.theme = value;
                break
            case 'fixedHeader':
                state.fixedHeader = value;
                break;
            case 'showSettings':
                state.showSettings = value;
                break;
            case 'showTagsView':
                state.showTagsView = value;
                break;
            case 'sidebarTextTheme':
                state.sidebarTextTheme = value;
                break;
            default: 
                break;
        }
    }
}
