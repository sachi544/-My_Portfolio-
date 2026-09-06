/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Sachin M Bannur",
  title: "Hi all, I'm Sachin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pN3HtanhQO29FqaxL6NurkAd2daBfECZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sachi544",
  linkedin: "https://www.linkedin.com/in/sachin-m-bannur/",
  gmail: "sachinmbsachinmb78@gmail.com",
  instagram: "https://www.instagram.com/sb_sachii_18/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK,INFORMATION SCIENCE ENGINEERING STUDENT | ASPIRING SOFTWARE ENGINEER | CLOUD COMPUTING & AI",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications", 
    ),
    emoji("⚡ Build AI and Computer Vision projects using Python, OpenCV, and MediaPipe."),
    emoji(
      "⚡ Learn and implement Cloud Computing concepts using AWS while continuously improving problem-solving and software development skills."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5",
    description: "Semantic, accessible markup for structured and responsive web experiences."
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt",
    description: "Responsive layouts, visual systems, and polished interfaces across screen sizes."
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js",
    description: "Interactive browser experiences and application logic with modern JavaScript."
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java",
    description: "Object-oriented programming and backend application development with Java."
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python",
    description: "Automation, AI, computer vision, and practical problem solving with Python."
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt",
    description: "Version control workflows for tracking, sharing, and safely improving code."
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github",
    description: "Collaborative repositories, project history, and open-source development workflows."
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-database",
    description: "Flexible document data storage for fast-moving application backends."
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database",
    description: "Relational data modeling, querying, and dependable database management."
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws",
    description: "Cloud computing foundations, services, security, and scalable application concepts."
  },
  {
    skillName: "VS Code",
    fontAwesomeClassname: "fas fa-code",
    description: "A focused development environment for writing, debugging, and shipping software."
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux",
    description: "Command-line tools and operating-system fundamentals for development workflows."
  }
],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SDM Institute of Technology Ujire",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Engineering (B.E.) in Information Science and Engineering",
      duration: "September 2023 - April 2027",
      desc: "Currently pursuing Information Science and Engineering with a strong interest in Software Development, Web Development, Cloud Computing, and Artificial Intelligence.",
      descBullets: [
        "CGPA:7.61/10",
        "Built projects using Java, Python, HTML, CSS, JavaScript, MongoDB, and Git."
      ]
    },
    {
      schoolName: "KLE Pre-University College, Hangal",
      logo: require("./assets/images/nextuLogo.webp"),
      subHeader: "Pre-University Course (PCMB)",
      duration: "2020-2022",
      desc: "Completed Pre-University education in the PCMB stream (Physics, Chemistry, Mathematics, Biology), building a strong foundation in science and mathematics.",
      descBullets: ["Developed analytical and problem-solving skills through the PCMB curriculum."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
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
  display: true,
  experience: [
    {
      role: "Information Science & Engineering Student",
      company: "SDM Institute of Technology, Ujire",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "2022 – Present",
      desc: "Pursuing a Bachelor's degree in Information Science and Engineering with a strong focus on Software Development, Full Stack Development, Artificial Intelligence, and Cloud Computing.",
      descBullets: [
        "Built AI Crop Disease Detection using Python, TensorFlow, and OpenCV.",
        "Developed a Hand Gesture Cursor Controller using Python, OpenCV, and MediaPipe.",
        "Currently learning AWS Cloud, Java Full Stack Development, and Data Structures & Algorithms."
      ]
    },
    {
      role: "Personal Portfolio Developer",
      company: "Self Project",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "2026",
      desc: "Designed and developed a modern responsive portfolio website to showcase technical skills, projects, certifications, and achievements.",
      descBullets: [
        "Built using React.js and JavaScript.",
        "Responsive design with interactive UI.",
        "Integrated GitHub and LinkedIn profiles."
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
  title: "Projects",
  subtitle: "A collection of projects that showcase my technical skills and problem-solving abilities.",

  projects: [
  {
    image: require("./assets/images/pwa.png"),
    projectName: "Crop Disease Prediction using AI",
    projectDesc:
      "An AI-based image classification system that identifies diseases from crop and leaf images. Implements image validation to reject non-crop images and improve prediction reliability.",
    footerLink: [
      {
        name: "GitHub",
        url: "https://github.com/sachi544"
      }
    ]
  },

  {
    image: require("./assets/images/handGesture.png"),
    projectName: "Hand Gesture-Based Cursor Control",
    projectDesc:
      "A computer vision-based virtual mouse using real-time hand gesture recognition. Implements gesture-based cursor movement and mouse-click functionality using webcam input.",
    footerLink: [
      {
        name: "GitHub",
        url: "https://github.com/sachi544"
      }
    ]
  },

  {
    image: require("./assets/images/realTimeCollaborativeLogo.svg").default,
    projectName: "Real-Time Collaborative System",
    projectDesc:
      "A real-time collaborative web application enabling multiple users to edit content and receive updates simultaneously using Node.js and Socket.IO.",
    footerLink: [
      {
        name: "GitHub",
        url: "https://github.com/sachi544"
      }
    ]
  },

  {
    image: require("./assets/images/vidyasetuAILogo.svg").default,
    projectName: "Vidyasetu AI – Offline Agentic AI",
    projectDesc:
      "An offline agentic AI assistant for students in rural and low-connectivity areas using Ollama and LLMs, with NLP-based learning assistance and CNN-based image analysis.",
    footerLink: [
      {
        name: "GitHub",
        url: "https://github.com/sachi544"
      }
    ]
  }
],
display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications, technical achievements, and continuous learning journey.",

  achievementsCards: [
    {
      title: "SQL",
      subtitle:
        "Building a strong foundation in relational databases, SQL queries, joins, data modeling, and database management.",
      image: require("./assets/images/sqlLogo.svg").default,
      imageAlt: "SQL Logo"
    },
    {
      title: "Java",
      subtitle:
        "Developing Java programming skills with object-oriented programming, collections, exception handling, and application development.",
      image: require("./assets/images/javaLogo.svg").default,
      imageAlt: "Java Logo"
    },
    {
      title: "Web Development",
      subtitle:
        "Creating responsive web applications with HTML, CSS, JavaScript, React, and modern frontend development practices.",
      image: require("./assets/images/webDevelopmentLogo.svg").default,
      imageAlt: "Web Development Logo"
    },
    {
      title: "Academic Projects",
      subtitle:
        "Developed AI Crop Disease Detection and Hand Gesture Cursor Controller using Python, OpenCV, MediaPipe, and Machine Learning technologies.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Project Logo",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/sachi544-git"
        }
      ]
    }
  ],

  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Technical articles and tutorials will be added soon.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Conference talks and technical sessions will be added in the future."),

  talks: [],

  display: false
};
// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcasts and interviews will be added in the future.",

  podcast: [],

  display: false
};
// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume to learn more about my education, skills, projects, and technical experience.",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "91-7349352489",
  email_address: "sachinmbsachinmb78@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
