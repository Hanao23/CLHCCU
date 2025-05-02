import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Contact Us</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, feel free to reach out.
      </p>

      {/* Contact Info Section - Centered */}
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-foreground text-center">Get in Touch</h2>
        <Card className="bg-card border-border shadow-sm w-full">
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground">Email Us</h3>
                <a href="mailto:clhccu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  clhccu@gmail.com
                </a>
                <p className="text-sm text-muted-foreground/80 mt-1">For general inquiries and information.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground">Call Us</h3>
                <a href="tel:+639263629126" className="text-muted-foreground hover:text-primary transition-colors">
                  0926 362 9126
                </a>
                 <p className="text-sm text-muted-foreground/80 mt-1">Office hours: Mon-Fri, 9am - 5pm.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground">Visit Us</h3>
                <p className="text-muted-foreground">
                  2MWF+2G8,<br />
                  San Fernando, Pampanga, Philippines
                </p>
                 <p className="text-sm text-muted-foreground/80 mt-1">Join us for Sunday services at 10:00 AM.</p>
              </div>
            </div>
          </CardContent>
        </Card>

         {/* Optional: Embedded Map */}
         {/* Consider adding an embedded map here if needed */}
         {/* <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <div className="aspect-video bg-muted rounded-lg border border-border">
               Map Placeholder
            </div>
         </div> */}
      </div>
    </div>
  );
}
