<template>
  <div class="timeline">
    <div
      class="container"
      v-bind:class="time.class"
      v-for="time in timeline"
      :key="time.title"
    >
      <div class="content">
        <h5>
          {{ time.title }}
          <span class="year text-xSmall">{{ time.year }}</span>
        </h5>
        <h6 class="mono">{{ time.rel }}</h6>
        <p>{{ time.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          title: "Informatik-Ingenieurwesen (B.Sc.)",
          year: "09/2013 – 03/2020",
          rel: "Universität Thessalien",
          description: "Spezialisierung: Softwaretechnik",
          class: "education",
        },
        {
          title: "Praktikum im Bereich Softwareentwicklung",
          year: "04/2019 – 09/2019",
          rel: "DEYAK, Katerini",
          description: "Datenbank-Management und Webentwicklung",
          class: "work",
        },
        {
          title: "Einheitliches Lyzeum",
          year: "09/2010 – 03/2013",
          rel: "Schulabschluss",
          description: "Allgemeine Hochschulreife",
          class: "education",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.timeline {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 3px;
    background-color: var(--prim-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
  .container {
    padding: 10px 50px;
    position: relative;
    background-color: inherit;
    width: 50%;
    &:after {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      right: -17px;
      background-color: var(--bg-color);
      border: 4px solid var(--prim-color);
      top: 49px;
      border-radius: 50%;
      z-index: 1;
    }
    &:nth-child(odd) {
      left: 0;
      &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 45px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 20px 0 20px 20px;
        border-color: transparent transparent transparent
          var(--bg-content-color);
      }
    }
    &:nth-child(even) {
      left: 50%;
      &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 45px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid white;
        border-width: 20px 20px 20px 0;
        border-color: transparent var(--bg-content-color) transparent
          transparent;
      }
      &:after {
        left: -16px;
      }
    }
    &.education::after {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="%231596ea"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"/></svg>');
      background-repeat: no-repeat;
      background-size: 22px;
      background-position-x: 2px;
      background-position-y: 4px;
    }

    &.work::after {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="%231596ea"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/></svg>');
      background-repeat: no-repeat;
      background-size: 18px;
      background-position-x: 3.5px;
      background-position-y: 3px;
    }
    .content {
      padding: 20px 30px;
      background-color: var(--bg-content-color);
      position: relative;
      border-radius: var(--radius);
      h5 {
        margin-top: 1rem;
        margin-bottom: 0;
        .year {
          padding: 3px 5px;
          margin: 6px 0;
          border: 2px solid var(--sec-color);
          border-radius: var(--radius);
          display: block;
          width: max-content;
        }
      }

      h6 {
        margin-bottom: 0.2em;
      }
      p {
        margin-bottom: 1em;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
  .timeline .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .container::before {
    left: 50px;
    border: medium solid white;
    border-width: 20px 20px 20px 0;
    border-color: transparent var(--bg-content-color) transparent transparent;
  }
  .container:nth-child(even)::after,
  .container:nth-child(odd)::after {
    left: 15px;
  }

  .container:nth-child(odd)::before {
    transform: rotate(180deg);
  }
  .container:nth-child(even)::before {
    left: 50px;
  }
  .container:nth-child(even) {
    left: 0%;
  }

  .timeline .container:nth-child(2n) {
    left: 0;
  }
  .timeline .container:nth-child(2n)::after {
    left: 16px;
  }
  .timeline .container:nth-child(2n)::before {
    left: 50px;
  }
}
</style>
