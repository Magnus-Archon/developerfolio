/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import profilePic from "./assets/images/profile.jpg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: require("./assets/images/profile.jpg") ,
  // animation: splashAnimation,
  duration: 2000 // Set animation duration as per your preference
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Latubosun Olamide",
  title: "Hi, I'm Olamide",
  subTitle: "A passionate Backend & AI Developer specializing in Python and Artificial Intelligence. Building robust systems and intelligent solutions.",
  resumeLink: ""
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Magnus-Archon",
  linkedin: "https://linkedin.com/in/olamide-latubosun-ba48b12bb",
  gmail: "olamidelatubosun@gmail.com",
  twitter: "https://x.com/OArchon84933?s=08",
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER & AI ENGINEER CRAFTING INTELLIGENT SOLUTIONS",
  skills: [
    "⚡ Develop and deploy machine learning models using PyTorch and TensorFlow",
    "⚡ Build scalable backend systems with Python, Django, and Node.js",
    "⚡ Design and implement RESTful APIs and microservices",
    "⚡ Create computer vision and NLP solutions for real-world problems",
    "⚡ Deploy and manage applications using Docker and Kubernetes"
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Federal University of Agriculture, Abeokuta",
      logo: require("./assets/images/funaablogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "December 2023 - Present",
      desc: "Currently pursuing a degree in Computer Science with a focus on Artificial Intelligence",
      descBullets: [
        "Completed projects in Computer Vision and NLP",
        "Participated in AI projects",
        "Dean's List for academic excellence"
      ]
    },
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    },
    {
      Stack: "NLP",
      progressPercentage: "75%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Tech Certifications I have but due to YouTube Learning, I have just a few certifications which are from a programming learning platform",

  achievementsCards: [
  //   {
  //     title: "AI/ML Certification",
  //     subtitle: "Completed advanced certification in Machine Learning and Deep Learning",
  //     image: require("./assets/images/mlLogo.png"),
  //     imageAlt: "Machine Learning Certificate Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "Your_Certificate_Link"
  //       },
  //       {
  //         name: "Project Demo",
  //         url: "Your_Project_Link"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Backend Development Excellence",
  //     subtitle: "Built scalable backend systems serving thousands of users",
  //     image: require("./assets/images/backendLogo.png"),
  //     imageAlt: "Backend Development Logo",
  //     footerLink: [
  //       {
  //         name: "View Project",
  //         url: "Your_Project_Link"
  //       }
  //     ]
  //   },
  //   {
  //     title: "Cloud Platform Expertise",
  //     subtitle: "Certified in AWS/GCP cloud platforms and DevOps practices",
  //     image: require("./assets/images/cloudLogo.png"),
  //     imageAlt: "Cloud Certificate Logo",
  //     footerLink: [
  //       {
  //         name: "Certification",
  //         url: "Your_Certificate_Link"
  //       }
  //     ]
  //   }
  ],
  display: false
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
  title: "HOBBY AS A TECH PERSON",
  subtitle: emoji(
    "I LOVE TO WORK ON MY LIMITED KNOWLEDGE AND TRY TO FEEL LIKE TONY STARK😅"
  ),

  talks: [
    {
      title: "Building a Chatbot with Dialogflow and using BeautifulSoup for Web Scraping",
      subtitle: "",
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "07030502069",
  email_address: "olamidelatubosun@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "OArchon84933", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
