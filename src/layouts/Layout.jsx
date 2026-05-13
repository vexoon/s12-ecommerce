import { useState } from "react";
import Footer from "../components/footer/Footer";
import Head from "../components/Head";

export function Layout({ children }) {
  // 1. State'i burada tanımlıyoruz (Merkezi kontrol)
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Head isDark={isDark} setIsDark={setIsDark} />

      <main
        style={{
          minHeight: "80vh",
          backgroundColor: isDark ? "#121212" : "#fff",
          color: isDark ? "#fff" : "#333",
          transition: "0.3s",
        }}
      >
        {children}
      </main>

      <Footer isDark={isDark} />
    </>
  );
}
