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

var app = new Vue({
  el: '#app',
  data: {
    lists : [
      {title : "test 1", description : "test", date : "12/07/2017", items : []},
      {title : "test 2", description : "test", date : "12/07/2018", items : []}
    ],
    add :{
      item : {title : "", amount : 1, price : null, bought : 0},
      list : {title : "", description : "", date : "", items : []},
    },
    model :{
      item : {title : "", amount : 1, price : null, bought : 0},
      list : {title : "", description : "", date : "", items : []},
    },
    settings : {list : null, item : null, selected : null, limit : 5, cookie: (60*60*24*30)}
  },
  mounted: function () {
    this.setup();
  },
  methods: {
    //App setup
    setup: function (){
      if(this.$cookies.isKey('lists')){
        var data = JSON.parse(this.$cookies.get('lists'));
        this.lists = data;
      }
    },
    //update app saves
    update: function (){
      var data = JSON.stringify(this.lists);
      this.$cookies.set("lists",data, this.settings.cookie);
    },
    //lists
    //add
    addList: function (list) {
      this.lists.push(list);
      this.add.list = this.model.list;
      this.update();
      $('#addList').modal('hide');
    },
    //remove
    removelist: function (list) {
      this.lists.splice(list, 1);
      this.update();
    },
    //select
    selectlist: function (list) {
      this.settings.list = list;
    },
    //Stats
    listStats: function (i) {
      var list = this.lists[i];
      var result = {items : 0, deals : 0, cost : 0.00,};
      list.items.forEach(function(item) {
        result.items += (1 * item.amount);
        result.cost += (item.price * item.amount);
      });
      result.cost = "£" + this.convert(result.cost, "money");
      return result;
    },
    //items
    //add
    addItem: function (item) {
      var list;
      if(this.settings.list != null){list = this.settings.list;}
      else{list = this.settings.selected;}

      if(this.validateItem(item)){
        item.price = this.convert(item.price, "money");
        this.lists[list].items.push(item);
        this.add.item = this.model.item;
        this.update();
        $('#addItem').modal('hide');
      }
    },
    validateItem: function(item){
      console.log(item);
      for (var key in item) {
        if(item[key] == null){return false;}
      }
      return true;
    },
    convert: function(str, type){
      var result;
      if(type == "money"){result = ((parseFloat(str) * 100) / 100).toFixed(2);}
      return result;
    }
  }
});
