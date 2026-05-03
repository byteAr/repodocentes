# CLAUDE.md — repodocentes

## Descripción del proyecto

Aplicación web SPA para el **Instituto Universitario Gendarme Nacional Argentina (IUGNA)**.
Sistema de gestión de docentes que permite a usuarios autenticados ver y administrar información académica.

## Stack tecnológico

- **Framework:** Angular 13.1.x
- **Lenguaje:** TypeScript 4.5.2
- **Estilos:** TailwindCSS 3.3.0 + Bootstrap 5.3.0 + PrimeFlex
- **UI Components:** PrimeNG 13 + Flowbite
- **Iconos:** FontAwesome 6 + PrimeIcons
- **Rich text:** Quill
- **Carruseles:** Swiper + ngx-splide
- **HTTP/Reactivo:** RxJS + HttpClient
- **Backend URL (dev):** `http://localhost:5000`

## Comandos principales

```bash
npm start          # Servidor de desarrollo (ng serve → localhost:4200)
npm run build      # Build de producción
npm run watch      # Build en modo watch (desarrollo)
npm test           # Tests unitarios (Karma/Jasmine)
```

## Arquitectura de módulos (lazy loading)

```
/           → UserModule      (público, sin guardia de rol)
/auth       → AuthModule      (login)
/admin      → AdminModule     (requiere ValidarRolAdminGuard + ValidarTokenGuard)
/invitado   → StandartModule  (requiere ValidarRolStandartGuard + ValidarTokenGuard)
```

## Estructura de src/app

```
app/
├── admin/       # Módulo administrativo (dashboard, convocatorias, docentes)
├── auth/        # Módulo de autenticación
├── user/        # Módulo de usuario (páginas públicas)
├── standart/    # Módulo invitado
├── shared/      # Componentes y utilidades compartidas
└── guards/      # Guards de rutas (token, rol admin, rol invitado)
```

## Convenciones de código

- Componentes generados con Angular CLI (`ng generate component`)
- Estructura modular por feature (admin, user, auth, standart)
- Los servicios viven dentro del módulo que los consume
- Las interfaces de modelos de datos están en carpetas `interfaces/` dentro de cada módulo
- Nombres en español para rutas y comentarios del negocio

## Notas importantes

- No hay pruebas unitarias activas (karma configurado pero sin cobertura real)
- El archivo `environment.ts` apunta al backend local en `http://localhost:5000`
- El proyecto usa `Dockerfile` para despliegue containerizado
- Los assets de PDFs viven en `src/assets/pdfs/`
