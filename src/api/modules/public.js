/**
 * @author 梁涛
 * 首页
 *
 * */

module.exports = {
  sitelist: '/edc/edcserver/sitelist.do', // 获取角色所拥有的中心
  heartBeat: '/login/heartBeat.do', // 轮询查验token是否过期
  loginInfo: '/edc/edcserver/login.do', // 获取个人信息
  appversion: '/edc/app/appversion.do', // 获取后台版本
  menuList: '/edc/menu/menuList.do', // 顶部和左侧菜单栏
  getTableau: '/edc/tableau/createcode.do', // 获取汇总分析链接
  getMedaiUrl: '/edc/medai/getMedaiUrl.do', // 获取medai链接
  crflist: '/edc/crfmng/crflist.do', // crf管理左侧列表
  showSignature: '/edc/varstatus/showSignature.do', // 查询电子签名模板
};
