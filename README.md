# Cancer Awareness & Support — frontend demo

This is a React/Vite frontend demonstration only; there is no backend or message-delivery service. The contact form is a local demo interaction. **It does not send, record, or retain messages**, and its submitted text remains in the form. Do not enter real health or contact information. This site is not a medical organization and is not a substitute for professional medical advice.

## Requirements and local development

Use Node.js 20.19+ or 22.12+ and npm 10+ (Vite 7 requirements). From the repository root:

```bash
npm install
npm run dev
```

Vite prints the local URL (normally `http://localhost:5173`). Available project commands:

```bash
npm run build
npm run lint
npm run preview
node --test test/*.test.js
```

The banner currently uses an external Unsplash image URL in `src/App.jsx`. To serve it locally instead, place an appropriately licensed image under `public/` and update `BANNER_URL` to the corresponding root-relative file path.

The decorative banner animation respects `prefers-reduced-motion`. Contact labels and inline validation are programmatically connected. There is no API or environment configuration to document; do not add real-contact claims without implementing and testing an authorized, privacy-conscious delivery path.
