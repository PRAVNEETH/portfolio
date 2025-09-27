import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "1", color: "electric-blue" },
    { label: "Projects Completed", value: "15+", color: "coral-pink" },
    { label: "CGPA", value: "8.47", color: "luxury-gold" },
    { label: "Certifications", value: "3+", color: "electric-purple" },
  ];

  const experiences = [
    {
      company: "RedCrix",
      role: "Full-Stack AI Developer Intern",
      period: "Dec 2024 – Feb 2025",
      location: "Mohali",
      highlights: [
        "Streamlined Flask-based web application for image transformation",
        "95% success rate in image processing with OpenCV and rembg",
        
      ]
    },
    {
      company: "AI4SEES",
      role: "Data Science Intern", 
      period: "Jun 2025 – Aug 2025",
      location: "Bangalore",
      highlights: [
        "Engineered 6D object pose estimation system with YOLOv5-6D",
        "Achieved <6° rotation error and 3cm position error",
        "Trained on 1,500+ high-quality synthetic images",
        "Integrated calibration and dataset generation tools"
      ]
    },
    {
      company: "Foxaisr",
      role: "Software Developer Intern",
      period: "Jan 2025 – Feb 2025", 
      location: "Remote",
      highlights: [
        "Enhanced React website responsiveness and UX",
        "Developed interactive and modern UI components",
        
      ]
    },
    {
      company: "INRBONDS",
      role: "Web Developer Intern",
      period: "Dec 2024 – March 2025",
      location: "Remote",
      highlights: [
        "Designed and implemented ER diagrams for database schema based on provided requirements, translating real-world data structures into an optimized database design.",
        "Developed dynamic web interfaces, creating, managing, and displaying database tables in the frontend to fulfill project objectives"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that bridge AI and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education Card */}
            <Card className="glass border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-space font-semibold mb-2">National Institute Of Technology Sikkim</h3>
                    <p className="text-primary font-medium">Bachelor of Technology - Computer Science & Engineering</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Nov 2022 – Jun 2026
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Ravangla, Sikkim
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        CGPA: 8.47
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bio Text */}
            <div className="space-y-6 font-inter text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-foreground"
              >
                I'm a passionate <span className="text-electric-blue font-semibold">AI & Full-Stack Developer</span> currently 
                pursuing my B.Tech in Computer Science at NIT Sikkim. My journey in technology is driven by a deep fascination 
                with how artificial intelligence can solve real-world problems and create meaningful user experiences.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground"
              >
                With hands-on experience in <span className="text-coral-pink font-semibold">machine learning</span>, 
                <span className="text-electric-purple font-semibold"> computer vision</span>, and 
                <span className="text-neon-green font-semibold"> full-stack development</span>, I've had the privilege 
                to work on diverse projects ranging from real-time chat applications to advanced 6D object pose estimation systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground"
              >
                Skilled in building scalable applications and
                predictive models, with strong problem-solving and analytical abilities. Passionate about applying AI to
                real-world challenges in Robotics, AR, and user-centric software.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground"
              >
                When I'm not coding, you'll find me exploring the latest developments in AI research, contributing to open-source projects, 
                or experimenting with new technologies. I believe in the power of continuous learning and collaboration to push the 
                boundaries of what's possible in technology.
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4 rounded-lg text-center hover:bg-primary/5 transition-all"
                >
                  <div className={`text-2xl font-bold text-${stat.color} font-orbitron mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-space font-bold text-primary mb-8">Experience</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16 pb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-neon"></div>
                  
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all group">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h4 className="text-xl font-space font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {exp.period}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;