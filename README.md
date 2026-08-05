# Asas Vantage Marketing

Laravel 12 + Inertia React marketing site for `https://asaasvantage.com`.

## Setup

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run build
```

Point the web server document root at `marketing/public` for `asaasvantage.com`.

## Env

| Variable | Purpose |
|---|---|
| `APP_URL` | This site (`https://asaasvantage.com`) |
| `PLATFORM_URL` / `VITE_PLATFORM_URL` | Central platform (`https://platform.asaasvantage.com`) for Sign in / Get started and marketing APIs |

`VITE_PLATFORM_URL` is baked in at build time — always run `npm run build` after changing it.

## Production

```bash
APP_ENV=production
APP_DEBUG=false
APP_URL=https://asaasvantage.com
PLATFORM_URL=https://platform.asaasvantage.com
VITE_PLATFORM_URL=https://platform.asaasvantage.com

composer install --no-dev --optimize-autoloader
php artisan config:cache
php artisan route:cache
php artisan view:cache
npm ci && npm run build
```

On the central platform (`asaas`), set `MARKETING_URL=https://asaasvantage.com` so CORS allows the products page to load registerable apps. Then:

```bash
php artisan apps:sync-product-urls
php artisan db:seed --class=ApplicationClientSeeder
```

## Dev

```bash
npm run dev
```

## Cross-app links

- Sign in → `${PLATFORM_URL}/login`
- Get started → `${PLATFORM_URL}/get-started/{applicationCode}`
- Contact form → `POST ${PLATFORM_URL}/api/v1/marketing/contact`
- Registerable apps → `GET ${PLATFORM_URL}/api/v1/marketing/registerable-applications`
