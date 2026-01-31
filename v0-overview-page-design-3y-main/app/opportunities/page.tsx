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
  fitStrength: number
  explanation: string
  metaSignals: string[]
  estimatedTime?: string
  estimatedSalary?: string
}

const fitStyles: Record<FitLevel, { bg: string; color: string; label: string }> = {
  strong: { bg: "transparent", color: "#000000", label: "Strong fit" },
  good: { bg: "transparent", color: "#000000", label: "Good fit" },
  stretch: { bg: "transparent", color: "#000000", label: "Stretch" },
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
    fitStrength: 92,
    explanation: "Your profile closely matches the role's requirements, and similar candidates received interviews here within 2 weeks.",
    metaSignals: ["3 days ago", "Low applicant volume", "Intern-friendly"],
    estimatedSalary: "$32,000 - $38,000",
  },
  {
    id: "2",
    roleTitle: "Data Analyst",
    company: "TechStart Inc",
    location: "London",
    workStyle: "Remote",
    fitLevel: "strong",
    fitStrength: 88,
    explanation: "Your SQL and Python skills match 90% of the requirements. This company has hired from your university before.",
    metaSignals: ["5 days ago", "Responds quickly"],
    estimatedSalary: "$45,000 - $55,000",
  },
  {
    id: "3",
    roleTitle: "Business Intelligence Associate",
    company: "DataFlow",
    location: "Berlin",
    workStyle: "On-site",
    fitLevel: "good",
    fitStrength: 72,
    explanation: "Your analytics background is relevant, and the team is actively expanding. Previous applicants with similar profiles advanced to interviews.",
    metaSignals: ["1 week ago", "Growing team"],
    estimatedSalary: "$52,000 - $62,000",
  },
  {
    id: "4",
    roleTitle: "Junior Product Manager",
    company: "Innovate Labs",
    location: "Amsterdam",
    workStyle: "Hybrid",
    fitLevel: "good",
    fitStrength: 65,
    explanation: "Your project experience aligns with their product focus. They value analytical backgrounds for this role.",
    metaSignals: ["4 days ago", "Startup environment"],
    estimatedSalary: "$48,000 - $58,000",
  },
  {
    id: "5",
    roleTitle: "Strategy Analyst",
    company: "ConsultCo",
    location: "Paris",
    workStyle: "On-site",
    fitLevel: "stretch",
    fitStrength: 48,
    explanation: "This role typically requires more experience, but your quantitative skills could bridge the gap. Worth trying if you have capacity.",
    metaSignals: ["2 days ago", "Competitive"],
    estimatedSalary: "$60,000 - $75,000",
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
      {/* Main Content */}
      <div className="flex items-start justify-between gap-4">
        {/* Left Side: Company Info, Role Title, Circle + Salary */}
        <div className="flex-1">
          {/* Company Info - Top */}
          <p
            className="text-[13px] font-medium"
            style={{ color: "#64748B" }}
          >
            {opportunity.company} · {opportunity.location} · {opportunity.workStyle}
          </p>
          
          {/* Role Title */}
          <h3
            className="text-base font-semibold mt-1"
            style={{ color: "#0F172A" }}
          >
            {opportunity.roleTitle}
          </h3>

          {/* Circle + Salary Row */}
          <div className="flex items-center gap-4 mt-2">
            {/* Circular Fit Strength Indicator */}
            <div className="flex items-center justify-center flex-shrink-0">
              <svg width="90" height="90" viewBox="0 0 100 100" className="transform -rotate-90">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="8"
                  strokeDasharray={`${(opportunity.fitStrength / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dasharray 0.3s ease" }}
                />
              </svg>
              {/* Center text */}
              <div className="absolute flex flex-col items-center justify-center w-14 h-14">
                <span
                  className="text-base font-bold"
                  style={{ color: "#2563EB" }}
                >
                  {opportunity.fitStrength}%
                </span>
                <span
                  className="text-xs font-medium mt-0 text-center leading-tight"
                  style={{ color: "#64748B" }}
                >
                  {fitStyles[opportunity.fitLevel].label}
                </span>
              </div>
            </div>

            {/* Estimated Salary and Confidence */}
            <div className="flex flex-col gap-1">
              {opportunity.estimatedSalary && (
                <p
                  className="text-sm font-medium"
                  style={{ color: "#64748B" }}
                >
                  {opportunity.estimatedSalary}
                </p>
              )}
              <p
                className="text-sm font-medium"
                style={{ color: "#64748B" }}
              >
                Above market · High confidence
              </p>
              <div className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#64748B" strokeWidth="2"/>
                  <path d="M12 6V12L16 16" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p
                  className="text-sm font-medium"
                  style={{ color: "#64748B" }}
                >
                  {opportunity.metaSignals[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Apply more Button */}
        <button
          className="flex items-center gap-2 cursor-pointer text-sm font-medium transition-colors rounded-lg px-3 py-2 whitespace-nowrap"
          style={{
            background: "#2563EB",
            color: "#FFFFFF",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1D4ED8"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#2563EB"
          }}
        >
          Apply more
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
      style={{ backgroundColor: "#FFFFFF" }}
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

        {/* Search and Filters */}
        <div className="mb-8 flex gap-4">
          {/* Search Bar */}
          <div
            className="flex-1 flex items-center gap-3 rounded-lg px-5 py-3.5"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="#94A3B8" strokeWidth="2"/>
              <path d="M21 21L16 16" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search roles, companies..."
              className="flex-1 bg-transparent text-base outline-none"
              style={{ color: "#0F172A" }}
            />
          </div>

          {/* Filter Button */}
          <button
            className="flex items-center gap-2 rounded-lg px-6 py-3.5 transition-colors"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              color: "#64748B",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F1F5F9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-base font-medium">Filters</span>
          </button>
        </div>

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
                background: "#2563EB",
                color: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1D4ED8"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB"
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
