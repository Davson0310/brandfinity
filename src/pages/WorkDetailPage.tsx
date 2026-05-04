import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, ArrowLeft, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { campaigns } from "@/data/campagin";

const getInstagramEmbedUrl = (url: string) => {
  const reelMatch = url.match(/instagram\.com\/reel\/([^/?]+)/i);
  if (!reelMatch) return url;
  return `https://www.instagram.com/reel/${reelMatch[1]}/embed/`;
};


const WorkDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const campaign = campaigns.find(c => c.id === id);
  const isVertical = campaign?.imageOrientation === "vertical";
  if (!campaign) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-36">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Campaign Not Found</h1>
            <p className="text-muted-foreground mb-8">The campaign you're looking for doesn't exist.</p>
            <Button variant="gradient" onClick={() => navigate("/works")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Works
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

   return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36">
        {/* Hero Image */}
        <section
        className={`relative w-full overflow-hidden ${
          isVertical
            ? "h-[100vh] md:h-[130vh]"   // Taller for vertical
            : "h-[70vh] md:h-[95vh]"  // Taller for horizontal
        }`}
      >
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/works")}
              className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Works
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-6 right-6">
            <span className="px-4 py-2 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full">
              {campaign.client}
            </span>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-background/80 to-background">
          {/* Soft full background wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent" />

          {/* Large gradient blobs */}
          <div className="absolute -top-40 -right-40 w-[900px] h-[900px] bg-gradient-blue/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-pink/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

          <div className="relative z-10">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Title */}
            <div className="bg-card rounded-3xl border border-border/50 shadow-xl p-8 md:p-12 mb-12">
              <p className="text-muted-foreground text-sm font-medium mb-3 uppercase tracking-wider">
                {campaign.client} • {campaign.year}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">{campaign.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                {campaign.description}
              </p>

              {/* Objective */}
                {campaign.objective && (
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Objective</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {campaign.objective.map((obj, idx) => (
                        <li key={idx}>{obj}</li>
                    ))}
                    </ul>
                </div>
                )}

              {/* Key Activities */}
                {campaign.keyActivities && (
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Key Activities</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                    {campaign.keyActivities}
                    </p>
                </div>
                )}


              {/* Achievement */}
              {campaign.achievement && (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Achievement</h2>
                  <p className="text-muted-foreground">{campaign.achievement}</p>
                </div>
              )}

              {/* Impact */}
              {campaign.impact && (
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Impact</h2>
                  <p className="text-muted-foreground">{campaign.impact}</p>
                </div>
              )}
            </div>
           </div> {/* End text container */}

            {campaign.photo && (
                <div className="mt-16 w-full max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
                    Campaign <span className="gradient-text">Photos</span>
                    </h2>

                    <PhotoCarousel3 photos={campaign.photo} />
                </div>
            )}

            {/* Campaign Vimeo Videos - Full Width */}
            {campaign.vimeo && (
            <div className="mt-16 w-full px-4 md:px-12 lg:px-24">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
                Campaign <span className="gradient-text">Videos</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-10 mt-12">
                {campaign.vimeo.map((vid, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-2xl bg-black
                      ${
                        vid.orientation === "vertical"
                          ? "aspect-[9/16] w-[360px]"
                          : "aspect-video w-full max-w-5xl"
                      }
                    `}
                  >
                    <iframe
                      src={`https://player.vimeo.com/video/${vid.src}?title=0&byline=0&portrait=0`}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={`Campaign video ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

            {campaign.video && (
            <div className="mt-16 w-full px-4 md:px-12 lg:px-24">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
                Instagram <span className="gradient-text">Reels</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-10 mt-12">
                {campaign.video.map((videoUrl, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-2xl bg-black aspect-[9/16] w-[360px]"
                  >
                    <iframe
                      src={getInstagramEmbedUrl(videoUrl)}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={`Instagram reel ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

            <div className="container mx-auto px-4 max-w-4xl mt-16">
                {campaign.youtube && (
                    <div className="aspect-video col-span-full rounded-2xl overflow-hidden bg-black">
                        <iframe
                        src={`https://www.youtube.com/embed/${campaign.youtube}`}
                        className="w-full h-full"
                        allowFullScreen
                        />
                    </div>
                )}


                {/* CTA */}
                <div className="bg-muted/50 rounded-3xl border border-border/50 p-8 md:p-12 text-center mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Create Your Success Story?
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Let's discuss how we can help your brand achieve similar results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                        <Button variant="gradient" size="xl">
                        Start Your Campaign
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                    <Button variant="outline" size="xl" onClick={() => navigate("/works")}>
                        View More Works
                    </Button>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const PhotoCarousel3 = ({ photos }: { photos: string[] }) => {
  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1))
  }

  const next = () => {
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1))
  }

  const getPhoto = (offset: number) => {
    const i = (index + offset + photos.length) % photos.length
    return photos[i]
  }

  return (
    <div className="relative flex justify-center items-center gap-12 mt-12">

      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-0 z-20 bg-background/80 hover:bg-background p-2 rounded-full shadow"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Left Small */}
      <div className="w-[300px] aspect-[3/4] overflow-hidden rounded-xl scale-90 bg-black">
        <img
          src={getPhoto(-1)}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Big */}
      <div className="w-[420px] aspect-[3/4] overflow-hidden rounded-2xl shadow-xl bg-black z-10">
        <img
          src={getPhoto(0)}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Small */}
      <div className="w-[300px] aspect-[3/4] overflow-hidden rounded-xl scale-90 bg-black">
        <img
          src={getPhoto(1)}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-0 z-20 bg-background/80 hover:bg-background p-2 rounded-full shadow"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}


export default WorkDetailPage;