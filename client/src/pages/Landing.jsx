import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Sparkles, Users, Zap, Star, ArrowRight, Bot, Heart, Brain } from "lucide-react"
import { useNavigate } from "react-router-dom"
export default function PersonaBotLanding() {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen  dark bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-2xl font-heading font-bold text-foreground">PersonaBot</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Conversations
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Chat with AI Personas
            <span className="text-primary block">Tailored to You</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Experience personalized conversations with unique AI companions. From creative writing partners to business
            advisors, find the perfect persona for every need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Chatting Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Users className="h-5 w-5 mr-2" />
              Explore Personas
            </Button>
          </div>
        </div>
      </section>

      
      {/* Personas Section */}
      <section id="personas" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Meet Your AI Companions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse collection of AI personas, each designed for specific conversations and tasks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Hitesh Choudhary",
                description: "retired from corporate and full time YouTuber, x founder of LCO (acquired), x CTO, Sr. Director at PW. 2 YT channels (1M & 700k+), stepped into 43 countries.",
                avatar: "/hitesh.png",
                badge: "Tech",
                color: "bg-blue-500",
                user:"hiteshsir"

              },
             
            
            ].map((persona, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group cursor-pointer bg-card"
              >
                <CardHeader className="text-center ">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarImage src={persona.avatar || "/placeholder.svg"} alt={persona.name} />
                    <AvatarFallback className={`${persona.color} text-white font-semibold`}>
                      {persona.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                    {persona.badge}
                  </Badge>
                  <CardTitle className="font-heading text-lg">{persona.name}</CardTitle>
                  <CardDescription className="text-sm">{persona.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                    onClick={()=>navigate(`/user/${persona.name}`)}
                  >
                    Chat Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Get Started in 3 Simple Steps</h2>
            <p className="text-xl text-muted-foreground">Begin your AI conversation journey in minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Persona",
                description: "Browse our collection of AI personas and select the one that matches your needs.",
              },
              {
                step: "2",
                title: "Start Chatting",
                description: "Begin your conversation immediately. No complex setup or training required.",
              },
              {
                step: "3",
                title: "Enjoy & Learn",
                description: "Experience personalized responses that get better with each conversation.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      
    </div>
  )
}
