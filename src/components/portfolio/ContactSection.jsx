import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, Phone, MapPin, Send, 
  Linkedin, Github, Download,
  CheckCircle, ExternalLink
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';


const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'balajipraneethkamal@gmail.com',
      href: 'mailto:balajipraneethkamal@gmail.com',
      color: 'electric-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93989 06416',
      href: 'tel:+919398906416',
      color: 'coral-pink'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: 'https://maps.google.com/?q=Hyderabad,India',
      color: 'electric-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/balaji-praneeth',
      username: '@Balaji',
      color: 'electric-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Pravneeth',
      username: '@Pravneeth',
      color: 'electric-purple'
    },
    // {
    //   icon: Download,
    //   label: 'Resume',
    //   link.href = '../../public/B220010CS.pdf',
    //   href: '../../public/B220010CS.pdf',
    //   username: 'Download CV',
    //   color: 'luxury-gold'
    // }
  ];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     toast({
  //       title: "Message Sent! ",
  //       description: "Thank you for reaching out. I'll get back to you soon!",
  //     });
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   }, 2000);
  // };
  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_9uvozgd',      // e.g. service_9uvozgd
      'template_gtmz0v2',     // e.g. template_abcd123
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'ANA9PmyxKBG68lgd8'       // from EmailJS account -> API Keys
    );

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Error Sending Message",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
    console.error('EmailJS Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};


  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, hsl(var(--electric-blue)/.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, hsl(var(--coral-pink)/.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, hsl(var(--electric-purple)/.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating Elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
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
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-space font-bold text-primary mb-6">Contact Information</h3>
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="block"
                  >
                    <Card className="glass border-primary/20 hover:border-primary/40 transition-all group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-${contact.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`w-6 h-6 text-${contact.color}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {contact.label}
                            </h4>
                            <p className="text-muted-foreground">{contact.value}</p>
                          </div>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-space font-bold text-primary mb-6">Connect With Me</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                      onClick={social.label === 'Resume' ? (e) => {
                        e.preventDefault();
                        // Resume download logic
                        const link = document.createElement('a');
                        link.href = '/resume.pdf';
                        link.download = 'Balaji_Praneeth_Kamal_Resume.pdf';
                        link.click();
                      } : undefined}
                    >
                      <div className="flex items-center gap-4 p-4 glass rounded-lg border-primary/20 hover:border-primary/40 transition-all group">
                        <div className={`w-10 h-10 rounded-full bg-${social.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`w-5 h-5 text-${social.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{social.label}</h4>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg border-primary/20"
            >
              <h4 className="text-lg font-space font-semibold text-primary mb-4">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-electric-blue font-orbitron">24/7</div>
                  <div className="text-xs text-muted-foreground">Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-coral-pink font-orbitron">&lt;24h</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-electric-purple font-orbitron">Remote</div>
                  <div className="text-xs text-muted-foreground">Work Ready</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neon-green font-orbitron">Open</div>
                  <div className="text-xs text-muted-foreground">To Relocate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-space font-bold text-primary mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/30 focus:border-primary bg-background/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/30 focus:border-primary bg-background/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass border-primary/30 focus:border-primary bg-background/50"
                      placeholder="Let's discuss a project"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glass border-primary/30 focus:border-primary bg-background/50 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-button relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </motion.div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Success Message */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0, scale: 0.8 }}
                  className="text-center mt-6 text-sm text-muted-foreground"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    <span>Secure & encrypted communication</span>
                  </div>
                  <p>Your message will be answered within 24 hours</p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;