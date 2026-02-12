import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
    name: "Akshay S G",
    title: "Associate Software Engineer",
    contact: {
        email: "akshay10sg@gmail.com",
        phone: "+91 9176090049",
        location: "Bengaluru, India"
    },
    links: {
        linkedin: "https://www.linkedin.com/in/akshay-s-g-a81516239/",
        github: "https://github.com/SG-Akshay10",
        resume: "https://drive.google.com/file/d/1W4j9vi62lqEz-N-IqL8Z0hKLCkzCxlB5/view?usp=sharing"
    },
    skills: {
        languages: ["Python", "C", "JavaScript", "HTML/CSS", "React.js", "FastAPI"],
        tools: ["Tableau", "SQL", "PostgreSQL", "Snowflake", "MongoDB", "Figma", "GitHub", "Docker", "Hugging Face"],
        ai_ml: ["PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "FAISS", "PGVector", "Ollama", "Pandas", "NumPy", "OpenCV"]
    },
    experience: [
        {
            company: "Digital.ai",
            role: "Associate Software Engineer",
            period: "Feb 2025 - Present",
            location: "Bengaluru, India",
            highlights: [
                {
                    text: "Developed Quick Protect, an AI-powered security analysis platform that enables sales engineers to perform comprehensive vulnerability assessments on Android and iOS applications, streamlining the process from binary analysis to customer proposal generation.",
                    subItems: [
                        "Built automated binary decompilation pipeline using Androguard (Android) and Ghidra (iOS) to reverse-engineer mobile applications into analyzable source code.",
                        "mplemented LLM-powered code deobfuscation module that detects and reverses obfuscation patterns, making previously unreadable code accessible for security analysis.",
                        "Designed LangGraph-based orchestration workflows to manage multi-stage analysis processes with conditional routing based on code characteristics."
                    ]
                },
                {
                    text: "Developed AI-Quick-Insight, a business intelligence platform that enables non-technical users to query complex databases using natural language, automatically generating visualizations from conversational inputs.",
                    subItems: [
                        "Designed semantic search to identify relevant database tables integrated with LLM-based ambiguity detection that asks clarifying questions and rephrases unclear user inputs.",
                        "Developed natural language to SQL converter that generates optimized, validated queries from refined user questions, maintaining database security and query accuracy.",
                        "Created end-to-end pipeline delivering query results as JSON to frontend, automatically generating appropriate charts and graphs for instant data insights."
                    ]
                },
                "Built a Retrieval Augmented Generation (RAG) based chatbot using LangChain, FastAPI, and PGVector to automate responses for documentation-related queries, leading to a 40% reduction in monthly customer support inquiries and significantly decreasing reliance on the services team."
            ]
        },
        {
            company: "Matrice.ai",
            role: "Machine Learning Engineering Intern",
            period: "June 2024 - Jan 2025",
            location: "Remote",
            highlights: [
                {
                    text: "Built a no-code computer vision platform enabling users to train, annotate, export, and deploy models without writing code.",
                    subItems: [
                        "Engineered cloud-based data ingestion pipeline with parallel batch processing for efficient customer uploads, achieving 75% reduction in upload time by replacing sequential zip extraction with multi-threaded folder processing.",
                        "Engineered automated training pipeline with configurable parameters (epochs, learning rate, model selection) and integrated multiple state-of-the-art computer vision architectures including YOLO, EVA, and DINO.",
                        "Implemented model export functionality supporting multiple formats (ONNX, TensorRT) with seamless deployment pipeline using hosted inference servers."
                    ]
                }
            ]
        },
        {
            company: "Sports Mechanics",
            role: "Data Science Intern",
            period: "Dec 2023 - May 2024",
            location: "Chennai, India",
            highlights: [
                {
                    text: "Developed an AI-powered cricket commentary system that combines real-time event detection with automated commentary generation to enhance live match experiences and reduce manual commentary effort by 80%.",
                    subItems: [
                        "Built real-time notification engine using Python to analyze live match data from cricket databases, detect key events using a rule-based system, and integrate with the commentary model to dynamically enrich responses.",
                        "Fine-tuned a quantized Mistral-7B language model for generating AI cricket commentary using enriched ball-by-ball metadata with dynamic context awareness.",
                    ]
                },
                "Trained a YOLO model to extract bowler metrics (ball grip, delivery type, line, length, speed) from match footage, enabling performance analysis for coaching and scouting."
            ]
        }
    ],
    projects: [
        {
            name: "SafeScroll",
            tech: "Chrome Extension, JavaScript, Python, FastAPI, TensorFlow.js",
            description: [
                "Privacy-first browser extension for real-time NSFW content detection.",
                "Utilizes on-device machine learning for instant blurring of sensitive images.",
                "Ensures user privacy by processing all data locally without external server calls."
            ],
            link: "https://github.com/SG-Akshay10/SafeScroll"
        },
        {
            name: "Chat-with-PDF",
            tech: "Python, LangChain, Gemini API, React",
            description: [
                "RAG-based QA system for chatting with PDF documents.",
                "Supports multiple file uploads and source citations.",
                "Built with efficient vector retrieval."
            ],
            link: "https://github.com/SG-Akshay10/Chat-with-PDF"
        },
        {
            name: "TweetGuardian",
            tech: "Python, BERT, TensorFlow, Hugging Face",
            description: [
                "Tweet abuse classifier using BERT+MLP architecture.",
                "Achieved F1 score of 0.91 on test dataset.",
                "Deployed for real-time abuse detection."
            ],
            link: "https://github.com/SG-Akshay10/TweetGuardian"
        },
        {
            name: "Startup-Hackathon",
            tech: "Full Stack, AI Integration",
            description: [
                "Innovative solution developed for a startup hackathon.",
                "Solved key industry pain points using AI.",
                "Rapid prototype development and deployment."
            ],
            link: "https://github.com/SG-Akshay10/Startup-Hackathon"
        },
        {
            name: "Fashion-image-segmentation",
            tech: "Computer Vision, Deep Learning",
            description: [
                "Precise segmentation of fashion items in images.",
                "Utilizes advanced segmentation architectures.",
                "Applicable for e-commerce and virtual try-ons."
            ],
            link: "https://github.com/SG-Akshay10/Fashion-image-segmentation"
        },
        {
            name: "ANPR",
            tech: "OpenCV, OCR, Python",
            description: [
                "Automatic Number Plate Recognition system.",
                "Real-time detection and text extraction.",
                "Suitable for traffic management and security."
            ],
            link: "https://github.com/SG-Akshay10/ANPR"
        },
        {
            name: "Suicide-Data-Analysis",
            tech: "Data Analysis, Visualization, Pandas",
            description: [
                "In-depth analysis of suicide rates and trends.",
                "Identifies key socio-economic factors.",
                "Provides actionable insights for mental health awareness."
            ],
            link: "https://github.com/SG-Akshay10/Suicide-Data-Analysis"
        },
        {
            name: "movie-recommendation",
            tech: "Machine Learning, Collaborative Filtering",
            description: [
                "Personalized movie recommender system.",
                "Uses collaborative and content-based filtering.",
                "Enhances user discovery experience."
            ],
            link: "https://github.com/SG-Akshay10/movie-recommendation"
        }
    ],
    education: [
        {
            institution: "Shiv Nadar University Chennai",
            degree: "B.Tech Artificial Intelligence and Data Science",
            period: "Sep. 2021 – July 2025",
            gpa: "CGPA: 8.3/10.0"
        }
    ]
};

export const GEMINI_SYSTEM_INSTRUCTION = `You are a helpful AI assistant for Akshay S G's portfolio website. 
Your goal is to answer questions about Akshay's professional background, skills, and projects based strictly on the following resume data:

${JSON.stringify(RESUME_DATA, null, 2)}

Be concise, professional, and enthusiastic. If asked about something not in the resume, politely say you don't have that information.
Highlight his expertise in RAG, Computer Vision, and Generative AI.`;