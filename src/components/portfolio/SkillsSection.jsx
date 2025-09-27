import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, Code2, Database, Globe, 
  Palette, Server, Terminal, Zap,
  Star, Award, TrendingUp
} from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'project-stack',
      title: 'This Project is Built With',
      icon: Zap,
      gradient: 'from-primary to-accent',
      skills: ['Vite', 'JavaScript', 'React', 'shadcn-ui', 'Tailwind CSS']
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      skills: ['TensorFlow', 'Keras', 'OpenCV', 'YOLOv5', 'LSTM', 'COLMAP', 'Computer Vision', 'Deep Learning']
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Palette,
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Express.js', 'Flask', 'MongoDB', 'MySQL', 'REST APIs']
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      gradient: 'from-orange-500 to-red-500',
      skills: ['Python', 'JavaScript', 'C/C++', 'SQL']
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      icon: Terminal,
      gradient: 'from-gray-600 to-gray-800',
      skills: ['Git', 'VS Code', 'Linux', 'Conda', 'Docker', 'AWS']
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Technologies',
      icon: Globe,
      gradient: 'from-indigo-500 to-purple-600',
      skills: ['MERN Stack', 'Socket.io', 'Cloudinary', 'RESTful Services']
    }
  ];

  const achievements = [
    { icon: Award, title: 'AI/ML Certification', subtitle: 'ISRO, IIRS 2024' },
    { icon: Star, title: 'Data Science Certified', subtitle: 'AI4SEE 2024' },
    { icon: TrendingUp, title: 'Web Development', subtitle: 'RedCrix 2024' }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-nebula opacity-10"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-poppins font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gradient-text">Technical Expertise</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            A comprehensive skillset spanning modern technologies, frameworks, and development practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="perspective-1000"
              >
                <Card className="h-full glass border-primary/20 group hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  <CardContent className="p-8 h-full relative z-10">
                    {/* Icon and Title */}
                    <div className="mb-6">
                      <motion.div
                        className="flex items-center gap-4 mb-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                            <IconComponent className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                      </motion.div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (index * 0.1) + (skillIndex * 0.05),
                            duration: 0.5
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 cursor-pointer
                              ${hoveredSkill === skill 
                                ? 'bg-primary/20 text-primary border-primary/40 shadow-lg' 
                                : 'bg-secondary/20 text-foreground hover:bg-secondary/30'
                              }
                            `}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3 
            className="text-3xl font-poppins font-bold text-primary mb-12"
            whileHover={{ scale: 1.05 }}
          >
            Certifications & Achievements
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="glass p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                    <CardContent className="p-0 text-center">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 12 }}
                      >
                        <IconComponent className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h4 className="font-poppins font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground font-inter">
                        {achievement.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;