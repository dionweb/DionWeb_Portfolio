<template>
  <Layout :showNav="false">
    <div class="container text-center">
      <div class="space-bottom-x2">
        <h1 class="big space-bottom">Buttons</h1>
        <a href class="button button-primary">Button</a>
        <a href class="button button-secondary">Button</a>
        <a href class="button button-primary-outline">Button</a>
        <a href class="button button-secondary-outline">Button</a>
      </div>
      <div class="space-bottom-x2">
        <h1 class="big space-bottom">Headings</h1>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <h5>Heading Five</h5>
        <h6>Heading Six</h6>
      </div>
      <div class="space-bottom-x2">
        <h1 class="big space-bottom">Fonts</h1>
        <h2>Quicksand</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <h2 class="mono">Fira code</h2>
        <p class="mono">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Test",
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: calc(50vh - 213px) auto;
  a {
    margin: 10px;
  }
}
.big-prim {
  color: var(--prim-color);
  font-size: 3em;
}
.big {
  color: var(--body-color);
  font-size: 3em;
  text-decoration: underline;
  text-decoration-style: wavy;
}
</style>
