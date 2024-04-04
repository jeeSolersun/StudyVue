export const mixin1 = {
  data() {
    return {
      x: 80,
      y: 90
    }
  }
}

export const mixin2 = {
  mounted() {
    console.log('mounted() from mixin');
  }
}