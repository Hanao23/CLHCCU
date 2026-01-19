
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function TeamsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Our Teams</h1>
      <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Serving is at the heart of our church community. Our ministry teams provide opportunities for everyone to use their unique gifts and talents to bless others and build up the body of Christ. Find a place where you can connect and make a difference!
      </p>

      <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">Our Pastors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Card Example */}
        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/pastor1/800/500"
            alt="Ps. Jerome Tupe"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
             data-ai-hint="headshot portrait pastor"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Jerome Tupe</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
             Sta. Ana
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team2/800/500"
            alt="Ps. Lounel lugtu"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="children playing learning"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Lounel lugtu</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
            Angeles
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team3/800/500"
            alt="Ps. Gloria C. David"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="teenagers group discussion"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Gloria C. David</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
            Manila
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team4/800/500"
            alt="Ps. Je Anne B. Santos"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
             data-ai-hint="welcoming handshake smile"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Je Anne B. Santos</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
              Creating NV15 & Paombong
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team5/800/500"
            alt="Ps. Crisanto Tupe Jr."
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="community service helping hands"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Crisanto Tupe Jr.</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
            Mexico
            </CardDescription>
          </CardContent>
        </Card>

         <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team6/800/500"
            alt="Ps. Andrew Vitug"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="sound board computer screen"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Andrew Vitug</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
            Anaheim, USA
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team7/800/500"
            alt="Ps. Michelle L. Serrano"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="praying hands bible"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Michelle L. Serrano</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
            NV 14
            </CardDescription>
             <p className="text-sm text-foreground font-medium">Contact: prayer@clhccu.org</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team8/800/500"
            alt="Ps. Resmilito Ramos"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="men talking group"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Resmilito Ramos</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
            Turu Arayat
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-card border-border shadow-sm overflow-hidden">
          <Image
            src="https://picsum.photos/seed/team9/800/500"
            alt="Ps. Ericson Dela Cruz"
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            data-ai-hint="women talking group"
          />
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-card-foreground">Ps. Ericson Dela Cruz</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground mb-4">
            Navotas
            </CardDescription>
             <p className="text-sm text-foreground font-medium">Contact: women@clhccu.org</p>
          </CardContent>
        </Card>
      </div>

        <div className="my-12 border-t border-border"></div>

        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">PG 12 Men</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team10/800/500"
                alt="Carl Jason Coronel"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="worship music instruments"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Carl Jason Coronel</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team11/800/500"
                alt="Dean Ayson"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="children playing learning"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Dean Ayson</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team12/800/500"
                alt="Bro. Gene Gonzales"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="teenagers group discussion"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Bro. Gene Gonzales</CardTitle>
            </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team13/800/500"
                alt="Gregorio Cabrera II"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="worship music instruments"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Gregorio Cabrera II</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team14/800/500"
                alt="Bro. James Erlano"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="children playing learning"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Bro. James Erlano)</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team15/800/500"
                alt="Jim Enrico Balboa"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="teenagers group discussion"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Jim Enrico Balboa</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team16/800/500"
                alt="Jethro Ocampo"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="worship music instruments"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Jethro Ocampo</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team17/800/500"
                alt="Kyle Romero"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="children playing learning"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Kyle Romero</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team18/800/500"
                alt="Nomer Magpayo"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="teenagers group discussion"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Nomer Magpayo</CardTitle>
            </CardHeader>
            </Card>

             <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team19/800/500"
                alt="Ohlan Jefferson Fernando"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="worship music instruments"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Ohlan Jefferson Fernando</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team20/800/500"
                alt="Robinson Canlas"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="children playing learning"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Robinson Canlas</CardTitle>
            </CardHeader>
            </Card>

            <Card className="bg-card border-border shadow-sm overflow-hidden">
            <Image
                src="https://picsum.photos/seed/team21/800/500"
                alt="Robinson Canlas"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                data-ai-hint="teenagers group discussion"
            />
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">Robinson Canlas</CardTitle>
            </CardHeader>
            </Card>
        </div>

        <div className="my-12 border-t border-border"></div>

        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">PG 12 Women</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team22/800/500"
                    alt="Woman 1"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 1</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team23/800/500"
                    alt="Woman 2"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 2</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team24/800/500"
                    alt="Woman 3"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 3</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team25/800/500"
                    alt="Woman 4"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 4</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team26/800/500"
                    alt="Woman 5"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 5</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team27/800/500"
                    alt="Woman 6"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 6</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team28/800/500"
                    alt="Woman 7"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 7</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team29/800/500"
                    alt="Woman 8"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 8</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team30/800/500"
                    alt="Woman 9"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 9</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team31/800/500"
                    alt="Woman 10"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 10</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team32/800/500"
                    alt="Woman 11"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 11</CardTitle>
                </CardHeader>
            </Card>
            <Card className="bg-card border-border shadow-sm overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/team33/800/500"
                    alt="Woman 12"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    data-ai-hint="headshot portrait woman"
                />
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground">Woman 12</CardTitle>
                </CardHeader>
            </Card>
        </div>


       <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Interested in Joining a Team?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We'd love to help you find the perfect place to serve. Contact the team leader directly or reach out to our main office.
        </p>
        <a href="/contact" className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-primary/90 focus:shadow-outline focus:outline-none">
          Get Involved
        </a>
      </div>
    </div>
  );
}
