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
    remove: function (item) {
      this.$root.lists[this.index].items.splice(item, 1);
      this.$root.update();
    },
    stats: function () {
      return this.$root.listStats(this.index);
    }
  }
});

Vue.component('item-card', {
  props: ['item', 'index'],
  template : "#item-card",
  methods: {
    remove: function (item) {this.$emit('remove');},
    price: function (num) {return this.$root.convert(num, "money");}
  }
});
