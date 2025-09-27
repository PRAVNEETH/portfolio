import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, Github, Play, 
  MessageCircle, Brain, Code, Database,
  Users, Zap, Target, Layers
} from 'lucide-react';

const ProjectsSection = () => {
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
        uptime: '99.9%',
        messages: '10K+ Daily'
      },
      github: 'https://github.com/Pravneeth/connectify',
      demo: 'https://connectify-demo.com',
      color: 'electric-blue',
      icon: MessageCircle,
      status: 'Live'
    },
    {
      id: 'lexinext',
      title: 'LexiNext',
      category: 'ai',
      description: 'LSTM-based next-word predictor with 78% accuracy and 2.12 perplexity, featuring real-time smart compose and autocomplete functionality.',
      longDescription: 'An advanced natural language processing system that predicts the next word in sequences with high accuracy, implemented from scratch using deep learning.',
      tech: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'NLP', 'NumPy'],
      features: [
        'LSTM neural network architecture',
        'Custom tokenization and preprocessing',
        'Real-time prediction engine',
        '78% prediction accuracy',
        'Smart compose integration',
        'Developer productivity tools'
      ],
      metrics: {
        accuracy: '78%',
        perplexity: '2.12',
        speed: '< 10ms',
        vocabulary: '50K+ Words'
      },
      github: 'https://github.com/Pravneeth/lexinext',
      demo: 'https://lexinext-demo.com',
      color: 'coral-pink',
      icon: Brain,
      status: 'Live'
    },
    {
      id: 'pose-estimation',
      title: '6D Object Pose Estimation',
      category: 'ai',
      description: 'Advanced computer vision system using YOLOv5-6D and OpenCV for accurate 3D object detection and alignment in robotics applications.',
      longDescription: 'A cutting-edge system for precise 6D object pose estimation, combining deep learning with computer vision for robotics and AR applications.',
      tech: ['Python', 'YOLOv5-6D', 'OpenCV', 'COLMAP', 'Blender', '3D Vision'],
      features: [
        'YOLOv5-6D deep learning model',
        'Sub-6° rotation accuracy',
        '3cm position precision',
        'Synthetic data generation with Blender',
        'COLMAP integration for calibration',
        'Real-time processing capability'
      ],
      metrics: {
        accuracy: '<6° Rotation',
        precision: '3cm Position',
        dataset: '1,500+ Images',
        performance: 'Real-time'
      },
      github: 'https://github.com/Pravneeth/6d-pose-estimation',
      color: 'electric-purple',
      icon: Target,
      status: 'Development'
    },
    {
      id: 'image-transformer',
      title: 'AI Image Transformer',
      category: 'ai',
      description: 'Flask-based web application for advanced image processing including cartoon transformation, sketch conversion, and background removal.',
      longDescription: 'A comprehensive image processing platform with multiple AI-powered transformation capabilities and optimized performance.',
      tech: ['Flask', 'OpenCV', 'Python', 'rembg', 'PIL', 'Web APIs'],
      features: [
        'Multiple image transformation modes',
        'Background removal with rembg',
        'Cartoon and sketch conversion',
        'Batch processing capability',
        'Mobile-responsive interface',
        '95% success rate on 300+ test images'
      ],
      metrics: {
        success: '95%',
        processed: '300+ Images',
        performance: '30% Faster',
        accessibility: '+12 Score'
      },
      github: 'https://github.com/Pravneeth/image-transformer',
      demo: 'https://image-transformer.redcrix.com',
      color: 'neon-green',
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
    <section id="projects" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute w-96 h-96 border border-primary/20 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div 
          className="absolute w-64 h-64 border border-accent/20 rounded-full"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ right: '15%', bottom: '25%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning AI, machine learning, and full-stack development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setActiveFilter(category.id)}
                className={`
                  relative group px-6 py-3 rounded-2xl font-medium text-sm
                  transition-all duration-500 ease-out cursor-pointer
                  backdrop-blur-sm border overflow-hidden
                  ${activeFilter === category.id
                    ? 'bg-gradient-primary text-white border-primary/50 shadow-neon' 
                    : 'bg-background/60 text-foreground border-border/40 hover:border-primary/60'
                  }
                `}
              >
                {/* Animated background gradient */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20
                  opacity-0 transition-opacity duration-500
                  ${activeFilter === category.id ? 'opacity-100' : 'group-hover:opacity-70'}
                `} />
                
                {/* Shimmer effect */}
                <div className={`
                  absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-1000 ease-out
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  ${activeFilter === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `} />
                
                {/* Content */}
                <div className="relative flex items-center gap-2 z-10">
                  <span className="font-inter">{category.label}</span>
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    transition-all duration-300
                    ${activeFilter === category.id
                      ? 'bg-white/20 text-white' 
                      : 'bg-primary/20 text-primary group-hover:bg-primary/30'
                    }
                  `}>
                    {category.count}
                  </span>
                </div>
                
                {/* Bottom glow line */}
                <div className={`
                  absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent
                  transition-all duration-300
                  ${activeFilter === category.id ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-70'}
                `} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="glass h-full border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-${project.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-7 h-7 text-${project.color}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-space font-bold text-foreground">
                              {project.title}
                            </h3>
                            <Badge 
                              variant="secondary" 
                              className={`
                                text-xs
                                ${project.status === 'Live' 
                                  ? 'bg-neon-green/20 text-neon-green border-neon-green/30' 
                                  : 'bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30'
                                }
                              `}
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>

                    {/* Key Features (shown on hover) */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredProject === project.id ? 'auto' : 0, 
                        opacity: hoveredProject === project.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-3 glass rounded-lg">
                          <div className={`text-lg font-bold text-${project.color} font-orbitron`}>
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/20 text-foreground text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                            +{project.tech.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.demo && (
                        <Button
                          className="flex-1 cyber-button text-sm"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            className="glass border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-3"
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