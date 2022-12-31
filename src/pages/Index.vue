<template>
  <Layout :showNav="false">
    <section id="showcase">
      <div class="intro">
        <h3>Hallo, mein Name ist</h3>
        <h1>Dionysios Tsentidis.</h1>
        <!-- <p>Explore the website and learn more about me!</p> -->
        <div class="navigate-buttons">
          <a class="button button-primary-outline" href="#about">Über mich</a>
          <a class="button button-secondary" href="#projects">Projekte</a>
        </div>
      </div>
      <TypeEffect />
    </section>
    <section id="about" class="space-bottom-x2">
      <h2 class="space-bottom">Über mich</h2>
      <div class="about-wrapper content-box space-bottom-x2">
        <div class="personal-info">
          <p>
            Hallo, ich heiße Dionysios Tsentidis und ich bin
            {{ new Date().getFullYear() - 1995 }} Jahre alt. Ich wurde in
            Griechenland geboren und ich lebe in Deutschland.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nihil
            suscipit provident unde quis officiis earum repudiandae possimus
            expedita ea asperiores saepe voluptatum et ab, est sit voluptate
            necessitatibus placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nihil
            suscipit provident unde quis officiis earum repudiandae possimus
            expedita ea asperiores saepe voluptatum et ab, est sit voluptate
            necessitatibus placeat?
          </p>
        </div>
        <div class="profile-image">
          <g-image
            alt="Example image"
            src="~/assets/images/undraw_updated_resume_re_q1or.svg"
          />
        </div>
      </div>
      <Timeline />
    </section>
    <section id="projects" class="space-bottom-x2">
      <h2 class="space-bottom">Projekte</h2>
      <ProjectCard />
      <Repositories />
    </section>
    <section id="contact">
      <Form />
    </section>
  </Layout>
</template>

<script>
import TypeEffect from "~/components/TypeEffect.vue";
import Timeline from "~/components/Timeline.vue";
import ProjectCard from "~/components/ProjectCard.vue";
import Repositories from "~/components/Repositories.vue";
import Form from "~/components/Form.vue";
export default {
  metaInfo: {
    title: "Startseite",
  },
  components: {
    TypeEffect,
    Timeline,
    ProjectCard,
    Repositories,
    Form,
  },
};
</script>

<style lang="scss">
section h2 {
  &:hover::before {
    color: var(--sec-color-darken);
  }
  &::before {
    content: "#";
    margin-right: 5px;
    padding-left: 3px;
    color: var(--sec-color);
    transition: 400ms;
  }
}
section#showcase {
  min-height: calc(100vh - 100px);
  display: flex;
  z-index: 1;
  .intro {
    h3,
    h1 {
      margin-bottom: 1.3rem;
    }
    margin-top: -100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .navigate-buttons {
      margin-top: 1em;
      .button {
        &:nth-child(2) {
          margin-left: 1em;
        }
      }
    }
  }
}

section#about {
  h2 {
    margin-top: 0;
  }
  .about-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    position: relative;
    &:after {
      content: "";
      width: 500px;
      height: 250px;
      position: absolute;
      right: -50px;
      bottom: -40px;
      z-index: -1;
      background-size: 40px;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231596ea' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    .personal-info {
      flex-basis: 60%;
    }
    .profile-image {
      flex-basis: 30%;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);

      img {
        border-radius: var(--radius);
        transition: transform 0.3s;
        display: block;
        &:hover {
          transform: scale(1.03);
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  section#about .about-wrapper::after {
    right: 0;
  }
}

@media screen and (max-width: 768px) {
  section#showcase .intro-image {
    max-width: 50%;
  }
  section#about .about-wrapper::after {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .about-wrapper {
    flex-direction: column-reverse;
  }

  .about-wrapper .profile-image {
    margin: 20px;
    max-width: 60%;
  }
  section#showcase .intro-image {
    display: none;
  }

  /* .intro-text {
    margin: auto;
  } */
  section#about .about-wrapper::after {
    display: none;
  }
}
</style>
