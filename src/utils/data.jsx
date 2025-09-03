import { CgWebsite } from "react-icons/cg"
import { FaGithub, FaWhatsapp } from "react-icons/fa"
import { SiStreamlit } from "react-icons/si"

export const CVLink = "https://drive.google.com/file/d/1HXmg55788wwLjkgeVSbsvLMDU1kLGiRw/preview"
export const githubLink = "https://github.com/nrkahfirhmd"
export const linkedinLink = "https://www.linkedin.com/in/nrkahfirhmd/"
export const mediumLink = "https://medium.com/@nrkahfirhmd"

export const personalStatistics = [
    { number: "Junior", desc: "Professional Level" },
    { number: "5+", desc: "Projects Completed" },
    { number: "10+", desc: "Datasets Analyzed" },
]

export const personalSkills = [
    "Git", "Python", "Tensorflow", "Pytorch", "Power BI", "MySQL", "PostgreSQL", "React", "Next.js",
    "Express.js", "Laravel", "CodeIgniter", "Unity"
]

export const myServices = [
    "Software Development", "AI-Driven Products", "Data Analysis", "Automation & Scripting"
]

export const personalEducation = [
    {
        logo: "/logo/unpad.png",
        duration: "Aug 2022 - Present",
        company: "Padjadjaran University",
        position: "Computer Science Undergrad",
        headline: "GPA: 3.90 / 4.00. During my studies at Universitas Padjadjaran, I strived to maximize every opportunity to develop both my hard skills in programming and my soft skills in social interaction. Below are the academic projects I have completed:",
        desc: [
            "Personal Finance Management Program (Data Structures – 2nd Semester). Tech Stack: C++ (Linked List, Queue, Stack)",
            "Laundry Business CRUD Website (Database Systems I – 2nd Semester). Tech Stack: PHP",
            "Haze: A Steam Clone (Web Programming – 3rd Semester). Tech Stack: CodeIgniter4",
            "Drugmacy: Pharmacy Management Application (Object-Oriented Programming – 3rd Semester). Tech Stack: Java",
            "Stock Price Prediction (Artificial Intelligence – 4th Semester). Tech Stack: Python (Streamlit & Scikit-learn). Model: Linear Regression",
            "Human Follower Robot (Robotics – 5th Semester). Tech Stack: Python (Mediapipe)",
            "Nyisa: Reducing Food Waste (Software Development Project – 6th Semester). Tech Stack: Next.js, Express.js, Python. Model: TF-IDF",
            "CoralScape: Coral AR Education (Human-Computer Interaction – 6th Semester). Tech Stack: C# (Unity)",
            "Cake Shop Sales Analysis (Data Warehouse – 6th Semester). Tech Stack: Power BI",
            "Kawi Script Dictionary (Semantic Web – 6th Semester). Tech Stack: Streamlit & RDF",
            "Scholarship Eligibility Prediction (Soft Computing – 6th Semester). Tech Stack: Python. Model: Fuzzy C-Means"
        ]
    }
]

export const personalWorks = [
    {
        logo: "/logo/tunas.jpg",
        duration: "Aug 2025 - Now",
        company: "PT. Tunas Ridean Tbk.",
        position: "Data Analyst & Automation Intern",
        headline: "I am part of the Transformation Office division, responsible for streamlining repetitive tasks through data analysis and automation. Our division focuses on improving efficiency within Finance, Accounting, and Tax departments. Currently, I have been assigned to automate processes within the Tax division.",
        desc: [
            "I am developing a Workload Analysis for the Tax function of one of Tunas’ business units. Based on this analysis, a Gap Analysis will be conducted to assess the potential efficiency gains from automation.",
            "As part of this initiative, we are building a Chrome Extension to extract data from the Coretax website, reducing processing time from approximately 10 minutes per task to just 10–15 seconds, achieving a 97.5% time efficiency improvement."
        ]
    },
    {
        logo: "/logo/bangkit.jpg",
        duration: "Sep 2024 - Jan 2025",
        company: "Bangkit Academy",
        position: "Machine Learning Cohort",
        headline: "Selected as one of the Machine Learning cohorts in Bangkit Academy 2024 Batch 2 out of 45,841 applicants. At Bangkit Academy, I developed not only hard skills in machine learning, but also soft skills and English proficiency, preparing cohorts for a smooth transition from academia to the workplace.",
        desc: [
            "Graduated with full graduate status and received a final average grade of 91.7",
            "100% attendance status on every agenda in Bangkit Academy",
            "Completed an intensive 900+ hour curriculum learning about basics of Data Analysis, Machine Learning Algorithms & Concept, Neural Network using Tensorflow, Computer Vision, NLP, Generative AI, and LLM"
        ]
    },
    {
        logo: "/logo/unpad.png",
        duration: "Jan 2024 - Dec 2024",
        company: "Padjadjaran University",
        position: "Teaching Assistant",
        headline: "Assisted lecturers in the teaching and learning process, typically managing 40+ students per class throughout the semester. Responsibilities included reinforcing course materials not fully covered by the lecturer and providing consultation sessions for students. Courses taught:",
        desc: [
            "Data Structures (C++, Pointers, Linked List, Queue, Stack, Tree, Graph)",
            "Web Programming (HTML, CSS, JavaScript, Web Servers, APIs, CodeIgniter4 Framework)",
        ]
    },
]

export const personalProjects = [
    {
        screenshot: "/thumb/himatif_apps.png",
        name: "Himatif Apps v2",
        role: "Project Manager & Fullstack Developer",
        desc: "A website owned by Himatif Unpad which is intended to be the main source of information or superapps.",
        skills: [
            "Next.js",
            "Express.js"
        ],
        sources: [
            { 
                icon: <CgWebsite />, 
                label: "Website", 
                link: "https://apps.himatif.org"
            }
        ]
    },
    {
        screenshot: "/thumb/prabu.png",
        name: "Prabu 2025 Website",
        role: "Frontend Developer",
        desc: "A website designed to help freshmen of Class of 2025 get oriented and become familiar with Universitas Padjadjaran.",
        skills: [
            "Next.js"
        ],
        sources: [
            { 
                icon: <CgWebsite />, 
                label: "Website", 
                link: "https://prabu2025.stg.unpad.ac.id"
            }
        ]
    },
    {
        screenshot: "/thumb/sobat_warung.jpg",
        name: "Sobat Warung",
        role: "Backend Developer & ML Engineer",
        desc: "A WhatsApp Bot–based solution that empowers urban micro-shops (warung) through data-driven insights.",
        skills: [
            "FastAPI",
            "FP-Growth"
        ],
        sources: [
            { 
                icon: <FaWhatsapp />,
                label: "Whatsapp", 
                link: "http://wa.me/+14155238886?text=join%20do-tea"
            },
            { 
                icon: <FaGithub/>, 
                label: "Github", 
                link: "https://github.com/nrkahfirhmd/aic-14"
            }
        ]
    },
    {
        screenshot: "/thumb/grand_summit.png",
        name: "14th Grand Summit Website",
        role: "Project Manager",
        desc: "A website developed as the company profile for the 14th Grand Summit, also serving as the registration platform and pitch deck submission portal for the Mini Case and Business Case competitions.",
        skills: [
            "Next.js",
            "Express.js"
        ],
        sources: [
            
        ]
    },
    {
        screenshot: "/thumb/agriclime.png",
        name: "AgriClime",
        role: "ML Engineer & Backend Developer",
        desc: "A weather-based application designed to help Indonesian farmers manage weather uncertainty through early warnings and tailored farming recommendations.",
        skills: [
            "Flask",
            "Tensorflow"
        ],
        sources: [
            { 
                icon: <FaGithub/>, 
                label: "Github", 
                link: "https://github.com/nrkahfirhmd/agriclime-ml"
            }
        ]
    },
]

export const peopleTestimony = [
    // {
    //     image: "profile.jpg",
    //     name: "Rayhan Athar",
    //     message: "Keren mas"
    // }
]