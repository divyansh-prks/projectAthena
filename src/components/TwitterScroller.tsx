import React, { useEffect } from 'react';

const twitterEmbeds = [
  'https://twitter.com/icantcodefyi/status/1924100852039532878',
  'https://twitter.com/Umangag69/status/1923788737848410613',
  'https://twitter.com/NikhilEth/status/1924123310394405027',
  'https://twitter.com/R3DD404/status/1924094612358201750',
  'https://twitter.com/mani_yadla_/status/1924026396726411417',
  'https://twitter.com/Aishwarya_1007/status/1923804933301862899',
  'https://twitter.com/priyanshudotsol/status/1923903274249330905',
  'https://twitter.com/Too_harshk/status/1924084901017706925',
  'https://twitter.com/cryptoswami69/status/1924845385681719630',
  'https://twitter.com/mishalturkane/status/1923805481883369857',
  'https://twitter.com/imchiragkumar/status/1924064150306865477',
  'https://twitter.com/isonikrish/status/1923996694682730733',
  'https://twitter.com/kshitijHash/status/1924852214989775155',
  'https://twitter.com/RevathyMR/status/1924855628180422860',
  'https://twitter.com/prasadtwts/status/1924862023323783540',
  'https://twitter.com/pranayraj069/status/1923768583030702377'
];

const EmbedItem = ({ url }: { url: string }) => (
  <div className="min-w-[320px] h-[300px] rounded-xl overflow-hidden bg-white shadow">
    <blockquote className="twitter-tweet">
      <a href={url}></a>
    </blockquote>
  </div>
);

const TwitterScroller: React.FC = () => {
  useEffect(() => {
    // Load Twitter's embed script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    
    <section className="bg-black/30 py-16 overflow-hidden relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            We Only <span className="text-blue-400">Build ! Build ! Build !</span> 
          </h2>
      <div className="space-y-10">
        {/* Row 1 - left to right */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left gap-6 whitespace-nowrap">
            {[...twitterEmbeds, ...twitterEmbeds].map((url, i) => (
              <EmbedItem key={`row1-${i}`} url={url} />
            ))}
          </div>
        </div>

        {/* Row 2 - right to left */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-right gap-6 whitespace-nowrap">
            {[...twitterEmbeds, ...twitterEmbeds].map((url, i) => (
              <EmbedItem key={`row2-${i}`} url={url} />
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TwitterScroller;