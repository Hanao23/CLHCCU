import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ParallaxSection from '@/components/layout/parallax-section';

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://picsum.photos/1920/1080?grayscale" // Placeholder, replace with actual image path
        data-ai-hint="church building cross silhouette"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Removed container mx-auto to allow full-width centering */}
        <div className="relative z-20 px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-md text-center">
            CHRIST THE LIVING HOPE COMMUNITY CHURCH UNITED
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Be pleasing to God. Be a blessing to others.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </ParallaxSection>

      {/* Welcome and Description Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">Welcome to CLHCCU</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We are a community united by faith, committed to knowing God and making Him known. Join us as we grow together in love and service, sharing the hope we have in Christ with Anytown and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-left bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  To lead people into a growing relationship with Jesus Christ through worship, community, and outreach.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-left bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Building strong relationships within our church family and serving the local community with compassion.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-left bg-card border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Worship Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Join us every Sunday at 10:00 AM for inspiring worship and relevant teaching from the Bible.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://picsum.photos/600/400?grayscale"
              alt="Community Picnic"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover w-full"
              data-ai-hint="community event people food"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-secondary-foreground">Featured Upcoming Event</h2>
            <h3 className="text-2xl font-medium mb-3 text-secondary-foreground">Annual Community Picnic</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join us for our annual church picnic! A wonderful time of fellowship, food, and fun for all ages. Bring a dish to share and enjoy games, music, and connection.
            </p>
            <p className="text-md text-muted-foreground mb-2"><strong>Date:</strong> July 20th, 2024</p>
            <p className="text-md text-muted-foreground mb-6"><strong>Time:</strong> 12:00 PM - 4:00 PM</p>
            <Button asChild variant="default">
              <Link href="/events">See All Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
