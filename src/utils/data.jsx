import { BsFillBarChartFill } from "react-icons/bs"
import { CgWebsite } from "react-icons/cg"
import { FaDatabase, FaGit, FaGithub, FaJs, FaLaravel, FaPython, FaReact, FaRProject, FaUnity } from "react-icons/fa"
import { IoLogoTableau } from "react-icons/io5"
import { SiCodeigniter, SiExpress, SiMysql, SiNextdotjs, SiPytorch, SiStreamlit, SiTensorflow } from "react-icons/si"

// export const personalStatistics = [
//     { number: 6, desc: "Projects Completed" },
//     { number: 10, desc: "Datasets Analyzed" },
//     { number: 3, desc: "ML Models Deployed" },
//     { number: 2, desc: "Dashboards Built" }
// ]

export const techStack = [
    { icon: <FaGit/>, label: "Git" },
    { icon: <FaPython/>, label: "Python" },
    { icon: <SiTensorflow/>, label: "Tensorflow" },
    { icon: <SiPytorch/>, label: "Pytorch" },
    { icon: <FaRProject/>, label: "R" },
    { icon: <BsFillBarChartFill />, label: "Power BI" },
    { icon: <IoLogoTableau />, label: "Tableau" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <FaReact />, label: "React" },
    { icon: <SiNextdotjs/>, label: "Next.js" },
    { icon: <SiExpress/>, label: "Express.js" },
    { icon: <FaLaravel/>, label: "Laravel" },
    { icon: <SiCodeigniter/>, label: "Code Igniter" },
    { icon: <FaUnity/>, label: "Unity" },
]

export const personalEducation = [
    {
        logo: "/logo/unpad.png",
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
        logo: "/logo/bangkit.jpg",
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
        logo: "/logo/unpad.png",
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
        logo: "/logo/idx.png",
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
        screenshot: "/thumb/nyisa.png", 
        name: "Nyisa",
        desc: "Build recommender system using TF-IDF and Cosine Similarity to give user food recommendations based on recent transactions.",
        skills: [
            "Recommendation System",
            "TF-IDF",
            "Cosine Similarity",
            "Microservices API"
        ],
        sources: [
            { 
                icon: <CgWebsite />, 
                label: "Website", 
                link: "https://nyisa.store/"
            }
        ]
    },
    {
        screenshot: "/thumb/agriclime.png",
        name: "AgriClime",
        desc: "Created forecasting and classification model to predict surrounding attributes and its weather.",
        skills: [
            "Tensorflow",
            "Service API",
            "Data Scraping",
            "Multi Inference",
            "ML Ops"
        ],
        sources: [
            { 
                icon: <FaGithub/>, 
                label: "Github", 
                link: "https://github.com/nrkahfirhmd/agriclime-ml"
            }
        ]
    },
    {
        screenshot: "/thumb/stock-market-predictor.png",
        name: "Stock Market Predictor",
        desc: "Build predictive model for stock market price using Yahoo! Finance data scraping and Linear Regression",
        skills: [
            "Data Scraping",
            "Machine Learning",
            "Forecasting",
            "Financial Technology",
            "ML Ops"
        ],
        sources: [
            { 
                icon: <SiStreamlit />,
                label: "Streamlit", 
                link: "https://stockmarket-predict.streamlit.app/"
            },
            { 
                icon: <FaGithub/>, 
                label: "Github", 
                link: "https://github.com/nrkahfirhmd/stock-market-predict"
            }
        ]
    },
    {
        screenshot: "/thumb/credit-risk.png",
        name: "Credit Risk Analysis",
        desc: "Analyze the reasons for loan rejection and predict the likelihood of loan acceptance based on user attributes",
        skills: [
            "Financial Technology",
            "ML Ops",
            "Data Analysis & Visualization",
            "Predictive Modelling"
        ],
        sources: [
            { 
                icon: <FaGithub/>, 
                label: "Github", 
                link: "https://github.com/nrkahfirhmd/rakamin-idx"
            }
        ]
    },
]

export const peopleTestimony = [
    {
        image: "profile.jpg",
        name: "Rayhan Athar",
        message: "Keren mas"
    },
    {
        image: "profile.jpg",
        name: "Umar",
        message: "Walach"
    },
    {
        image: "profile.jpg",
        name: "Rayhan Athar",
        message: "Keren mas"
    },
    {
        image: "profile.jpg",
        name: "Rayhan Athar",
        message: "Keren mas"
    },
    {
        image: "profile.jpg",
        name: "Rayhan Athar",
        message: "Keren mas"
    },
]