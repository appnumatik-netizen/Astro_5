import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { playPopSound } from "@/hooks/useAudio";

const TentangAplikasiPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-2xl w-full px-4 text-center">
        <Info className="w-12 h-12 text-accent mx-auto mb-4" />
        <h1 className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan mb-4">
          TENTANG APLIKASI
        </h1>

        <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-8 space-y-4 text-left">
          <div>
            <p className="text-primary font-display text-xs mb-1">NAMA APLIKASI</p>
            <p className="text-white font-body text-sm">NUMATIK</p>
            <p className="text-white/60 font-body text-xs mt-1">
              Numerasi Aktif dengan Teknologi Informasi dan Komunikasi
            </p>
          </div>

          <div>
            <p className="text-primary font-display text-xs mb-1">VERSI</p>
            <p className="text-white font-body text-sm">1.0.0</p>
          </div>

          <div>
            <p className="text-primary font-display text-xs mb-1">DESKRIPSI</p>
            <p className="text-white/80 font-body text-sm leading-relaxed">
              NUMATIK adalah aplikasi multimedia pembelajaran interaktif matematika SMP yang dirancang
              untuk membantu siswa memahami konsep matematika dengan cara yang menyenangkan dan
              interaktif melalui pendekatan berbasis teknologi.
            </p>
          </div>

          <div>
            <p className="text-primary font-display text-xs mb-1">PENGEMBANG</p>
            <p className="text-white font-body text-sm">Irawan Sutiawan, M.Pd</p>
            <p className="text-white/60 font-body text-xs mt-1">SMPN 28 Bandung</p>
          </div>

          <div>
            <p className="text-primary font-display text-xs mb-1">KONTAK</p>
            <p className="text-accent font-body text-sm">numatik.app@gmail.com</p>
          </div>

          <div className="border-t border-border pt-4 mt-4">
            <p className="text-white/50 font-body text-xs text-center">
              © 2024 NUMATIK. All rights reserved.
            </p>
          </div>
        </div>

        <button
          onClick={() => { playPopSound(); navigate("/menu"); }}
          className="mt-8 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
        >
          ← Kembali ke Menu
        </button>
      </div>
    </div>
  );
};

export default TentangAplikasiPage;
