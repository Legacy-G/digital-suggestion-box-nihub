#  Digital Suggestion Box — NiHub

A full-stack web application where users can submit suggestions anonymously or with attribution — perfect for feedback collection, idea proposals, and bug reports.

Built with:
- **Frontend**: React + Vite
- **Backend**: Django + Django REST Framework
- **Auth**: Optional JWT-based login for admins
- **Admin Dashboard**: Django Admin interface for managing suggestions

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
git clone https://github.com/Legacy-G/digital-suggestion-box-nihub.git
cd digital-suggestion-box-nihub

### 📦 Backend Setup
``bash
cd backend
python -m venv env
source env/bin/activate  # or .\env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Visit: http://localhost:8000

You can also create a superuser for admin access:
``bash
python manage.py createsuperuser

📦 Frontend Setup (React + Vite)
``bash
cd frontend
npm install
npm run dev

Visit: http://localhost:5173

🔐 Authentication (Optional)
If JWT login is enabled:

/api/token/ for login

/api/token/refresh/ for refresh

Admin users can log in via Django Admin: http://localhost:8000/admin/

🛠️ Features
Submit suggestions anonymously or with name

Choose from customizable categories (bug fix, performance, etc.)

Responsive React UI

Django Admin dashboard for review, status updates, and filtering


🧰 Tech Stack
Frontend:	React, Vite
Backend:	Django, Django REST Framework
Auth:	Django Auth (optional JWT)
Styling:	Tailwind CSS (or your custom setup)
API Comm:	Axios
Dev Tools:	CORS, Git, GitHub

👨‍💻 Maintainer
Built by Gbure Thomas
