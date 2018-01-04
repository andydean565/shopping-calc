var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    lists : [
      {
        name : "test 2",
        description : "testing",
        items : [
          {
            name : "bananas",
            amount : 2,
            price : 1.99
          }
        ]
      }
    ],
    active : 0
  }
})

Vue.component('shop-item', {
  props: {
    item: {type: Object},
    index: {type: Number}
  },
  template : "#shop-item",
  methods: {
    remove: function (value) {this.$emit('input:lang_topic', value)},
    amend: function (value) {this.$emit('input:lang_topic', value)},
  },
  mounted: function () {
  }
});
