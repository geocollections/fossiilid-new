<template>
  <div>
    <PageHeader
      title="About fossils"
      subtitle="from Classical Latin: fossilis, literally 'obtained by digging'"
    />
    <main class="pt-8 px-4 flex flex-row justify-center gap-6 relative">
      <div class="text-right font-bold relative hidden sm:block">
        <div class="flex flex-col gap-4" :class="{ 'opacity-0': stickyMenu }">
          <nuxt-link to="#fossils">What are fossils</nuxt-link>
          <nuxt-link to="#collecting">Collecting fossils</nuxt-link>
          <nuxt-link to="#identifying">Identifying fossils</nuxt-link>
        </div>
        <div v-show="stickyMenu" class="flex flex-col gap-4 top-4 fixed">
          <nuxt-link to="#fossils">What are fossils</nuxt-link>
          <nuxt-link to="#collecting">Collecting fossils</nuxt-link>
          <nuxt-link to="#identifying">Identifying fossils</nuxt-link>
        </div>
      </div>
      <div
        class="flex flex-row items-center gap-4 fixed bottom-0 left-0 sm:hidden text-xs bg-white justify-center mx-auto min-w-full py-3 font-bold border-t border-lightGreen"
      >
        <nuxt-link to="#fossils">What are fossils</nuxt-link>
        <nuxt-link to="#collecting">Collecting fossils</nuxt-link>
        <nuxt-link to="#identifying">Identifying fossils</nuxt-link>
      </div>

      <div class="max-w-prose text-xs lg:text-base">
        <h2 id="fossils" class="font-bold pb-4 text-base">What are fossils</h2>
        <p>
          Fossil, or fossil, is a remnant of an ancient life form, from simple
          microbes to highly developed vertebrates. Most of the hard parts of
          organisms reach us: chambers, bones, teeth, pollen, charred plants.
          Dead organisms reach us when their mineral or soft tissues are
          replaced by permanent minerals: calcite, apatite or pyrite, to put it
          simply. We also find traces of the movement, eating and other life
          activities of organisms that once lived. Today, living beings are
          studied at the molecular level, using chemical traces or stones left
          in the rocks. Visible fossils are macrofossils and microscopic
          microfossils.
        </p>
        <img
          src="https://images.unsplash.com/photo-1625076105322-74e37712876d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="fossils"
        />
        <p>
          We have a tiny fraction of organisms that once lived, because it takes
          a lot of happy coincidences to form a fossil. The sediment layer,
          which is quickly applied to the dead organism, is the basis for
          "successful fossilization", which ensures a healthy fossil. Lack of
          oxygen in the sediment keeps organic microorganisms away and so we can
          find the remains of molluscs. This is how the unique Burgess Shale
          fauna found in the Canadian Rockies was created. Extraction of rock
          from sediment is a complex process that also affects the organisms
          that enter it. The pressure exerted by the accumulating layers has a
          destructive and deforming effect and can distort the remnants of the
          organisms in the sediment. The settled original material can dissolve
          or recrystallize under the influence of circulating waters, and the
          fossils can either destroy or miraculously preserve even the finest
          structures. Fossils that have already formed may be destroyed by later
          geological processes.
        </p>
        <p>
          In most cases, we find marine organisms such as snails, shells,
          corals, brachiopods, echinoderms and trilobites in the form of
          fossils, the water that accumulates sediments is decisive in their
          formation. Underground inhabitants do not normally bury under the
          sediment layer, accidents such as volcanic eruptions and mud flows
          help to find these fossils. Known terrestrial organisms called
          preservatives are amber, ice and desert sands. This is how wonderful
          insects, mammoths and dinosaurs have come to us. The custom of burying
          peers became important for the study of man as a species.
        </p>
        <p>
          Scientists appreciate the findings of fossils, where ancient organisms
          are in their habitat, providing direct information about the organism
          and its habitat. Equally valuable are the fossils that were able to
          spread in the seas and oceans far from their birthplace, giving
          geologists the opportunity to connect rock layers from distant lands.
          By studying fossils, their appearance, disappearance and sequence,
          paleontologists can determine the relative age of rocks. Microfossils,
          which can number in the small piece of stone, can produce excellent
          results in this area. Estonia is very rich in fossils. Our fossils are
          exceptionally well preserved, not distorted by the severity of the
          oppressive rock layers or the high temperatures associated with
          volcanic and mountainous processes. We Estonians have a long and
          consistent experience in collecting and exploring fossils. The fossils
          found over time are kept in the collections of museums, thus ensuring
          the preservation of the scientific heritage. It is important that we
          keep our fossils in nature, collect fossils only in permitted places
          and without destroying outcrops.
        </p>

        <h2 id="collecting" class="font-bold pb-4 text-base">
          Collecting fossils
        </h2>
        <p>
          Koguda võib karjäärist, kivimurrust, pankrannikult, mererannalt ja jõe
          või järve kaldajärsakult. Eelkõige tuleks pilgud pöörata sinna, kus
          paljandub paas (lubjakivi ja dolomiidi ühine nimetus), seega Põhja- ja
          Kesk-Eestisse ning saartele. Lõuna-Eesti jõeorgude ja järvede
          liivakivikaljud on märksa vaesemad, kuid mitte täiesti kivististeta.
          Devoni ajastu liivakivist võib leida kalade ja ka väga haruldaste
          neljajalgsete skelettide osi. Lähtuda tuleb sellest, et kivististe
          kogumine oleks säästlik ega kahjustaks loodusobjekte. Kivististe
          kogumist käsitlevad Eestis seadused. Looduskaitseseaduse järgi on
          Eestis keelatud looduslikust asupaigast eemaldada eriti haruldasi
          kivistisi.
        </p>
        <p>
          Eesti aluspõhja kivimid on tekkinud umbes 360-530 miljonit aastat
          tagasi. Neis leidub rohkelt hästi säilinud kivistisi nii selgrootute
          (trilobiidid, käsijalgsed, peajalgsed, okasnahksed, käsnad, korallid,
          sammalloomad jt) kui ka selgroogsete (lõuatud ja kalad) hulgast. Aja
          jooksul murenenud kivimitest on kivistisi suhteliselt kerge leida.
        </p>
        <p>
          Põhilised töövahendid on geoloogivasar, kiiver (et järsaku all ronides
          kivid pähe ei kukuks) ja kaitseprillid (et killud löömisel silma ei
          satuks). Kivistise kättesaamiseks suurema kivi seest võib vaja minna
          ka meislit. Valida tuleb sobiv, ilmastikukindel riietus. Asukoha
          määramiseks on vajalik kaart, kompass ja GPS. Kivistise
          esmamääramiseks kasutatakse luupi. Kivistised tuleb pakkida –
          olenevalt haprusest kas pehmesse paberisse, jõupaberisse või näiteks
          kilekotti. Kotile tuleb veekindla viltpliiatsiga kirjutada info
          kivistise kohta või siis varustatakse leid pabersildiga, millel on
          asukoht, kuupäev ja koguja nimi.
        </p>
        <p>
          Rännakutelt kaasa toodud kivistised kogunevad tihti lahtiselt
          riiulitele või voodi alla, moodustades korrapäratuid hunnikuid. Peagi
          ununeb leiukoht ja nii kaotab kollektsioon olulise osa oma väärtusest.
          Et seda ei juhtuks, tuleks kivistised etiketeerida paljandis tehtud
          esmaste siltide järgi. Kui kivistis on määratud, siis saab etiketile
          kirjutada liigi või rühma nimetuse. Infoga varustatud kivististe kohta
          oskavad asjatundjad jagada huvitavat teavet ning neid võib teiste
          kollektsionääridega omavahel vahetada.
        </p>
        <h2 id="identifying" class="font-bold pb-4 text-base">
          Identifying fossils
        </h2>
        <p>
          Kivististe süstemaatilise kuuluvuse täpne määramine on sageli
          keeruline ja seda isegi spetsialistile. Tihti on kivistisest säilinud
          ainult mingi osa või fragment. Samuti võivad olulised tunnused olla
          peidus ümbriskivimi all ning sel juhul on vajalik kivistise eelnev
          prepareerimine spetsiaalsete vahendite ja seadmetega.
        </p>
        <p>
          Paljud geoloogidele olulised kivistised on aga hoopiski
          mikroskoopilised ning nende leidmiseks tuleb esmalt koguda
          kivimiproovid, neid laboris kemikaalidega töödelda ning mikroskoobis
          uurida. Sellised võimalused on olemas ainult muuseumites ja
          teadusasutustes.
        </p>
        <p>
          Siiski, põhiliste fossiilirühmade eristamisega tulevad peale väikest
          harjutamist kõik huvilised hõlpsasti toime. Raamatute kõrval on selles
          abiks ka siinne veebileht, mis annab ülevaate kõigist peamistest
          Eestis leiduvatest fossiilirühmadest ja tutvustab nende esindaid nii
          sõnas kui pildis.
        </p>
        <p>
          Kui sellest abist jääb siiski väheks ning nõu ei saa ka õpetajalt või
          loodushariduskeskuse töötajalt, siis on kõik fossiilihuvilised oodatud
          spetsialistide juurde Tallinnas Eesti Loodusmuuseumisse ja
          Tehnikaülikooli Geoloogia Instituuti ning Tartus Ülikooli
          geoloogiamuuseumisse.
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
export default Vue.extend({
  name: 'AboutPage',
  components: { PageHeader },
  data: () => ({
    stickyMenu: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      if (typeof window === 'undefined') return
      const top = window.scrollY || event.target.scrollTop || 0
      this.stickyMenu = top > 535
    },
  },
})
</script>

<style scoped>
p {
  padding-bottom: 1.25rem;
}

img {
  padding-bottom: 1.25rem;
}

.sticky-links {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
