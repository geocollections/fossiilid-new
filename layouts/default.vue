<template>
  <div
    class="flex flex-col min-h-screen w-full justify-between overflow-x-hidden"
  >
    <nuxt />
    <Footer />
    <ScrollTopFab />

    <client-only>
      <CookiePolicy />
    </client-only>
  </div>
</template>
<script>
import ScrollTopFab from '~/components/ScrollToTop'
import CookiePolicy from '~/components/CookiePolicy'
import Footer from '~/components/layout/Footer'

export default {
  components: {
    CookiePolicy,
    ScrollTopFab,
    Footer,
  },
}
</script>
