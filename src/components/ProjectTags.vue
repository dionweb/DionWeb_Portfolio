<template>
  <div class="project-tags">
    <span class="mono project-tags__link" v-for="tag in post.tags" :key="tag.id">
      <span>#</span>
      <span>{{ tag.title }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.project-tags {
  margin: 0em 0.2em 0;
  &__link {
    margin-right: 0.7em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    border-radius: var(--radius);
    span:nth-child(1) {
      margin-right: 0.4em;
      color: var(--sec-color);
    }
  }
}
</style>
