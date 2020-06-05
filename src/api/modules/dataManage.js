/**
 * @author 李晨阳
 * 批量操作有关
 *
 * */

module.exports = {
  piList: '/edc/datamanage/piList.do', // 签字列表
  piBatch: '/edc/datamanage/piBatch.do', // 批量签字
  eCrfTab: '/edc/datamanage/eCrfTab.do', // 批量办理tab页
  eCrfList: '/edc/datamanage/eCrfList.do', // 批量冻结列表
  eCrfBatch: '/edc/datamanage/eCrfBatch.do', // 批量冻结
  batchCheck: '/edc/editcheck/batchCheck.do', // 批量逻辑核查

  /* 质疑列表*/
  queryStatusList: '/edc/datamanage/queryStatusList.do', // 质疑列表头部页签
  searchList: '/edc/datamanage/searchList.do', // 搜索查询列表
  closeQueryBitch: '/edc/datamanage/closeQueryBitch.do', // 批量关闭质疑
  queryDictList: '/edc/query/queryDictList.do', // 查询质疑字典
  queryList: '/edc/datamanage/queryList.do', // 质疑列表
  queryDetail: '/edc/datamanage/queryDetail.do', // 质疑明细接口
  taskInfo: '/edc/datamanage/taskInfo.do', // 批量关闭查询队列
  invalidationquerycheck: '/edc/editcheck/invalidationquerycheck.do', // 失效质疑检测
  queryAudit: '/edc/datamanage/queryAudit.do', // 审核状态

  /* 数据库锁定*/
  lockDbHistory: '/edc/datamanage/lockDbHistory.do', // 查询锁库历史记录
  lockDb: '/edc/datamanage/lockDb.do', // 锁库
  dbStatus: '/edc/datamanage/dbStatus.do', // 查询锁库状态
  checkLockDbPre: '/edc/datamanage/checkLockDbPre.do', // 锁库前校验
  allSite: '/edc/datamanage/allSite.do', // 查询所有中心（已排除锁库中心）
  lockStatus: '/edc/datamanage/lockStatus.do', // 查询当前研究是否锁库

  /* 受试者变更 */
  checkChangeSiteBefore: '/edc/datamanage/checkChangeSiteBefore.do', // 更改中心前校验
  sitelist: '/edc/subject/sitelist.do', // 查询变更的中心
  updatesiteversion: '/edc/subject/updatesiteversion.do', // 变更中心和版本
  changeversions: '/edc/subject/changeversions.do', // 查询变更的版本
  checkUpgradeVersionBefore: '/edc/datamanage/checkUpgradeVersionBefore.do', // 升级版本前校验

};
