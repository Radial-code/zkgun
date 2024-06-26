import z_logo from "../../assets/images/webp/gradient-z-image.webp";
import freedom from "../../assets/images/webp/no-red-tap.webp";
import ecoCardImg_first from "../../assets/images/webp/our-eco-img-first.webp";
import ecoCardImg_second from "../../assets/images/webp/our-eco-img-second.webp";
import ecoCardImg_third from "../../assets/images/webp/our-eco-img-third.webp";
import star from "../../assets/images/webp/star-image.webp";
import privacy from "../../assets/images/json/privacy.json";
import confidentiality from "../../assets/images/json/confidentiality.json";
import efficiency from "../../assets/images/json/efficiency.json";

export const coreValueCardList = [
  {
    title: "Privacy",
    description:
      "Our Zero-Knowledge Privacy integrations provide untraceable transactions,",
    spandescription: " so your swaps are yours alone to know.",
    lottieImage: privacy,
  },
  {
    title: "Efficiency",
    description:
      "We offer limitless swapping with minimal fees and rapid processing,",
    spandescription: " so your trades are as seamless as they are efficient.",
    lottieImage: efficiency,
  },
  {
    title: "Confidentiality",
    description:
      "Discretion is a non-negotiable. We promise no KYC, absolute control of your funds,",
    spandescription: " and ironclad encryption for every transaction you make.",
    lottieImage: confidentiality,
  },
];
export const ourEcoCardList = [
  {
    badge: "Trade without limits",
    title: "Anonymous cross-chain swap",
    description: "Trade without limits or custody.",
    spandescription:
      " Our platform offers unmatched rates and fast swaps across an expansive network of blockchains and tokens.",
    image: ecoCardImg_first,
    hidden: "md:hidden",
    rotate: "rotate-[30deg] mt-[14px] sm:mt-0 !max-w-[238px]",
    aosAnimation: "fade-left",
  },
  {
    badge: "Feature-packed",
    title: "MULTI-CHAIN WALLET",
    description:
      "Our multi-chain self-custody cryptocurrency wallet is the house in which all our integrations live. Access hundreds of dApps directly inside our proprietary wallet,",
    spandescription: " execute transactions seamlessly across dozens of blockchains, swap & transfer assets privately, track wallets on any chain and so much more.",
    image: ecoCardImg_second,
    rotate: "mt-8 sm:mt-0",
    badgeColor: "bg-neonCarrot",
    badgePosition: "-start-16",
    blurOne: "w-[775px] h-[470px] top-[50%] start-[-126%]",
    blurTwo: "w-[775px] h-[470px] top-[-126%] start-[46%]",
    aosAnimation: "fade-right",
  },
  {
    badge: "Fast swapping process",
    title: "Telegram bot",
    description: "Integrate your swapping process with Telegram",
    spandescription: " to make your trades even faster and more convenient.",
    image: ecoCardImg_third,
    rotate: "rotate-[30deg] md:rotate-[-59deg] mt-[43px] sm:mt-0",
    blurOne: "w-[1105px] h-[438px] bottom-[-110%] start-[16%]",
    blurTwo: "w-[1105px] h-[438px] top-[-116%] start-[-48%] ",
    aosAnimation: "fade-left",
  },
];

// ==== DECENTRALIZED ====

export const decentralizedList = [
  {
    title: "No red tape—just freedom",
    description:
      "We kick KYC back to the past and embrace a non-custodial approach, giving you the freedom to manage your crypto your way. At zkGUN, you're in control, with the autonomy to move your assets freely while shielded by RAILGUN-enhanced security measures.",
    imageUrl: freedom,
    order: "order-1",
    className: "pt-[125px]",
    position: "start-0 -bottom-[48px]",
    maxWidth: "sm:max-w-full max-w-[220px]",
    aosAnimation: "fade-left",
  },
  {
    imageUrl: star,
    className: "pt-[143px]",
    position: "rotate-[38deg] !end-0 -bottom-[44px]",
    title: "Privacy at our core",
    description:
      "Your privacy is our top priority. We integrate Zero-Knowledge Privacy into our app, ensuring your transactions stay anonymous and secure. With zkGUN, your crypto actions remain yours alone, transparent only to you.",
    order: "order-5 sm:order-2",
    maxWidth: "sm:max-w-full max-w-[249px]",
    aosAnimation: "fade-left",
  },
  {
    title: "Swap without limits",
    description:
      "Our platform lets you exchange any amount of crypto across multiple chains quickly and without fuss. We’re talking minutes, not hours, making sure you’re always a step ahead in the fast-moving crypto market.",
    order: "order-2",
    aosAnimation: "fade-right",
  },
  {
    title: "More than just a swap service",
    description:
      "zkGUN goes beyond basic swapping. We've integrated all our tools directly into a user-friendly wallet that prioritizes your privacy. Plus, our Telegram Bot brings swapping directly to your chat window for extra convenience.",
    order: "order-4",
    maxWidth: "sm:max-w-full max-w-[257px]",
    aosAnimation: "fade-right",
  },
  {
    subImage: z_logo,
    order: "order-3 sm:order-5",
    aosAnimation: "fade-left",
  },
];


