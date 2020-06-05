/* 开发、线上地址配置 */
const dev = {
  baseUrl: '/'
};

const prod = {
  baseUrl: '/'
};

const env = process.env.NODE_ENV;
let config = env === 'development' ? dev : prod;

export default Object.assign({}, config);
