import createSarvRESTRepository from '~/services/sarvREST.api'
import createSarvSolrRepository from '~/services/sarvSolr.api'
import createGeoserverRepository from '~/services/geoserver.api'

export default (context) => ({
  sarvREST: createSarvRESTRepository(context.$axios),
  sarvSolr: createSarvSolrRepository(context.$axios),
  geoserver: createGeoserverRepository(context.$axios),
})
