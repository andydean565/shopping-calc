Vue.component('list-card', {
  props: ['list', 'index'],
  template : "#list-card",
  methods: {
    remove: function () {this.$emit('remove');},
    select: function () {this.$emit('select');},
    stats: function () {return this.$root.listStats(this.index);}
  }
});

Vue.component('list-section', {
  props: ['list', 'index'],
  template : "#list-section",
  methods: {
    test: function () {console.log('test')},
    stats: function () {return this.$root.listStats(this.index);}
  }
});

Vue.component('item-card', {
  props: ['item', 'index'],
  template : "#item-card",
  methods: {
    remove: function () {this.$emit('remove');},
    select: function () {this.$emit('select');},
    price: function (num) {return this.$root.convert(num, "money");}
  }
});
