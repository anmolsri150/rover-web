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
    name: "Presentation",
    component: Presentation,
    layout: "/layout"
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
    layout: "/layout"
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    layout: "/layout"
  },
];

export default routes;
