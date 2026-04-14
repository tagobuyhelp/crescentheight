"use client";

import { useEffect, useState } from "react";

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Ordered from bottom to top for correct detection
      const sections = ["lead", "testimonials", "invest", "homes", "amenities", "about"];
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          current = section;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "", label: "Home", icon: "home", href: "/" },
    { id: "about", label: "Our Story", icon: "menu_book", href: "/our-story" },
    { id: "amenities", label: "Amenities", icon: "deck", href: "/#amenities" },
    { id: "homes", label: "Properties", icon: "apartment", href: "/#homes" },
    { id: "invest", label: "Invest", icon: "trending_up", href: "/#invest" },
    { id: "testimonials", label: "Reviews", icon: "forum", href: "/#testimonials" },
    { id: "lead", label: "Enquire", icon: "support_agent", href: "/#lead" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-border bg-white/95 pt-2 backdrop-blur shadow-[0_-5px_15px_rgba(0,0,0,0.05)] pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
      <nav className="flex items-center justify-start gap-4 overflow-x-auto overscroll-x-contain px-4 pb-1 md:justify-center md:gap-8 lg:gap-12 scrollbar-hide">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.label}
              href={item.href}
              className={[
                "flex flex-col items-center justify-center gap-1 p-2 transition flex-none min-w-[72px]",
                isActive ? "text-primary" : "text-neutral-lightText hover:text-neutral-darkText",
              ].join(" ")}
            >
              <span
                className={[
                  "material-symbols-outlined text-[24px] leading-none transition-transform",
                  isActive ? "fill-icon scale-110" : "",
                ].join(" ")}
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
