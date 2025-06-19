import { FaDatabase, FaGit, FaJs, FaLaravel, FaPython, FaRProject, FaUnity } from "react-icons/fa"
import { SiCodeigniter, SiExpress, SiNextdotjs, SiPytorch, SiTensorflow } from "react-icons/si"

// export const personalStatistics = [
//     { number: 6, desc: "Projects Completed" },
//     { number: 10, desc: "Datasets Analyzed" },
//     { number: 3, desc: "ML Models Deployed" },
//     { number: 2, desc: "Dashboards Built" }
// ]

export const techStack = [
    { icon: <FaGit/>, label: "Git" },
    { icon: <FaPython/>, label: "Python" },
    { icon: <FaJs/>, label: "JavaScript" },
    { icon: <SiTensorflow/>, label: "Tensorflow" },
    { icon: <SiPytorch/>, label: "Pytorch" },
    { icon: <FaDatabase/>, label: "SQL" },
    { icon: <SiNextdotjs/>, label: "Next.js" },
    { icon: <SiExpress/>, label: "Express.js" },
    { icon: <FaLaravel/>, label: "Laravel" },
    { icon: <SiCodeigniter/>, label: "Code Igniter" },
    { icon: <FaUnity/>, label: "Unity" },
    { icon: <FaRProject/>, label: "R" },
]

export const personalEducation = [
    {
        logo: "/src/assets/logo/unpad.png",
        duration: "Aug 2022 - Present",
        company: "Padjadjaran University",
        position: "Computer Science Undergrad",
        desc: [
            "GPA: 3.89 / 4.00"
        ]
    }
]

export const personalWorks = [
    {
        logo: "/src/assets/logo/bangkit.jpg",
        duration: "Sep 2024 - Jan 2025",
        company: "Bangkit Academy",
        position: "Machine Learning Cohort",
        desc: [
            "Graduated with full graduate status and received a final average grade of 91.7",
            "100% attendance status on every agenda in Bangkit Academy",
            "Completed 25+ courses on Machine Learning and Artificial Intelligence from Coursera and Dicoding"
        ]
    },
    {
        logo: "/src/assets/logo/unpad.png",
        duration: "Jan 2024 - Dec 2024",
        company: "Padjadjaran University",
        position: "Laboratory Practicum Assistants",
        desc: [
            "Teaching 40+ students about web programming using HTML, CSS, JS, and PHP for 1 semester.",
            "Teaching 40+ students about data structures using C++ for 1 semester.",
            "Providing them with weekly assignments and materials and opening consultations on every courses."
        ]
    },
    {
        logo: "/src/assets/logo/idx.png",
        duration: "Jan 2024 - Feb 2024",
        company: "Rakamin x ID/X Partners",
        position: "Data Scientist Intern",
        desc: [
            "Completed the program with Qualified student status with an average final grade of 78.75",
            "Completed 5 modules divided into 4 weeks consisting of 4 assignments and 1 final project.",
            "Completing the final project by creating a predictive model to solve the credit risk problem on loans that are accepted or rejected."
        ]
    }
]

export const personalProjects = [
    {
        screenshot: "", 
        name: "Nyisa",
        desc: "Build recommender system using TF-IDF and Cosine Similarity to give user food recommendations based on recent transactions.",
        skills: [
            ""
        ],
        sources: [
            { icon: "", label: "" }
        ]
    },
    {
        screenshot: "",
        name: "AgriClime",
        desc: "Created forecasting and classification model to predict surrounding attributes and its weather.",
        skills: [
            ""
        ],
        sources: [
            { icon: "", label: "" }
        ]
    },
    {
        screenshot: "",
        name: "Stock Market Predictor",
        desc: "Build predictive model for stock market price using Yahoo! Finance data scraping and Linear Regression",
        skills: [
            ""
        ],
        sources: [
            { icon: "", label: "" }
        ]
    },
    {
        screenshot: "",
        name: "Credit Risk Analysis",
        desc: "Analyze the reasons for loan rejection and predict the likelihood of loan acceptance based on user attributes",
        skills: [
            ""
        ],
        sources: [
            { icon: "", label: "" }
        ]
    },
]