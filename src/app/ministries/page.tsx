
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Heart, Users, Youtube } from 'lucide-react';

export default function MinistriesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Our Ministries</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Discover the various ministries at CLHCCU, each dedicated to serving our community and growing in faith.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Ministry Card Example */}
        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/ministry1/800/500"
            alt="Worship Ministry"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
             data-ai-hint="worship music instruments"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Worship Ministry</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Leading the congregation in worship every Sunday.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/ministry2/800/500"
            alt="Youth Ministry"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="teenagers group discussion"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Youth Ministry</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Guiding the next generation in their faith journey.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/ministry3/800/500"
            alt="Media Ministry"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="camera streaming equipment"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Media Ministry</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Broadcasting our services and messages to the world.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
