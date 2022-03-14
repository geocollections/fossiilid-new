<template>
  <div class="">
    <PageHeader
      title="Lorem ipsum dolor sit amet"
      subtitle="consectetur
    adipiscing elit, sed do eiusmod tempor luciado 250 000 incididunt"
    />
    <main class="container mx-auto">
      <div class="max-w-xl mx-auto -mt-8 z-40 relative px-4 md:px-0 space-y-4">
        <div
          class="h-16 flex flex-row gap-1 pl-4 pr-2 py-2 bg-white shadow-md justify-between"
        >
          <button @click="focusSearch">
            <img
              src="~assets/svg/search-icon.svg"
              alt="Search icon"
              class="w-4 sm:h-full sm:w-auto sm:p-2"
            />
          </button>
          <input
            ref="box"
            type="text"
            class="flex-grow pl-2 focus:border-green"
          />
          <button
            class="h-full text-xs sm:text-base sm:w-1/4 text-center text-white bg-green px-3"
          >
            {{ $t('pages.index.search') }}
          </button>
        </div>
        <div class="w-full h-12 flex justify-center items-center gap-4">
          <Button
            :active="searchFilter.includes('Name')"
            @clicked="toggleFilter('Name')"
            >{{ $t('pages.index.filters.name') }}</Button
          >
          <Button
            :active="searchFilter.includes('Locality')"
            @clicked="toggleFilter('Locality')"
            >{{ $t('pages.index.filters.locality') }}</Button
          >
          <Button
            :active="searchFilter.includes('Stratigraphy')"
            @clicked="toggleFilter('Stratigraphy')"
            >{{ $t('pages.index.filters.stratigraphy') }}</Button
          >
        </div>
      </div>

      <header class="space-y-2 text-center mb-6 mt-14">
        <h2 class="text-4xl">{{ $t('pages.index.title') }}</h2>
        <p class="md:text-xl">{{ $t('pages.index.subtitle') }}</p>
      </header>
      <div
        class="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 md:gap-6"
      >
        <TaxonCard
          v-for="index in 24"
          :id="95"
          :key="index"
          :name="'Graptolites'"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TaxonCard from '../components/layout/TaxonCard.vue'
import PageHeader from '../components/layout/PageHeader.vue'
import Button from '../components/layout/Button.vue'
export default Vue.extend({
  name: 'IndexPage',
  components: { TaxonCard, PageHeader, Button },
  data() {
    return {
      searchFilter: ['Name'],
    }
  },
  methods: {
    focusSearch() {
      const ref: any = this?.$refs?.box
      return ref?.focus()
    },
    toggleFilter(filter: string) {
      this.searchFilter.includes(filter)
        ? (this.searchFilter = this.searchFilter.filter((n) => n !== filter))
        : this.searchFilter.push(filter)
    },
  },
})
</script>
