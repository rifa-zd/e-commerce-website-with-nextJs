import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#e8d9c8] text-[var(--foreground)] border-t border-[var(--muted)] mt-5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Brand Section */}
          <div className="lg:w-2/5">
            <Link 
              href="/" 
              className="text-5xl font-inter tracking-tight"
            >
              <span className="text-[var(--primary)]">A</span>iza
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[var(--foreground)]/80 max-w-md">
              Love our products? Be a part of our inner circle by sharing them 
              with your people and earn rewards.
            </p>

            <div className="mt-6">
              <Link 
                href="/partner-with-us" 
                className="font-medium text-sm underline underline-offset-4 hover:text-[var(--primary)] transition-colors"
              >
                Partner with us
              </Link>
            </div>
          </div>

          {/* Support & Information */}
          <div className="lg:w-1/4">
            <h3 className="font-semibold text-sm mb-4 tracking-wide">
              Support & Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shipping" className="hover:text-[var(--primary)] transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:text-[var(--primary)] transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/track-order" className="hover:text-[var(--primary)] transition-colors">Track Your Order</Link></li>
              <li><Link href="/faqs" className="hover:text-[var(--primary)] transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact Us</Link></li>
              <li><Link href="/customer-care" className="hover:text-[var(--primary)] transition-colors">Customer Care</Link></li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div className="lg:w-1/4">
            <h3 className="font-semibold text-sm mb-4 tracking-wide">
              Legal & Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[var(--primary)] transition-colors">Careers</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[var(--primary)] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Same darker tone for consistency */}
      <div className="border-t border-[var(--muted)]/50 bg-[#d9c7b0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-5 text-center text-xs text-[var(--foreground)]/75">
          © {new Date().getFullYear()} Aiza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;