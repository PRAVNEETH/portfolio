import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ExternalLink, Github, Play,
  MessageCircle, Brain, Target, Layers
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'connectify',
      title: 'Connectify',
      category: 'fullstack',
      description: 'Real-time chatroom application with instant messaging, user authentication, and persistent chat history for up to 60 concurrent users.',
      longDescription: 'A comprehensive real-time communication platform built with the MERN stack and Socket.io, featuring scalable architecture for seamless messaging experiences.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Cloudinary'],
      features: [
        'Real-time messaging with Socket.io',
        'User authentication & authorization',
        'Persistent chat history',
        'File sharing with Cloudinary integration',
        'Scalable for 60+ concurrent users',
        'Responsive design for all devices'
      ],
      metrics: {
        users: '60+ Concurrent',
        performance: '< 50ms Latency',
      },
      github: 'https://github.com/Pravneeth/connectify',
      demo: 'https://connectify-demo.com',
      icon: MessageCircle,
      status: 'Live'
    },
    {
      id: 'lexinext',
      title: 'LexiNext',
      category: 'ai',
      description: 'LSTM-based next-word predictor with 78% accuracy and 2.12 perplexity, featuring real-time smart compose and autocomplete.',
      longDescription: 'An advanced NLP system that predicts the next word in sequences with high accuracy, implemented from scratch using deep learning.',
      tech: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'NLP', 'NumPy'],
      features: [
        'LSTM neural network architecture',
        'Custom tokenization and preprocessing',
        'Real-time prediction engine',
        '78% prediction accuracy',
        'Smart compose integration',
      ],
      metrics: {
        accuracy: '78%',
        perplexity: '2.12',
      },
      github: 'https://github.com/Pravneeth/lexinext',
      demo: 'https://lexinext-demo.com',
      icon: Brain,
      status: 'Live'
    },
    {
      id: 'pose-estimation',
      title: '6D Object Pose Estimation',
      category: 'ai',
      description: 'Advanced computer vision system using YOLOv5-6D and OpenCV for accurate 3D object detection in robotics applications.',
      longDescription: 'Cutting-edge 6D object pose estimation combining deep learning with computer vision for robotics and AR applications.',
      tech: ['Python', 'YOLOv5-6D', 'OpenCV', 'COLMAP', 'Blender', '3D Vision'],
      features: [
        'YOLOv5-6D deep learning model',
        'Sub-6° rotation accuracy',
        '3cm position precision',
        'Synthetic data generation with Blender',
      ],
      metrics: {
        accuracy: '<6° Rotation',
        precision: '3cm Position',
      },
      github: 'https://github.com/Pravneeth/6d-pose-estimation',
      icon: Target,
      status: 'Development'
    },
    {
      id: 'image-transformer',
      title: 'AI Image Transformer',
      category: 'ai',
      description: 'Flask-based web app for advanced image processing: cartoon transformation, sketch conversion, and background removal with 95% success rate.',
      longDescription: 'A comprehensive image processing platform with multiple AI-powered transformation capabilities and optimized performance.',
      tech: ['Flask', 'OpenCV', 'Python', 'rembg', 'PIL', 'Web APIs'],
      features: [
        'Multiple image transformation modes',
        'Background removal with rembg',
        'Cartoon and sketch conversion',
        '95% success rate on 300+ test images'
      ],
      metrics: {
        success: '95%',
        processed: '300+ Images',
      },
      github: 'https://github.com/Pravneeth/image-transformer',
      demo: 'https://image-transformer.redcrix.com',
      icon: Layers,
      status: 'Live'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 border border-primary/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ left: '5%', top: '15%' }}
        />
        <motion.div
          className="absolute w-60 h-60 border border-accent/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ right: '10%', bottom: '20%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Innovative solutions spanning AI, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`
                relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer
                border overflow-hidden
                ${activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-lg'
                  : 'glass text-foreground border-primary/20 hover:border-primary/40'
                }
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${activeFilter === category.id
                    ? 'bg-white/20'
                    : 'bg-primary/15 text-primary'
                  }`}>
                  {category.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="glass h-full border-primary/15 hover:border-primary/35 transition-all duration-500 overflow-hidden hover:shadow-lg">
                    <CardContent className="p-6">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${project.status === 'Live'
                                    ? 'bg-aurora-green/15 text-aurora-green border-aurora-green/25'
                                    : 'bg-primary/15 text-primary border-primary/25'
                                  }`}
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {hoveredProject === project.id ? project.longDescription : project.description}
                      </p>

                      {/* Features on hover */}
                      <AnimatePresence>
                        {hoveredProject === project.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mb-4"
                          >
                            <div className="grid grid-cols-1 gap-1.5">
                              {project.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <div className="w-1 h-1 bg-primary rounded-full" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2.5 glass rounded-lg">
                            <div className="text-base font-bold text-primary font-poppins">
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/30 text-foreground/80 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" className="bg-primary/15 text-primary text-xs">
                            +{project.tech.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1 cyber-button text-xs"
                            onClick={() => window.open(project.demo, '_blank')}
                          >
                            <Play className="w-3.5 h-3.5 mr-1.5" />
                            Live Demo
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass border-primary/25 hover:border-primary/50 hover:bg-primary/10"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="glass border-primary/40 hover:border-primary hover:bg-primary/10 px-8 py-3"
            onClick={() => window.open('https://github.com/Pravneeth', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;