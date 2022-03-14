<template>
  <div>
    <PageHeaderTaxon
      :name="taxon.taxon"
      :rank="taxon.rank.rank_en"
      :reference="taxon.reference.reference"
      local-name="Graptolites"
      :num-images="numImages"
      :num-specimens="numSpecimens"
    />

    <!-- <h1>Taxon: {{ $route.params.id }}</h1> -->

    <!-- <div>Ids: {{ ids }}</div> -->

    <!-- <div>data: {{ taxon }}</div> -->
  </div>
</template>

<script>
import PageHeaderTaxon from '../../components/layout/PageHeaderTaxon.vue'
export default {
  components: { PageHeaderTaxon },

  async asyncData({ params, route, error, $services }) {
    try {
      const detailViewResponse = await $services.sarvREST.getResource(
        'taxon',
        params.id,
        {
          params: {
            nest: 2,
          },
        }
      )

      const ids = detailViewResponse?.ids
      const taxon = detailViewResponse
      return {
        ids,
        taxon,
      }
    } catch (err) {
      error({
        message: `Could not find taxon ${route.params.id}`,
        path: route.path,
      })
    }
  },
  data() {
    return {
      numImages: 20,
      numSpecimens: 100,
    }
  },
  methods: {
    handleClick(link) {
      this.$router.push({
        path: `/${this.$route.params.id}/${link}`,
      })
    },
  },
}
</script>

<style scoped></style>
