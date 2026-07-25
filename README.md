# Asas Vantage Marketing

Standalone Vite + React marketing site for `http://asaas.local`.

## Setup

```bash
npm install
npm run dev
```

Dev server: `http://127.0.0.1:5174`

Point Apache/`asaas.local` at this Vite server (or `npm run build` → `dist/`).

## Env

| Variable | Purpose |
|---|---|
| `VITE_PLATFORM_URL` | Laravel platform host (`http://app.asaas.local`) for Sign in / Get started and marketing APIs |

## Cross-app links

- Sign in → `${VITE_PLATFORM_URL}/login`
- Get started → `${VITE_PLATFORM_URL}/get-started/{applicationCode}`
- Contact form → `POST ${VITE_PLATFORM_URL}/api/v1/marketing/contact`
- Registerable apps → `GET ${VITE_PLATFORM_URL}/api/v1/marketing/registerable-applications`
