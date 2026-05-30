export type Project = {
  title: string;
  badge: string;
  tags: string[];
  tech: string;
  problem: string;
  solution: string;
};

export const projects: Project[] = [
  {
    title: "NutriCook AI – Kitchen Companion",
    badge: "Mini Project",
    tags: ["Flutter", "Firebase", "OpenAI", "GPT"],
    tech: "Flutter · Firebase · OpenAI · GPT",
    problem:
      "Users often have limited ingredients at home but struggle to decide what to cook and plan balanced meals without wasting food or time.",
    solution:
      "Built an AI-powered mobile app that generates recipes and personalized meal plans from available ingredients, with voice assistance (TTS) and cloud-based data storage using Flutter, Firebase, and OpenAI GPT.",
  },
  {
    title: "TrafficFlow – AI Traffic Management",
    badge: "Ideathon",
    tags: ["Python", "TensorFlow", "React", "MongoDB"],
    tech: "Python · TensorFlow · React · MongoDB",
    problem:
      "Urban traffic congestion is difficult to manage without real-time monitoring and accurate prediction of bottlenecks across road networks.",
    solution:
      "Developed an AI-powered system for real-time traffic monitoring, congestion prediction, and smart signal optimization, with a live dashboard built using Python, TensorFlow, React, and MongoDB.",
  },
  {
    title: "Hospital Online Token System",
    badge: "Mini Project",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    tech: "HTML · CSS · JavaScript · Firebase",
    problem:
      "Patients face long waiting times at hospitals due to manual token queues and lack of a centralized online booking system.",
    solution:
      "Created a web application for online token booking with user authentication, real-time database updates, and notifications to reduce waiting time, using HTML, CSS, JavaScript, and Firebase.",
  },
  {
    title: "Student Record Management",
    badge: "Micro Project",
    tags: ["C", "File Handling"],
    tech: "C · File Handling",
    problem:
      "Managing student records manually is inefficient and error-prone when data must be stored, updated, and retrieved without a structured system.",
    solution:
      "Implemented a C-based application with file handling for add, update, delete, and search operations, using persistent file-based storage for reliable record management.",
  },
];
