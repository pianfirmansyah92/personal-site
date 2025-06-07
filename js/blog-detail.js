$( function() { 
  // Share Section
  // Set current URL dynamically
  const currentUrl = window.location.href;

  // Twitter
  document.getElementById("twitter-share").href =
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blogPost.title)}`;

  // LinkedIn
  document.getElementById("linkedin-share").href =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  // WhatsApp
  document.getElementById("whatsapp-share").href =
    `https://wa.me/?text=${encodeURIComponent(blogPost.title + ' ' + currentUrl)}`;

  // Copy Link
  document.getElementById("copy-link-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      const toast = new bootstrap.Toast(document.getElementById('copyToast'));
      toast.show();
    });
  });
});

//======> Tooltip Script  
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// blog-detail.js
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

const blogPost = blogPosts.find(post => post.id === postId);

const titleEl = document.getElementById('blog-name');
const dateEl = document.getElementById('blog-date');
const tagsEl = document.getElementById('blog-tags');
const coverEl = document.getElementById('blog-cover');
const bodyEl = document.getElementById('blog-body');

const pageTitle = document.getElementById('page-title');
const metaDescription = document.getElementById('meta-description');
const blogContainer = document.getElementById('blog-not-found');
const container = document.getElementById("blog-container");

if (blogPost) {
  // Fill data into existing DOM
  titleEl.textContent = blogPost.title;
  dateEl.textContent = new Date(blogPost.date).toLocaleDateString();
  coverEl.src = blogPost.cover;
  coverEl.alt = blogPost.title;
  tagsEl.innerHTML = blogPost.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ');
  bodyEl.innerHTML = blogPost.content;

  // Meta
  pageTitle.textContent = `${blogPost.title} | Written by Pian Firmansyah`;
  metaDescription.setAttribute("content", blogPost.description);

  // Additional Meta (OG + Twitter)
  document.getElementById("meta-title").textContent = blogPost.title;

  document.getElementById("og-title").setAttribute("content", blogPost.title);
  document.getElementById("og-description").setAttribute("content", blogPost.description);
  document.getElementById("og-image").setAttribute("content", blogPost.cover);
  document.getElementById("og-url").setAttribute("content", window.location.href);

  document.getElementById("twitter-title").setAttribute("content", blogPost.title);
  document.getElementById("twitter-description").setAttribute("content", blogPost.description);
  document.getElementById("twitter-image").setAttribute("content", blogPost.cover);

} else {
  // Hide the main project content
  container.style.display = "none";
  blogContainer.style.display = "flex";

  // Not found
  blogContainer.innerHTML = `
    <div class="box-notfound mb-5">
        <h3>Oops! Blog Not Found</h3>
        <p class="mb-4 text-center">It looks like the blog you're trying to view doesn't exist or has been moved.</p>
        <a href="blog.html" class="btn btn_grad grad-dark hover-effect">Back to Blog</a>
    </div>
  `;
  pageTitle.textContent = `Not Found | Blog – Pian`;
  metaDescription.setAttribute("content", "The requested blog post could not be found.");
  document.getElementById("og-title").setAttribute("content", "Not Found");
  document.getElementById("og-description").setAttribute("content", "The blog post cannot be found.");
  document.getElementById("og-url").setAttribute("content", window.location.href);
}