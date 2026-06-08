import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B1020] border-t border-[#F8FAFC]/10 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-[#F8FAFC]/70 text-lg mb-6">
            Building stories, experiences, and digital communication that matter.
          </p>
          <p className="text-[#F8FAFC]/40 text-sm">
            © 2025 Dio Satria Wibisono. All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg hover:scale-110 transition-all z-40"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </Button>
      </div>
    </footer>
  );
};