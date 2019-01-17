import {playMode} from '@/assets/js/mode.js'
// 设置全局变量
const state = {
  // 设置state
  user: [],
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  // 顺序播放0 循环播放1 随机播放2 默认为顺序播放
  mode: playMode.sequence,
  currentIndex: -1
}
export default state
