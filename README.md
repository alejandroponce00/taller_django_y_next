# Gestión de Turnos para Taller Mecánico

Este proyecto es una aplicación web diseñada para optimizar la gestión de turnos en un taller mecánico. La recepción puede ingresar turnos para los clientes, mientras que los mecánicos tienen acceso a una lista de vehículos asignados para reparar, con la opción de marcarlos como reparados.

---

## 🚀 **Características**

1. **Gestión de Turnos**  
   La recepción puede:
   - Crear turnos ingresando datos del cliente, vehículo y el tipo de reparación.  
   - Ver un listado general de los turnos creados.

2. **Panel para Mecánicos**  
   Los mecánicos pueden:
   - Visualizar los autos asignados con información relevante.  
   - Marcar los autos como "reparados" una vez completado el trabajo.

3. **Roles de Usuario**  
   - **Recepción:** Gestiona la creación de turnos.  
   - **Mecánicos:** Acceden únicamente a los turnos asignados.

4. **Frontend Moderno**  
   - Interfaz intuitiva y dinámica creada con **Next.js** y **Tailwind CSS**.

5. **Backend Escalable**  
   - Backend robusto desarrollado con **Django** y Django REST Framework (DRF).

---

## 🛠️ **Tecnologías Utilizadas**

### **Frontend**
- [Next.js]([https://nextjs.org/](https://taller-frontend-beta.vercel.app/))  
- [Tailwind CSS](https://tailwindcss.com/)  
- Axios (para realizar solicitudes a la API).

### **Backend**
- [Django]()  
- [Django REST Framework (DRF)]()  
- Base de datos: Postgresql (puede migrarse a PostgreSQL para producción).  

### **Despliegue**
- Frontend desplegado en **Vercel**.  
- Backend desplegado en **Railway/Heroku**.

---

## 🌐 **Demostración en Vivo**

- **Frontend:** [https://panel-mecanico.vercel.app/](https://panel-mecanico.vercel.app/)  
- **Backend:** [https://api.panel-mecanico.com/](#) (URL ficticia, personalízala con tu dominio).

---

## 📂 **Estructura del Proyecto**

```plaintext
├── backend/                # Proyecto Django (API REST)
│   ├── api/                # Lógica de turnos y mecánicos
│   ├── settings/           # Configuraciones del proyecto
│   └── db.sqlite3          # Base de datos SQLite
│
└── frontend/               # Proyecto Next.js
    ├── components/         # Componentes reutilizables
    ├── pages/              # Rutas de la aplicación
    └── styles/             # Estilos globales y Tailwind CSS
