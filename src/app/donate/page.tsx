import Image from "next/legacy/image";
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { HandHeart, Landmark, CreditCard } from 'lucide-react'; // Using HandHeart for giving

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">Support Our Ministry</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Your generosity fuels the mission of Christ The Living Hope Community Church United. Through your giving, we can continue to share the hope of Christ, serve our community, and reach the world. Thank you for partnering with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="text-center bg-card border-border shadow-sm">
          <CardHeader>
             <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
              <Landmark className="h-8 w-8" />
            </div>
            <CardTitle className="text-xl font-semibold text-card-foreground">Bank Transfer / GCash</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-6">
             You can send your tithes and offerings directly via bank transfer or GCash. Please see details below.
            </CardDescription>
             {/* Add specific instructions here */}
             <div className="text-sm text-muted-foreground text-left space-y-2">
                <p><strong>Bank:</strong> [Your Bank Name]</p>
                <p><strong>Account Name:</strong> CLHCCU</p>
                <p><strong>Account Number:</strong> [Your Account Number]</p>
                <p><strong>GCash Number:</strong> [Your GCash Number]</p>
             </div>
          </CardContent>
        </Card>

         <Card className="text-center bg-card border-border shadow-sm">
          <CardHeader>
             <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
              <HandHeart className="h-8 w-8" />
            </div>
            <CardTitle className="text-xl font-semibold text-card-foreground">In-Person Giving</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-6">
             Give during our Sunday worship services via the offering boxes or designated giving stations.
            </CardDescription>
            <Button variant="outline" className="w-full" asChild>
              <a href="/contact#visit">Service Times & Location</a>
            </Button>
          </CardContent>
        </Card>
      </div>

       <div className="text-center bg-secondary p-8 rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">Why We Give</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Giving is an act of worship and obedience, reflecting our trust in God's provision and our commitment to His work. Your contributions support our ministries, facilities, staff, and outreach efforts, enabling us to make a lasting impact for the Kingdom.
          </p>
       </div>
    </div>
  );
}
