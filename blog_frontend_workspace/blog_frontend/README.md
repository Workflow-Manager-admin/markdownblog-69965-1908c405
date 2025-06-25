# Astro Static Blog

A minimal, responsive static blog built with Astro.  
- All blog posts are written in Markdown and listed on the homepage.  
- Reusable header, footer, and blog card components.  
- Static About and Contact pages.

## 📂 Project Structure

```
blog_frontend/
├── public/                # Static assets (images, favicon, etc.)
├── src/
│   ├── components/        # Astro components (Header, Footer, BlogCard, BaseLayout)
│   ├── content/           # Markdown files for blog posts
│   ├── pages/             # Pages: index.astro, about.astro, contact.astro, blog/[slug].astro
│   └── styles/            # Global CSS (optional)
├── package.json
```

## 🚀 Usage

```bash
npm install
npm run dev        # Start local dev server at http://localhost:3000
npm run build      # Build site for production
npm run preview    # Preview your build locally
```

## ✏️ Adding a Blog Post

1. Add a Markdown file to `src/content/`.
2. Include frontmatter:
    ```
    ---
    title: "Your Blog Title"
    description: "Short post summary for homepage card"
    pubDate: "2024-06-05"
    ---
    ```
3. The post will be automatically listed on the homepage.

## 🎨 Colors

- Primary: #1a202c
- Secondary: #4a5568
- Accent:   #2563eb

## 🧩 Components

- **Header** (navigation)
- **Footer** (site copyright)
- **BlogCard** (post preview for homepage)
- **BaseLayout** (shared layout)

## 📄 Pages

- Homepage: recent blog posts
- About: static info about the blog/author
- Contact: static contact form or info
- Blog: each Markdown post is its own page

## 💡 Clean, fully responsive, minimalistic design.
