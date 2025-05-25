import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left">
            Contact Us
          </h3>
          <ul className="space-y-2 text-center sm:text-left">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white text-sm sm:text-base"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left">
            Services
          </h3>
          <ul className="space-y-2 text-center sm:text-left">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white text-sm sm:text-base"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 text-center sm:text-left">
            Company
          </h3>
          <ul className="space-y-2 text-center sm:text-left">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white text-sm sm:text-base"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
