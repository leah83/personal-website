import React, { useState } from "react";
import '../styles/Projects.css';
const projects = [
  {
    title: "Alzheimer’s Disease Prediction using EEGs (Thesis Project)",
    description: [
      "Developed a machine learning model to predict Alzheimer’s disease from EEG signals. Conducted extensive literature research and data preprocessing to enhance model accuracy, achieving 96%. Utilized Python, TensorFlow, and scikit-learn, and incorporated explainable AI methods for model transparency."
    ],
    skillsAndTools: ["Python", "TensorFlow", "scikit-learn", "pandas", "Research and Analysis"]
  },
  {
    title: "Data Analytics Dashboard",
    description: [
      "Designed and implemented a web-based dashboard for visualizing cricket player and team metrics. Created interactive charts with D3.js for real-time data exploration and used JavaScript, HTML/CSS for dynamic and responsive front-end development, collaborating with a team for seamless API integration."
    ],
    skillsAndTools: ["JavaScript", "HTML/CSS", "D3.js"]
  },
  {
    title: "Image Classification for Traffic Signs",
    description: [
      "Executed a comprehensive project on traffic sign image classification, applying various machine learning and deep learning techniques. Preprocessed image data with NumPy and Matplotlib, and optimized model performance through hyperparameter tuning using TensorFlow and Keras."
    ],
    skillsAndTools: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"]
  },
  {
    title: "Sentiment Analysis of Social Media Data",
    description: [
      "Developed a sentiment analysis tool to classify YouTube comments and Amazon reviews. Implemented natural language processing and logistic regression techniques to achieve 83% accuracy in sentiment classification, using Python and NLTK for data processing and analysis."
    ],
    skillsAndTools: ["Python", "NLTK", "seaborn"]
  }
];



const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? projects.length - 1 : prevPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === projects.length - 1 ? 0 : prevPage + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="book">
          <button className="book-button prev" onClick={handlePrev}>‹</button>
          <div className="book-inner">
            <div className="book-page">
              <h3 className="page-title">{projects[currentPage].title}</h3>
              <p className="page-description">{projects[currentPage].description}</p>
              <div className="page-skills-used">
                {projects[currentPage].skillsAndTools.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <button className="book-button next" onClick={handleNext}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
