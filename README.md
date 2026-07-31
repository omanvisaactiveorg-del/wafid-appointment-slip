# Wafid Appointment Slip Clone

A responsive web application that replicates the Wafid medical appointment slip interface. This project allows users to search for and view their medical examination appointment details in a professional, print-friendly format.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Layout**: Two-column appointment details table matching the original design
- **Medical Center Information**: Display of medical center contact details and location
- **Print-Friendly**: Optimized styling for printing appointment slips
- **Header Branding**: Wafid logo and professional header
- **Footer with Social Links**: Gulf Health Council branding and social media integration
- **Search Functionality**: Passport number and nationality-based appointment lookup

## Tech Stack

- **React 19**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **shadcn/ui**: High-quality UI components
- **Lucide React**: Beautiful icon library

## Project Structure

```
wafid-clone/
├── client/
│   ├── public/           # Static files (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable UI components
│   │   ├── contexts/     # React contexts
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── App.tsx       # Main app component
│   │   ├── main.tsx      # React entry point
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── server/               # Backend server (Express)
├── shared/               # Shared types and constants
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 22 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wafidmedicalappoinment/wafid-appointment-slip.git
cd wafid-appointment-slip
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `pnpm run dev` - Start development server with hot reload
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build locally
- `pnpm run check` - Run TypeScript type checking
- `pnpm run format` - Format code with Prettier

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push to main branch**:
```bash
git push origin main
```

2. **GitHub Actions will automatically**:
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

3. **Access your site**:
   - Your site will be available at: `https://wafidmedicalappoinment.github.io/wafid-appointment-slip`

### Manual Deployment

To build and deploy manually:

```bash
# Build the project
pnpm run build

# The output will be in dist/public/
# Deploy the contents of dist/public/ to your hosting
```

## Configuration

### Environment Variables

The project uses the following environment variables (automatically injected by Manus):

- `VITE_APP_ID` - Application identifier
- `VITE_APP_TITLE` - Application title
- `VITE_APP_LOGO` - Application logo URL
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

## Customization

### Updating Appointment Data

Edit `client/src/pages/Home.tsx` to modify the sample appointment data:

```typescript
const appointmentData = {
  merchantRef: "Your reference",
  slipNo: "Your slip number",
  firstName: "First Name",
  lastName: "Last Name",
  // ... other fields
};
```

### Styling

Global styles are defined in `client/src/index.css`. Tailwind CSS configuration can be customized in `tailwind.config.ts` (if present).

### Adding Components

New reusable components should be added to `client/src/components/`. Use shadcn/ui components as building blocks.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast load times with Vite
- Minimal bundle size with tree-shaking
- Responsive images and lazy loading ready
- Print-optimized CSS

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast text

## License

MIT License - See LICENSE file for details

## Support

For issues or questions, please open an issue on the GitHub repository.

## Authors

Created as a responsive clone of the Wafid medical appointment slip interface.

---

**Live Demo**: https://wafidmedicalappoinment.github.io/wafid-appointment-slip

**Repository**: https://github.com/wafidmedicalappoinment/wafid-appointment-slip
