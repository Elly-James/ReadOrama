# 📚 ReadOrama — Online Book Library

> Your one-stop shop for discovering, exploring, and purchasing books across every genre.

Check out the live app → **[ReadOrama](https://readorama-app.onrender.com/)**  
Backend API → **[ReadOrama API](https://readorama-api.onrender.com/books)**

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components](#components)
- [Data Structure](#data-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

---

## About the Project

ReadOrama is a single-page React application built to help readers discover books that match their interests. People who are new to reading often struggle to find great books to start with — ReadOrama solves that by providing a clean, organized library where users can browse books by category, view details, manage a cart, and curate a personal favorites list.

The application demonstrates core React concepts including component architecture, state management, client-side routing, and RESTful data fetching — all within a responsive, dark-themed UI.

---

## Features

- 📚 **Browse by Category** — Books are organized into categories (Computer, History, Genealogy, African Lit, and more)
- 🛒 **Shopping Cart** — Add books to cart, adjust quantities, remove items, and view a running total
- ❤️ **Favorites List** — Save books to a personal favorites collection and remove them at any time
- ➕ **Add a Book** — Submit new books to the library using the Add Book form
- 🔍 **Book Details Modal** — Click any book to view its full description, publisher, and published date
- 💳 **Checkout Flow** — Choose a payment method (Credit/Debit Card, M-Pesa, or PayPal) and complete checkout
- 📱 **Fully Responsive** — Works seamlessly across desktop, tablet, and mobile screens
- ⚡ **Real-time State Updates** — All cart and favorites changes reflect instantly without page reloads

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **React Router DOM v7** | Client-side routing |
| **json-server** | REST API backend serving `db.json` |
| **Tailwind CSS** | Utility-class styling |
| **Font Awesome** | Icons throughout the UI |
| **Playfair Display + DM Sans** | Typography (Google Fonts) |
| **Render** | Hosting (frontend + backend) |

---

## Project Structure

```
readorama/
├── public/
│   ├── home.png            # Hero background image
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── App.js          # Root component — holds global state
│   │   ├── SideBar.js      # Collapsible navigation sidebar
│   │   ├── Home.js         # Landing / hero page
│   │   ├── Shop.js         # Book browsing page with carousels
│   │   ├── Category.js     # Groups books by category
│   │   ├── BookForm.js     # Form to add a new book
│   │   ├── Cart.js         # Cart page with checkout form
│   │   ├── CartItem.js     # Individual cart item card
│   │   ├── Favorites.js    # Favorites page
│   │   └── Footer.js       # Site footer
│   ├── index.css           # Global styles
│   └── index.js            # React entry point
├── db.json                 # Book data (acts as the database)
├── server.js               # json-server backend entry point
├── package.json
└── .env                    # Environment variables (not committed)
```

---

## Components

| Component | Description |
|---|---|
| **App** | Parent component. Holds global state for `books`, `cart`, and `favorites`. Passes handlers down as props. |
| **SideBar** | Fixed collapsible navigation with links to Home, Shop, Cart, and Favorites. |
| **Home** | Hero landing page with a full-screen background image and a "Shop Now" call to action. |
| **Shop** | Fetches and displays all books grouped by category with left/right scroll carousels. |
| **Category** | Renders a carousel row of books for a single category with navigation chevrons. |
| **BookForm** | Controlled form that POSTs a new book to the API and immediately adds it to the shop. |
| **Cart** | Displays all cart items, quantity controls, a running price total, and the checkout/payment form. |
| **CartItem** | Individual book card within the cart — handles quantity adjustment and removal. |
| **Favorites** | Grid display of all favorited books with the option to remove each one. |
| **Footer** | Site footer with links, collaborator credits, social media icons, and copyright. |

---

## Data Structure

Books are stored in `db.json` and served via `json-server`. Each book object follows this structure:

```json
{
  "id": "unique-id",
  "title": "Book Title",
  "authors": ["Author Name"],
  "publisher": "Publisher Name",
  "publishedDate": "2024-01-01",
  "description": "A brief description of the book.",
  "category": ["Computer"],
  "imageLink": "https://link-to-cover-image.jpg",
  "price": 3200
}
```

**Available categories:** Computer · History · Genealogy · African Lit · Asian · Science

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- Git

### 1. Clone the repository

```bash
git clone git@github.com:your-username/readorama.git
cd readorama
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the project root

```bash
REACT_APP_API_URL=http://localhost:3001
```

### 4. Start the backend (json-server)

Open a terminal and run:

```bash
node server.js
```

The API will be available at `http://localhost:3001/books`

### 5. Start the React app

Open a **second terminal** and run:

```bash
npm start
```

The app will open at `http://localhost:3000`

> ⚠️ **Both the backend and frontend must be running at the same time** for the app to fetch and display books correctly.

---

## Deployment

This project is deployed on **Render** using two separate services:

### Backend (json-server API)
- **Service type:** Web Service
- **Build command:** `npm install`
- **Start command:** `node server.js`
- **URL:** `https://readorama-api.onrender.com`

### Frontend (React App)
- **Service type:** Static Site
- **Build command:** `npm install && npm run build`
- **Publish directory:** `build`
- **Environment variable:** `REACT_APP_API_URL=https://readorama-api.onrender.com`

> **Note:** Render's free tier spins down inactive services after 15 minutes. The first request after a period of inactivity may take up to 30 seconds while the backend wakes up. This is expected behaviour on the free plan.

---

## Authors

This project was built collaboratively by:

| Name | Email |
|---|---|
| Edith Gatwiri | edithgatwiri70@gmail.com |
| Elly James | ellykomunga@gmail.com |
| Helen Wairagu | hwangari3@gmail.com |
| Hollidah Chemutai | hollydachemutai@gmail.com |
| Hydan Cheruiyot | hydancheru@gmail.com |

If you run into any issues or have questions, feel free to reach out via the emails above.

---

## License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

---

<p align="center">Made with ❤️ by the ReadOrama Team · 2026</p>