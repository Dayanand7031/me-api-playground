import React, { useState } from "react";

const ProfileForm = ({ onSubmit, profile }) => {
  const [form, setForm] = useState(
    profile || {
      name: "",
      email: "",
      education: "",
      skills: [],
      projects: [],
      work: [],
      links: { github: "", linkedin: "", portfolio: "" },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("links.")) {
      const key = name.split(".")[1];
      setForm({ ...form, links: { ...form.links, [key]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="education"
        placeholder="Education"
        value={form.education}
        onChange={handleChange}
      />
      <input
        name="skills"
        placeholder="Skills (comma separated)"
        value={form.skills}
        onChange={(e) =>
          setForm({ ...form, skills: e.target.value.split(",") })
        }
      />
      <input
        name="links.github"
        placeholder="GitHub"
        value={form.links.github}
        onChange={handleChange}
      />
      <input
        name="links.linkedin"
        placeholder="LinkedIn"
        value={form.links.linkedin}
        onChange={handleChange}
      />
      <input
        name="links.portfolio"
        placeholder="Portfolio"
        value={form.links.portfolio}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileForm;
