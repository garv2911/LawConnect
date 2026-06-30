import {
  Scale,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-400" />

              <h2 className="text-2xl font-bold">
                LawConnect
              </h2>
            </div>

            <p className="mt-5 max-w-md text-gray-400 leading-7">
              LawConnect connects individuals and businesses with
              verified legal professionals, making legal services
              more accessible, transparent, and secure.
            </p>

            <div className="mt-6 space-y-3 text-gray-400">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@lawconnect.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                India
              </div>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

              <li className="hover:text-white cursor-pointer">
                Careers
              </li>

              <li className="hover:text-white cursor-pointer">
                Blog
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-white cursor-pointer">
                Cookie Policy
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Follow Us
            </h3>

            <div className="flex gap-4">

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} LawConnect.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
};

export default Footer;