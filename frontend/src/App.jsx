import React, { useEffect, useState } from "react";
import {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  getProjectsBySkill,
} from "./api";
import ProfileForm from "./components/ProfileForm";
import ProfileView from "./components/ProfileView";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      setProfile(res.data);
      setProjects(res.data.projects);
    } catch {
      setProfile(null);
    }
  };

  const handleSave = async (data) => {
    try {
      if (profile) {
        const res = await updateProfile(data);
        setProfile(res.data);
        setProjects(res.data.projects);
      } else {
        const res = await createProfile(data);
        setProfile(res.data);
        setProjects(res.data.projects);
      }
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    await deleteProfile();
    setProfile(null);
    setProjects([]);
    setEditing(false);
  };

  const handleSearch = async (skill) => {
    try {
      const res = await getProjectsBySkill(skill);
      setProjects(res.data);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  return (
    <div className="App">
      <h1>My Profile</h1>
      {editing ? (
        <ProfileForm profile={profile} onSubmit={handleSave} />
      ) : profile ? (
        <ProfileView
          profile={profile}
          onEdit={() => setEditing(true)}
          onDelete={handleDelete}
        />
      ) : (
        <button onClick={() => setEditing(true)}>Create Profile</button>
      )}

      <SearchBar onSearch={handleSearch} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
