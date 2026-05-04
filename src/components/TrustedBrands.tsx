import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// Brand logos
import panasonicLogo from "@/assets/brands/panasonic.png";
import panasonicbeautyLogo from "@/assets/brands/panasonic beauty.png";
import oneutamaLogo from "@/assets/brands/oneutama.png";
import aikenLogo from "@/assets/brands/aiken.png";
import amorepacificLogo from "@/assets/brands/amorepacific.png";
import barenblisLogo from "@/assets/brands/barenblis.png";
import bioessenceLogo from "@/assets/brands/bioessence.jpg";
import dazzlemeLogo from "@/assets/brands/dazzle me.png";
import drdermisLogo from "@/assets/brands/drdermis.png";
import freshLogo from "@/assets/brands/fresh.png";
import ginveraLogo from "@/assets/brands/ginvera.jpg";
import gonoodlehouseLogo from "@/assets/brands/gonoodlehouse.png";
import hadalaboLogo from "@/assets/brands/hadalabo.png";
import insidescoopLogo from "@/assets/brands/insidescoop.png";
import kaoLogo from "@/assets/brands/kao.png";
import kiehlsLogo from "@/assets/brands/kiehls.png";
import luxasiaLogo from "@/assets/brands/luxasia.png";
import mistineLogo from "@/assets/brands/mistine.png";
import mujiLogo from "@/assets/brands/muji.png";
import munchiesLogo from "@/assets/brands/munchies.png";
import myboostarsLogo from "@/assets/brands/myboostars.png";
import nappikleenLogo from "@/assets/brands/nappikleen.png";
import niveaLogo from "@/assets/brands/nivea.png";
import oppoLogo from "@/assets/brands/oppo.png";
import pavillionLogo from "@/assets/brands/pavillion.jpg";
import plantoriginLogo from "@/assets/brands/plantorigin.png";
import popolandLogo from "@/assets/brands/popoland.png";
import rohtoLogo from "@/assets/brands/rohto.png";
import shimbiLogo from "@/assets/brands/shimbi.png";
import skintificLogo from "@/assets/brands/skintific.png";
import sonyLogo from "@/assets/brands/sony.png";
import splatLogo from "@/assets/brands/splat.png";
import sunplayLogo from "@/assets/brands/sunplay.png";
import sunwayuniLogo from "@/assets/brands/sunwayuni.jpg";
import sunwayvelocityLogo from "@/assets/brands/sunwayvelocity.jpg";
import tayloruniLogo from "@/assets/brands/tayloruni.png";
import tngLogo from "@/assets/brands/tng.png";
import uniqloLogo from "@/assets/brands/uniqlo.png";
import youLogo from "@/assets/brands/you.png";







const clients = [
  { name: "panasonic", logo: panasonicLogo },
  { name: "panasonic beauty", logo: panasonicbeautyLogo },
  { name: "oneutama", logo: oneutamaLogo },
  { name: "aiken", logo: aikenLogo },
  { name: "amorepacific", logo: amorepacificLogo },
  { name: "barenblis", logo: barenblisLogo },
  { name: "bioessence", logo: bioessenceLogo },
  { name: "Tesla", logo: dazzlemeLogo },
  { name: "drdermis", logo: drdermisLogo },
  { name: "fresh", logo: freshLogo },
  { name: "ginvera", logo: ginveraLogo },
  { name: "gonoodlehouse", logo: gonoodlehouseLogo },
  { name: "hadalabo", logo: hadalaboLogo },
  { name: "insidescoop", logo: insidescoopLogo },
  { name: "kao", logo: kaoLogo },
  { name: "kiehls", logo: kiehlsLogo },
  { name: "luxasia", logo: luxasiaLogo },
  { name: "mistine", logo: mistineLogo },
  { name: "muji", logo: mujiLogo },
  { name: "munchies", logo: munchiesLogo },
  { name: "myboostars", logo: myboostarsLogo },
  { name: "nappikleen", logo: nappikleenLogo },
  { name: "nivea", logo: niveaLogo },
  { name: "oppo", logo: oppoLogo },
  { name: "pavillion", logo: pavillionLogo },
  { name: "plantorigin", logo: plantoriginLogo },
  { name: "popoland", logo: popolandLogo },
  { name: "rohto", logo: rohtoLogo },
  { name: "shimbi", logo: shimbiLogo },
  { name: "skintific", logo: skintificLogo },
  { name: "sony", logo: sonyLogo },
  { name: "splat", logo: splatLogo },
  { name: "sunplay", logo: sunplayLogo },
  { name: "sunwayuni", logo: sunwayuniLogo },
  { name: "sunwayvelocity", logo: sunwayvelocityLogo },
  { name: "tayloruni", logo: tayloruniLogo },
  { name: "tng", logo: tngLogo },
  { name: "uniqlo", logo: uniqloLogo },
  { name: "you", logo: youLogo },


];

const COLUMN_SIZE = 3;

const columns = [];
for (let i = 0; i < clients.length; i += COLUMN_SIZE) {
  columns.push(clients.slice(i, i + COLUMN_SIZE));
}

export const TrustedBrands = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Right */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Embla */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {columns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="
                  flex-[0_0_60%]
                  sm:flex-[0_0_35%]
                  md:flex-[0_0_22%]
                  lg:flex-[0_0_16%]
                  xl:flex-[0_0_14%]
                  "
                >
                  <div className="grid gap-4">
                    {column.map((client) => (
                      <div
                        key={client.name}
                        className="aspect-square flex items-center justify-center p-4 rounded-xl bg-background/60 border border-border/30 hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="max-w-[80%] max-h-[80%] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};
