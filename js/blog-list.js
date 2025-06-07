const blogContainer = document.getElementById('blog-list');
const loadMoreBtn = document.getElementById('load-more-btn');

let visibleCount = 0;
const postsPerPage = 6;

// Function to render cards
function renderBlogCards() {
  const slice = blogPosts.slice(visibleCount, visibleCount + postsPerPage);
  
  slice.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card card-default';

    card.innerHTML = `
      <a href="blog-detail.html?id=${post.id}">
        <img src="${post.cover}" alt="${post.title}">
      </a>
      <div class="blog-card-content">
        <h3 class="blog-card-title"><a href="blog-detail.html?id=${post.id}">${post.title}</a></h3>
        <p class="blog-card-desc">${post.description}</p>
        <div class="d-flex justify-content-between mt-2">
          <span><img src="images/ic_date_blog.svg" /> ${post.date}</span>
          <span>${post.tags}</span>
        </div>
      </div>
    `;

    blogContainer.appendChild(card);
  });

  visibleCount += postsPerPage;

  if (visibleCount >= blogPosts.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// Initial render
renderBlogCards();

// Load more handler
loadMoreBtn.addEventListener('click', renderBlogCards);
