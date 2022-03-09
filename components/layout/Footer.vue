<template>
  <footer class="py-6 px-4 mt-6 text-center w-screen bg-orange">
    <div
      class="container flex justify-between mx-auto text-xs md:flex-row flex-wrap md:flex-nowrap"
    >
      <div class="font-bold text-left w-1/2 md:w-1/4">
        <p class="text-black pb-3">Fossiilid.info</p>
        <nav class="flex flex-col items-start gap-1">
          <nuxt-link to="/">{{ $t('navLinks.home') }}</nuxt-link>
          <nuxt-link to="/about">{{ $t('navLinks.about') }}</nuxt-link>
          <nuxt-link to="/search">{{ $t('navLinks.search') }}</nuxt-link>
          <nuxt-link to="/">{{ $t('navLinks.privacy') }}</nuxt-link>
        </nav>
      </div>
      <div class="font-bold text-left w-1/2 md:w-1/4">
        <p class="text-black pb-3">{{ $t('footer.related') }}</p>
        <nav class="flex flex-col items-start gap-1">
          <a href="/">eElurikkus</a>
          <a href="/">Naturforskaren</a>
          <a href="/">GeoCASe</a>
          <a href="/">OpenUp!</a>
          <a href="/">Geocollections</a>
        </nav>
      </div>
      <div class="flex flex-col-reverse gap-6 md:flex-row md:justify-around">
        <div class="md:w-1/2 flex flex-col justify-center">
          <p>{{ $t('footer.licence') }}</p>
          <img
            src="~assets/png/ccbync.png"
            alt="cc by-nc"
            class="mx-auto my-3"
          />
          <div
            class="flex flex-col md:flex-row flex-wrap justify-center items-center lg:justify-between lg:h-12 mx-auto gap-2 mt-3"
          >
            <img
              src="~assets/svg/natarc_logo_black.svg"
              alt="natarc logo"
              class="w-1/2 md:w-28 lg:w-1/4"
            />
            <img
              src="~assets/svg/sarv_logo.svg"
              alt="sarv logo"
              class="w-1/2 md:w-28 lg:w-1/4"
            />

            <img
              src="~assets/png/EL_mv.png"
              alt="EL logo"
              class="w-2/3 lg:w-1/4 md:pl-6 mt-3"
            />
          </div>
        </div>
        <div class="font-bold text-left mt-4 md:mt-0">
          <p class="text-black pb-3">{{ $t('footer.founders') }}</p>
          <nav class="flex flex-col items-start gap-1">
            <a href="/">{{ $t('footer.gi') }}</a>
            <a href="/">{{ $t('footer.ut') }}</a>
            <a href="/">{{ $t('footer.elm') }}</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>
