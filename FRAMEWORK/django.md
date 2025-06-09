## **Django Must-Know Concepts (2024)**

### 1. **Project Structure**

- `manage.py`, `settings.py`, `urls.py`, `wsgi.py`, `asgi.py`
- App vs Project (difference between `accounts` app & project root)

### 2. **Models & ORM**

- What is a Model? How to define in `models.py`
- ORM basics: `.objects.create()`, `.objects.filter()`, `.objects.get()`
- Model relationships: `ForeignKey`, `ManyToManyField`, `OneToOneField`
- Running migrations: `makemigrations` & `migrate`
- Admin site registration

### 3. **Views**

- Function-based views (FBV)
- Class-based views (CBV)
- What is `request`? How to handle GET/POST
- Returning HttpResponse, JsonResponse

### 4. **URLs & Routing**

- `urls.py` setup (project-level, app-level)
- URL patterns, path vs re_path, including app URLs in project

### 5. **Templates**

- What is Django Template Language (DTL)?
- Rendering templates in views
- Passing context data to templates
- Template inheritance (`{% extends %}`), blocks

### 6. **Forms**

- Django Forms vs ModelForms
- Validating forms
- Handling form submission in views

### 7. **User Authentication**

- Built-in `User` model
- Register/Login/Logout views
- LoginRequiredMixin / @login_required decorator
- Password hashing, password reset flows

### 8. **Middleware**

- What is middleware? How to write custom middleware

### 9. **Static & Media Files**

- `STATIC_URL`, `STATICFILES_DIRS`
- `MEDIA_URL`, `MEDIA_ROOT`
- Serving files in dev vs production

### 10. **Settings & Environment**

- Role of `settings.py`
- Using environment variables (`os.environ`)
- Debug=True vs Debug=False

### 11. **Django REST Framework (DRF) \[For API]**

- Serializers
- APIView, ViewSet, ModelViewSet
- Routers & URLs
- Permissions & Authentication for API

### 12. **Testing**

- Writing simple tests (unit, integration)
- `python manage.py test`

### 13. **Admin Customization**

- Registering models
- Customizing admin forms & fields

### 14. **Deployment Basics**

- `wsgi.py`, `asgi.py`
- Collectstatic
- Allowed hosts
- Gunicorn, Nginx, Heroku basics (optional)

---

## **Django Concepts for MERN Stack Devs**

Since you know Node/Express, yahan similarity hai:

- **Views = Controllers**
- **Models = Models**
- **Templates = React/Frontend** (but Django does server-rendered)
- **Serializers = Mongoose Schema to JSON**

---

## **If You Know These:**

You can build:

- Login/Registration
- CRUD apps (Blog, TODO, Ecomm)
- Basic API with DRF

---

### **Bonus: Other Useful Stuff**

- Signals (pre_save, post_save)
- Caching
- Sessions
- Internationalization

---
