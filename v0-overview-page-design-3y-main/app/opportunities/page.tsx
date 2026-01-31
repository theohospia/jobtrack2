"use client"

import { TopNav } from "@/components/top-nav"

type FitLevel = "strong" | "good" | "stretch"

interface Opportunity {
  id: string
  roleTitle: string
  company: string
  location: string
  workStyle: string
  fitLevel: FitLevel
  explanation: string
  metaSignals: string[]
  estimatedTime?: string
}

const fitStyles: Record<FitLevel, { bg: string; color: string; label: string }> = {
  strong: { bg: "#ECFDF5", color: "#065F46", label: "Strong fit" },
  good: { bg: "#EFF6FF", color: "#1E40AF", label: "Good fit" },
  stretch: { bg: "#FFF7ED", color: "#9A3412", label: "Stretch" },
}

// Fit distribution rule (enforced by decision engine):
// - Max 2 "Strong fit"
// - Remaining are "Good fit"
// - Max 1 "Stretch", only if explicitly labeled
const opportunities: Opportunity[] = [
  {
    id: "1",
    roleTitle: "Product Analyst Intern",
    company: "Acme Corp",
    location: "Paris",
    workStyle: "Hybrid",
    fitLevel: "strong",
    explanation: "Your profile closely matches the role's requirements, and similar candidates received interviews here within 2 weeks.",
    metaSignals: ["3 days ago", "Low applicant volume", "Intern-friendly"],
  },
  {
    id: "2",
    roleTitle: "Data Analyst",
    company: "TechStart Inc",
    location: "London",
    workStyle: "Remote",
    fitLevel: "strong",
    explanation: "Your SQL and Python skills match 90% of the requirements. This company has hired from your university before.",
    metaSignals: ["5 days ago", "Responds quickly"],
  },
  {
    id: "3",
    roleTitle: "Business Intelligence Associate",
    company: "DataFlow",
    location: "Berlin",
    workStyle: "On-site",
    fitLevel: "good",
    explanation: "Your analytics background is relevant, and the team is actively expanding. Previous applicants with similar profiles advanced to interviews.",
    metaSignals: ["1 week ago", "Growing team"],
  },
  {
    id: "4",
    roleTitle: "Junior Product Manager",
    company: "Innovate Labs",
    location: "Amsterdam",
    workStyle: "Hybrid",
    fitLevel: "good",
    explanation: "Your project experience aligns with their product focus. They value analytical backgrounds for this role.",
    metaSignals: ["4 days ago", "Startup environment"],
  },
  {
    id: "5",
    roleTitle: "Strategy Analyst",
    company: "ConsultCo",
    location: "Paris",
    workStyle: "On-site",
    fitLevel: "stretch",
    explanation: "This role typically requires more experience, but your quantitative skills could bridge the gap. Worth trying if you have capacity.",
    metaSignals: ["2 days ago", "Competitive"],
  },
]

function FitPill({ level }: { level: FitLevel }) {
  const style = fitStyles[level]
  return (
    <span
      className="rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ background: style.bg, color: style.color }}
    >
      {style.label}
    </span>
  )
}

function OpportunityCard({ opportunity, index }: { opportunity: Opportunity; index: number }) {
  const isAltStyle = index % 2 === 1
  const bgColor = isAltStyle ? "#F0F7FF" : "#FFFFFF"
  
  return (
    <div
      className="flex w-full cursor-pointer flex-col gap-3 rounded-2xl p-5 transition-colors duration-150"
      style={{
        background: bgColor,
        border: "1px solid #E5E7EB",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#CBD5E1"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#E5E7EB"
      }}
    >
      {/* Top Row: Title + Meta Badges + Fit Signal */}
      <div className="flex items-start justify-between">
        <div>
          {/* Company Info - Top */}
          <p
            className="text-[13px] font-medium"
            style={{ color: "#64748B" }}
          >
            {opportunity.company} · {opportunity.location} · {opportunity.workStyle}
          </p>
          
          {/* Role Title - Bottom */}
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <h3
              className="text-base font-semibold"
              style={{ color: "#0F172A" }}
            >
              {opportunity.roleTitle}
            </h3>
            {opportunity.metaSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-md px-2 py-0.5 text-[11px] font-medium"
                style={{ background: "transparent", color: "#2563EB" }}
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
        <FitPill level={opportunity.fitLevel} />
      </div>

      {/* Primary CTA */}
      <div className="flex items-start">
        <button
          className="flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors rounded-lg px-3 py-2 mt-1"
          style={{
            background: "#EC9F55",
            color: "#FFFFFF",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#D88A3D"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#EC9F55"
          }}
        >
          Apply now
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div
      className="flex w-full flex-col gap-4 rounded-2xl p-5"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
    >
      <h3
        className="text-base font-semibold"
        style={{ color: "#0F172A" }}
      >
        No high-confidence opportunities right now
      </h3>
      <p
        className="text-sm"
        style={{ color: "#475569" }}
      >
        Based on your profile and recent activity, applying right now would likely have low returns.
      </p>
      <button
        className="h-9 w-fit cursor-pointer rounded-[10px] px-4 text-[13px] font-semibold transition-colors duration-150"
        style={{
          background: "#F1F5F9",
          color: "#0F172A",
          border: "1px solid #CBD5E1",
        }}
      >
        Improve my chances
      </button>
    </div>
  )
}

export default function OpportunitiesPage() {
  const showEmpty = false // Toggle for empty state demo
  const visibleOpportunities = opportunities.slice(0, 5)

  return (
    <div
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <TopNav />
      <main className="mx-auto max-w-[1120px] px-6 pt-8 pb-16">
        {/* Page Header */}
        <header className="mb-6">
          <h1
            className="text-2xl font-semibold leading-8"
            style={{ color: "#0F172A" }}
          >
            Opportunities
          </h1>
        </header>

        {/* Opportunities List */}
        <div className="mb-8 flex flex-col gap-3">
          {showEmpty ? (
            <EmptyState />
          ) : (
            visibleOpportunities.map((opportunity, index) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} index={index} />
            ))
          )}
        </div>

        {/* Load More Button */}
        {!showEmpty && (
          <div className="flex justify-center">
            <button
              className="flex items-center gap-1 cursor-pointer text-sm font-medium transition-colors rounded-lg px-3 py-2"
              style={{
                background: "#EC9F55",
                color: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#D88A3D"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#EC9F55"
              }}
            >
              Load more
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
