var alert_component = {
    template: '<button @click="on_click">button</button>',
    methods: {
      on_click: function () {
        alert('button alert');
      }
    }
  };

  new Vue({
    el: '#app1',
    components: {
      alert: alert_component
    }
  });
  
  new Vue({
    el: '#app2'
  });