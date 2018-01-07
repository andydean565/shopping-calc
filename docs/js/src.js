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

var app = new Vue({
  el: '#app',
  data: {
    lists : [
      {title : "test 1", description : "test", date : "12/07/2017", items : []},
      {title : "test 2", description : "test", date : "12/07/2018", items : []}
    ],
    add :{
      item : {title : "", amount : 1, price : null, bought : null},
      list : {title : "", description : "", date : "", items : []},
    },
    model :{
      item : {title : "", amount : 1, price : null, bought : null},
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
    //Stats
    listStats: function (i) {
      var list = this.lists[i];
      var result = {items : 0, deals : 0, cost : 0.00,};
      list.items.forEach(function(item) {
        result.items += (1 * item.amount);
        result.cost += (item.price * item.amount);
      });
      result.cost = "£" + Math.round(result.cost * 100) / 100;
      return result;
    },
    //items
    //add
    addItem: function (item) {
      this.lists[this.settings.list].items.push(item);
      this.add.item = this.model.item;
      this.update();
      $('#addItem').modal('hide');
    },
    //remove
    removeItem: function (item) {
      this.lists[this.settings.list].items.splice(item, 1);
      this.update();
    }
  }
});

//old

// var app = new Vue({
//   el: '#old',
//   data: {
//     message: 'Hello Vue!',
//     lists : [
//       {
//         name : "test 2",
//         description : "testing",
//         date : "",
//         items : []
//       }
//     ],
//     active : null,
//     editItem : null,
//     editList : null,
//     newItem : {name : "", amount : 1, price : null, bought : null},
//     newList : {name : "", description : "", date : "", items : []},
//     limit : 5
//   },
//   mounted: function () {
//     console.log('mounted');
//     this.setup();
//   },
//   created: function () {
//     console.log('created');
//   },
//   methods: {
//     setup: function (){
//       if(this.$cookies.isKey('lists')){
//         var data = JSON.parse(this.$cookies.get('lists'));
//         this.lists = data;
//       }
//     },
//     update: function (){
//       var data = JSON.stringify(this.lists);
//       this.$cookies.set("lists",data, (60*60*24*30));
//     },
//     totalCost: function (items) {
//       var total = 0;
//       items.forEach(function(item) {
//         total += (item.price * item.amount);
//       });
//       return Math.round(total * 100) / 100;
//     },
//     totalItems: function (items) {
//       var total = 0;
//       items.forEach(function(item) {
//         total += 1 * item.amount;
//       });
//       return total;
//     },
//     addItem: function (item) {
//       this.lists[this.active].items.push(item);
//       this.newItem = {name : "",amount : 1,price : null};
//       this.update();
//       $('#addItem').modal('hide');
//     },
//     addList: function (list) {
//       this.lists.push(list);
//       this.update();
//       this.newlist = {name : "", description : "", items : []};
//       $('#addList').modal('hide');
//     },
//     removeItem: function (item) {
//       this.lists[this.active].items.splice(item, 1);
//       this.update();
//     },
//     removelist: function (list) {
//       this.lists.splice(list, 1);
//       this.update();
//     }
//   }
// });
