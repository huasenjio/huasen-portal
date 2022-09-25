export default {
    // 可以获得其他的getters
    getUserName(state,getters) {
        return state.user.name
    }
}

// 简单实用
// this.$store.getters.getUserName

// 便捷使用
// import { mapGetters } from 'vuex'
// export default {
//   computed: {
//     // 1.数组形式，使用对象展开运算符将 getter 混入 computed 对象中
//     ...mapGetters([
//       'getUserName', // 直接使用getUserName
//     ])
//     // 2.对象形式，使用对象展开运算符将 getter 混入 computed 对象中
//     ...mapGetters({
//         // 把 `this.doneCount` 映射为 `this.$store.getters.getUserName`
//         doneCount: 'getUserName'
//       })
//   }
// }