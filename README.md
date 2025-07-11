[![View Project](https://img.shields.io/badge/GitHub-View_Project-2ea44f)](https://github.com/Legacy-G/digital-suggestion-box-nihub)

#  Digital Suggestion Box — NiHub

A full-stack web application where users can submit suggestions anonymously or with attribution — perfect for feedback collection, idea proposals, and bug reports.

Built with:
- **Frontend**: React + Vite
- **Backend**: Django + Django REST Framework
- **Auth**: Optional JWT-based login for admins
- **Admin Dashboard**: Django Admin interface for managing suggestions

---

## 📘 Project Overview

The Digital Suggestion Box is a full-stack feedback collection system designed for NiHub. Users can submit ideas, bug reports, or performance suggestions anonymously or with their name attached. Submissions are processed by a Django REST API and managed via a secured admin dashboard. This tool streamlines feedback gathering, supports organizational growth, and promotes transparency between users and administrators.

---

## ⚙️ How It Works

1. **Frontend (React + Vite)**  
   Users interact with a responsive form hosted at `http://localhost:5173`. They can choose a category, enter a suggestion, and submit it anonymously or with a name.

2. **Axios POST Request**  
   Upon submission, the frontend sends a structured payload to the backend via Axios.

3. **Backend (Django + DRF)**  
   Django processes the request, saves it in the database, and applies permissions — allowing anyone to submit suggestions but restricting updates/deletion to admin users.

4. **Django Admin Dashboard**  
   Admins log in at `http://localhost:8000/admin/` to review, filter, and manage submitted suggestions.

5. **Optional Authentication**  
   JWT-based login endpoints (`/api/token/`) can be added to protect routes or introduce user tracking.

6. **CORS Configuration**  
   Seamless communication between `localhost:5173` and `localhost:8000` is enabled via `django-cors-headers`.

7. **Data Review & Filtering**  
   Suggestions are displayed with categories, timestamps, anonymity status, and optional user info — ideal for evaluating organizational feedback trends.

---

##  Project Structure
digital-suggestion-box-nihub/
├── backend/           # Django backend
│   ├── dsb/           # Suggestion app
│   ├── nihub/         # Project config
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/          # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts


---

## Getting Started

### 📦 Clone the Repo
``bash
`git clone https://github.com/Legacy-G/digital-suggestion-box-nihub.git
cd digital-suggestion-box-nihub`

##🌐 Backend Setup
``bash
`cd backend
python -m venv env
source env/bin/activate  # or .\env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver`

Visit: http://localhost:8000

You can also create a superuser for admin access:
``bash
`python manage.py createsuperuser`

## 🌐 Frontend Setup (React + Vite)
``bash
`cd frontend
npm install
npm run dev`

Visit: http://localhost:5173

## 🔐 Authentication (Optional)
If JWT login is enabled:

/api/token/ for login

/api/token/refresh/ for refresh

Admin users can log in via Django Admin: http://localhost:8000/admin/

## 🛠️ Features
Submit suggestions anonymously or with name

Choose from customizable categories (bug fix, performance, etc.)

Responsive React UI

Django Admin dashboard for review, status updates, and filtering


## 🧰 Tech Stack

| Layer      | Tech                                 |
|------------|--------------------------------------|
| Frontend   | React, Vite                          |
| Backend    | Django, Django REST Framework        |
| Auth       | Django Auth (optional JWT)           |
| Styling    | Tailwind CSS                         |
| API Comm   | Axios                                |
| Dev Tools  | CORS, Git, GitHub                    |
| Deployment | Localhost / Optional: Render/Railway |

## 👥 Contributors

- Gbure Thomas ([Legacy-G](https://github.com/Legacy-G)) — Creator & Backend developer | django
- Noibis Junior ([Noibisjunior](https://github.com/Noibisjunior)) — Creator & Backend developer | Node.js
- LabstarMX ([LabstarMX](https://github.com/LabstarMX)) — Creator & Frontend developer | ReactJs
