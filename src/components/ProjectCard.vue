<template>
  <div class="posts space-bottom">
    <div
      class="project-card"
      v-for="edge in $static.posts.edges"
      :key="edge.node.id"
      :post="edge.node"
      :class="{ 'project-card--has-poster': edge.node.poster }"
    >
      <div class="hovereffect text-center">
        <g-image
          alt="Cover image"
          v-if="edge.node.cover_image"
          :src="edge.node.cover_image"
        />
        <div class="overlay">
          <h2
            class="project-card__title text-center"
            v-html="edge.node.title"
          />
          <g-link
            class="button button-secondary info project-card__link"
            :to="edge.node.path"
            >Mehr Infos</g-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</static-query>

<script>
import ProjectTags from "~/components/ProjectTags";

export default {
  components: {
    ProjectTags,
  },
  props: ["post"],
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.project-card {
  &__title {
    border-radius: var(--radius);
  }
  /*   .project-card {
     padding: 20px;
    border: 2px solid red; 
 
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: var(--radius); 
  }
} 
 .project-card {
  display: flex;
  align-items: center;
  margin-bottom: calc(var(--space) * 2);
  position: relative;
  transition: transform 0.3s, box-shadow 0.6s;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  &__image {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;

    & img {
      min-width: 100%;
    }
  }
  &__content {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    &:hover {
      .content-box {
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
  &__title {
    margin-top: 0;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
} */
}
.hovereffect {
  border-radius: var(--radius);
  padding: 15px;
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  cursor: default;
}

.hovereffect .overlay {
  padding: 15px;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  /*   border-radius: var(--radius); */
  /* background-color: rgba(21, 150, 234, 0.7); */
  /*   background-color: var(--bg-project-color); */
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
}

/* .hovereffect:hover .overlay {
  background-color: rgba(0, 0, 0, 0.4);
} */

.hovereffect img {
  display: block;
  position: relative;
}

.hovereffect h2 {
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  position: relative;
  font-size: 17px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transform: translateY(45px);
  -ms-transform: translateY(45px);
  transform: translateY(45px);
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
}

.hovereffect:hover h2 {
  -webkit-transform: translateY(5px);
  -ms-transform: translateY(5px);
  transform: translateY(5px);
  filter: blur(1px);
}

.hovereffect a.info {
  display: inline-block;
  filter: alpha(opacity=0);
  transform: scale(0);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  padding: 5px 10px;
  background: var(--sec-color);
  border-radius: var(--radius);
  color: black;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  margin: -52px 0 0 0;
}

.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

/* .hovereffect a.info:hover {
  box-shadow: 0 1px 5px black;
} */

@media screen and (max-width: 600px) {
  .posts {
    display: inline-block;
    .hovereffect img {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
