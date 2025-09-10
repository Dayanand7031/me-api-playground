from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import engine, Base, get_db
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)







app = FastAPI()

# Allow frontend requests (adjust origin if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://me-api-playground-3-gtnl.onrender.com/"],  # or ["http://localhost:5173"] for Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---- Health check ----
@app.get("/health")
def health():
    return {"status": "ok"}

# ---- CRUD for Profile ----
@app.get("/profile", response_model=schemas.Profile)
def read_profile(db: Session = Depends(get_db)):
    profile = crud.get_profile(db)
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@app.post("/profile", response_model=schemas.Profile)
def create_profile(profile: schemas.ProfileCreate, db: Session = Depends(get_db)):
    existing = crud.get_profile(db)
    if existing:
        raise HTTPException(status_code=400, detail="Profile already exists. Use update.")
    return crud.create_profile(db, profile)

@app.put("/profile", response_model=schemas.Profile)
def update_profile(profile: schemas.ProfileUpdate, db: Session = Depends(get_db)):
    db_profile = crud.get_profile(db)
    if not db_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return crud.update_profile(db, db_profile, profile)

@app.delete("/profile")
def delete_profile(db: Session = Depends(get_db)):
    db_profile = crud.get_profile(db)
    if not db_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    crud.delete_profile(db, db_profile)
    return {"message": "Profile deleted successfully"}

# ---- Queries ----
@app.get("/projects")
def get_projects(skill: str, db: Session = Depends(get_db)):
    profile = crud.get_profile(db)
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return [p for p in profile.projects if skill.lower() in profile.skills]

@app.get("/skills/top")
def get_top_skills(db: Session = Depends(get_db)):
    profile = crud.get_profile(db)
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return {"top_skills": profile.skills[:3]}  # just first 3 for example

@app.get("/search")
def search(q: str, db: Session = Depends(get_db)):
    profile = crud.get_profile(db)
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    results = {
        "skills": [s for s in profile.skills if q.lower() in s.lower()],
        "projects": [p for p in profile.projects if q.lower() in p["title"].lower()],
        "work": [w for w in profile.work if q.lower() in w["company"].lower()],
    }
    return results
