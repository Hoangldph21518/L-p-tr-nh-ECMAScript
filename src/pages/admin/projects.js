import { useEffect, useState } from "../../lid";
const AdminProjectsPage = () => {
    // localStorage
    const [projects, setProject] = useState([]);

    useEffect(() => {
        fetch(" http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                fetch(` http://localhost:3000/projects/${id}`,{
                    method: "DELETE"
                }).then(() => {
                    const newProjects = projects.filter((project) => project.id != id);
                    setProject(newProjects);
                });
            });
        }
    });

    return `<div class="container pt-5">
            <h1>Quản lý dự án</h1>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên dự án</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ projects
                             .map((project, index) => {
                                          return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td>
                                        <button data-name="Dat" data-id="${
                                            project.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                                        <a href="/admin/projects/${project.id}/edit">Edit</a>
                                    </td>
                                </tr>
                            `;
                                      })
                                      .join("")
                        } 
                        
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminProjectsPage;