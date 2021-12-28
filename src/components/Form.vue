<template>
  <div class="form">
    <h3 class="text-center">Kontaktformular</h3>
    <p class="text-center space-bottom">
      Möchten Sie mit mir in Kontakt treten? Ich freue mich über Ihre Nachricht.
    </p>

    <form id="app" @submit="checkForm" v-bind:action="action" method="post">
      <div v-if="errors.length" class="errors">
        <ul>
          <li v-for="error in errors" :key="error">
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
              class="feather feather-alert-circle"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {{ error }}
          </li>
        </ul>
      </div>
      <div class="fields">
        <div class="name half">
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div class="email half">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div class="message full">
          <textarea
            name="message"
            id="message"
            v-model="message"
            cols="30"
            rows="8"
            placeholder="Nachricht"
          ></textarea>
        </div>
        <div class="submit text-center full">
          <button type="submit" class="button button-primary">Absenden</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action: process.env.GRIDSOME_FORM_URL,
      errors: [],
      name: null,
      email: null,
      message: null,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Geben Sie bitte Ihren Namen ein.");
      }
      if (!this.email) {
        this.errors.push("Geben Sie bitte Ihre Email-Adresse ein");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss">
.errors {
  width: 80%;
  margin: auto;
  ul {
    margin-left: 0;
    list-style: none;
    svg {
      position: relative;
      top: 6px;
      margin-right: 0.4em;
      &.feather {
        color: var(--sec-color);
      }
    }
  }
}

.fields {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  .half {
    width: 48%;
  }
  .full {
    width: 100%;
  }
  input,
  textarea {
    font-family: var(--base-font-family);
    width: 100%;
    margin: 1em 0;
    font-size: 1em;
    padding: 8px 27px;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border: 0;
    border-left: 2px solid var(--prim-color);
    color: var(--body-color);
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.05),
      1px 1px 15px 0 rgba(0, 0, 0, 0.05);
    background: var(--bg-input-color);
    transition: 400ms;
    &:focus {
      border-left: 2px solid var(--sec-color-darken);
      padding-left: 20px;
    }
  }

  textarea {
    resize: none;
  }
  .submit {
    margin: 1.5em auto;
  }
  button {
    font-size: 1em;
    padding: 8px 27px;
    border: 0;
    font-family: var(--font-family);
  }
}

@media screen and (max-width: 600px) {
  .fields,
  .errors {
    width: 100%;
  }
}
</style>
