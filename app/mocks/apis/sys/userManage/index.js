import fetchUserDepttList from './fetchUserDepttList'
import fetchRoleList from './fetchRoleList'
import fetchUserList from './fetchUserList'
import fetchUserDetail from './fetchUserDetail'
import successmode from '../../success'

export default {
  fetchUserDepttList,
  fetchRoleList,
  fetchUserList,
  fetchUserDetail,
  synUser: successmode,
  fetchUserAdd: successmode,
  fetchUserDelete: successmode,
  fetchUserSetRole: successmode,
  fetchChangeUserStatus: successmode,
  fetchUserDetailUpdate: successmode,
}
