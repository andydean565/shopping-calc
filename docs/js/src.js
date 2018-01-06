var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    lists : [
      {
        name : "test 2",
        description : "testing",
        items : []
      }
    ],
    active : 0,
    editItem : null,
    newItem : {
      name : "",
      amount : 1,
      price : null
    },
    limit : 5
  },
  mounted: function () {
    console.log('mounted');
    this.setup();

  },
  created: function () {
    console.log('created');
  },
  methods: {
    setup: function (){
      //check cookie
      if(this.$cookies.isKey('lists')){
        var data = JSON.parse(this.$cookies.get('lists'));
        this.lists = data;
      }
    },
    update: function (){
      //update list cookie
      var data = JSON.stringify(this.lists);

      this.$cookies.set("lists",data, (60*60*24*30));
    },
    totalCost: function (items) {
      var total = 0;
      items.forEach(function(item) {
        total += (item.price * item.amount);
      });
      return Math.round(total * 100) / 100;
    },
    totalItems: function (items) {
      var total = 0;
      items.forEach(function(item) {
        total += 1 * item.amount;
      });
      return total;
    },
    addItem: function (item) {
      this.lists[this.active].items.push(item);
      this.update();
      $('#addItem').modal('hide');
    },
    removeItem: function (item) {
      console.log(item);
      this.lists[this.active].items.splice(item, 1);
    }
  }
})
