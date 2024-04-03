<template>
  <footer>
    <p>All rights reserved to Haanim Pietersen <i class="far fa-copyright"></i> {{ currentYear }}.</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #987554;
  padding: 10px;
  color: #D2B48C;
  text-align: center;
}
</style>