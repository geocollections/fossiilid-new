<template>
  <nuxt-link :to="'/' + id">
    <div
      class="p-2 rounded-md bg-white group w-full transition duration-200 hover:shadow-lg"
    >
      <img
        :src="
          'https://files.geocollections.info/img/fossiilid/fossilgroups/' +
          id +
          '.png'
        "
        alt="Graptolite taxon fossil"
        class="mx-auto transform scale-90 group-hover:scale-100 duration-200"
      />
      <p class="text-center text-xs text-black truncate sm:text-lg">
        {{ name }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
