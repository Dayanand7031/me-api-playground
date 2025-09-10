## me-api-playground

# A simple full-stack playground app to store and expose my profile information (candidate profile) via a **FastAPI backend** and a **React frontend**.  Deployed on [Render](https://render.com).

---

##  Architecture

-- backend (FastAPI, SQLite, SQLAlchemy, Pydantic)
-- frontend (React + Vite + Axios)
-- ┣ backend (FastAPI, SQLite, SQLAlchemy, Pydantic)
--  app
-- ┣ crud.py
-- ┣ database.py
-- ┣ main.py
-- ┣ models.py
-- ┗ schemas.py
--┗ requirements.txt
--frontend (React + Vite + Axios)
-- ┣ src/
       component/
       profileform.jsx
       profileview.jsx
       profileList.jsx
       SearchBar.jsx
    api.js
--┣ package.json
--┗ vite.config.js
-- README.md





- **Backend** → FastAPI REST API + SQLite  
- **Frontend** → React (Vite) SPA  
- **Deployment** → Render  
- **Database** → SQLite (file-based)

---

## Setup

### Local Development

1. git clone https://github.com/dayanand7031/me-api-playground.git
   
   cd me-api-playground



# backend
-- cd backend
-- python -m venv venv
-- venv\Scripts\activate   # Windows
-- source venv/bin/activate # Mac/Linux

-- pip install -r requirements.txt
-- uvicorn app.main:app --reload
local 
API available at → http://127.0.0.1:8000


# frontend
-- cd frontend
-- npm install
-- npm run dev
- local
React app available at → http://127.0.0.1:5173

## Production (Render)

# Backend (Web Service):

-- Root directory: backend

-- Build command: pip install -r requirements.txt

-- Start command: uvicorn app.main:app --host 0.0.0.0 --port 8000
# https://me-api-playground-85ed.onrender.com/

# Frontend (Static Site):

- Root directory: frontend

- Build command: npm install && npm run build

- Publish directory: dist
# https://me-api-playground-3-gtnl.onrender.com/


## schema profile 


{
  "id": 1,
  "name": "Dayanand",
  "email": "daya@gmail.com",
  "education": "B.Tech",
  "skills": ["Python", "FastAPI", "React"],
  "projects": [
    {
      "title": "Me-API Playground",
      "description": "Portfolio backend + frontend",
      "links": { "github": "https://github.com/dayanand7031/me-api-playground" }
    }
  ],
  "works": [
    {
      "company": "ABC Corp",
      "role": "Backend Intern",
      "start_date": "2024-01-01",
      "end_date": "2024-06-01",
      "description": "Worked on APIs"
    }
  ],
  "links": {
    "github": "https://github.com/dayanand7031",
    "linkedin": "https://linkedin.com/in/...",
    "portfolio": "https://..."
  }
}


# Sample Requests

 POST "http://127.0.0.1:8000/profile" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dayanand",
    "email": "daya@gmail.com",
    "education": "B.Tech",
    "skills": ["Python", "FastAPI"],
    "projects": [
      { "title": "API Project", "description": "FastAPI app", "links": { "github": "https://github.com/..." } }
    ],
    "works": [
      { "company": "ABC Corp", "role": "Intern", "start_date": "2024-01-01", "end_date": "2024-06-01", "description": "Built APIs" }
    ],
    "links": { "github": "...", "linkedin": "...", "portfolio": "..." }
  }'


# Known Limitations

-- Only supports one profile per database (playground scope).

-- SQLite is file-based → not ideal for production with heavy concurrency.

-- CORS is enabled for frontend → adjust in production as needed.




## 📄 Resume

[Download My Resume](./asset/DAYANAND.pdf)


