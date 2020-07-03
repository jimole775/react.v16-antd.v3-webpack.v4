
import successmode from '../../success'
import fetchModuleList from './fetchModuleList'
import fetchModuleDetail from './fetchModuleDetail'

// ['fetchModuleDelete', 'fetchChangeModuleStatus', 'fetchModuleUpdateDetail', 'fetchModuleAdd'] 
export default {
  fetchModuleList,
  fetchModuleDetail,
  fetchModuleDelete: successmode,
  fetchModuleAdd: successmode,
  fetchChangeModuleStatus: successmode,
  fetchModuleUpdateDetail: successmode,
}
