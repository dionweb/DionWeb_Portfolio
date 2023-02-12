// fetch("https://api.github.com/users/dionweb/repos")

// fetch("https://api.github.com/users/dionweb/repos?per_page=5&sort=pushed")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//     displayRepo(data);
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));

// function displayRepo(data) {
//   const repo = data[0];
//   const repoDiv = document.getElementById("repo");

//   const repoName = repo.name;
//   const heading = document.createElement("h1");
//   heading.innerHTML = repoName;
//   repoDiv.appendChild(heading);
// }

const fetchData = async () =>
  (
    await fetch(
      "https://api.github.com/users/dionweb/repos?per_page=5&sort=pushed"
    )
  ).json();

fetchData().then((data) => {
  for (let repo of data) {
    toAppend.innerHTML += `
    <tr>
      <td>${repo.name}</td>
      <td>Updated at ${repo.updated_at.substring(
        11,
        16
      )} on ${repo.updated_at.substring(0, 10)}</td>
      <td>#${repo.language ? repo.language : "Markdown"}</td>
      <td class="links">
        <a href="${repo.html_url}" arial-label="Open HTML URL" target="_blank">
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
        <a href="${
          repo.homepage
        }" arial-label="Open Repo Homepage" target="_blank">
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
    `;
  }
});

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Vielen Dank für Ihre Nachricht!"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
