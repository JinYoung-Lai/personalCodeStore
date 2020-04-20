/* 搜索栏展开收缩组件，该组件只实现伸缩部分，内容区域样式、伸缩按钮样式用户根据自身需求定制 
   使用方法：
   1、import 该js文件
   2、components注册该组件 CollapseTransition
   3、示例如下：
     <!-- 外层嵌套（建议加外层嵌套，方便button定位） -->
     <div class="form-wrapper"> 
      <!-- 组件名称 -->    
      <collapse-transition> 
        <div class="collapse-wrap" v-show="isActive">你的内容</div>
      </collapse-transition>
      <!-- 展开收缩按钮 -->
      <button
        class="collapse-button"
        :class="[isActive?'el-icon-caret-top':'el-icon-caret-bottom']"
        @click="isActive = !isActive"
      ></button>
    </div>
*/
// 动画
const elTransition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
const Transition = {
  // --------
  // 进入中
  // --------
  'before-enter' (el) {
    el.style.transition = elTransition
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    
    el.style.height = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },
  
  'enter' (el) {
    el.dataset.oldOverflow = el.style.overflow
    // 延时100ms再获取高度，以获取准确高度。
    setTimeout(() => {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      } else {
        el.style.height = ''
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      }
    }, 100)
    el.style.overflow = 'hidden'
  },

  'after-enter' (el) {
    el.style.transition = ''
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  },

  // --------
  // 离开时
  // --------
  'before-leave' (el) {
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },

  'leave' (el) {
    if (el.scrollHeight !== 0) {
      el.style.transition = elTransition
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },

  'after-leave' (el) {
    el.style.transition = ''
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }
}

export default {
  name: 'collapseTransition',
  functional: true,
  render (h, { children }) {
    const data = {
      on: Transition
    }
    return h('transition', data, children)
  }
}
