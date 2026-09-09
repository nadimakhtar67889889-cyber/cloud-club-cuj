/* ALWAYS OPEN AT THE TOP */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);


/* NAVIGATION */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");


/* MOBILE MENU */

if (hamburger && navLinks) {

  hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("show");

  });


  // Close menu after clicking a navigation link

  document
    .querySelectorAll(".nav-links a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("show");

      });

    });

}


/* SMOOTH SCROLL */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

      const targetId =
        this.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const navbar =
        document.querySelector(".navbar");

      const offset =
        navbar
          ? navbar.offsetHeight + 15
          : 15;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


/* EVENT DATA */

const events = {

  orientation: {

    date: "26 Jan 2026",

    title:
      "Introduction & Orientation of Central University Jammu Cloud Club",

    description:
      "Kickstart your cloud journey and explore opportunities within the AWS Student Builder Group at Central University Of Jammu.",

    category:
      "Community Orientation"

  },


  ama: {

    date: "01 Mar 2026",

    title:
      "Interactive Ask Me Anything Session (AMA)",

    description:
      "An interactive AMA session to discuss AWS Cloud insights, practices, applications and opportunities for students.",

    category:
      "AWS Community Session"

  },


  techxplore: {

    date: "10 Apr 2026",

    title:
      "AWS TechXplore",

    description:
      "A technical session covering cloud deployment, IAM fundamentals and practical AWS concepts.",

    category:
      "Technical Session"

  },


  kiro: {

    date: "27 Jun 2026",

    title:
      "From Idea to App: Building with IDE & Kiro CLI",

    description:
      "A practical session with Jasdeep Singh Bhalla focused on transforming ideas into applications using modern development tools.",

    category:
      "Technical Workshop"

  },


  "agentic-ai": {

    date: "01 Jul 2026",

    title:
      "Agentic AI on AWS",

    description:
      "AI Tech Talk Series hosted by AWS Skills Centers exploring agentic AI and its relationship with AWS technologies.",

    category:
      "AI Tech Talk"

  },


  "welcome-2026": {

    date: "Coming Soon",

    title:
      "Welcome 2026",

    description:
      "The season-opening welcome event, featuring a lecture by our mentor Dr. Suresh Limkar (Suresh Sir) on cloud computing, followed by a live quiz session with prizes for the top scorers.",

    category:
      "Upcoming • Lecture & Quiz"

  },


  "community-day": {

    date: "November 2026",

    title:
      "AWS Student Community Day",

    description:
      "A full day of community-led cloud learning inspired by AWS's own Community Day events across India — technical talks on AWS, generative AI and DevOps, hands-on demo stations, and open conversations with the community.",

    category:
      "Upcoming • Community Conference"

  },


  "cloud-tournament": {

    date: "Coming Soon",

    title:
      "Cloud Tournament",

    description:
      "A gamified, team-based cloud competition inspired by AWS GameDay and AWS Cloud Quest tournaments, where teams race through live AWS labs and scenario challenges on a shared leaderboard.",

    category:
      "Upcoming • Online Labs & Tournament"

  }

};


/* EVENT DETAIL PAGE */

function loadEventDetails() {

  const eventPage =
    document.querySelector(".event-detail-page");

  if (!eventPage) {
    return;
  }

  const params =
    new URLSearchParams(
      window.location.search
    );

  const eventId =
    params.get("event");

  const event =
    events[eventId] ||
    events.orientation;


  const eventDate =
    document.getElementById("eventDate");

  const eventCategory =
    document.getElementById("eventCategory");

  const eventTitle =
    document.getElementById("eventTitle");

  const eventDescription =
    document.getElementById("eventDescription");


  if (eventDate) {
    eventDate.textContent =
      event.date;
  }

  if (eventCategory) {
    eventCategory.textContent =
      event.category;
  }

  if (eventTitle) {
    eventTitle.textContent =
      event.title;
  }

  if (eventDescription) {
    eventDescription.textContent =
      event.description;
  }

}


/* RUN EVENT PAGE */

loadEventDetails();


/* CLOSE MOBILE MENU ON RESIZE */

window.addEventListener("resize", () => {

  if (
    window.innerWidth > 850 &&
    navLinks
  ) {

    navLinks.classList.remove("show");

  }

});