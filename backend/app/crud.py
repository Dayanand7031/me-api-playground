from sqlalchemy.orm import Session
from . import models, schemas

def get_profile(db: Session):
    return db.query(models.Profile).first()

def create_profile(db: Session, profile: schemas.ProfileCreate):
    db_profile = models.Profile(
        name=profile.name,
        email=profile.email,
        education=profile.education,
        skills=profile.skills,
        projects=[p.dict() for p in profile.projects],
        work=[w.dict() for w in profile.work],
        links=profile.links.dict(),
    )
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

def update_profile(db: Session, db_profile: models.Profile, profile: schemas.ProfileUpdate):
    db_profile.name = profile.name
    db_profile.email = profile.email
    db_profile.education = profile.education
    db_profile.skills = profile.skills
    db_profile.projects = [p.dict() for p in profile.projects]
    db_profile.work = [w.dict() for w in profile.work]
    db_profile.links = profile.links.dict()
    db.commit()
    db.refresh(db_profile)
    return db_profile

def delete_profile(db: Session, db_profile: models.Profile):
    db.delete(db_profile)
    db.commit()
