import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
  // 将其封装成一个函数，可以同时修改多个状态
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
export const setUser = function ({commit, state}, {user}) {
  // 将其封装成一个函数，可以同时修改多个状态
  commit(types.SET_USER, user)
}
