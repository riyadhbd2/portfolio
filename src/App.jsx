import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Contact from "./components/Contact";
import { Education } from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Particles from "./components/Particles";

const THEME_STORAGE_KEY = "portfolio-theme";

const getPreferredTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getStoredThemePreference = () => {
  if (typeof window === "undefined") return "system";

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : "system";
};

const getInitialTheme = () => {
  const storedThemePreference = getStoredThemePreference();

  if (storedThemePreference === "system") {
    return typeof window === "undefined" ? "dark" : getPreferredTheme();
  }

  return storedThemePreference;
};

if (typeof document !== "undefined") {
  document.documentElement.dataset.theme = getInitialTheme();
}

const App = () => {
  const [themePreference, setThemePreference] = useState(
    getStoredThemePreference
  );
  const [systemTheme, setSystemTheme] = useState(getInitialTheme);

  // scrolling function
  function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

    return null;
  }

  //

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    handleThemeChange(mediaQuery);
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const activeTheme = themePreference === "system" ? systemTheme : themePreference;

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.documentElement.dataset.theme = activeTheme;
    document.documentElement.style.colorScheme = activeTheme;

    if (themePreference === "system") {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);
  }, [activeTheme, themePreference]);

  const handleThemeToggle = () => {
    setThemePreference(activeTheme === "dark" ? "light" : "dark");
  };

  const particleColors =
    activeTheme === "dark"
      ? ["#ffffff", "#c4b5fd", "#38bdf8"]
      : ["#0f172a", "#2563eb", "#fb923c"];

  return (
    <div className="min-h-screen">
        <div className="particles-container">
          <Particles
            particleColors={particleColors}
            particleCount={activeTheme === "dark" ? 200 : 160}
            particleSpread={10}
            speed={0.08}
            particleBaseSize={activeTheme === "dark" ? 100 : 76}
            moveParticlesOnHover={true}
            alphaParticles={activeTheme === "light"}
            disableRotation={false}
          />
        </div>
        <BrowserRouter>
          <ScrollToSection />
          <Navbar theme={activeTheme} onThemeToggle={handleThemeToggle} />
          <main className="relative z-10">
            <Routes>
              <Route
                path="*"
                element={
                  <>
                    <Hero />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Education />
                    <Contact />
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;
