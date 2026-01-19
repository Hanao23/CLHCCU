import { Calendar, MapPin } from 'lucide-react';
import Image from "next/legacy/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

// Sample event data - replace with dynamic data source later
const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "10:00 AM - 11:30 AM",
    location: "Main Sanctuary, 123 Main Street",
    description: "Join us for our weekly gathering featuring worship, teaching, and fellowship.",
    image: "https://picsum.photos/400/250?grayscale&random=7",
    imageAlt: "Worship service",
    imageHint: "church sanctuary people worshiping"
  },
  {
    id: 2,
    title: "Midweek Bible Study",
    date: "Every Wednesday",
    time: "6:30 PM",
    location: "Fellowship Hall",
    description: "Dive deeper into God's Word with us during our interactive midweek study group.",
     image: "https://picsum.photos/400/250?grayscale&random=8",
    imageAlt: "Bible study group",
     imageHint: "people studying bible books"
  },
  {
    id: 3,
    title: "Annual Community Picnic",
    date: "July 20th, 2024",
    time: "12:00 PM - 4:00 PM",
    location: "Anytown Community Park",
    description: "A fun-filled day of food, games, and fellowship for the whole church family and community.",
    image: "https://picsum.photos/400/250?grayscale&random=9",
    imageAlt: "Community picnic",
     imageHint: "park picnic people food"
  },
   {
    id: 4,
    title: "Youth Group Game Night",
    date: "July 26th, 2024",
    time: "6:30 PM - 9:00 PM",
    location: "Youth Room",
    description: "An exciting night of games, snacks, and fun for all teenagers (Grades 7-12).",
     image: "https://picsum.photos/400/250?grayscale&random=10",
    imageAlt: "Youth game night",
     imageHint: "teenagers playing games board games"
  },
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Upcoming Events</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Stay connected with everything happening at CLHCCU. Check out our calendar of upcoming services, studies, fellowship opportunities, and special events.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="bg-card border-border shadow-sm flex flex-col">
            <Image
              src={event.image}
              alt={event.imageAlt}
              width={400}
              height={250}
              className="w-full object-cover h-48"
               data-ai-hint={event.imageHint}
            />
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-card-foreground">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{event.date} at {event.time}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <CardDescription className="text-muted-foreground mb-4">
                  {event.description}
                </CardDescription>
              </div>
               {/* Optional: Add a 'Learn More' button if linking to specific event pages */}
               {/* <Button variant="outline" size="sm">Learn More</Button> */}
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="text-center mt-16">
         <p className="text-lg text-muted-foreground">
            Check back often for new events and updates!
         </p>
       </div>
    </div>
  );
}
