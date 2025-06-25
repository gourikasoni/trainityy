import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DECORATION */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8 relative">
              <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] space-y-4">
                  <div className="text-white drop-shadow-[0_0_1px_rgba(255,255,255,0.08)]">
                    Smarter Workouts
                  </div>

                  <div
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(13deg, #A855F8 1%, #8B45BE 5%, #5B3D8F 80%, #3C2A63 75%, #8B45BE 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter:
                        "drop-shadow(0 6px 60px #FF4ECF), drop-shadow(0 0 12px #FF6EC7)",
                    }}
                  >
                    Sharper Results
                  </div>

                  <div className="text-white drop-shadow-[0_0_1px_rgba(255,255,255,0.08)]">
                    AI That Gets You
                  </div>

                  <div
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(13deg, #A855F8 1%, #8B45BE 5%, #5B3D8F 80%, #3C2A63 75%, #8B45BE 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter:
                        "drop-shadow(0 6px 60px #FF4ECF), drop-shadow(0 0 12px #FF6EC7)",
                    }}
                  >
                    Trainityy Style
                  </div>
                </h1>

                {/* SEPARATOR LINE */}
                <div className="h-px w-full bg-white opacity-60"></div>

                <p
                  className="text-xl bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(130deg, #FFFFFF, #E9D8FD, #F5D0FE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Talk to our AI assistant and get personalized diet plans and
                  workout routines designed just for you
                </p>

                {/* STATS */}
                <div className="flex items-center justify-center gap-10 py-6 font-mono">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl text-primary">500+</div>
                    <div className="text-xs uppercase tracking-wider">
                      Active Users
                    </div>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl text-primary">3min</div>
                    <div className="text-xs uppercase tracking-wider">
                      Generation
                    </div>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl text-primary">100%</div>
                    <div className="text-xs uppercase tracking-wider">
                      Personalized
                    </div>
                  </div>
                </div>

                {/* BUTTON */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    size="lg"
                    asChild
                    className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                  >
                    <Link href={"/generate-program"} className="flex items-center font-mono"
                    >
                      BUILD YOUR PROGRAM
                      <ArrowRightIcon className="ml-2 size-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
