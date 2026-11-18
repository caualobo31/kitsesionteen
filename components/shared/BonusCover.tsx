// Capa provisória dos bónus em espanhol, desenhada em CSS no estilo das capas PT
// (verde escuro + dourado). Substituir por imagens reais quando existirem.
interface Props {
  n: number;
  title: string;
}

export default function BonusCover({ n, title }: Props) {
  return (
    <div className="aspect-[4/5] w-full rounded-lg bg-[#1F3D35] shadow-sm flex flex-col items-center justify-center gap-2 p-2 text-center">
      <span className="rounded-full border border-[#C9A45C] px-2 py-0.5 font-inter text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-[#C9A45C]">
        Bono {String(n).padStart(2, "0")}
      </span>
      <span className="font-fraunces text-[10px] md:text-xs font-semibold leading-tight text-[#F3E9D2]">
        {title}
      </span>
    </div>
  );
}
