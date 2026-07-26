# Asas Vantage Marketing

Laravel 12 + Inertia React marketing site for `http://asaas.local`.

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run build   # or npm run dev for Vite HMR
```

Point Apache `asaas.local` at `marketing/public` (see XAMPP `httpd-vhosts.conf`).

## Env

| Variable | Purpose |
|---|---|
| `APP_URL` | This site (`http://asaas.local`) |
| `PLATFORM_URL` / `VITE_PLATFORM_URL` | Central platform (`http://app.asaas.local`) for Sign in / Get started and marketing APIs |

## Dev

```bash
npm run dev
```

Open `http://asaas.local` (Apache) with Vite HMR on `127.0.0.1`.

## Cross-app links

- Sign in → `${PLATFORM_URL}/login`
- Get started → `${PLATFORM_URL}/get-started/{applicationCode}`
- Contact form → `POST ${PLATFORM_URL}/api/v1/marketing/contact`
- Registerable apps → `GET ${PLATFORM_URL}/api/v1/marketing/registerable-applications`
