import { Apple, Play } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-strong rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm">Available Now</span>
          </div>

          {/* Headline */}
          <h2 className="section-heading mb-6">
            Ready to Get Started?
          </h2>
          
          <p className="section-subheading mx-auto mb-10">
            Download AutoHub today and experience the future of car care and rentals. 
            Join 50,000+ happy customers.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              className="w-full sm:w-auto bg-foreground text-background px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
            >
              <Apple className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            
            <a 
              href="#" 
              className="w-full sm:w-auto bg-foreground text-background px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
            >
              <Play className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 mt-12 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <span>⭐</span> 4.9 Rating
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span> Secure
            </div>
            <div className="flex items-center gap-2">
              <span>🆓</span> Free to Download
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
