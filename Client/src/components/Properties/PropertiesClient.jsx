"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import PropertiesFilterBar from "@/components/Properties/PropertiesFilterBar";
import PropertiesGrid from "@/components/Properties/PropertiesGrid";
import PropertiesHero from "@/components/Properties/PropertiesHero";
import PropertiesMobileFilters from "@/components/Properties/PropertiesMobileFilters";
import PropertiesLoadMore from "@/components/Properties/PropertiesLoadMore";
import PropertiesFinalCta from "@/components/Properties/PropertiesFinalCta";

export default function PropertiesClient() {
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);
  const [bhk, setBhk] = useState([]);
  const [budget, setBudget] = useState("");
  const [availability, setAvailability] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [draft, setDraft] = useState({ bhk: [], budget: "", availability: [] });
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const qpBhk = searchParams.get("bhk");
    const qpStatus = searchParams.get("status");
    const qpBudget = searchParams.get("budget");

    if (qpBhk && ["1", "2", "3"].includes(qpBhk)) setBhk([qpBhk]);
    if (qpStatus && ["available", "limited", "sold_out"].includes(qpStatus)) setAvailability([qpStatus]);
    if (qpBudget) setBudget(qpBudget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const budgetOptions = [
    { value: "", label: "Any Budget" },
    { value: "20-40", label: "₹20L – ₹40L", min: 20, max: 40 },
    { value: "40-60", label: "₹40L – ₹60L", min: 40, max: 60 },
    { value: "60-80", label: "₹60L – ₹80L", min: 60, max: 80 },
    { value: "80+", label: "₹80L+", min: 80, max: Number.POSITIVE_INFINITY },
  ];

  const properties = useMemo(
    () => [
      { id: "2a", title: "2 BHK", bhk: "2", size: "615 – 930 sq.ft", price: "₹4,200/sq.ft", budgetL: 55, status: "available", image: "/assets/images/plans2.jpg", recommended: true },
      { id: "2b", title: "2 BHK", bhk: "2", size: "680 – 980 sq.ft", price: "₹4,200/sq.ft", budgetL: 62, status: "limited", image: "/assets/images/property1.jpg" },
      { id: "2c", title: "2 BHK", bhk: "2", size: "700 – 1,010 sq.ft", price: "₹4,200/sq.ft", budgetL: 65, status: "available", image: "/assets/images/building-image-5.jpg" },
      { id: "3a", title: "3 BHK", bhk: "3", size: "988 – 1149 sq.ft", price: "₹4,200/sq.ft", budgetL: 85, status: "limited", image: "/assets/images/property4.jpg" },
      { id: "3b", title: "3 BHK", bhk: "3", size: "1,020 – 1,280 sq.ft", price: "₹4,200/sq.ft", budgetL: 92, status: "available", image: "/assets/images/building-image-8.jpg" },
      { id: "3c", title: "3 BHK", bhk: "3", size: "1,080 – 1,320 sq.ft", price: "₹4,200/sq.ft", budgetL: 98, status: "available", image: "/assets/images/building-image-6.jpg" },
      { id: "1a", title: "1 BHK", bhk: "1", size: "—", price: "₹4,200/sq.ft", budgetL: 35, status: "sold_out", image: "/assets/images/plans1.jpg" },
      { id: "2d", title: "2 BHK", bhk: "2", size: "620 – 900 sq.ft", price: "₹4,200/sq.ft", budgetL: 52, status: "available", image: "/assets/images/building-image-3.jpg" },
      { id: "3d", title: "3 BHK", bhk: "3", size: "990 – 1,260 sq.ft", price: "₹4,200/sq.ft", budgetL: 88, status: "limited", image: "/assets/images/building-image-7.jpg" },
      { id: "2e", title: "2 BHK", bhk: "2", size: "640 – 920 sq.ft", price: "₹4,200/sq.ft", budgetL: 58, status: "available", image: "/assets/images/building-image-2.jpg" },
      { id: "3e", title: "3 BHK", bhk: "3", size: "1,000 – 1,240 sq.ft", price: "₹4,200/sq.ft", budgetL: 83, status: "available", image: "/assets/images/building-image-9.jpg" },
      { id: "2f", title: "2 BHK", bhk: "2", size: "610 – 880 sq.ft", price: "₹4,200/sq.ft", budgetL: 49, status: "limited", image: "/assets/images/building-image-4.jpg" },
    ],
    [],
  );

  const selectedBudget = useMemo(
    () => budgetOptions.find((b) => b.value === budget) || budgetOptions[0],
    [budget],
  );

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (bhk.length > 0 && !bhk.includes(p.bhk)) return false;
      if (availability.length > 0 && !availability.includes(p.status)) return false;
      if (selectedBudget.value) {
        if (p.budgetL < selectedBudget.min || p.budgetL > selectedBudget.max) return false;
      }
      return true;
    });
  }, [properties, bhk, availability, selectedBudget]);

  useEffect(() => {
    setVisibleCount(6);
    setIsLoadingMore(false);
  }, [bhk, budget, availability]);

  const visibleProperties = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const canLoadMore = visibleCount < filtered.length;

  const selectedTags = useMemo(() => {
    const tags = [];
    bhk.forEach((b) =>
      tags.push({
        key: `bhk:${b}`,
        label: `${b} BHK`,
        onRemove: () => setBhk((prev) => prev.filter((x) => x !== b)),
      }),
    );
    availability.forEach((s) => {
      const label = s === "available" ? "Available" : s === "limited" ? "Limited" : "Sold Out";
      tags.push({
        key: `status:${s}`,
        label,
        onRemove: () => setAvailability((prev) => prev.filter((x) => x !== s)),
      });
    });
    if (budget) {
      tags.push({
        key: `budget:${budget}`,
        label: selectedBudget.label,
        onRemove: () => setBudget(""),
      });
    }
    return tags;
  }, [bhk, availability, budget, selectedBudget]);

  function toggleBhk(value) {
    setBhk((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));
  }

  function toggleAvailability(value) {
    setAvailability((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value],
    );
  }

  function resetFilters() {
    setBhk([]);
    setBudget("");
    setAvailability([]);
  }

  function openFilters() {
    setDraft({ bhk: [...bhk], budget, availability: [...availability] });
    setIsFilterOpen(true);
  }

  function applyDraft() {
    setBhk(draft.bhk);
    setBudget(draft.budget);
    setAvailability(draft.availability);
    setIsFilterOpen(false);
  }

  function resetDraft() {
    setDraft({ bhk: [], budget: "", availability: [] });
  }

  return (
    <>
      <PropertiesHero mounted={mounted} />

      <PropertiesFilterBar
        bhk={bhk}
        budget={budget}
        availability={availability}
        budgetOptions={budgetOptions}
        filteredCount={filtered.length}
        selectedTags={selectedTags}
        onToggleBhk={toggleBhk}
        onToggleAvailability={toggleAvailability}
        onBudgetChange={setBudget}
        onReset={resetFilters}
        onOpenMobile={openFilters}
      />

      <div id="listings" className="scroll-mt-[160px]" />

      <PropertiesGrid properties={visibleProperties} />

      <PropertiesLoadMore
        shownCount={visibleProperties.length}
        totalCount={filtered.length}
        isLoading={isLoadingMore}
        canLoadMore={canLoadMore}
        onLoadMore={() => {
          if (!canLoadMore) return;
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 6);
            setIsLoadingMore(false);
          }, 300);
        }}
      />

      <PropertiesFinalCta />

      <PropertiesMobileFilters
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        draft={draft}
        setDraft={setDraft}
        budgetOptions={budgetOptions}
        onResetDraft={resetDraft}
        onApply={applyDraft}
      />
    </>
  );
}
