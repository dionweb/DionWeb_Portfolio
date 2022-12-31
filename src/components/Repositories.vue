<template>
  <div>
    <h3 class="space-bottom">Zuletzt aktualisierte Projekte</h3>
    <table>
      <thead class="text-small">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Language</th>
          <th>Updated</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody class="text-small mono">
        <tr v-for="edge in $static.allRepos.edges" :key="edge.node.name">
          <td v-html="edge.node.name"></td>
          <td
            v-if="edge.node.description.length > 0"
            v-html="edge.node.description"
          ></td>
          <td v-else>Beschreibung ist nicht verfügbar.</td>
          <td>#{{ edge.node.language }}</td>
          <td>
            at
            {{ edge.node.updated_at.substring(11, 16) }} on
            {{ edge.node.updated_at.substring(0, 10) }}
          </td>
          <td class="links">
            <a
              v-if="edge.node.html_url.length !== 0"
              v-bind:href="edge.node.html_url"
              target="_blank"
            >
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
            <a
              v-if="edge.node.homepage.length !== 0"
              v-bind:href="edge.node.homepage"
              target="_blank"
            >
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
                class="feather feather-eye"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="repos-btn text-center">
      <a
        class="button button-primary"
        href="https://github.com/dionweb?tab=repositories"
        target="_blank"
        >Zeige alles</a
      >
    </div>
  </div>
</template>

<static-query>

query  {
  allRepos (sortBy: "updated_at", order: DESC, limit:5) {
    edges {
      node {
        name
        description
        homepage
        html_url
        language
        updated_at
      }
    }
  }
}
</static-query>

<style lang="scss">
table {
  border-spacing: 0 4px;
  color: var(--body-color);
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8em;
  thead {
    color: var(--prim-color);
    display: none;
  }
  tbody {
    tr {
      font-size: 0.95em;
      transition: 400ms;
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
      &:hover {
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.15),
          1px 1px 15px 0 rgba(0, 0, 0, 0.05);
      }
      &:hover td:first-of-type {
        border-left: 2px solid var(--sec-color);
      }
      th,
      td {
        padding: 10px 15px;
        text-align: left;
        margin: 10px 0;
        &:first-of-type {
          border-left: 2px solid var(--prim-color);
          transition: 400ms;
        }
        &:nth-of-type(4) {
          display: none;
        }
      }
      .links {
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        top: 4px;
        a {
          margin: 1px 2px;
        }
        svg {
          width: 20px;
        }
      }
    }
  }
}

.repos-btn {
  margin: 1.5em auto;
  .button {
    background: var(--prim-color);
    color: #e8e5e8;
  }
}

@media (max-width: 768px) {
  table th,
  table td {
    padding: 10px 5px;
    &:nth-of-type(3) {
      display: none;
    }
    &:nth-of-type(4) {
      display: none;
    }
  }
}

@media screen and (max-width: 600px) {
  table {
    padding: 0;
    tbody tr th,
    tbody tr td {
      padding: 10px 5px;
    }
    tbody tr td:nth-child(2) {
      display: none;
    }
  }
}
</style>