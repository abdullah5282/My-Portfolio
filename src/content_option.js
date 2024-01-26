
const logotext = "Abdullah";
const meta = {
    title: "Abdullah Moonis",
    description: "I’m Abdullah pre-final year student, interested in machine learning and web development, currently persuing Integrated Masters in AI and ML",
};

const introdata = {
    title: "Abdullah Moonis",
    animated: {
        first: "Working on generative neural networks",
        second: "I code interactive webapps",
        third: "My commitment is to GitHub😉",
    },
    description: "I’m Abdullah pre-final year student, a machine learner enthusiast and an active researcher, currently persuing Integrated Masters in AI and ML",
    location : "      VIT Bhopal",
    home : "Aligarh, Uttar Pradesh",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "A Undergraduate student in computer science and a passionate developer. Looking out for opportunities to working with people and have great learning experiences. Love to learn new technologies.",
};
const worktimeline = [{
        jobtitle: "Attendance system with face detection",
        where: "College Hackathon",
        date: "2020",
    },
    {
        jobtitle: "Diseaio (a flutter app for detecting diseases by taking symptoms)",
        where: "Group Project",
        date: "2022",
    },
    {
        jobtitle: "Prediction of stock martket using various DNN",
        where: "Personal Project",
        date: "2023",
    },
    // {
    //     jobtitle: "LeetCode",
    //     where: "Competitive Coding",
    //     date: "August'23-Present",
    // },
    {
        jobtitle: "Participated in Hacktoberfest",
        where: "Open Source",
        date: "2023",
    },
];

const skills = [{
        name: "Tensorflow",
        value: 90,
    },
    {
        name: "Python",
        value: 87,
    },
    {
        name: "Pandas",
        value: 80,
    },
    {
        name: "Java",
        value: 84,
    },
    {
        name: "Firebase and Firestore",
        value: 78,
    },
    {
        name: "Flask",
        value: 50,
    },
    {
        name: "MongoDB",
        value: 70,
    },
    {
        name: "NodeJS",
        value: 57,
    },
    {
        name: "PostMan",
        value: 50,
    },
    {
        name: "MERN Stack",
        value: 40,
    },
];

const services = [
    //    { title: "App Developer",
    //     description: "As an intermediate Flutter app developer, I am passionate about creating captivating mobile applications that not only function seamlessly but also captivate users with engaging and innovative UI designs. My journey in app development has been a fusion of coding expertise and a deep appreciation for aesthetics.",
    // },
    {
        title: "Machine Learning",
        description: "I am a passionate and aspiring machine learning developer with a keen interest in data processing and analysis, as well as image processing using OpenCV. My journey in the world of technology has been a thrilling adventure, marked by a commitment to harnessing data and machine learning for innovative projects, including those involving the state of the art encryption schemes.",
    },
    // {
    //     title: "Wordpress Design",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    // },
];

const dataportfolio = [{
        img: require("../src/assets/images/diseaio.png"),
        description: "A flutter app with ml model that detects disease from images and symptoms.",
        link: "https://github.com/abdullah5282/Diseaio",
    },
    // {
    //     img: require("../src/assets/images/expense_tracker.png"),
    //     description: "A expense tracking app built in flutter framework.",
    //     link: "#https://github.com/adityawalture/flutter_Expense_tracking_app",
    // },
    {
        img: require("../src/assets/images/ml.jpg"),
        description: "A machine-learning project that take attendance through face detection",
        link: "https://github.com/abdullah5282/Face-recognition-using-opencv",
    },
    
   
];

const contactConfig = {
    YOUR_EMAIL: "abdullahmoonis567@gmail.com",
    YOUR_FONE: "+91 8171311443",
    description: "Happy to connect 😊",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/abdullah5282",
    instagram: "https://www.instagram.com/abdullahmoonis9/",
    linkedin: "https://www.linkedin.com/in/abdullah-moonis/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};