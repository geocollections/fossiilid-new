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

    <main
      class="mx-auto pt-6 relative flex justify-center items-start max-w-prose"
    >
      <div class="space-y-6 ml-2 pr-4">
        <ContentBox title="About">
          <p class="text-xs lg:text-base">
            Fossil, or fossil, is a remnant of an ancient life form, from simple
            microbes to highly developed vertebrates. Most of the hard parts of
            organisms reach us: chambers, bones, teeth, pollen, charred plants.
            Dead organisms reach us when their mineral or soft tissues are
            replaced by permanent minerals: calcite, apatite or pyrite, to put
            it simply. We also find traces of the movement, eating and other
            life activities of organisms that once lived. Today, living beings
            are studied at the molecular level, using chemical traces or stones
            left in the rocks. Visible fossils are macrofossils and microscopic
            microfossils.
          </p>
        </ContentBox>
        <ContentBox title="List of species">
          <ul class="text-xs md:text-sm">
            <li v-for="(item, index) in species" :key="index">
              <p>
                {{ index + 1 }}.
                <nuxt-link :to="`/${item.id}`">{{ item.name }}</nuxt-link
                >{{ item.locality ? `| ${item.locality}` : '' }}
              </p>
            </li>
          </ul>
        </ContentBox>
      </div>
      <div class="-mr-60">
        <Dropdown :open="true">
          <ul class="py-4 px-3 text-xs space-y-3">
            <li
              v-for="item in classification.parents"
              :key="item.name"
              class="flex gap-2 justify-between"
            >
              <p class="font-bold">{{ item.rank }}</p>
              <p class="text-green">{{ item.name }}</p>
            </li>
            <li id="self" class="flex gap-2 font-bold justify-between">
              <p>Rank</p>
              <p class="text-green">Name</p>
            </li>
          </ul>
          <ul class="pb-4 px-3 text-xs space-y-3 text-center text-green">
            <li v-for="item in classification.children" :key="item">
              {{ item }}
            </li>
          </ul>
        </Dropdown>
      </div>
    </main>
  </div>
</template>

<script>
import PageHeaderTaxon from '../../components/layout/PageHeaderTaxon.vue'
import Dropdown from '../../components/layout/Dropdown.vue'
import ContentBox from '../../components/layout/ContentBox.vue'
export default {
  components: { PageHeaderTaxon, Dropdown, ContentBox },

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
      species: [
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
        {
          name: 'Acadoparadoxides (Acadoparadoxides) pinus (Westergård, 1936)',
          id: '12664',
          locality: 'Wuliu lade',
        },
      ],
      classification: {
        parents: [
          { rank: 'Rank', name: 'Name' },
          { rank: 'Rank', name: 'Name' },
          { rank: 'Rank', name: 'Name' },
          { rank: 'Rank', name: 'Name' },
          { rank: 'Rank', name: 'Name' },
        ],
        children: [
          'Child or sister',
          'Child or sister',
          'Child or sister',
          'Child or sister',
          'Child or sister',
        ],
      },
    }
  },
}
</script>

<style scoped></style>
