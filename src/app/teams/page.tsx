import Image from "next/legacy/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Our Ministry Teams</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Serving is at the heart of our church community. Our ministry teams provide opportunities for everyone to use their unique gifts and talents to bless others and build up the body of Christ. Find a place where you can connect and make a difference!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Card Example */}
        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/400/250?grayscale&random=1"
            alt="Worship Team"
            width={400}
            height={250}
            className="w-full object-cover"
             data-ai-hint="worship music instruments"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Worship & Arts Team</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Leading our congregation in meaningful worship through music, vocals, and creative arts during our services.
            </CardDescription>
            <p className="text-sm text-foreground font-medium">Contact: worship@clhccu.org</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/400/250?grayscale&random=2"
            alt="Children's Ministry"
            width={400}
            height={250}
            className="w-full object-cover"
            data-ai-hint="children playing learning"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Children's Ministry (Hope Kids)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Providing a safe, fun, and engaging environment for children to learn about God's love and foundational biblical truths.
            </CardDescription>
             <p className="text-sm text-foreground font-medium">Contact: kids@clhccu.org</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/400/250?grayscale&random=3"
            alt="Youth Group"
            width={400}
            height={250}
            className="w-full object-cover"
            data-ai-hint="teenagers group discussion"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Youth Ministry (Ignite Youth)</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Connecting teenagers with God and each other through relevant teaching, fun activities, and supportive relationships.
            </CardDescription>
             <p className="text-sm text-foreground font-medium">Contact: youth@clhccu.org</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/400/250?grayscale&random=4"
            alt="Hospitality Team"
            width={400}
            height={250}
            className="w-full object-cover"
             data-ai-hint="welcoming handshake smile"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Hospitality & Welcome Team</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Creating a warm and welcoming atmosphere for everyone who walks through our doors, from greeting to serving refreshments.
            </CardDescription>
             <p className="text-sm text-foreground font-medium">Contact: welcome@clhccu.org</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/400/250?grayscale&random=5"
            alt="Outreach Team"
            width={400}
            height={250}
            className="w-full object-cover"
            data-ai-hint="community service helping hands"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Community Outreach Team</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Serving our local community through various projects and partnerships, demonstrating God's love in practical ways.
            </CardDescription>
             <p className="text-sm text-foreground font-medium">Contact: outreach@clhccu.org</p>
          </CardContent>
        </Card>

         <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/400/250?grayscale&random=6"
            alt="Tech Team"
            width={400}
            height={250}
            className="w-full object-cover"
            data-ai-hint="sound board computer screen"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Tech & Media Team</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Supporting our services and events with sound, lighting, visuals, and online streaming capabilities.
            </CardDescription>
             <p className="text-sm text-foreground font-medium">Contact: tech@clhccu.org</p>
          </CardContent>
        </Card>

      </div>

       <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Interested in Joining a Team?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We'd love to help you find the perfect place to serve. Contact the team leader directly or reach out to our main office.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-primary/90 focus:shadow-outline focus:outline-none">
          Get Involved
        </a>
      </div>
    </div>
  );
}
