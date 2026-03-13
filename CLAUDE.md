# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (http://localhost:4200)
ng serve

# Build for production
ng build --prod

# Run unit tests (Karma)
ng test

# Run a single test file
ng test --include='**/auth.service.spec.ts'

# Generate a component
ng generate component feature/components/my-component

# Docker build
docker build -t repodocentes .
```

## Architecture

This is an **Angular 13** application for an educational institution (IUGNA). It uses lazy-loaded feature modules organized by user role:

| Route | Module | Guard |
|---|---|---|
| `/` | `UserModule` | none (public) |
| `/auth` | `AuthModule` | none |
| `/admin` | `AdminModule` | `ValidarRolAdminGuard` + `ValidarTokenGuard` |
| `/invitado` | `StandartModule` | `ValidarRolStandartGuard` + `ValidarTokenGuard` |

### Key Architectural Patterns

**Authentication:** JWT token stored in `localStorage` as `token`. `AuthService` (`src/app/admin/services/auth.service.ts`) handles login, register, token renewal (`/renew` endpoint), and logout. Guards in `src/app/guards/loginGuards/` protect role-based routes.

**HTTP Interceptor:** `InterceptorService` (`src/app/admin/services/interceptor.service.ts`) wraps every HTTP request to show/hide the `NgxSpinner` loading indicator via `SpinnerService`.

**Backend URL:** Configured in `src/environments/environment.ts` as `baseUrl: 'http://localhost:5000'`. Production URL is in `environment.prod.ts`. All services inject this value via `environment.baseUrl`.

**Module structure:**
- `src/app/user/` — Public-facing pages (home, institucional, investigacion, extension, novedades, oferta académica by school unit: escusuper/escugen/escusub, biblioteca, digesto, etc.)
- `src/app/admin/` — Admin dashboard for managing docentes, inscripciones, oferta académica, convocatorias, and digesto documents
- `src/app/auth/` — Login, register, email verify, password recovery
- `src/app/standart/` — Read-only dashboard for standard (non-admin) logged-in users
- `src/app/shared/` — Shared headers, footers, and navigation components used across modules

**School units** in the user module follow a pattern of parent component → oferta (child routes) → specific program type (pregrado, ciclos, diplomaturas, etc.).

**Interfaces** are co-located within their module under an `interfaces/` folder. Admin interfaces: `src/app/admin/interfaces/`. User interfaces: `src/app/user/interfaces/`.

**Deployment:** Multi-stage Docker build — Node 16 Alpine builds the Angular app, then nginx 1.17 Alpine serves the `dist/pagina-iugna-test` output on port 80.
