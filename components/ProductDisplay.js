app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        
        <product-detail :details="details"></product-detail>

        <h2>List of Objects</h2>
        <div
          v-for="(variant,index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor: variant.color}"
        >
          {{variant.color}}
        </div>
        <p>Shipping: {{shipping}}</p>
        <button
          class="button"
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{disabledButton: !inStock}"
        >
          Add to Cart
        </button>
        <button
          class="button"
          v-on:click="removeFromCart"
          
          
        >
          Rm FromCart
        </button>
      </div>
      <review-list :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>
  </div>`,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      selectedVariant: 0,
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    },
    removeFromCart() {
      this.$emit("remove-from-cart");
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
