import { BotMessageSquare } from "lucide-react";
import { Barcode } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { UsersRound } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#Features" },
  { label: "About", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "The POS Wizard transformed our business operations. Their POS system is fast, reliable, and incredibly user-friendly.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "We couldn't be happier with the POS system provided by The POS Wizard. Their team took the time to understand our needs and delivered a seamless, efficient solution that streamlined our sales and inventory.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Their system helped us automate key processes, improve accuracy, and enhance customer service. Highly recommended for any business looking for a top-notch POS solution!"  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "The POS Wizard team went above and beyond to customize a solution that perfectly fit our retail operations.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "I am amazed by the level of professionalism and dedication shown by The POS Wizard team. They delivered a POS system that exceeded our expectations and helped us improve our business operations significantly.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "User-Friendly Interface",
    description:
      "Our intuitive POS system ensures seamless transactions, allowing your team to serve customers quickly and efficiently.",
  },
  {
    icon: <Fingerprint />,
    text: "Flexible Payment Options:",
    description:
      "Accept cash, cards, and mobile payments securely, giving customers the freedom to pay their way.",
  },
  {
    icon: <UsersRound />,
    text: "Customer Display",
    description:
      "Keep customers engaged with a professional display that enhances their checkout experience.",
  },
  {
    icon: <ShieldHalf />,
    text: "Secure Cash Drawer",
    description:
      "Protect your cash transactions with a durable and easy-to-use cash drawer.",
  },
  {
    icon: <Barcode />,
    text: "Barcode Scanning",
    description:
      "Speed up checkout and minimize errors with integrated barcode scanning.",
  },
  {
    icon: <ReceiptText />,
    text: "Receipt Printing",
    description:
      "Generate high-quality receipts with ease using our built-in printing system.",
  },
];

export const checklistItems = [
  {
    title: "Real-Time Stock Tracking",
    description:
      "Automatically update inventory levels with every sale, ensuring you never run out of essential items.",
  },
  {
    title: "Product Management",
    description:
      "Organize and categorize products efficiently for streamlined operations.",
  },
  {
    title: "Supplier Integration",
    description:
      "Easily manage suppliers and purchase orders to maintain stock availability.",
  },
  {
    title: "Sales & Inventory Reports",
    description:
      "Access detailed reports to monitor sales trends, track inventory movement, and make data-driven decisions.",
  },
  {
    title: "Multi-Location Support",
    description:
      "Manage inventory across multiple branches with centralized control.",
  },
];

export const resourcesLinks = [
  { text: "Our Email: theposwizard@gmail.com" },
  { text: "Our Phone: (+63)955 511 4432" },
  { text: "Tambacan, Iligan City, Lanao del Norte 9200" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "FAQ" },
  { href: "#", text: "System Requirements" },
];

export const communityLinks = [
  { href: "#", text: "About us" },
  { href: "https://www.facebook.com/ThePosWizard", text: "Contact" },
];
