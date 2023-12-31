# Next UK Bank Holiday

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7bc56d2-64e7-4042-8f6b-09b1efcc40a2/deploy-status)](https://app.netlify.com/sites/next-bank-hol/deploys)

Just a simple React app that tells you when the next bank holiday is in the England and Wales, Scotland or Northern Ireland. I partly recreated the actual [Bank Holidays page](https://www.gov.uk/bank-holidays) on the government website. The data comes from the [GOV API](https://www.api.gov.uk/gds/bank-holidays/#bank-holidays).

## Tools Used

- JS: [React](https://react.dev/)
- Tooling: [Vite](https://vitejs.dev/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Deploys: [Netlify](https://www.netlify.com/)

## Lighthouse Report

### Initial results
- Performance (95)
- Accessibility (90)
    - Active tab button - `[aria-*] attributes do not have valid values`
    - Attribution link in footer - `Links rely on color to be distinguishable.`
- Best Practices (100)

### Final results
- Performance (98)
- Accessibility (100)
- Best Practices (100)
