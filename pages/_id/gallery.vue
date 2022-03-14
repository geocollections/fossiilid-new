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

    <main class="container mx-auto pt-6">
      <div class="flex gap-4 justify-center">
        <ul v-for="n in 3" :key="n" class="space-y-4">
          <li
            v-for="image in getEveryNth(images, n - 1, 3)"
            :key="image.filename"
          >
            <a
              :href="
                'https://files.geocollections.info/large/' + image.filename
              "
              target="blank"
              rel="noreferrer noopener"
            >
              <img
                :src="
                  'https://files.geocollections.info/small/' + image.filename
                "
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </main>
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
      images: [
        {
          stars: 3,
          taxon_id: 9582,
          specimen_id: 308500,
          filename: '7d9d2b3b-90f2-4db8-afe0-035aa383d9d8.jpg',
          taxon: 'Normalograptus normalis',
          attachment_id: 126428,
        },
        {
          stars: 3,
          taxon_id: 95,
          specimen_id: 308640,
          filename: '9ccb77bc-4744-420f-9cc4-99f8c3cc2e33.jpg',
          taxon: 'Graptolithina',
          attachment_id: 126418,
        },
        {
          stars: 3,
          taxon_id: 95,
          specimen_id: 308640,
          filename: '699800fa-dacb-4d66-83e8-d5c2d379db1c.jpg',
          taxon: 'Graptolithina',
          attachment_id: 126417,
        },
        {
          stars: 3,
          taxon_id: 9582,
          specimen_id: 308500,
          filename: '0a7e4f91-9f5c-4615-8386-20299e1bbb0f.jpg',
          taxon: 'Normalograptus normalis',
          attachment_id: 126408,
        },
        {
          stars: 3,
          taxon_id: 9582,
          specimen_id: 308500,
          filename: '6f6d8189-f2d8-469b-8d46-c2904f7bffb6.jpg',
          taxon: 'Normalograptus normalis',
          attachment_id: 126407,
        },
        {
          stars: 3,
          taxon_id: 95,
          specimen_id: 134458,
          filename: '86705d2c-de02-458d-b582-1d9c264db6fe.jpg',
          taxon: 'Graptolithina',
          attachment_id: 33321,
        },
        {
          stars: 2,
          taxon_id: 13083,
          specimen_id: 262071,
          filename: '5588e6d0-906a-4df0-a0d1-a4eb78510a97.jpg',
          taxon: 'Archiclimacograptus balticus',
          attachment_id: 138735,
        },
        {
          stars: 2,
          taxon_id: 12595,
          specimen_id: 238385,
          filename: 'f76f4b57-5604-4f9e-be51-1d4fa99aa2f1.jpg',
          taxon: 'Rhabdinopora flabelliformis flabelliformis',
          attachment_id: 133509,
        },
        {
          stars: 2,
          taxon_id: 9947,
          specimen_id: 94951,
          filename: '9d92128f-ba8a-4f46-ba94-0785d1c535f9.jpg',
          taxon: 'Dendrograptus',
          attachment_id: 131479,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 90548,
          filename: 'e91b6368-eaba-4510-ae6a-7289f50d96cb.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131478,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 90545,
          filename: 'ffc700ce-ba7f-49f4-8cb6-f4ad4d7212c9.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131477,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 81825,
          filename: 'fb747e92-5863-4606-9bd5-17bfc3c48e4b.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131476,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 141285,
          filename: '2eb8ac2d-cbe1-4660-9bd4-af666895af44.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131474,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 94971,
          filename: '6b5c2cd9-6ff3-4244-a3c2-2e74e6d8671e.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131473,
        },
        {
          stars: 2,
          taxon_id: 9947,
          specimen_id: 94952,
          filename: '644c4d66-2af0-4a4c-9def-e60529a50b3f.jpg',
          taxon: 'Dendrograptus',
          attachment_id: 131472,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 110599,
          filename: '129b175f-ed2f-4863-8bf3-0db5365a983e.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131463,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 94972,
          filename: 'a4c6fbd2-5352-4e2b-b411-10b59ccb82de.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131462,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 94969,
          filename: '95dcffb7-8e97-42e7-b72a-72c0912afff2.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131461,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 94969,
          filename: 'f5d543ef-6cbd-46eb-bd76-3170b49830a6.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131460,
        },
        {
          stars: 2,
          taxon_id: 95,
          specimen_id: 94968,
          filename: '9400eaa6-027c-44e1-813d-f2b1588096c7.jpg',
          taxon: 'Graptolithina',
          attachment_id: 131459,
        },
      ],
    }
  },
  methods: {
    handleClick(link) {
      this.$router.push({
        path: `/${this.$route.params.id}/${link}`,
      })
    },
    getEveryNth(arr, startPos, nth) {
      const result = []

      for (let i = startPos; i < arr.length; i += nth) {
        result.push(arr[i])
      }

      return result
    },
  },
}
</script>

<style scoped></style>
