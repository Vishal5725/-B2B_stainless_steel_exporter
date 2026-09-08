# B2B Stainless Steel Flange Exporter

A responsive B2B product-category landing page for **Bhansali Stainless**, focused on stainless steel flanges for industrial buyers in **Saudi Arabia, UAE, and the wider Middle East**.

## 🔗 Project Links

- **Live Website:** https://b2-b-stainless-steel-exporter.vercel.app/
- **GitHub Repository:** https://github.com/Vishal5725/-B2B_stainless_steel_exporter.git

## 📌 Project Overview

This project was developed as a B2B stainless steel exporter product-category website. The page presents stainless steel flange products, available grades, technical specifications, certifications, export information, and a working enquiry flow.

The design is responsive and optimized for mobile and desktop users, with a clean industrial/B2B visual style and subtle motion interactions.

## ✨ Key Features

### Product & Content
- Stainless Steel Flanges product overview
- Flange configuration cards
- SS 304, SS 316, and SS 316L grades
- Technical specifications table
- ASTM / ISO certification section
- Export and shipping information
- Saudi Arabia, UAE, and Middle East-focused messaging
- Direct phone / WhatsApp / email contact options

### UI / UX
- Fully responsive layout
- Mobile-friendly navigation
- Animated mobile sidebar menu
- Products dropdown navigation
- Smooth scrolling between sections
- Interactive product cards
- Hover animations and visual feedback
- Framer Motion animations
- Semantic HTML structure
- Accessible navigation and form controls

### Enquiry System
The website includes a working enquiry form with:
- Name
- Email
- Phone
- Product interest
- Client-side validation
- Loading state
- Success/error feedback

Submitted enquiries are sent through a Next.js API route and stored in Google Sheets through a Google Apps Script webhook.

### Analytics / Tracking
The application includes:
- Google Tag Manager integration through an environment variable
- `dataLayer` support
- `generate_lead` event on successful enquiry submission
- Form name and selected product passed as event parameters

The GTM container ID is intentionally configurable so the deployment owner can provide their own GTM container without changing the source code.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application structure |
| React | UI development |
| Tailwind CSS | Responsive styling |
| Framer Motion | UI animations and interactions |
| Lucide React | Interface icons |
| Google Apps Script | Lead submission endpoint |
| Google Sheets | Enquiry/lead storage |
| Google Tag Manager | Analytics/tracking integration |
| Vercel | Production deployment |

## 📂 Project Structure

```text
bhansali-stainless/
│
├── app/
│   ├── api/
│   │   └── enquiry/
│   │       └── route.js
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── robots.js
│   └── sitemap.js
│
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── ProductOverview.jsx
│   ├── Grades.jsx
│   ├── Specifications.jsx
│   ├── Certifications.jsx
│   ├── ExportInfo.jsx
│   ├── EnquiryForm.jsx
│   └── Footer.jsx
│
├── public/
│   └── images/
│
├── .env
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vishal5725/-B2B_stainless_steel_exporter.git
cd -B2B_stainless_steel_exporter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file:

```env
WEB_URL=http://localhost:3000
GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_webhook
GTM_ID=
```

| Variable | Description | Required |
|---|---|---|
| `WEB_URL` | Canonical website URL used for metadata | Yes |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Google Apps Script endpoint used to store enquiries | Yes |
| `GTM_ID` | Google Tag Manager container ID supplied by the deployment owner | Optional |

> **Security:** Never commit `.env.local` or secret/environment-specific values to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🧪 Production Build

```bash
npm run build
npm start
```

## 📊 Enquiry Data Flow

```text
User
  │
  ▼
Enquiry Form
  │
  ▼
Next.js /api/enquiry
  │
  ▼
Google Apps Script Webhook
  │
  ▼
Google Sheets
```

On a successful form submission, the frontend pushes a `generate_lead` event to the browser `dataLayer`:

```javascript
window.dataLayer = window.dataLayer || [];

window.dataLayer.push({
  event: "generate_lead",
  form_name: "stainless_steel_flange_enquiry",
  product_interest: formData.product,
});
```

## 📈 Google Tag Manager

GTM is integrated using:

```jsx
<GoogleTagManager gtmId={process.env.GTM_ID} />
```

The GTM ID is provided through an environment variable rather than hard-coded into the application. This allows the website owner to connect their own GTM container after deployment.

The application already provides the `generate_lead` dataLayer event required for form-submission tracking.

## 🌐 Deployment

The production website is deployed on **Vercel**.

Configure production environment variables in:

```text
Vercel → Project → Settings → Environment Variables
```

Example:

```env
WEB_URL=https://your-production-domain.com
GOOGLE_SHEETS_WEBHOOK_URL=your_google_apps_script_webhook
GTM_ID=GTM-XXXXXXXX
```

After changing environment variables, redeploy the application.

## ⚡ Performance & SEO

Implemented:
- SEO metadata
- Open Graph metadata
- Twitter metadata
- Robots configuration
- Sitemap
- Semantic HTML
- Image alt text
- Responsive layouts
- Production build optimization
- Lightweight SVG product imagery

### Lighthouse Results

| Category | Score |
|---|---:|
| Performance | **97** |
| Accessibility | **97** |
| Best Practices | **100** |
| SEO | **100** |

These scores were measured on the deployed Vercel website using Lighthouse.

## 📱 Responsive Design

The page is designed for:
- Mobile phones
- Tablets
- Laptops
- Desktop displays

The navigation changes to a mobile sidebar menu on smaller screens, while desktop users get the full navigation and product dropdown.

## 🎯 Target Audience

The page is designed for B2B industrial buyers looking for stainless steel flange products in:
- Saudi Arabia
- United Arab Emirates
- Middle East markets

## 🔒 Security Notes

- Environment variables are used for deployment-specific configuration.
- Google Sheets webhook URLs should not be exposed in source code.
- `.env.local` should never be committed to GitHub.
- GTM configuration is externalized through `GTM_ID`.
- Form input is validated before submission.

## 📄 License

This project was developed as a website development assessment/project for the Bhansali Stainless use case.

All product/company-specific content, branding, and deployment configuration should be reviewed and approved by the client before production business use.

## 👨‍💻 Developer

**Vishal Gupta**

- GitHub: https://github.com/Vishal5725
- Project Repository: https://github.com/Vishal5725/-B2B_stainless_steel_exporter.git
- Live Project: https://b2-b-stainless-steel-exporter.vercel.app/
