/**
 * @author 王文銮
 * 实验室正常值
 *
 * */

module.exports = {
  exportLabnormals: '/edc/labnormals/exportLabnormals.do', // 导出报表
  importCheck: '/edc/labnormals/importCheck.do', // 数据评估api
  importLabnormals: '/edc/labnormals/importLabnormals.do', // 确定导入
  enabledOrdisabledOne: '/edc/labnormals/deleteLabnormals.do', // 生效或失效单品
  enabledOrdisabledBatch: '/edc/labnormals/batchDeleteLabnormals.do', // 批次生效或失效
  getLabInfo: '/edc/labnormals/getLabInfo.do', // 获取详情
  getLabLimit: '/edc/labnormals/getLabLimit.do', // 实验室正常值显示
  listSite: '/edc/labnormals/listSite.do', // 点击刷新按钮获取中心列表
  refreshLabLimit: '/edc/labnormals/refreshLabLimit.do', // 实验室正常值刷新操作
  listAll: '/edc/labnormals/listAll.do', // 查询中的中心列表
  taskInfo: '/edc/labnormals/taskInfo.do', // 刷新操作轮询获取任务进度
};
