import React from "react";

const ProjectList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p>No projects found.</p>;
  }

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.links &&
              Object.entries(p.links).map(([k, v]) => (
                <a key={k} href={v} target="_blank" rel="noreferrer">
                  {k}
                </a>
              ))}
            <p>
              <strong>Skills:</strong>{" "}
              {p.skills.map((s) => s.name).join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
