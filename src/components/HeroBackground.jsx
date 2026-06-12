export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#060612]">
      {/* Orb 1 — signal-red, top-right */}
      <div
        className="hero-bg-orb"
        style={{
          width: '75vw', height: '75vw',
          background: 'radial-gradient(circle, rgba(255,59,59,0.52) 0%, rgba(200,20,20,0.18) 45%, transparent 70%)',
          top: '-25%', right: '-18%',
          animation: 'floatOrb1 17s ease-in-out infinite',
        }}
      />
      {/* Orb 2 — deep violet, center-left */}
      <div
        className="hero-bg-orb"
        style={{
          width: '65vw', height: '65vw',
          background: 'radial-gradient(circle, rgba(110,35,220,0.48) 0%, rgba(75,15,175,0.18) 45%, transparent 70%)',
          top: '15%', left: '-22%',
          animation: 'floatOrb2 21s ease-in-out infinite',
          animationDelay: '-7s',
        }}
      />
      {/* Orb 3 — electric blue, bottom-right */}
      <div
        className="hero-bg-orb"
        style={{
          width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(25,85,230,0.32) 0%, rgba(15,55,200,0.12) 45%, transparent 70%)',
          bottom: '-15%', right: '10%',
          animation: 'floatOrb3 25s ease-in-out infinite',
          animationDelay: '-14s',
        }}
      />
      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      {/* Focus vignette — keeps left side darker so text pops */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 65% 40%, transparent 20%, rgba(6,6,18,0.65) 80%)',
        }}
      />
    </div>
  );
}
