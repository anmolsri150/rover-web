import Landing from "./views/pages/landing.jsx";
import Presentation from "./views/pages/presentation.jsx";
import Team from "./views/pages/team.jsx";
import Contact from "./views/pages/contact.jsx";

const routes = [
  {
    path: "/",
    name: "Landing Page",
    component: Landing,
    layout: "/layout"
  },
  {
    path: "/presentation",
    name: "Landing Page",
    component: Presentation,
    layout: "/layout"
  },
  {
    path: "/team",
    name: "Landing Page",
    component: Team,
    layout: "/layout"
  },
  {
    path: "/contact-us",
    name: "Landing Page",
    component: Contact,
    layout: "/layout"
  },
];

export default routes;
