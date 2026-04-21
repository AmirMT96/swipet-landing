import Image from "next/image";
import { Translations } from "@/lib/translations";

interface FooterProps {
  footerT: Translations["footer"];
}

export default function Footer({ footerT }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/logo.svg"
                alt="Swipet"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-swipet-text text-sm leading-none">
                Swipet
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{footerT.tagline}</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400">{footerT.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
