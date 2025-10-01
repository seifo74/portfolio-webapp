import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-chart-1 to-chart-2",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, color: "bg-chart-1" },
        { name: "TypeScript", level: 90, color: "bg-chart-2" },
        { name: "Next.js", level: 85, color: "bg-chart-1" },
        { name: "Tailwind CSS", level: 92, color: "bg-chart-3" },
        { name: "Vue.js", level: 75, color: "bg-chart-4" }
      ]
    },
    {
      title: "Backend",
      color: "from-chart-3 to-chart-4",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, color: "bg-chart-4" },
        { name: "Python", level: 82, color: "bg-chart-3" },
        { name: "PostgreSQL", level: 85, color: "bg-chart-2" },
        { name: "MongoDB", level: 80, color: "bg-chart-4" },
        { name: "GraphQL", level: 78, color: "bg-chart-1" }
      ]
    },
    {
      title: "Tools & Others",
      color: "from-chart-5 to-chart-1",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95, color: "bg-chart-5" },
        { name: "Docker", level: 75, color: "bg-chart-3" },
        { name: "AWS", level: 70, color: "bg-chart-5" },
        { name: "Figma", level: 85, color: "bg-chart-2" },
        { name: "Jest", level: 80, color: "bg-chart-1" }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "JavaScript", "Node.js", "Python", 
    "MongoDB", "MySQL", "Docker", "Bootstrap CSS", "Tailwind CSS", "Figma", 
    "Git", "Express"
  ];

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life. 
            I'm always learning and adapting to new technologies.
          </p>
        </motion.div>

        {/* Skill Progress Bars */}
       
        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-3 py-1 text-sm hover:bg-gradient-to-r hover:from-primary hover:to-chart-2 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}