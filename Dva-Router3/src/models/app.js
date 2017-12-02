export default {
  namespace: 'app',
  state: {},
  subscriptions: {
    appSubscriber ({dispatch, history}) {
      return history.listen(({pathname}) => {
        console.log(1)
      })
    }
  },
  effects: {},
  reducers: {}
}
