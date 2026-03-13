import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";
import { Toaster } from "sonner";

export const metadata = {
  title: "Bex - Graphic Designer Portfolio",
  description: "Personal portfolio of Irfan Hafizh, a graphic designer specializing in print design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Toaster position="bottom-right" richColors />
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
