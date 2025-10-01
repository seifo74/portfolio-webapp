import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices and modern patterns."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that provide excellent user experiences."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and smooth user interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and communicating complex technical concepts clearly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/10 to-secondary/20 relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-chart-3/10 rounded-full blur-2xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
       
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image and stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1700619663145-34b53a04d940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwc2V0dXB8ZW58MXx8fHwxNzU5MTQ5MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern workspace setup"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>

            <div className="mt-8">
              <div className="bg-muted/20 p-4 rounded-xl shadow-sm">
                <div className="flex flex-wrap gap-2 mb-2">
                  {["React" ,"CSS" ,"Node.js" ,"TypeScript" ,"HTML" ,"JavaScript" ,"MySQL"].map((skill, index) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python" ,"Figma" ,"Git" ,"MongoDB"].map((skill, index) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      style={{ animationDelay: `${0.65 + index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate junior full stack developer with hands-on experience in building dynamic web applications using React, Node.js, JavaScript, and MySQL. I have worked as a full stack developer at El Tayby Pharmacies, where I contributed to developing and maintaining business-critical systems. I have recently graduated from the SIM department in the Faculty of Science at Alexandria University with a degree in Computer Science. I am eager to continue learning, take on new challenges, and grow as a developer in collaborative and innovative environments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <feature.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
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
}