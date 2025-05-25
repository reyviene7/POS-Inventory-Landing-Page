import { BotMessageSquare } from "lucide-react";
import { Barcode } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { UsersRound } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";
import user4 from "../assets/profile-pictures/user4.png";
import user5 from "../assets/profile-pictures/user5.png";
import user6 from "../assets/profile-pictures/user6.png";

export const navItems = [
  { label: "Features", href: "#Features" },
  { label: "About", href: "#About" },
  { label: "Testimonials", href: "#Testimonial" },
];

export const testimonials = [
  {
    user: "Ana Lopez",
    company: "Lopez Sari-Sari Store - Cagayan de Oro",
    image: user1,
    rating: 5,
    text: "Simula nang gamitin namin ang The POS Wizard, mas napadali ang pag-monitor ng paninda at benta. Wala nang manual computation! Malaking tulong lalo na sa tindahan naming maraming produkto.",
  },
  {
    user: "Mark Dela Cruz",
    company: "Dela Cruz Hardware - Iligan City",
    image: user2,
    rating: 4,
    text: "Maganda ang features ng POS Wizard. May kaunting learning curve nung una, pero mabilis lang nasanay ang staff. Real-time stock updates ang pinaka-favorite naming feature.",
  },
  {
    user: "Jenelyn Rivera",
    company: "Rivera Sari-Sari - Ozamiz City",
    image: user3,
    rating: 5,
    text: "Super user-friendly ng interface, pati yung receipt printing napaka-professional. Customers even complimented the receipts. Highly recommended lalo na sa mga nagsisimula pa lang.",
  },
  {
    user: "Carlos Mendoza",
    company: "Mendoza Sari-Sari Store - Pagadian",
    image: user4,
    rating: 5,
    text: "Noon ang hirap mag-track ng stocks, pero ngayon automated na lahat. Kahit maraming branches, centrally controlled. Salamat POS Wizard sa hassle-free POS system.",
  },
  {
    user: "Luisa Santos",
    company: "Santos Mini Mart - Iligan City",
    image: user5,
    rating: 4,
    text: "Gusto ko yung barcode scanning at multi-payment feature. Kung may concern, mabilis mag-response ang support nila. Para sa presyo at serbisyo, sulit na sulit!",
  },
  {
    user: "Jerome Alcantara",
    company: "Alcantara Auto Supply - Maranding, Lanao del Norte",
    image: user6,
    rating: 5,
    text: "Napaka-gaan gamitin ng POS Wizard kahit sa mga hindi techie. Mabilis ang transaction at accurate ang inventory reports. Recommended ko talaga sa kapwa MSMEs.",
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
  { href: "#Features", text: "Features" },
  { href: "#", text: "FAQ" },
  { href: "#", text: "System Requirements" },
];

export const communityLinks = [
  { href: "#About", text: "About" },
  { href: "https://www.facebook.com/ThePosWizard", text: "Contact" },
];
