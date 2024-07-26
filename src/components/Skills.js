import React from 'react';
import '../styles/Skills.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java"]
    },
    {
      title: "Libraries and Frameworks",
      skills: ["scikit-learn", "TensorFlow", "Keras", "NLTK"]
    },
    {
      title: "Web Development and Design",
      skills: ["React", "Django", "APIs", "Figma"]
    },
    {
      title: "Machine Learning",
      skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Natural Language Processing", "Model Evaluation", "Feature Engineering"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;