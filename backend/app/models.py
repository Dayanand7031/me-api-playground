from sqlalchemy import Column, Integer, String, JSON
from .database import Base

class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    education = Column(String, nullable=True)
    skills = Column(JSON, default=[])
    projects = Column(JSON, default=[])
    work = Column(JSON, default=[])
    links = Column(JSON, default={})
