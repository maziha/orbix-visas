import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/orbix-logo-transparent.png";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container-px mx-auto max-w-7xl py-10 sm:py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        <div>
          <img src={logo} alt="Orbix Overseas Careers" className="h-10 sm:h-12 lg:h-14 w-auto mb-4 object-contain" />
          <p className="text-white/70 text-xs sm:text-sm mb-5">Your trusted partner for global opportunities.</p>
          <div className="flex gap-2 sm:gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/20 inline-flex items-center justify-center hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--navy)] transition-all">
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--gold)]">Study Abroad</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
            {[
              ["Canada","/study-abroad/canada"],
              ["Australia","/study-abroad/australia"],
              ["UK","/study-abroad/uk"],
              ["New Zealand","/study-abroad/new-zealand"],
              ["Germany","/study-abroad/germany"],
              ["France","/study-abroad/france"],
              ["Poland","/study-abroad/poland"],
            ].map(([n,t]) => (
              <li key={n}><Link to={t} className="hover:text-[var(--gold)]">{n}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--gold)]">Services</h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
            {["Spouse Visa","Parent Visa","Job Seekers Visa","Visit Visa","IELTS Booking","Loan Assistance"].map(s => (
              <li key={s}><Link to="/services" className="hover:text-[var(--gold)]">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base sm:text-lg mb-3 sm:mb-4 text-[var(--gold)]">Contact</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--gold)]" /> +91 8592026134</li>
            <li className="flex items-start gap-2"><Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--gold)]" /> <span className="break-all">orbixoverseascareers@gmail.com</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0 text-[var(--gold)]" /> Head Office, Kochi, Kerala, India</li>
            <li><Link to="/contact" className="text-[var(--gold)] hover:underline">View All Offices →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 text-[11px] sm:text-xs text-white/60 text-center md:text-left">
          <span>© {new Date().getFullYear()} Orbix Overseas Careers. All rights reserved.</span>
          <div className="flex gap-4 sm:gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}