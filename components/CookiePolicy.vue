<template>
  <transition name="fade">
    <div
      v-show="cookiePolicy"
      class="cookie-policy py-3 px-6 shadow-lg bg-green-100"
    >
      <div class="flex flex-row flex-nowrap justify-center">
        <div class="self-center pr-3">
          {{ $t('cookiePolicy.introduction') }}

          <nuxt-link
            class="font-bold hover:opacity-75"
            :title="$t('cookiePolicy.readMoreButton')"
            to="/terms"
          >
            <span>{{ $t('cookiePolicy.readMoreButton') }} 🍪</span>
          </nuxt-link>
        </div>

        <div class="self-center">
          <div
            class="font-bold rounded-xl px-6 py-2 bg-gray-300 shadow-md cursor-pointer hover:bg-gray-400 transition-colors"
            :title="$t('cookiePolicy.acceptAndClose')"
            @click="cookiePolicy = false"
          >
            OK
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'CookiePolicy',
  computed: {
    ...mapFields('settings', ['cookiePolicy']),
  },
}
</script>

<style scoped>
.cookie-policy {
  position: fixed;
  bottom: 0;
  z-index: 100000;
  width: 100%;
}
</style>
