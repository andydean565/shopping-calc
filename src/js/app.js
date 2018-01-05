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
          },
          {
            name : "apples",
            amount : 2,
            price : 1.87
          }
        ]
      }
    ],
    active : 0,
    editItem : {
      name : "",
      amount : 1,
      price : 0.00,
    },
    limit : 5
  },
  methods: {
    totalCost: function (items) {
      var total = 0;
      items.forEach(function(item) {
        total += (item.price * item.amount);
      });
      return Math.round(total * 100) / 100;
    },
    addItem: function (item) {
      lists[active].items.push(item);

    }
  },

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
