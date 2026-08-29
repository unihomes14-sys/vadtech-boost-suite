import barber from "@/assets/project-barber.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import realestate from "@/assets/project-realestate.jpg";
import auto from "@/assets/project-auto.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  built: string;
  features: string[];
  demo: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "barber",
    title: "Precision Cuts Barbershop",
    category: "Barber",
    image: barber,
    built: "Booking-first website with automated appointment reminders and a WhatsApp enquiry flow.",
    features: ["Online booking", "SMS/WhatsApp reminders", "Service & price list", "Google Maps + reviews"],
    demo: "#",
  },
  {
    slug: "restaurant",
    title: "Nova Kitchen",
    category: "Restaurant",
    image: restaurant,
    built: "Menu-driven restaurant site with table reservations and an AI chatbot for common questions.",
    features: ["Digital menu", "Table reservations", "AI chatbot", "Order-by-WhatsApp"],
    demo: "#",
  },
  {
    slug: "real-estate",
    title: "Skyline Properties",
    category: "Real Estate",
    image: realestate,
    built: "Property listing platform with search filters and automated lead qualification.",
    features: ["Listing search & filters", "Viewing requests", "Lead capture automation", "Agent dashboard"],
    demo: "#",
  },
  {
    slug: "automotive",
    title: "AutoLine Motors",
    category: "Automotive",
    image: auto,
    built: "Vehicle inventory website with finance enquiry forms and test-drive booking automation.",
    features: ["Inventory catalogue", "Test-drive booking", "Finance enquiry flow", "WhatsApp follow-ups"],
    demo: "#",
  },
];

export const PROJECT_CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
