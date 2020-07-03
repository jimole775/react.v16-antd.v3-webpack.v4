import Mock from 'mockjs'
// const http = require('http')
import servicesmap from './interfaceMap'
// const _filter = require('./interfaceFilter')
// const Mock = require('mockjs')

// const services = []
// // 载入配置项
// services.push(require('./services/creatingRule'))
// services.push(require('./services/supplementTaxInfo'))
// services.push(require('./services/recheckBonusInfo'))
// services.push(require('./services/bonusDistributeProcess'))

// 循环挂载 MOCK 代理
// console.log('servicesmap:', servicesmap)
Object.keys(servicesmap).forEach((key) => {
  // 统一使用 POST 方式代理
  console.log(key)
  Mock.mock(key, 'post', servicesmap[key])
})
Mock.setup({
  timeout: 400,
})
// servicesmap.forEach((service) => {
//   const configs = service.default
//   configs.forEach((config) => {
//     const res = () => {
//       const count = Math.round(Math.random() * 20)
//       const data = {
//         data: [],
//         pageNo: 0, // 当页页码
//         pageSize: 0, // 当页总数
//         totalCount: 0, // 总条数
//         totalPage: 0, // 总页数
//       }
//       for (let i = 0; i < count; i += 1) {
//         const randomRow = Mock.mock(config.mock)
//         // 添加下标
//         randomRow.id = i + 1
//         randomRow.index = i + 1
//         randomRow.key = i + 1
//         data.data.push(randomRow)
//       }
//       data.pageNo = 1
//       data.totalPage = 1
//       data.pageSize = data.data.length
//       data.totalCount = data.data.length
//       return data
//     }

//     // 统一使用 POST 方式代理
//     Mock.mock(config.path, 'post', res)
//   })
// })
