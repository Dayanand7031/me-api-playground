from pydantic import BaseModel
from typing import List, Optional

class Project(BaseModel):
    title: str
    description: str
    links: Optional[str]

class Work(BaseModel):
    company: str
    role: str
    duration: str

class Links(BaseModel):
    github: Optional[str]
    linkedin: Optional[str]
    portfolio: Optional[str]

class ProfileBase(BaseModel):
    name: str
    email: str
    education: Optional[str]
    skills: List[str] = []
    projects: List[Project] = []
    work: List[Work] = []
    links: Links

class ProfileCreate(ProfileBase):
    pass

class ProfileUpdate(ProfileBase):
    pass

class Profile(ProfileBase):
    id: int

    class Config:
        orm_mode = True
