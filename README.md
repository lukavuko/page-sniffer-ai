# Page Sniffer AI Landing Pages

This directory contains the landing pages for the Page Sniffer AI Chrome extension.

## Pages

- **Homepage** (`/` and `/thank-you-for-installing-our-ai-detection-tool`): Thank you page shown after installation
- **Privacy Policy** (`/privacy-policy`): Privacy policy and data practices
- **Terms of Service** (`/terms-of-service`): Terms of service and user agreement

## Tech Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Vite** for build tooling

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site should be deployed to `https://page-sniffer-ai.com` with the following routes:

- `/` → Homepage (thank you page)
- `/thank-you-for-installing-our-ai-detection-tool` → Homepage (thank you page)
- `/privacy-policy` → Privacy Policy
- `/terms-of-service` → Terms of Service

## Customization

- Update colors in `tailwind.config.js`
- Modify layout in `src/components/Layout.tsx`
- Edit page content in `src/pages/`
- Update contact information throughout
