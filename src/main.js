
import AdminProjectEditPage from "./pages/admin/projects-edit";

import { render, router } from "./lid";
import  { AboutPage }  from "./pages/AboutPage";
import AdminProjectsPage from "./pages/admin/projects";
import AdminProjectsAddPage from "./pages/admin/projects-add";
import HomePage from "./pages/HomePage";
import NotFoud from "./pages/NotFoud";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectPage from "./pages/ProjectPage";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage,app));
router.on("/AboutPage", () => render(AboutPage,app));
router.on("/ProjectDetail/:id", () => render(ProjectDetail,app));
router.on("/ProjectPage", () => render(ProjectPage,app));
router.notFound (() =>render(NotFoud,app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminProjectsAddPage, app));
router.on("/admin/projects/:id/edit", ({data}) => render(() =>AdminProjectEditPage(data), app));
router.resolve();