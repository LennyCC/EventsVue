const app = Vue.createApp({
  data() {
    return {
      counter: 100,
      textoActual: 'dummy'
    };
  },
  methods: {
    updateCounter(valor) {
      this.counter += valor
    },
    prueba(event) {
      // Por defecto Vue nos pasa el objeto Evento al método (de hecho, igual que cuando hacíamos addEventListener)
      console.log(event)
    },
    prueba2() {
      console.log("Yo soy prueba dos !!")
    },
    copiarTexto(event) {
      this.textoActual = event.target.value
    }
  },
});

app.mount('#events');

