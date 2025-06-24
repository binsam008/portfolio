import { ArrowDown, Instagram, Linkedin, Github } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground dark:text-purple-600">
            <Typewriter
              words={["Hi, I'm Binsam Mohamed"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a passionate software engineer with a focus on building
            exceptional digital experiences. I specialize in creating web
            applications that are not only functional but also visually
            appealing.
          </p>

          <div>
            <a href="#projects" className="cosmic-button">
              View my work
            </a>

          <div className="mt-6 flex justify-center gap-6">
  <a
    href="https://www.instagram.com/ig._voltrez_/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 dark:text-purple hover:opacity-80 transition-colors"
  >
    <Instagram className="h-6 w-6" />
  </a>
  <a
    href="https://linkedin.com/in/Binsam Mohammad"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 dark:text-purple hover:opacity-80 transition-colors"
  >
    <Linkedin className="h-6 w-6" />
  </a>
  <a
    href="https://github.com/binsam008"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 dark:text-purple hover:opacity-80 transition-colors"
  >
    <Github className="h-6 w-6" />
  </a>
</div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};
