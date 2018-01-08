Vue.component('list-card', {
  props: ['list', 'index'],
  template : "#list-card",
  methods: {
    remove: function () {this.$emit('remove');},
    select: function () {this.$emit('select');},
    stats: function () {return this.$root.listStats(this.index);}
  }
});

Vue.component('item-card', {
  props: ['item', 'index'],
  template : "#item-card",
  methods: {
    remove: function () {this.$emit('remove');},
    select: function () {this.$emit('select');}
  }
});
