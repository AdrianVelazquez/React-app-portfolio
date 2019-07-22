import React from "react";

// card images
import me from "../images/me.jpg";
import intro from "../images/intro.jpg";
import icon from "../images/icon.svg";
import about from "../images/about.jpg";
import work_history_bannerboy from "../images/work_history_bannerboy.jpg";
import work_history_bannerboy_icon from "../images/work_history_bannerboy_icon.jpeg";
import work_history_revlon from "../images/work_history_revlon.jpeg";
import work_history_revlon_icon from "../images/work_history_revlon_icon.jpeg";
import work_history_droga5 from "../images/work_history_droga5.jpg";
import work_history_droga5_icon from "../images/work_history_droga5_icon.png";
import education_history_fullsail_icon from "../images/education_history_fullsail_icon.png";
import education_history_fullsail_masters from "../images/education_history_fullsail_masters.jpg";
import education_history_fullsail_bachelors from "../images/education_history_fullsail_bachelors.png";
import education_history_uri_icon from "../images/education_history_uri_icon.png";
import education_history_uri from "../images/education_history_uri.jpg";

import CardContent from "./CardContent";

const cardContainerStyles = {
  width: "55%",
  margin: "-225px 1% 0px 1%",
  float: "left"
};

function Cards() {
  return (
    <div id="card-container" style={cardContainerStyles}>
      <section>
        <CardContent
          content={{
            title: "Adrian Velazquez",
            imgUrl: me,
            header:
              "Frontend Engineer | Javascript Animator | Banner Developer",
            postImgUrl: intro,
            info:
              "I’m a front end javascript digital animator and web developer with 4 years of professional experience working in large media agencies and development departments. My proficiencies lay in front end, core technologies and the development of banner ads, javascript animations, single page apps, sites and ecommerce platforms using Wordpress. Currently building React.js Apps.",
            footerTitle: "Feedback?",
            footerContent:
              "Feel free to contact me via email, or phone at: 727-480-3173"
          }}
        />
      </section>

      <section>
        <CardContent
          content={{
            title: "About My Portfolio",
            imgUrl: icon,
            header: "React App Portfolio ",
            postImgUrl: about,
            info:
              "My 4 year long career has consisted of working and developing on the front end, using core technologies and tools for building; ad banners, single page applications, and websites. Although my skills cover a wide range of technologies, I have primarily focused on javascript animation and creative display ad banners for the purposes of the job titles I have held. In this portfolio, I have combined my skillsets to create and showcase my abilities, and have built it using a new technology, which I have recently began to work with and gain a knowledge-base.",
            extendedInfo:
              "Using the React framework and platform has allowed me to learn about how .jsx works, how to implement components, how to effectively use javascript es6 and its higer order functionality, how to pass in data using props, and finally, how to render react components using the dom. Although still in the learning and understanding phases of using The React framework, I managed to build my portfolio using the new technology in a little over a week and am excited to continue to develop my skill's, and eventually find a position that will allow me to continue learning while also making dope apps along the way!",
            stackInfo:
              "Tech: .html | .css | .js | .greensock | .npm | .node | .react | .jsx | .git",
            footerTitle: "Feedback?",
            footerContent:
              "Feel free to contact me via email, or phone at: 727-480-3173"
          }}
        />
      </section>

      <section>
        <CardContent
          content={{
            title: "Bannerboy",
            imgUrl: work_history_bannerboy_icon,
            header: "International, boutique display ad specialist agency",
            postImgUrl: work_history_bannerboy,
            info:
              "Designed and developed ad banners within industry and google’s double click standards. Initiated polite load scripts, studio enablers in accordance with ad serving metrics and guidelines. Developed with best practices and principles using html5, css3, javaScript es6, greensock.js and object oriented programming. Designed and optimized assets using the Adobe Creative Suite.",
            stackInfo:
              "Tech: .html | .css | .js | .greensock | .npm | .node | .git | .psd | .ai | google: ad manager, doubleclick, ad exchange",
            projectsInfo:
              "Clients: Starbucks | Docker | Ben & Jerry's | Husqvarna | Converse | New York Times",
            footerTitle: "Mid Level - Creative Developer",
            footerContent: "May 2018 - Jun 2019"
          }}
        />
      </section>

      <section>
        <CardContent
          content={{
            title: "Revlon",
            imgUrl: work_history_revlon_icon,
            header: "Beauty Products – Makeup, Hair Color, Nails & Tools",
            postImgUrl: work_history_revlon,
            info:
              "Used Adobe Creative Suite software for implementing design compositions, Atom.io and doubleclick studios for development and publishing of html5 banner projects. Utilized Photoshop and other compression software for image retrieval and management, and asset optimization.",
            stackInfo:
              "Tech: .html | .css | .js | .greensock | .psd | .ai | google: ad manager, doubleclick, ad exchange",
            projectsInfo: "Clients: Elizabeth Arden | Revlon",
            footerTitle:
              "Freelance Digital Media & Banner Developer - Internal",
            footerContent: "Feb 2018 - Apr 2018"
          }}
        />
      </section>

      <section>
        <CardContent
          content={{
            title: "Droga5",
            imgUrl: work_history_droga5_icon,
            header: "Beauty Products – Makeup, Hair Color, Nails & Tools",
            postImgUrl: work_history_droga5,
            info:
              "Developed web pages, websites, and banner ads within w3c standards using javaScript, js frameworks, js libraries and other technologies such as; jQuery, Greensock.js, html5, css3, npm, node.js, gulp.js, bootstrap and wordpress.",
            extendedInfo:
              "Developed primarily in the browser with Google Chrome as lead and others for compatibility using Atom.io, along with terminal, ftp and devtools. Utilized the use of code reviews, task management software, project tracking, creative feedback, and development iterations.",
            stackInfo:
              "Tech: .html | .css | .js | .greensock | .npm | .node | .git | .psd | .ai | google: ad manager, doubleclick, ad exchange | wordpress | stack overflow",
            projectsInfo:
              "Clients: Scion | AirWick | T-Mobile | Google | Hennessy | Dixie | Chase | Trident | Smart Water | Over Watch",
            footerTitle: "Junior Interactive Web Developer",
            footerContent: "Apr 2015 - May 2017"
          }}
        />
      </section>

      <section>
        <CardContent
          content={{
            title: "Full Sail University",
            imgUrl: education_history_fullsail_icon,
            header:
              "Masters of Science - Business Innovation & Entrepreneurship",
            postImgUrl: education_history_fullsail_masters,
            info:
              "Students in the Business Model Presentation and Thesis course will complete their business model. Students will tell the story of their proposed model through a series of written proposals and a formal live presentation. Students will consider sources and uses of funds, working capital requirements, and the launch timetable. During the course, students will target the various audiences to which they will present the details regarding their company and its products and services.",
            projectsInfo:
              "Courses: Business Model Dev | Business Venture Research | Entrepreneurial Finance | Innovative Work Environments | Legal Issues | Product Design & Dev | Business Model Management | Creativity & Innovation",
            footerTitle: "GPA: 4.0",
            footerContent: "Aug 2017 - Aug 2018"
          }}
        />
      </section>

      <section>
        <CardContent
          content={{
            title: "Full Sail University",
            imgUrl: education_history_fullsail_icon,
            header: "Bachelor of Science - Web Design & Development",
            postImgUrl: education_history_fullsail_bachelors,
            info:
              "In the Deployment of Web Applications course, students will learn the processes involved in deploying an interactive solution for final distribution. This course demonstrates current operational methods for moving web-based applications from development environments to production environments.",
            projectsInfo:
              "Courses: Creative Presentation | Scalable Data Structures | Art History | Database Structures | Emerging Interface Design | Visual Frameworks | Applied Design Tools & Interfaces | Designing for Web Standards | Programming for Web Applications | Server-Side Languages",
            footerTitle: "GPA: 3.0",
            footerContent: "Aug 2012 - Aug 2015"
          }}
        />
      </section>

      <section>
        <CardContent
          content={{
            title: "University of Rhode Island",
            imgUrl: education_history_uri_icon,
            header: "Certificate - Graphic Design & Web Development",
            postImgUrl: education_history_uri,
            info:
              "The Graphic Design studio courses at URI provide a deep understanding of the design creative process and the fundamental elements and principles of two and three dimensional design.",
            projectsInfo:
              "Courses: Intro to Web Development | Graphic Design | Print Media & Design",
            footerTitle: "Certification",
            footerContent: "Jan 2011 - Jun 2011"
          }}
        />
      </section>
    </div>
  );
}

export default Cards;
