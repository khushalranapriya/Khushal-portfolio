"use client"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const highlights = [
    { icon: '🚀', title: '3+ Years Experience', description: 'Web Development' },
/*     { icon: '👥', title: 'Team Leadership', description: 'Mentoring & Code Reviews' },
 */    { icon: '⚡', title: 'Performance Expert', description: 'Optimization & Best Practices' },
/*     { icon: '🔄', title: 'DevOps Knowledge', description: 'CI/CD & Deployment Strategies' }, */
  ];

  const technologies = [
    '.Net', 'C#', 'WebApi', 'Mvc', 'JavaScript', 'Sql',
    'MySql', 'Html', 'css'
  ];

  return (
    <section id="about" ref={elementRef} className="section-padding bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Passionate developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  I am a <span className="font-semibold text-primary-600 dark:text-primary-400">Web Developer</span> with 
                  <span className="font-semibold text-primary-600 dark:text-primary-400"> 3+ years of specialized experience</span> in building responsive web applications. 
                  My journey in web development has been driven by a passion for creating intuitive, performant, and accessible user interfaces.
                </p>
                
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
  My technical expertise spans across 
  <span className="font-semibold text-primary-600 dark:text-primary-400">
    .NET Core, C#, ASP.NET MVC, Entity Framework, LINQ, SQL Server, REST APIs, and Microservices
  </span>. 
  I build scalable backend systems and secure APIs, and I have strong experience working with clean architecture and enterprise-grade application structure.
</p>

<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
  Along with backend development, I have hands-on experience with 
  <span className="font-semibold text-primary-600 dark:text-primary-400">
    frontend frameworks
  </span> 
  like React.js and Angular, especially for integrating API-driven features. 
  I frequently work with modern UI libraries and ensure seamless communication between frontend and backend.
</p>




<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
  Beyond coding, I’ve gained 
  <span className="font-semibold text-primary-600 dark:text-primary-400">
    leadership and team collaboration experience
  </span> 


  
  through mentoring teammates, performing code reviews, and following best practices like SOLID principles, clean code, and optimized database design.
  My DevOps experience includes CI/CD pipelines, Docker, and deployment on Azure and IIS.
</p>

<p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
  As a growth-oriented professional, I’m continuously expanding my skills toward full-stack capabilities with a focus on 
  <span className="font-semibold text-primary-600 dark:text-primary-400">
    cloud technologies, microservices, and high-performance backend development
  </span>.
</p>

              </div>

              {/* Technologies */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="hover:scale-105 text-base bg-primary-600 text-white transition-transform duration-200 cursor-default"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card 
                  key={highlight.title}
                  className={cn(
                    "card-glass hover-lift group cursor-default transition-all duration-300",
                    "hover:shadow-xl hover:shadow-primary-500/10"
                  )}
                  style={{
                    animationDelay: `${0.2 + index * 0.1}s`
                  }}
                >
                  <CardHeader className="text-center pb-3">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-16 border-t border-neutral-200 dark:border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '3+', label: 'Years Experience', icon: '📅' },
                { number: '5+', label: 'Projects Completed', icon: '🚀' },
                { number: '4+', label: 'Technologies Mastered', icon: '⚡' },
                { number: '5+', label: 'Developers Mentored', icon: '👥' },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center group"
                  style={{
                    animationDelay: `${0.4 + index * 0.1}s`
                  }}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-600 text-lg font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
