Vue.component('list-card', {
  props: ['list', 'index'],
  template : "#list-card",
  methods: {
    stats: function () {
      return this.$root.listStats(this.index);
    }
  }
});
