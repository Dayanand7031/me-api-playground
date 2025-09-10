import React from "react";

const ProfileView = ({ profile, onEdit, onDelete }) => {
  return (
    <div className="profile-view">
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Education: {profile.education}</p>
      <p>Skills: {profile.skills.join(", ")}</p>
      <div>
        <h3>Links:</h3>
        <a href={profile.links.github}>GitHub</a> |{" "}
        <a href={profile.links.linkedin}>LinkedIn</a> |{" "}
        <a href={profile.links.portfolio}>Portfolio</a>
      </div>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ProfileView;
