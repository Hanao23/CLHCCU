import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/contact-form'; // Assuming form component exists

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Contact Us</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        We'd love to hear from you! Whether you have questions, need prayer, or want to get involved, feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Send Us a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Get in Touch</h2>
          <Card className="bg-card border-border shadow-sm">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Email Us</h3>
                  <a href="mailto:info@clhccu.org" className="text-muted-foreground hover:text-primary transition-colors">
                    info@clhccu.org
                  </a>
                  <p className="text-sm text-muted-foreground/80 mt-1">For general inquiries and information.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Call Us</h3>
                  <a href="tel:+639123456789" className="text-muted-foreground hover:text-primary transition-colors">
                    +63 (912) 345-6789
                  </a>
                   <p className="text-sm text-muted-foreground/80 mt-1">Office hours: Mon-Fri, 9am - 5pm.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Main Street,<br />
                    Anytown, Philippines 1001
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
    </div>
  );
}
