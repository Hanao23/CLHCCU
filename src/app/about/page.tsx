import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, HeartHandshake, BookOpen, Target, Gem } from 'lucide-react'; // Added icons

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Image Section */}
      <div className="mb-16 relative h-[40vh] md:h-[50vh] rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/images/statementoffaith.jpg" // Replace with a relevant hero image if available
          alt="Statement Of Faith Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="filter " // Optional: brightness adjustment
          data-ai-hint="church congregation diverse people wide angle"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            About CLHCCU
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2 drop-shadow-sm">
            Understanding Our Faith, Mission, and Values
          </p>
        </div>
      </div>

      {/* Statement of Faith Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">Statement of Faith</h2>
        <Card className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-sm max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a Trinitarian Church fully believing in the Bible of 66 Books as God-breathed. We wholeheartedly embrace the Five Solas: Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, and Soli Deo Gloria. We believe in the vital role of the Church in God's plans, the reality of heaven and hell, angels and demons, the Second Coming of Christ, and the Millennial Kingdom.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <CardHeader className="flex-row items-center gap-4 pb-4">
              <Target className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl font-semibold text-card-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-md text-muted-foreground">
                "We aspire to be a beautiful, glorious, and excellent church, marked by a passionate love for God and wholehearted obedience to His will."
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <CardHeader className="flex-row items-center gap-4 pb-4">
              <Gem className="h-8 w-8 text-primary" /> {/* Changed icon */}
              <CardTitle className="text-2xl font-semibold text-card-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-md text-muted-foreground">
                "Driven by Jesus' call: To seek and save the lost, and to nurture disciples."
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center bg-card p-6 rounded-lg border border-border shadow-sm">
            <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
            <CardTitle className="text-lg font-medium mb-2 text-card-foreground">Bible-Centered</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              God's Word is our foundation for truth and practice.
            </CardDescription>
          </Card>
          <Card className="text-center bg-card p-6 rounded-lg border border-border shadow-sm">
            <HeartHandshake className="h-10 w-10 text-primary mx-auto mb-3" />
            <CardTitle className="text-lg font-medium mb-2 text-card-foreground">Authentic Community</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Building genuine relationships through love and support.
            </CardDescription>
          </Card>
           <Card className="text-center bg-card p-6 rounded-lg border border-border shadow-sm">
             {/* Using a placeholder icon or find a suitable one */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343M15 7a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0v2m-6-2v2m0-2l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2M6 11a3 3 0 01-6 0m6 0a3 3 0 00-6 0m6 0v2m-6-2v2m0-2l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2m6-6l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2" />
             </svg>
            <CardTitle className="text-lg font-medium mb-2 text-card-foreground">Passionate Worship</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Expressing our love for God wholeheartedly.
            </CardDescription>
          </Card>
          <Card className="text-center bg-card p-6 rounded-lg border border-border shadow-sm">
             {/* Using a placeholder icon or find a suitable one */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> {/* Simple placeholder */}
             </svg>
            <CardTitle className="text-lg font-medium mb-2 text-card-foreground">Servant Leadership</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
               Following Christ's example by serving others.
             </CardDescription>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Leadership Card 1 */}
          <Card className="text-center bg-card p-6 rounded-lg border border-border shadow-sm">
            <Image
              src="https://picsum.photos/200/200?grayscale&random=11" // Replace with actual photo
              alt="Pastor Name"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4 shadow-md"
              data-ai-hint="headshot portrait pastor"
            />
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-semibold mb-1 text-card-foreground">Ptr. Noel P. Due</CardTitle>
              <CardDescription className="text-md text-primary">Senior Pastor</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">
                Pastor Noel has been leading CLHCCU since [Year]. He has a passion for teaching God's Word and seeing lives transformed by the Gospel.
              </p>
            </CardContent>
          </Card>

          {/* Leadership Card 2 */}
          <Card className="text-center bg-card p-6 rounded-lg border border-border shadow-sm">
             <Image
                src="https://picsum.photos/200/200?grayscale&random=12" // Replace with actual photo
               alt="Leader Name"
                width={120}
               height={120}
                className="rounded-full mx-auto mb-4 shadow-md"
                data-ai-hint="headshot portrait leader"
             />
             <CardHeader className="p-0">
               <CardTitle className="text-xl font-semibold mb-1 text-card-foreground">Ptr. Reynald D. Guevarra</CardTitle>
               <CardDescription className="text-md text-primary">Associate Pastor</CardDescription>
             </CardHeader>
             <CardContent className="pt-4">
               <p className="text-sm text-muted-foreground">
                 Pastor Reynald oversees our [Specific Ministry, e.g., Community Groups] and is dedicated to fostering discipleship and connection.
               </p>
             </CardContent>
          </Card>

           {/* Leadership Card 3 - Example Elder/Deacon */}
           <Card className="text-center bg-card p-6 rounded-lg border border-border shadow-sm">
             <Image
                src="https://picsum.photos/200/200?grayscale&random=13" // Replace with actual photo
               alt="Elder Name"
                width={120}
               height={120}
                className="rounded-full mx-auto mb-4 shadow-md"
                data-ai-hint="headshot portrait elder"
             />
             <CardHeader className="p-0">
               <CardTitle className="text-xl font-semibold mb-1 text-card-foreground">Sis. Loida Q. David</CardTitle>
               <CardDescription className="text-md text-primary">Ministry Head</CardDescription>
             </CardHeader>
             <CardContent className="pt-4">
               <p className="text-sm text-muted-foreground">
                 Loida serves as a ministry head, providing spiritual oversight and guidance in [Area of Responsibility, e.g., Worship Ministry].
               </p>
             </CardContent>
           </Card>
         </div>
       </section>

      {/* Beliefs Section (Kept from original, ensure content is accurate) */}
       <section>
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
       </section>

       {/* Final Image/Call to Action (Optional) */}
       {/* <Card className="mt-16 text-center bg-card border border-border shadow-sm p-8 rounded-lg">
        <CardContent>
          <Image src="/images/ladder.jpg" alt="church event" width={600} height={400} className="rounded-lg shadow-md object-cover w-full" data-ai-hint="church event diverse people"/>
        </CardContent>
      </Card> */}
    </div>
  );
}
