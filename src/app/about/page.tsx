import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Import Card components

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Us</h1>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
        <div className="md:w-1/2">
          <Image
            src="https://picsum.photos/600/400?grayscale"
            alt="Church Congregation"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
            data-ai-hint="church congregation diverse people"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 text-foreground">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Christ The Living Hope Community Church United (CLHCCU) began with a small group of believers meeting in a living room, driven by a shared passion to create a welcoming space for worship and community engagement. Over the years, we have grown into a vibrant congregation dedicated to the teachings of Jesus Christ and serving the Anytown area.
          </p>
          <p className="text-lg text-muted-foreground">
            Our journey is one of faith, perseverance, and God's unwavering guidance. We strive to be a beacon of hope, reflecting Christ's love in all we do.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">Our Beliefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2 text-card-foreground">The Bible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe the Bible is the inspired, infallible Word of God, the ultimate authority for faith and life.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <CardHeader>
               <CardTitle className="text-xl font-semibold mb-2 text-card-foreground">God</CardTitle>
            </CardHeader>
             <CardContent>
                <p className="text-muted-foreground">
                We believe in one God, eternally existing in three persons: Father, Son (Jesus Christ), and Holy Spirit.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card p-6 rounded-lg border border-border shadow-sm">
             <CardHeader>
               <CardTitle className="text-xl font-semibold mb-2 text-card-foreground">Salvation</CardTitle>
            </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">
                We believe salvation is a free gift received through faith in Jesus Christ, who died for our sins and rose again.
              </p>
             </CardContent>
          </Card>
           <Card className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <CardHeader>
               <CardTitle className="text-xl font-semibold mb-2 text-card-foreground">The Church</CardTitle>
            </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">
                We believe the Church is the body of Christ, called to worship God, nurture believers, and share the Gospel.
               </p>
             </CardContent>
          </Card>
        </div>
      </div>

       {/* Wrap the leadership section in a Card */}
       <Card className="text-center bg-card border border-border shadow-sm p-8 rounded-lg">
        <CardHeader>
            <CardTitle className="text-3xl font-semibold text-center text-card-foreground">Meet Our Leadership</CardTitle>
        </CardHeader>
        <CardContent>
           <p className="text-lg text-muted-foreground">
            Our leadership team information is coming soon. We are blessed with dedicated individuals guiding our church community.
          </p>
        </CardContent>
      </Card>

    </div>
  );
}
