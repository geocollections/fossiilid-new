<template>
  <div id="LangSelect" class="relative mr-8 -mt-0.5">
    <div class="absolute top-0 left-0">
      <div v-if="open" class="border border-green rounded-full space-y-1">
        <div v-for="locale in locales" :key="locale" class="">
          <LangIcon :lang="locale" @click="changeLang(locale)" />
        </div>
      </div>
      <div v-else class="border border-green rounded-full">
        <LangIcon :lang="$i18n.locale" @click="toggleOpen" />
      </div>
    </div>
  </div>
</template>

<script>
import LangIcon from './LangIcon.vue'
export default {
  name: 'LangSelect',
  components: {
    LangIcon,
  },
  // state
  props: {
    inheritClass: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    const localeList = this.$i18n.localeCodes
    const sortedLocaleList = localeList.filter((value) => {
      return value !== this.$i18n.locale
    })
    sortedLocaleList.unshift(this.$i18n.locale)
    return {
      open: false,
      locales: sortedLocaleList,
    }
  },
  // actions
  methods: {
    toggleOpen() {
      if (this.open) return
      return (this.open = !this.open)
    },
    changeLang(e) {
      this.$i18n.locale = e
      this.open = !this.open
    },
  },
}
</script>
