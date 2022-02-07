import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  cookiePolicy: true,
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
