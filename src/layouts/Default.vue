<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav" v-if="showNav">
        <g-link class="nav__link" v-if="showHome" to="/">Startseite</g-link>
        <a class="nav__link" href="/#about">Über mich</a>
        <a class="nav__link" href="/#projects">Projekte</a>
        <a class="nav__link" href="/#contact">Kontakt</a>
      </nav>
      <div class="nav-icons">
        <a href="https://github.com/dionweb" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </a>
        <ToggleTheme />
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>
        Entworfen und entwickelt von
        <a href="https://dionweb.me">DionWeb</a>
      </p>
      <a href="https://github.com/dionweb" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </a>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";
export default {
  props: {
    showHome: { default: false },
    showNav: { default: true },
  },
  components: {
    ToggleTheme,
  },
};
</script>

<style lang="scss">
body {
  .layout {
    max-width: 970px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    .feather {
      background-color: transparent;
      border: 0;
      color: var(--body-color);
      cursor: pointer;
      position: relative;
      top: 4px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      height: 80px;
      position: relative;
      z-index: 99;
      a {
        color: var(--body-color);
        &.nav__link {
          margin: 0 10px;
        }
      }
    }
    main {
      /* background: var(--bg-color);
      position: relative; */
      z-index: 1;
    }
    footer {
      height: 170px;
      /*    position: sticky;
      bottom: 0;
      left: 0;
      width: 100%; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        margin-bottom: 0.8em;
        a {
          color: var(--prim-color);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
