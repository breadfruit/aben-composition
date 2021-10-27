import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module
  } from 'vuex'

  import { RootState } from '@/store'
import { state } from './state'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import type { SettingsState } from './state'