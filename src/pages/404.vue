<template>
  <Layout :showNav="false">
    <div class="fof text-center">
      <h1 class>404</h1>
      <h2 class="space-bottom">Seite nicht gefunden.</h2>
      <g-link class="button button-primary" to="/">Startseite</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404",
  },
};
</script>

<style scoped>
.fof {
  margin: calc(50vh - 268px) auto;
}
h1 {
  color: var(--prim-color);
  font-size: 3em;
}
h2 {
  color: var(--body-color);
  font-size: 3em;
}
</style>
