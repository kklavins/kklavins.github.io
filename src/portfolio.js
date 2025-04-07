/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/NewSplashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kristers Klavins",
  title: "Hey, I'm Kristers",
  subTitle: emoji(
    "Full Stack Developer and IT Specialist with a background in software engineering, web app development, and technical support. Also a competitive ice hockey player with many years of experience — driven, disciplined, and always ready to learn."
  ),
  resumeLink: "resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kklavins",
  linkedin: "https://www.linkedin.com/in/kristers-klavins-0305ba248",
  gmail: "kklavins@email.davenport.edu",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack Developer & IT Specialist focused on building smart, user-friendly web applications",
  skills: [
    emoji(
      "⚡ Build full-stack web apps with Python/Flask, C#, Blazor, and JavaScript"
    ),
    emoji(
      "⚡ Design responsive and clean user interfaces with HTML, CSS, and MudBlazor"
    ),
    emoji("⚡ Work with relational databases (SQLite, PostgreSQL, SQL Server)"),
    emoji("⚡ Deploy and manage apps using GitHub, Railway, and Azure"),
    emoji("⚡ Provide IT support, networking help, and user training")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "nodejs", fontAwesomeClassname: "fab fa-node"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "C#", fontAwesomeClassname: "fas fa-code"}, // generic code icon
    {skillName: "Flask", fontAwesomeClassname: "fas fa-flask"}, // also generic
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "azure", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "Visual Studio", fontAwesomeClassname: "fas fa-laptop-code"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Davenport University",
      logo: require("./assets/images/davenportLogo.jpeg"), // You can add your own logo later
      subHeader: "Bachelor of Science in Computer Science",
      duration: "May 2025",
      desc: "International Student-athlete from Riga, Latvia",
      descBullets: [
        "GPA: 3.96",
        "Concentration in Artificial Intelligence",
        "ACHA Division 1 Ice Hockey"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Lab Assistant",
      company: "Davenport University",
      companylogo: require("./assets/images/davenportLogo.jpeg"),
      date: "September 2024 – Present",
      desc: "Part-time (On-site)",
      descBullets: [
        "Developed a Python-based web app.",
        "Reverse-engineered an outdated C# app.",
        "Worked with Flask, Pandas, HTML, JavaScript, and SQLite.",
        "Managed project independently.",
        "Supported lab operations.",
        "Assisted students with technical issues."
      ]
    },
    {
      role: "Software Developer (Full Stack)",
      company: "Prime IT Solutions",
      companylogo: require("./assets/images/PrimeITLogo.png"),
      date: "July 2023 – Present",
      desc: "Part-time (Remote)",
      descBullets: [
        "Created user-friendly web apps.",
        "Developed a warehouse management system for truck drivers.",
        "Worked with .NET, Blazor, MudBlazor, and SQL.",
        "Customized systems based on client needs.",
        "Creating a Manufacturing Execution System.",
        "Supported testing and deployment."
      ]
    },
    {
      role: "IT Specialist / Help Desk",
      company: "Store Enso",
      companylogo: require("./assets/images/storaensoLogo.png"),
      date: "June 2022 – March 2024",
      desc: "Part-time (Hybrid)",
      descBullets: [
        "Assisted users and resolved issues.",
        "Managed employee accounts and supported IT services.",
        "Worked with O365 tools, printers, and laptops.",
        "Fixed software and hardware problems.",
        "Set up and maintained workstations.",
        "Learned IT basics, networking, and asset management."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "REAL-WORLD APPS I BUILT OR CONTRIBUTED TO AS A DEVELOPER",
  projects: [
    {
      image: require("./assets/images/rampappIcon.png"),
      projectName: "RampApp",
      projectDesc: "Full-stack Blazor app for managing truck arrivals and warehouse flow. Used in logistics for real-time coordination and check-ins.",
      footerLink: [
        {
          name: "Available",
          //url: "https://primeit.lv/blogs/cargo-management-with-rampapp-solution-for-ease-of-cargo-control"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/umesIcon.png"),
      projectName: "UMES",
      projectDesc: "Manufacturing Execution System for tracking production, orders, inventory, and shipping in real-time.",
      footerLink: [
        {
          name: "In Progress",
          //url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/BPAIcon.png"),
      projectName: "BPA Tester App",
      projectDesc: "Python Flask web app for creating, taking, and grading student tests. Rebuilt from a legacy C# app with role-based access.",
      footerLink: [
        {
          name: "Available",
          //url: "https://primeit.lv/blogs/cargo-management-with-rampapp-solution-for-ease-of-cargo-control"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/TaskItIcon.png"),
      projectName: "TaskIt",
      projectDesc: "Calendar-based task management app with features for scheduling, prioritizing, and tracking tasks across multiple projects.",
      footerLink: [
        {
          name: "Available",
          //url: "https://primeit.lv/blogs/cargo-management-with-rampapp-solution-for-ease-of-cargo-control"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "kklavins@email.davenport.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
