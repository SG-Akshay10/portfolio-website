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
        github: "https://github.com/SG-Akshay10"
    },
    skills: {
        languages: ["Python", "C", "Java", "JavaScript", "HTML/CSS", "React.js", "FastAPI"],
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
                    text: "Designed AI-Quick-Insight, a multi-agent NL-to-visualization system leveraging LlamaIndex, PGVector, Snowflake, and FastAPI to generate interactive charts and insights from user queries in under 30 seconds.",
                    subItems: [
                        "Implemented table retrieval over 100+ schema objects using RAG for top-5 context selection.",
                        "Created a conversational refinement pipeline using an LLM-judge to resolve ambiguous or incomplete queries dynamically.",
                        "Achieved 63% accuracy in auto-generated visualizations comparable to in-house data analyst output, significantly accelerating time-to-insight."
                    ]
                },
                "Built a Retrieval Augmented Generation (RAG) based chatbot using LangChain, FastAPI, and PGVector to automate responses for documentation-related queries, leading to a 40% reduction in monthly customer support inquiries and significantly decreasing reliance on the services team.",
                {
                    text: "Developed AppSec-Insight, a cross-platform vulnerability analysis system leveraging Androguard, Ghidra SDK, and LangGraph to automate security auditing and democratize technical insights for non-expert teams.",
                    subItems: [
                        "Engineered a unified ingestion pipeline that normalizes Android and iOS binaries to generate Guard Blueprints automatically prescribing specific security defenses for identified vulnerabilities.",
                        "Integrated a generative deobfuscation pipeline using LLMs to infer meaningful symbols in hardened bytecode, enabling accurate static analysis on previously opaque binaries.",
                        "Built a RAG-enhanced conversational agent that empowers internal service teams to autonomously resolve complex client security inquiries, significantly reducing reliance on senior security engineers."
                    ]
                }
            ]
        },
        {
            company: "Matrice.ai",
            role: "Machine Learning Engineering Intern",
            period: "June 2024 - Jan 2025",
            location: "Remote",
            highlights: [
                "Built a drag-and-drop no-code computer vision platform allowing users to train, annotate, export, and deploy models without writing code.",
                "Developed cloud-based data ingestion pipeline with parallel batch processing for efficient customer uploads, achieving 75% reduction in upload time by replacing sequential zip extraction with multi-threaded folder processing.",
                "Engineered automated training pipeline with configurable parameters (epochs, learning rate, model selection) and integrated multiple state-of-the-art computer vision architectures including YOLO, EVA and DINO.",
                "Implemented model export functionality supporting multiple formats (ONNX, TensorRT) with seamless deployment pipeline using hosted inference servers."
            ]
        },
        {
            company: "Sports Mechanics",
            role: "Data Science Intern",
            period: "Dec 2023 - May 2024",
            location: "Chennai, India",
            highlights: [
                "Developed a real-time notification engine using Python to analyze live match data from cricket databases and detect key events using a rule-based system and delivered notifications to users through the platform app.",
                "Fine-tuned a quantized Mistral-7B language model for generating AI cricket commentary using enriched ball-by-ball metadata.",
                "Integrated the notification engine with the commentary system to dynamically enrich live commentary, reducing the manual effort for human commentators by 80%.",
                "Trained a YOLO-based video analytics tool to extract bowler metrics (ball grip, delivery type, line, length, speed) from match footage, enabling performance analysis for coaching and scouting use-cases."
            ]
        }
    ],
    projects: [
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
            name: "ContentMakerBlog",
            tech: "Generative AI, Python, NLP",
            description: [
                "Automated blog content generation tool.",
                "Uses LLMs to create SEO-friendly articles.",
                "Streamlines content marketing workflows."
            ],
            link: "https://github.com/SG-Akshay10/ContentMakerBlog"
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