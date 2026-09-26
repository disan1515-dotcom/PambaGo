# PambaGo - Plataforma de Reservas de Almuerzo

Sistema de reservas de almuerzo diario para restaurantes con gestión integrada de pagos.

## 📁 Estructura del Proyecto

```
PambaGo/
├── frontend/                 # Aplicación frontend (Netlify)
│   ├── web-landing/         # Sitio comercial/landing page
│   ├── plataforma/          # App de reservas (Cliente + Restaurante)
│   ├── marca/               # Assets de marca (colores, logo)
│   └── netlify.toml         # Configuración de Netlify
├── backend/                  # API Backend (Railway/Render)
│   ├── config/              # Configuración (DB, Stripe, etc)
│   ├── models/              # Esquemas MongoDB
│   ├── routes/              # Rutas de API
│   ├── controllers/         # Lógica de negocio
│   ├── middleware/          # Middlewares (auth, validación, etc)
│   ├── server.js            # Entrada principal
│   ├── package.json         # Dependencias
│   └── .env.example         # Variables de entorno ejemplo
├── docs/                    # Documentación del proyecto
├── .gitignore              # Configuración de git
└── README.md               # Este archivo
```

## 🚀 Configuración Rápida

### Requisitos Previos
- Node.js 16+ (para backend)
- Git
- Cuenta en GitHub
- Cuenta en Netlify
- Cuenta en MongoDB Atlas (gratis)
- Cuenta en Stripe (testing/production)

### 1. Instalar Git
Descarga e instala desde: https://git-scm.com/download/win

### 2. Configurar Backend Localmente

```bash
cd backend
npm install
cp .env.example .env
# Edita .env con tus credenciales
npm run dev
```

### 3. Probar Frontend Localmente
Abre `frontend/web-landing/index.html` en tu navegador

## 🔧 Variables de Entorno

### Backend (.env)
- `MONGODB_URI`: Conexión a MongoDB Atlas
- `JWT_SECRET`: Clave secreta para tokens
- `STRIPE_SECRET_KEY`: Clave privada de Stripe
- `STRIPE_PUBLIC_KEY`: Clave pública de Stripe
- `EMAIL_USER` / `EMAIL_PASSWORD`: Para envío de emails

## 📋 Próximos Pasos

- [ ] Instalar Git
- [ ] Crear cuenta GitHub
- [ ] Crear repositorio en GitHub
- [ ] Actualizar landing page con nueva propuesta
- [ ] Implementar rutas de API del backend
- [ ] Integrar Stripe en frontend
- [ ] Configurar MongoDB Atlas
- [ ] Desplegar en Netlify (frontend)
- [ ] Desplegar en Railway (backend)

## 👤 Autor
Disan - disan1515@gmail.com

## 📝 Licencia
MIT
