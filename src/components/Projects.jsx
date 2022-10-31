import Project from "./Project";
import stocks_tracker from "../images/stocks_tracker.png";
import lucky_choice_game from "../images/lucky_choice_game.png";
import product_landing_page from "../images/product_landing_page.png";
import documentation_page from "../images/documentation_page.png";
import survey_form from "../images/survey_form.png";
import crown_clothing from "../images/crown-clothing.png";
import gatsby_blog from "../images/gatsby-blog.png";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      image: crown_clothing,
      path: "https://crown-clothing-by-daniel.netlify.app",
    },
    {
      title: "Gatsby Blog",
      image: gatsby_blog,
      path: "https://danielpimentel-blog.netlify.app/",
    },
    {
      title: "Stocks Tracker",
      image: stocks_tracker,
      path: "/webpages/Stocks_Tracker/index.html",
    },
    {
      title: "Lucky Choice Game",
      image: lucky_choice_game,
      path: "/webpages/Lucky_choice_game/index.html",
    },
    {
      title: "Product Landing Page",
      image: product_landing_page,
      path: "/webpages/product_landing_page/index.html",
    },
    {
      title: "Documentation Page",
      image: documentation_page,
      path: "/webpages/Technical_Documentation_Page/index.html",
    },
    {
      title: "Survey Form",
      image: survey_form,
      path: "/webpages/survey_form/index.html",
    },
  ];

  return (
    <div className="projects-container" id="projects-container">
      {projects.map((p, index) => (
        <Project key={index} title={p.title} image={p.image} path={p.path} />
      ))}
    </div>
  );
}
