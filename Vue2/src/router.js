import Vue from 'vue'
import VueRouter from 'vue-router'

const registerRoutes = () => {
  const contextInfo = require.context('./views', true, /.vue$/)
  /**
   require.context 入参语法：
    require.context(
            directory,  // 要搜索的目录
            (useSubdirectories = true),  // 是否还搜索其子目录
            (regExp = /^\.\/.*$/),  // 匹配文件的正则表达式
            (mode = 'sync')
        );
   require.context 出参语法：
   出函数有三个属性：resolve, keys, id。
    resolve 是一个函数，它返回 request 被解析后得到的模块 id。
    keys 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求（译者注：参考下面第二段代码中的 key）组成。
   */
  const routes = contextInfo.keys().map((filePath) => {
    // filePath 形如 ./Home.vue、./modifiers/capture.vue
    // path我们希望是/home、/modifiers/capture
    // 所以需要把开头的./和.vue都替换为空
    const path = filePath.toLowerCase().replace(/^\.|\.vue/g, '')
    // name的话将/home、/modifiers/capture转成小驼峰即可
    // 把开头的/先替换掉，再把第一个/后的单词变成大写就可以了
    const name = path.replace(/^\//, '').replace(/\/(\w)/, ($0, $1) => $1.toUpperCase())
    // 通过require去读取.vue文件内容
    const component = require(`./views${filePath.replace(/^\./, '')}`).default
    const result = {
      path,
      name,
      component
    }

    if(path === '/index'){
      result.path = '/'
    }

    return result
  })

  return routes
}
const routes = registerRoutes()
console.log('[routes]', routes)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router