import Image from "next/legacy/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ParallaxSection from '@/components/layout/parallax-section';

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxSection
        backgroundImage="/images/hero-background.jpg" // Use the local image
        data-ai-hint="people worshiping hands raised silhouette"
        minHeight="100vh" // Ensure parallax covers full viewport height
        className="text-white" // Set text color for content inside
      >
        {/* Container for hero content - Center vertically and horizontally */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full w-full max-w-4xl mx-auto px-4" style={{ minHeight: '100vh' }}>
           {/* Add padding or adjust margins as needed */}
           <div className="py-20"> {/* Added padding top and bottom */}
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
               CHRIST THE LIVING HOPE COMMUNITY CHURCH UNITED
             </h1>
             <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
               Be pleasing to God. Be a blessing to others.
             </p>
             <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
               <Link href="/about">Learn More</Link>
             </Button>
           </div>
         </div>
      </ParallaxSection>

      {/* Welcome and Description Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">Welcome to CLHCCU</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
             We are a community united by faith, committed to knowing God and making Him known. Join us as we grow together in love and service, sharing the hope we have in Christ.
          </p>
          {/* Adjusted grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-left bg-card border-border shadow-sm transition-all duration-300 hover:bg-card/50 hover:backdrop-blur-sm hover:shadow-lg group">
              <CardHeader>
                <CardTitle className="tracking-tight text-xl font-semibold text-card-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground group-hover:text-card-foreground">
                  "We aspire to be a beautiful, glorious, and excellent church, marked by a passionate love for God and wholehearted obedience to His will."
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-left bg-card border-border shadow-sm transition-all duration-300 hover:bg-card/70 hover:backdrop-blur-sm hover:shadow-lg group">
              <CardHeader>
                <CardTitle className="tracking-tight text-xl font-semibold text-card-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground group-hover:text-card-foreground">
                   "Driven by Jesus' call: To seek and save the lost, and to nurture disciples."
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
              src="/images/34anniversary.jpg"
              alt="Events"
              width={600}
              height={500}
              className="rounded-lg shadow-md object-cover w-full"
              data-ai-hint="community event people food"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-secondary-foreground">Featured Upcoming Event</h2>
            <h3 className="text-2xl font-medium mb-3 text-secondary-foreground">34th Anniversary &amp; Thanksgiving</h3>
            <p className="text-lg text-muted-foreground mb-6">
              From small beginnings to where we are today, one thing has remained constant and it is the faithfulness of God. For 34 years, He has proven that His plans are good and His promises never fail. This January 4, 2026, let’s gather at Bren Z. Guiao Convention Center, 9AM–5PM, for our 34th Anniversary &amp; Thanksgiving. Let’s lift our praises higher and give back all the glory to the One who made it all possible!
            </p>
            <p className="text-md text-muted-foreground mb-2"><strong>Date:</strong> January 4, 2026</p>
            <p className="text-md text-muted-foreground mb-6"><strong>Time:</strong> 9:00 AM - 5:00 PM</p>
            <Button asChild variant="default">
              <Link href="/events">See All Events</Link>
            </Button>
          </div>
        </div>
      </section>


    </>
  );
}
