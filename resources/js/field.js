Nova.booting((Vue, router, store) => {
  Vue.component('index-multi-column', require('./components/IndexField'))
  Vue.component('detail-multi-column', require('./components/DetailField'))
  Vue.component('form-multi-column', require('./components/FormField'))
})
