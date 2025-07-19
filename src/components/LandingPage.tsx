import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Check, Star } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-purple-blue rounded-lg"></div>
            <span className="text-xl font-bold">ProjectFlow</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
          </div>
          <div className="flex space-x-2">
            <Button asChild variant="ghost">
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-blue opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <Badge className="mb-4 animate-fade-in">
            🚀 New Dashboard Features Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Manage Projects
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Smarter
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Create projects, assign tasks, collaborate in one place. The modern
            project management tool built for teams that move fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              asChild
              size="lg"
              className="gradient-purple-blue text-white hover:shadow-glow transition-all duration-300"
            >
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline">
              Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost
              team productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Create Projects",
                description:
                  "Set up projects with custom workflows, deadlines, and team assignments in seconds.",
                icon: "📋",
              },
              {
                title: "Add Members",
                description:
                  "Invite team members, assign roles, and manage permissions with ease.",
                icon: "👥",
              },
              {
                title: "Task Assignment",
                description:
                  "Break down projects into manageable tasks and track progress in real-time.",
                icon: "✅",
              },
              {
                title: "Notes Management",
                description:
                  "Keep all project documentation, meeting notes, and ideas in one place.",
                icon: "📝",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beautiful, Intuitive Interface
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience a clean, modern dashboard designed for productivity.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="gradient-purple-blue p-1 rounded-2xl">
              <div className="bg-background rounded-xl p-8 text-center">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🖥️</div>
                    <p className="text-lg text-muted-foreground">
                      Dashboard Preview
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers have to say about ProjectFlow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager",
                company: "TechStart Inc.",
                content:
                  "ProjectFlow transformed how our team collaborates. We're 40% more productive now!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Team Lead",
                company: "Design Studio",
                content:
                  "The intuitive interface makes project management a breeze. Highly recommended!",
                rating: 5,
              },
              {
                name: "Emily Davis",
                role: "CEO",
                company: "StartupXYZ",
                content:
                  "Finally, a project management tool that doesn't get in the way. Love it!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that works best for your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-3xl font-bold">$0</div>
                <CardDescription>
                  Perfect for small teams getting started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Up to 5 team members",
                  "10 projects",
                  "Basic task management",
                  "Email support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-6" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg gradient-purple-blue text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-purple-600">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <div className="text-3xl font-bold text-white">$29</div>
                <CardDescription className="text-purple-100">
                  For growing teams that need more power
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Unlimited team members",
                  "Unlimited projects",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-6 bg-white text-purple-600 hover:bg-purple-50">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
                <span className="text-xl font-bold">ProjectFlow</span>
              </div>
              <p className="text-foreground/70">
                The modern project management tool built for teams that move
                fast.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/20 mt-8 pt-8 text-center text-foreground/70">
            <p>&copy; 2025 ProjectFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
