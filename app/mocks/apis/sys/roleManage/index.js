
import fetchTreeList from './fetchTreeList'
import fetchModuleListInRole from './fetchModuleListInRole'
import fetchRoleDetail from './fetchRoleDetail'
import fetchButtonList from './fetchButtonList'
import successmode from '../../success'

export default {
  fetchTreeList,
  fetchModuleListInRole,
  fetchRoleDetail,
  fetchButtonList,
  fetchRoleAdd: successmode,
  fetchRoleUpdate: successmode,
  fetchRoleDelete: successmode,
  fetchUpdateButton: successmode,
  fetchUpdateRoleRes: successmode,
  fetchRoleDeletePeople: successmode,
}
