Vue.component('list-card', {
  props: ['list', 'index'],
  template : "#list-card",
  methods: {
    remove: function () {
      this.$emit('remove');
    },
    stats: function () {
      return this.$root.listStats(this.index);
    }
  }
});
