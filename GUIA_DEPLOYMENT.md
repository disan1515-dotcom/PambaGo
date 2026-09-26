# Guía de Deployment - PambaGo

## ✅ Completado

### Frontend
- [x] Landing page en vivo: **https://pambago.netlify.app**
- [x] Auto-deploy configurado (cada push a `main` actualiza el sitio)
- [x] Nuevo contenido: Pagos integrados, testimonios, beneficios
- [x] Estructura lista para integración de Stripe

### Backend
- [x] Estructura de carpetas creada
- [x] `package.json` con dependencias
- [x] Rutas base: auth, menus, orders, payments
- [x] Variables de entorno configuradas

### Repositorio
- [x] GitHub inicializado: https://github.com/disan1515-dotcom/PambaGo
- [x] Código pusheado y sincronizado

---

## ⚠️ Próximos Pasos (Críticos)

### 1. Configurar Stripe (30 minutos)

#### En tu cuenta Stripe:
1. Ve a https://dashboard.stripe.com/apikeys
2. Copia tu **Publishable Key** (comienza con `pk_test_`)
3. Copia tu **Secret Key** (comienza con `sk_test_`)

#### En Netlify (Variables de Entorno):
1. Ve a tu sitio en Netlify: https://app.netlify.com/sites/pambago
2. Site settings > Build & deploy > Environment
3. Agrega:
   - `REACT_APP_STRIPE_PUBLIC_KEY` = tu Publishable Key
   - `REACT_APP_API_URL` = URL de tu backend (se configurará después)

#### En Backend (.env):
1. Copia `backend/.env.example` a `backend/.env`
2. Rellena:
   - `STRIPE_SECRET_KEY` = tu Secret Key
   - `STRIPE_WEBHOOK_SECRET` = (obtenible después de crear webhook)
   - `MONGODB_URI` = tu MongoDB Atlas connection string

### 2. Crear MongoDB Atlas (Gratis)

1. Ve a https://www.mongodb.com/cloud/atlas
2. Crea cuenta gratis
3. Crea un cluster
4. Obtén la connection string
5. Agrega a `backend/.env`

### 3. Desplegar Backend en Railway

1. Ve a https://railway.app
2. Conecta tu GitHub (autoriza acceso)
3. New Project > Deploy from GitHub repo
4. Selecciona `PambaGo`
5. Configura:
   - Root directory: `backend`
   - Install command: `npm install`
   - Start command: `npm start`
6. Agrega variables de entorno
7. Deploy

Tu backend estará en: `https://pambago-api.railway.app` (o similar)

### 4. Actualizar Variables en Netlify

Una vez tengas el URL de Railway:
1. Vuelve a Netlify settings
2. Actualiza `REACT_APP_API_URL` con tu URL de Railway
3. Redeploy

### 5. Implementar Integración de Pagos (Stripe)

En `frontend/web-landing/index.html`:
```javascript
// Cargar Stripe
<script src="https://js.stripe.com/v3/"></script>

// En el modal de registro, agregar botón de pago
```

En `backend/routes/payments.js`:
- Implementar creación de Payment Intents
- Agregar webhook de Stripe para confirmar pagos

---

## 🎯 Flujo de Pago Final

1. **Cliente en web-landing**: "Pagar"
2. **Frontend**: Envía solicitud a `/api/payments/create-payment-intent`
3. **Backend**: Crea Payment Intent con Stripe
4. **Frontend**: Muestra formulario Stripe
5. **Cliente**: Ingresa tarjeta
6. **Stripe**: Procesa pago
7. **Webhook**: Backend recibe confirmación
8. **Base datos**: Se registra orden como "pagada"
9. **Cliente**: Recibe QR para retirar

---

## 📋 Checklist Final

- [ ] Crear cuenta Stripe
- [ ] Configurar keys en Netlify
- [ ] Crear MongoDB Atlas
- [ ] Configurar backend .env
- [ ] Desplegar en Railway
- [ ] Actualizar URL en Netlify
- [ ] Implementar Stripe en frontend
- [ ] Probar flujo completo de pago
- [ ] Crear webhook de Stripe
- [ ] Configurar email de confirmación

---

## 🆘 Soporte

- Documentación Stripe: https://stripe.com/docs
- Documentación Railway: https://railway.app/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com/

**Próximo paso**: Crear cuenta Stripe y obtener las claves

