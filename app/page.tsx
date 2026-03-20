import React from 'react';

export default function Home() {
  const rules = [
    "Tidak toxic berlebihan.",
    "Tidak menghina ataupun mengejek teman.",
    "Tidak melanggar peraturan server.",
    "Tidak rusuh/mengganggu di server maupun tim lain.",
    "Saling membantu, menghormati, menghargai, dan utamakan toleransi.",
    "Tidak mengirim konten berunsur pornografi, jorok, atau jomok.",
    "Sering On di server Prow [kecuali yang sudah izin]."
  ];

  const leaders = [
    {
      name: "Surya",
      role: "Ketua (Guild Master)",
      description: "Pemimpin utama Azure Moonlight. Pengatur strategi pergerakan dan pemegang keputusan tertinggi tim."
    },
    {
      name: "Sannon",
      role: "Admin (Lead Strategist)",
      description: "Pengelola internal tim. Menjaga kedisiplinan anggota dan memastikan kelancaran operasional faksi."
    }
  ];

  return (
    <div className="min-h-screen bg-[#060B19] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden">
      
      {/* Efek Cahaya Latar Belakang (Ambient Glow) */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center z-10">
        
        {/* Badge Motto */}
        <div className="group cursor-default mb-8 mt-16 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-500/30 backdrop-blur-md transition-all hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-sm font-semibold tracking-widest uppercase text-cyan-300">
            Motto: Moonlight Rise!
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-blue-600 drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
            Azure
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Moonlight
          </span>
        </h1>

        {/* Subtitle / Quote */}
        <p className="italic text-2xl md:text-3xl font-light text-slate-400 mb-10 tracking-wide">
          "The Night is Ours, The Victory is Azure."
        </p>

        {/* Lore / Description */}
        <div className="max-w-2xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-blue-500/20 to-transparent">
          <div className="bg-[#0A1022]/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/5">
            <p className="text-lg md:text-xl leading-relaxed text-slate-300">
              Tim yang menjunjung tinggi kesetiaan grup dan kecerdasan strategi. 
              Kami adalah <strong className="text-cyan-400 font-semibold">penguasa malam</strong> yang tenang namun mematikan, 
              bergerak dengan presisi digital untuk menaklukkan setiap tantangan di dunia sandbox Minecraft.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <button className="mt-12 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Join Server Prow
        </button>
      </section>

      {/* --- TEAM PROFILES SECTION --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24 pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Petinggi Tim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05] hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.2)] flex flex-col items-center text-center"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Avatar Initial */}
              <div className="relative w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-blue-900 to-[#060B19] border-2 border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 transform rotate-3 group-hover:rotate-0">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-400">
                  {leader.name.charAt(0)}
                </span>
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {leader.name}
              </h3>
              <div className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-4 px-3 py-1 bg-blue-950/50 rounded-full border border-blue-800/50">
                {leader.role}
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- RULES SECTION --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Protokol Tim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className={`group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.2)] ${index === 6 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
            >
              <div className="flex items-start gap-5">
                {/* Number Indicator */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-950 border border-blue-800/50 text-cyan-400 font-bold text-xl group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>
                {/* Rule Text */}
                <p className="pt-2 text-slate-300 text-lg group-hover:text-white transition-colors">
                  {rule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="font-bold text-white tracking-wider">AZURE MOONLIGHT</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Minecraft Faction. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}