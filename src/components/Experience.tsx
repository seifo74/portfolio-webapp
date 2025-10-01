import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      company: "El Taiby Pharmacies",
      position: "Junior Full Stack Developer",
      duration: "July 2025 - Present",
      location: "Alexandria, Egypt",
      type: "Full-time",
      description: "Developed and maintained pharmacy management systems, including inventory, sales, and reporting modules. Collaborated with pharmacists and staff to automate daily operations, improve data accuracy, and streamline workflows. Integrated secure authentication and role-based access for staff, and provided technical support for system users.",
      achievements: [
        "Automated inventory tracking and reduced manual errors by 70%",
        "Implemented real-time sales and reporting dashboards for management",
        "Integrated secure user authentication and role-based access control",
        "Collaborated with pharmacy staff to optimize workflow and system usability",
        "Provided ongoing technical support and training for pharmacy employees"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Python", "Java", "MySQL", "MongoDB", "Git", "Figma"],
      website: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background via-muted/10 to-secondary/5 relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise 
            and delivering impactful solutions across different industries.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                  
                  <div className="md:ml-20">
                    <Card className="glass hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl group-hover:text-primary transition-colors">
                                {experience.position}
                              </h3>
                              <motion.a
                                href={experience.website}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                              </motion.a>
                            </div>
                            <h4 className="text-lg text-primary">{experience.company}</h4>
                          </div>
                          
                          <div className="flex flex-col sm:items-end gap-2">
                            <Badge variant="secondary" className="w-fit">
                              {experience.type}
                            </Badge>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {experience.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {experience.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>

                        <div>
                          <h5 className="mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + i * 0.1 + 0.5 }}
                                className="flex items-start gap-3 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, i) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: index * 0.2 + i * 0.05 + 0.8 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}