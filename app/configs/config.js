
export const set = 'set$'
export const brandName = 'React' // slogan

// 开发环境默认配置
let _serverIp = ''
let _port = ''
let _baseURL = ''
let _mockURL = ''

if (process.env.NODE_ENV === 'testing') { // 测试环境
  _mockURL = 'http://localhost:8081/'
  _port = '8081'
  _baseURL = `${_serverIp}:${_port}`
}
if (process.env.NODE_ENV === 'production') { // 发布环境
  _port = '1111'
  _serverIp = 'http://192.168.1.123'
  _baseURL = `${_serverIp}:${_port}`
}

export const serverIp = _serverIp
export const path = '/mock'
export const timeout = '15000' // 接口超时限制(ms)
export const baseURL = _baseURL
export const mockURL = _mockURL
