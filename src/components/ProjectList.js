const ProjectList = ({ projects }) => {
    return `
    ${projects
        .map((item) => {
            return `<div><a href="/project/${item.id}">${item.name}</div>`;
        })
        .join("")}
    
    `;
};
export default ProjectList;