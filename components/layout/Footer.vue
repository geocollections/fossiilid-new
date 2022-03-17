<template>
  <footer class="pt-6 px-4 mt-6 text-center w-screen bg-orange pb-24 md:pb-6">
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
      <div
        class="flex flex-col-reverse gap-6 md:flex-row md:justify-around flex-grow"
      >
        <div class="md:w-1/2 flex flex-col justify-center max-w-sm mx-auto">
          <p>{{ $t('footer.licence') }}</p>
          <img
            src="~assets/png/ccbync.png"
            alt="cc by-nc"
            class="mx-auto my-3"
          />
          <div
            class="flex flex-row justify-center items-center mx-auto gap-2 mt-3"
          >
            <div class="">
              <img
                src="~assets/svg/natarc_logo_black.svg"
                alt="natarc logo"
                class="md:w-28"
              />
              <img
                src="~assets/svg/sarv_logo.svg"
                alt="sarv logo"
                class="md:w-28"
              />
            </div>
            <img
              src="~assets/png/EL_mv.png"
              alt="EL logo"
              class="w-1/2 md:pl-6 mt-3"
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
