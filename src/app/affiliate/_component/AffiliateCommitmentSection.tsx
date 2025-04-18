import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { HeadingSubHeading } from "@/components/ui/HeadingSubHeading";
import CardGrid from "@/components/ui/CardGrid";
import { slotCardGridItems } from "@/data/slotCardGridData";
import Button from "@/components/ui/Button";
import React from "react";

export const AffiliateCommitmentSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      className={cn(
        "p-8 md:p-12 bg-[radial-gradient(circle_at_center,_#171717_0%,_#1F1F1F_100%)] rounded-[7px] shadow-md"
      )}>
      <HeadingSubHeading
        title="Our Commitment to a Trusted Casino Brand: Reliability and Fairness"
        description={[
          "Our identity as a trustworthy online casino makes us at ph365 great satisfaction. Online gaming calls for confidence and security, hence we are dedicated to establish the trust of every player that chooses our platform. Among the key factors building this confidence are our licenses and registrations with two of the most respected and rigorous regulatory bodies in the gaming industry: eCOGRA and Philippine Amusement and Gaming Corporation (PAGCOR).",
          "These licensing authorities set strict criteria for the operation of online casinos, therefore ensuring that we give each one of our clients a fair, honest, safe platform. Following their strict guidelines not only ensures that our games are fair and transparent but also enables us to run under reasonable limits. Players can thus rely on their money to be protected; their earnings will be paid out immediately; and our platform functions morally and honestly.",
          "Being a registered casino, we also follow specific guidelines to maintain financial accountability. For example, player money is kept separate from our running expenses so that it is always available as required. Among the various reasons players choose ph365 as their preferred online casino is this commitment to transparency and fairness.",
          "Gaming at your fingers, anywhere, anytime has cross-platform support. At ph365, we are aware that users of tools and operating systems have diverse preferences. Whether your gadget is a desktop, laptop, tablet, or smartphone, we have made sure our platform is fully compatible with a great variety of devices so you may enjoy your preferred games anywhere and whenever you want. Our website is built to perform flawlessly across all devices and offers a steady and continuous gaming experience.",
          "This cross-platform support ensures that, starting on one device and picking up exactly where you left off on another. Starting a game session on your desktop computer, you might then continue playing on your mobile phone while on the go without losing any progress. This seamless transition between devices gives users even more options and convenience so they may enjoy their gaming experience anyway they like.",
          "We have also made our platform better to enable even on mobile devices flawless gameplay. ph365 is the ideal site for players who want to play on any device since it provides outstanding graphics, fast loading times, and a responsive interface whether your operating system is Android, iOS, or another.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
      <div className="pb-4 md:pb-10"></div>
      <CardGrid
        items={slotCardGridItems}
        isLoading={loading}
        className="gap-4"
        cardClassName="hover:shadow-lg"
        limit={4} //remove this line if desired to show all the list
      />
      <div className="flex justify-center py-4 md:py-6">
        <Button
          label="Explore All"
          href="/casino"
          gradientStart="#1f2460"
          gradientEnd="#005fbe"
          shadowInset={true}
          width="150px"
          newTab={true}
        />
      </div>
      <div className="pb-4 md:pb-10"></div>
      <HeadingSubHeading
        title="Excellent Range of Games Available to Any Player"
        description={[
          "At ph365, we are quite happy to offer a wide spectrum of games to meet many various interests and preferences. Our game catalog features Microgaming, Playtech, Evolution gaming, and many more among the leading gaming developers globally. All aimed to offer an immersive, fascinating, and entertaining experience, our players thus have access to the most recent and imaginative games accessible in the company.",
          "Every player is different hence we offer a variety of game options to suit different interests and playing styles. Whether your chosen excitement is modern video slots, live dealer games, fishing games, or even sports betting or you enjoy classic casino games including blackjack, baccarat, and roulette, ph365 provides something for everyone. Our platform is always evolving with the newest games to keep the experience fresh and appealing for our consumers.",
          "Live casino games let those who value a more immersive experience engage personally with licensed dealers. Our large choice of online slots and table games will enable you to pass hours of boredom if you wish to play alone. Moreover, our particular specialty games—lottery and fishing games among others—give participants even more possibilities to win and enjoy their stay at ph365.",
        ]}
        className="bg-[radial-gradient(circle_at_center,_#1E1E1E_0%,_#171717_50%)]"
        titleClassName="text-left"
        descriptionClassName="mx-auto"
        paragraphClassName="text-left text-gray-300"
      />
    </section>
  );
};
