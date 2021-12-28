<template>
  <Layout :showNav="false">
    <div class="thankyou text-center">
      <h1>Danke Ihnen!</h1>
      <h2>
        Ich möchte mich bei Ihnen für Ihre Nachricht bedanken.
        Ich werde Ihnen so bald wie möglich antworten.
      </h2>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Thankyou",
  },
};
</script>

<style scoped>
.thankyou {
  margin: calc(50vh - 214px) auto;
}
h1 {
  color: var(--prim-color);
  font-size: 3em;
  text-align: center;
}
</style>
