import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { Settings, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { playPopSound } from "@/hooks/useAudio";

const PengaturanPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-2xl w-full px-4 text-center">
        <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan mb-4">
          PENGATURAN
        </h1>
        <p className="text-white/70 text-sm font-body mb-8">
          Atur preferensi aplikasi
        </p>

        <div className="bg-card/80 backdrop-blur border border-border rounded-xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-primary" />
              <span className="text-white font-body text-sm">Mode Gelap</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Aktif</span>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-white/60 font-body text-xs">
              Fitur pengaturan mode gelap/terang akan segera tersedia.
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

export default PengaturanPage;
