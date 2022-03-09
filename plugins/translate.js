export default ({ app }, inject) => {
  const translate = (translations) => {
    return app.i18n.locale === 'et'
      ? translations.et
      : translations.en ?? translations.en
  }
  inject('translate', translate)
}
