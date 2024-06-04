const product = "Socks";

const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
      product,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removefromCart() {
      this.cart.pop();
    },
  },
  computed: {},
});
