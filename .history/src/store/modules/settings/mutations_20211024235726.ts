import { MutationTree } from 'vuex'
import { SettingsState } from './state'
import { SettingsMutationTypes } from './mutation-types'


export type Mutaions<S = SettingsState> = {
    [SettingsMutationTypes.CHANG_SETTING](state: S, payload: {key: string, value: any}):void
}