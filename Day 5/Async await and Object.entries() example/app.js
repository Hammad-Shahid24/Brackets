async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = await response.json();
    console.log("Data fetched:", data);
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // remove the btn
    fetchDataButton.remove();
  }
}

const fetchDataButton = document.getElementsByClassName("fetch-posts-btn")[0];

fetchDataButton.addEventListener("click", fetchData);

function displayData(data) {
  const postsContainer = document.getElementsByClassName("posts-container")[0];
  postsContainer.style.display = "block";

  postsContainer.innerHTML = "";

  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h3 class="post-title">${post.title}</h3>
      <p class="post-id">Post ID: ${post.id}</p>
      <p class="post-body">${post.body}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}
