import VuexPersistence from 'vuex-persist'

const vuexOptions = {
  key: 'Fossiilid.info',
  reducer: (state) => ({
    settings: {
      cookiePolicy: state.settings.cookiePolicy,
    },
  }),
}

export default ({ store }) => {
  new VuexPersistence(vuexOptions).plugin(store)
}
