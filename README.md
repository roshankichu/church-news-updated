# ✝ സഭാ വാർത്ത — Sabha Vartha Church News Website

A beautiful Malayalam Church News website with Admin Panel, built with HTML, CSS & JavaScript.

**Theme:** White & Dark Green | **Language:** Malayalam + English

---

## 🔐 Admin Login Credentials

| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `church2025` |

> **To change password:** Open `js/app.js` and edit lines:
> ```js
> const ADMIN_USER = 'admin';
> const ADMIN_PASS = 'church2025';
> ```

---

## 📁 Project Structure

```
church-news/
├── index.html          ← Main website
├── css/
│   └── style.css       ← All styles (white & green theme)
├── js/
│   └── app.js          ← News logic, login, animations
└── README.md
```

---

## 🚀 How to Deploy on GitHub Pages (Step by Step)

### STEP 1 — Create a GitHub Account
1. Go to **https://github.com**
2. Click **Sign Up** and create your free account
3. Verify your email address

---

### STEP 2 — Create a New Repository
1. After login, click the **green "New"** button (top left) or go to: https://github.com/new
2. Fill in:
   - **Repository name:** `church-news` (or any name you like)
   - **Description:** "Sabha Vartha Church News Website"
   - Set to **Public** ✅
   - Check ✅ **"Add a README file"**
3. Click **"Create repository"**

---

### STEP 3 — Upload Your Files
1. In your new repository, click **"Add file" → "Upload files"**
2. Drag and drop these files/folders:
   - `index.html`
   - `css/` folder (with `style.css` inside)
   - `js/` folder (with `app.js` inside)
3. In the "Commit changes" box at the bottom, write: `Add church news website`
4. Click **"Commit changes"** (green button)

> ⚠️ **Important:** The folder structure must be kept exactly:
> - `css/style.css` (not just `style.css`)
> - `js/app.js` (not just `app.js`)

---

### STEP 4 — Enable GitHub Pages
1. In your repository, click **"Settings"** (top menu, gear icon)
2. Scroll down to the **"Pages"** section (left sidebar → "Pages")
3. Under **"Source"**, select:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
4. Click **"Save"**
5. Wait 1–2 minutes for deployment

---

### STEP 5 — Get Your Website URL
1. After saving, refresh the Settings → Pages page
2. You'll see a green box: **"Your site is published at:"**
3. Your URL will be:
   ```
   https://YOUR-USERNAME.github.io/church-news/
   ```
4. Share this link with your church members! 🎉

---

## 🔄 How to Update News (After Deployment)

The website uses your browser's **localStorage** to store news. This means:
- News added via Admin Panel is saved **in the browser** of that device
- For a **shared news database**, you would need a backend service

### For a Simple Shared Solution:
You can edit the default news directly in `js/app.js` in the `defaultNews` array, then re-upload the file to GitHub. The changes will appear for all visitors.

---

## ✏️ How to Edit Default News

Open `js/app.js` and find the `defaultNews` array at the top. Each news item looks like:

```js
{
  id: 1,
  title: "Your News Title in Malayalam",
  category: "Events",  // Parish News / Events / Youth / Prayer / Mission / Announcement
  date: "April 20, 2025",
  image: "https://your-image-url.com/photo.jpg",
  summary: "Short summary shown on the card...",
  content: "Full news content shown when clicked..."
}
```

After editing, upload the new `app.js` to GitHub and your site will update automatically.

---

## 🖼️ Adding Images

For news images, use free image URLs from:
- **Unsplash:** https://unsplash.com (right-click image → Copy image address)
- **Pexels:** https://pexels.com
- **Your own photos:** Upload to **Google Drive** → Share publicly → Get link

Paste the image URL in the Admin Panel's "Image URL" field.

---

## 🎨 Customizing the Website

| What to Change | Where |
|----------------|-------|
| Church name & title | `index.html` — `.site-title` section |
| Colors (green/white) | `css/style.css` — `:root` variables |
| Bible verse in hero | `index.html` — `.hero-verse` |
| Admin password | `js/app.js` — `ADMIN_USER` / `ADMIN_PASS` |
| Default news articles | `js/app.js` — `defaultNews` array |

---

## 📱 Features

- ✅ Beautiful White & Dark Green theme
- ✅ Malayalam + English support
- ✅ Animated news cards
- ✅ Click-to-expand full news with photo overlay
- ✅ Live news ticker
- ✅ Admin login panel (slide-in)
- ✅ Add / Delete news articles
- ✅ Mobile responsive
- ✅ No server needed — pure static site
- ✅ Free hosting on GitHub Pages

---

## 🙏 Built with Faith & Love

*"For God so loved the world..." — John 3:16*
