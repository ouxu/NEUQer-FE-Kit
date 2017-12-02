/**
 * Created by out_xu on 17/8/18.
 */
import { baseModel, modalModel } from 'models/modelExtend'
import modelExtend from 'dva-model-extend'
import { check, login, logout } from 'services/user'
import { sleep } from 'utils'
import { routerRedux } from 'dva/router'

export default modelExtend(baseModel, modalModel, {
  namespace: 'user',
  state: {
    role: JSON.parse(window.localStorage.getItem('NeuqOj')) ? JSON.parse(window.localStorage.getItem('NeuqOj'))['role'] : 'student',
    token: JSON.parse(window.localStorage.getItem('NeuqOj')) ? JSON.parse(window.localStorage.getItem('NeuqOj'))['token'] : '',
    user: JSON.parse(window.localStorage.getItem('NeuqOj')) ? JSON.parse(window.localStorage.getItem('NeuqOj'))['user'] : {},
    lastCheck: '',
    interval: 600000
  },
  subscriptions: {
    userSubscriber ({dispatch, history}) {
      return history.listen(({pathname, search}) => {
        if (pathname !== '/login' && pathname !== '/logout') {
          dispatch({type: 'check', payload: pathname + search})
        }
      })
    }
  },
  effects: {
    * check({payload}, {select, call, put}) {
      const user = yield select(({user}) => user)
      const {token, lastCheck, interval} = user
      const now = (new Date()).getTime()

      if (token && (!lastCheck || (now - lastCheck) > interval)) {
        try {
          yield call(check)
          let data = {
            ...user,
            lastCheck: (new Date()).getTime()
          }
          yield put({type: 'update', payload: data})
        } catch (e) {
          yield put({type: 'logout', payload})
          throw e
        }
      }
    },
    * login({payload}, {put, call}) {
      try {
        const {values, location} = payload
        yield put({type: 'app/showLoading'})
        yield call(sleep, 1500)
        let data = yield call(login, values)
        data = {
          ...data,
          lastCheck: (new Date()).getTime()
        }
        window.localStorage.setItem('NeuqOj', JSON.stringify(data))
        yield put({type: 'update', payload: data})
        yield put({type: 'hideModal'})
        yield put(routerRedux.push(location.pathname + location.search))
      } catch (e) {
        throw e
      } finally {
        yield put({type: 'app/hideLoading'})
      }
    },
    * logout({payload}, {put}) {
      yield put({
        type: 'update',
        payload: {
          role: 'student',
          token: '',
          user: {},
          lastCheck: ''
        }
      })
      window.localStorage.removeItem('NeuqOj')
      yield put(routerRedux.push(payload))

    }
  },
  reducers: {}
})
