module.exports = {
  /* 受试者相关*/
  zxAdd: '/login/roleTran/add.do', // 切换角色和中心
  sitecodeList: '/edc/subject/sitecodeList.do', // 获取辅助录入信息
  getcrfver: '/edc/subject/getcrfver.do', // 获取版本号
  subjectChangewkflow: '/edc/subject/changewkflow.do', // 受试者改变工作流
  subjectinfo: '/edc/subject/subjectinfo.do', // 受试者动态表单
  savesubject: '/edc/subject/savesubject.do', // 新增受试者
  searchSubjectTitle: '/edc/subject/searchSubjectTitle.do', // 配置受试者查询框
  subjectlist: '/edc/subject/subjectlist.do', // 受试者列表
  /* 访视相关*/
  updateinfo: '/edc/subject/updateinfo.do', // 编辑受试者初始化form表单
  updatesubject: '/edc/subject/updatesubject.do', // 编辑受试者
  subjectbase: '/edc/subject/subjectbase.do', // 基础信息
  visitlist: '/edc/visit/visitlist.do', // 访视列表
  tablelist: '/edc/visit/tablelist.do', // 查询crf表
  datalist: '/edc/data/datalist.do', // 查询主表或一对多表
  uncollectedtables: '/edc/visit/uncollectedtables.do', // 未采集列表
  setUnCollected: '/edc/data/setUnCollected.do', // 设置未采集
  disUnCollected: '/edc/data/disUnCollected.do', // 取消未发生
  setUnHappen: '/edc/data/setUnHappen.do', // 设置未发生
  disUnHappen: '/edc/data/disUnHappen.do', // 取消未发生
  hidevisitlist: '/edc/visit/hidevisitlist.do', // 获取添加访视列表
  hidetablelist: '/edc/visit/hidetablelist.do', // 获取添加访视的crf表
  savevisit: '/edc/visit/savevisit.do', // 添加访视
  updateVisitTable: '/edc/visit/updateVisitTable.do', // 修改访视内crf表
  deletevisit: '/edc/visit/deletevisit.do', // 删除访视
  reasonlist: '/edc/data/reasonlist.do', // 查询全部修改原因
  invalidationreason: '/edc/data/invalidationreason.do', // 查询全部失效原因
  unCHSearch: '/edc/dataevent/unCHSearch.do', // 未采集未发生稽查轨迹搜索列
  checkDataCaseBook: '/edc/data/checkDataCaseBook.do', // 编辑后需要校验一下，给出是否需要手动激活
  checkActiveByCaseBook: '/edc/data/checkActiveByCaseBook.do', // 因激活操作提示手动激活数据
  selectSearchFields: '/edc/dataevent/selectSearchFields.do', // 查询稽查轨迹的变量
  eventtype: '/edc/dataevent/eventtype.do', // 查询稽查轨迹类型
  checkSubject: '/edc/subject/checkSubject.do', // 受试者信息表校验唯一值
  subjectVisitInfoChart: '/edc/echarts/subjectVisitInfoChart.do', // 访视信息
  /* crf表相关操作按钮*/
  activedata: '/edc/data/activedata.do', // 工作流失效激活按钮
  validationSignUser: '/edc/varstatus/validationSignUser.do', // pi签字验证用户信息
  saveVarStatusList: '/edc/varstatus/saveVarStatusList.do', // pi签字 & 核查保存
  piNoteList: '/edc/pinote/piNoteList.do', // 查询批注
  savePINote: '/edc/pinote/savePINote.do', // 添加批注
  datainfo: '/edc/data/datainfo.do', // 一对多更新formlistPage
  changewkflow: '/edc/data/changewkflow.do', // 改变工作流
  check: '/edc/editcheck/check.do', // 核查规则
  checkupdate: '/edc/editcheck/checkupdate.do', // 核查规则修改提示信息
  commitcheck: '/edc/editcheck/commitcheck.do', // 核查规则自动生成质疑
  savedata: '/edc/data/savedata.do', // 新增crf表单
  updatedata: '/edc/data/updatedata.do', // 编辑crf表单
  /* 质疑相关*/
  queryDictList: '/edc/query/queryDictList.do', // 质疑的原因下拉数据
  queryListHistory: '/edc/query/queryListHistory.do', // 质疑的列表数据
  saveQuery: '/edc/query/saveQuery.do', // 新增质疑
  saveQueryDetail: '/edc/querydetail/saveQueryDetail.do', // 新增字段质疑备注
  replyQuery: '/edc/query/replyQuery.do', // 处理质疑即回复质疑
  closeQuery: '/edc/query/closeQuery.do', // 关闭质疑
  closeAndSaveQuery: '/edc/query/closeAndSaveQuery.do', // 关闭质疑并再次质疑
  selectNoCHQueryStatus: '/edc/query/selectNoCHQueryStatus.do', // 查询未采集未发生的表质疑状态
};
