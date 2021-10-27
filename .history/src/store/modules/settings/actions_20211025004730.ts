import {ActionTree, ActionContext } from 'vuex'
import {Mutations} from './mutations'
import {SettingsActionTypes} from './action-types'
import { RootState } from '@/store'
import { SettingsState } from './state'
import { RootTabs } from 'element-plus/lib/components/tabs/src/token'


type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<SettingsState, RootState>,'commit'>

export interface Mutations  {
    [SettingsActionTypes.ACTION_CHANGE_SETTING](
        commit:AugmentedActionContext,
        payload: {key: string, value: any}
    ):void
} 