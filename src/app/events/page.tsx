
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

// Sample event data - replace with dynamic data source later
const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: [
      "First Service 8:00 AM - 10:00 AM",
      "Second Service 11:00 AM - 1:00 PM",
      "Third Service 4:00 PM - 6:00 PM",
    ],
    time: null,
    description: "Join us for our weekly gathering featuring worship, teaching, and fellowship.",
  },
  {
    id: 2,
    title: "Midweek Bible Study",
    date: "Every Wednesday",
    time: "6:30 PM",
    description: "Dive deeper into God's Word with us during our interactive midweek study group.",
  },
  {
    id: 3,
    title: "2 Chronicle Prayer",
    date: [
      "Daily",
      "5:00 AM - 5:30 AM 6:30 AM - 7:00 AM",
      "8:30 AM - 9:00 AM 10:30 AM - 11:00 AM",
      "12:30 PM - 1:00 PM 2:30 PM - 3:00 PM",
      "5:30 PM - 6:00 PM 7:00 PM - 7:30 PM",
      "9:00 PM - 9:30 PM 11:00 PM - 11:30 PM",
    ],
    time: null,
    description: "God, increase my faith where doubt tries to grow.",
  },
   {
    id: 4,
    title: "90 Days Challenge",
    date: "January 19 - April 18",
    description: "90 days of choosing God daily. 90 days of prayer, the Word, discipline, and growth. 90 days of becoming stronger in faith and in purpose.",
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
          <Card key={event.id} className="bg-card border-border shadow-sm flex flex-col p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-xl font-semibold text-card-foreground">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-grow flex flex-col justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-2">
                  {Array.isArray(event.date) ? (
                    event.date.map((d, i) => <div key={i}>{d}</div>)
                  ) : (
                    <span>{event.date}{event.time ? ` at ${event.time}` : ''}</span>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {event.description}
                </CardDescription>
              </div>
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
