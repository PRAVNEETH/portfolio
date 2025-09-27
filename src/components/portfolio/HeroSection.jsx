import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, Code, Zap, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const typewriterText = "AI & Full-Stack Developer";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + typewriterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, typewriterText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Nebula Background */}
        <div className="absolute inset-0 bg-gradient-nebula opacity-30"></div>
        
        {/* Stellar Orbs */}
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-stellar rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
            rotate: 360,
          }}
          transition={{ 
            x: { type: "spring", damping: 50, stiffness: 100 },
            y: { type: "spring", damping: 50, stiffness: 100 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          style={{
            left: '5%',
            top: '10%',
          }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(var(--nebula-violet) / 0.25) 0%, transparent 70%)',
            right: '10%',
            bottom: '20%',
          }}
          animate={{
            x: mousePosition.x * -0.2,
            y: mousePosition.y * 0.2,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            x: { type: "spring", damping: 40, stiffness: 80 },
            y: { type: "spring", damping: 40, stiffness: 80 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Floating Stars */}
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.8 + 0.2;
          const duration = Math.random() * 4 + 3;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-stellar-silver"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity,
              }}
              animate={{
                opacity: [opacity * 0.3, opacity, opacity * 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          );
        })}
        
        {/* Shooting Stars */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-cosmic-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
            }}
            animate={{
              x: [0, 200],
              y: [0, 100],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 3 + Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
        
        {/* Cosmic Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-stellar-silver/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Code, Zap, Sparkles].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.sin(i * 2) * 100, 0],
                y: [0, Math.cos(i * 2) * 100, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
            >
              <Icon className="w-8 h-8 text-primary/30" />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Name Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-poppins font-bold mb-4 leading-tight"
          >
            <motion.span 
              className="inline-block gradient-text"
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
              transition={{ duration: 0.5 }}
            >
              Balaji
            </motion.span>
            <br />
            <motion.span 
              className="inline-block text-foreground"
              whileHover={{ scale: 1.05, rotate: [1, -1, 1, 0] }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Praneeth
            </motion.span>
            <br />
            <motion.span 
              className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kamal
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Dynamic Role Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative inline-block mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-poppins font-semibold text-primary mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {displayText}
              <motion.span
                className="inline-block w-0.5 h-8 bg-primary ml-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.h2>
            
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto font-inter leading-relaxed">
              Crafting intelligent solutions through 
              <motion.span 
                className="font-semibold bg-gradient-to-r from-cosmic-gold to-nebula-violet bg-clip-text text-transparent mx-2"
                whileHover={{ scale: 1.1 }}
              >
                AI & Machine Learning
              </motion.span>
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Specialized in Computer Vision, Deep Learning, and Full-Stack Development
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              className="relative px-8 py-4 text-lg font-poppins font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                View My Work
              </span>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              className="px-8 py-4 text-lg font-poppins font-semibold border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary rounded-xl transition-all duration-300 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://linkedin.com/in/Balaji"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary/50 glass flex items-center justify-center hover:bg-primary/20 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 text-primary group-hover:text-nebula-violet" />
          </motion.a>
          
          <motion.a
            href="https://github.com/Pravneeth"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary/50 glass flex items-center justify-center hover:bg-primary/20 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-primary group-hover:text-stellar-silver" />
          </motion.a>
          
          <motion.button
            className="w-12 h-12 rounded-full bg-secondary/50 glass flex items-center justify-center hover:bg-primary/20 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Download resume functionality
              const link = document.createElement('a');
              link.href = '../../public/B220010CS.pdf';
              link.download = 'Balaji_Praneeth_Kamal_Resume.pdf';
              link.click();
            }}
          >
            <Download className="w-5 h-5 text-primary group-hover:text-cosmic-gold" />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;