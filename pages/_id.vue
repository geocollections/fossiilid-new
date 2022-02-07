<template>
  <div>
    <h1>Taxon: {{ $route.params.id }}</h1>

    <div>Ids: {{ ids }}</div>

    <div>data: {{ taxon }}</div>
  </div>
</template>

<script>
export default {
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
}
</script>

<style scoped></style>
