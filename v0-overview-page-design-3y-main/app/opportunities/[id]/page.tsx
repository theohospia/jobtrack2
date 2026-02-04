"use client"

import { TopNav } from "@/components/top-nav"
import { useParams, useRouter } from "next/navigation"
import React from "react"

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

const opportunities: Record<string, Opportunity> = {
  "1": {
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
    estimatedTime: "2-3 weeks",
  },
  "2": {
    id: "2",
    roleTitle: "Data Analyst",
    company: "TechStart Inc",
    location: "London",
    workStyle: "Remote",
    fitLevel: "strong",
    fitStrength: 88,
    explanation: "Your analytical skills and Python experience align perfectly with their needs.",
    metaSignals: ["1 week ago", "High growth company", "Visa sponsorship available"],
    estimatedSalary: "$55,000 - $65,000",
    estimatedTime: "3-4 weeks",
  },
}

export default function ApplyPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const job = opportunities[id] || opportunities["1"]

  const strongMatchReasons = [
    "Your profile matches 92% of job requirements",
    "Similar candidates got interviews within 2 weeks",
    "Your experience in analytics aligns with their team",
    "Low competition - only 24 applicants so far",
  ]

  const improvementTips = [
    "Highlight your quantitative projects in the cover letter",
    "Practice explaining your analytical approach in interviews",
    "Research the company's recent product launches",
    "Prepare examples of data-driven decisions you've made",
  ]

  const jobDescription = `Safran is an international high-technology group operating in the fields of aeronautics (propulsion, equipment and interiors), space, and defense. Safran Aircraft Engines designs, manufactures, and markets civil and military aircraft engines with the highest levels of performance, reliability, and environmental compliance.

The Assistant Service Engineer (ASE) will provide leadership, technical direction, and support to the airframer and customers. Main responsibilities include acting as an interface with all levels of customer and company organizations, providing on-site assessments of operations, delivering comprehensive reports on engine issues, and contributing to product and service improvement by identifying operator needs and proposing corrective actions.

Required qualifications include strong knowledge of engine mechanics and operation, technical expertise in engine assembly and maintenance documentation, strong oral and written communication skills, and technical English proficiency. Experience in jet engine manufacturing or aircraft manufacturing is valuable.`

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 100 }}>
      <TopNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
            padding: "8px 12px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2563EB",
            fontSize: 14,
            fontWeight: 500,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        {/* Top Section: Match Circle + Job Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, gap: 24 }}>
          {/* Match Circle and Percentile */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ position: "relative", width: 100, height: 100 }}>
              <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
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
                  strokeDasharray={`${(job.fitStrength / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dasharray 0.3s ease" }}
                />
              </svg>
              {/* Center text */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: "#2563EB" }}>
                  {job.fitStrength}%
                </span>
              </div>
            </div>
          </div>

          {/* Job Title and Company Info */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 8 }}>
              {/* Left Column */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: 0 }}>
                  {job.roleTitle}
                </h1>
                <p style={{ fontSize: 16, color: "#64748B", margin: 0, fontWeight: 500 }}>
                  {job.company} · {job.location} · {job.workStyle}
                </p>
              </div>
              
              {/* Right Column */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "right", marginTop: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#64748B" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="#64748B" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: 14, color: "#64748B", fontWeight: 500 }}>3 days ago</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#64748B" strokeWidth="2"/>
                    <path d="M9 12H15M12 9V15" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: 14, color: "#64748B", fontWeight: 500 }}>$32,000 - $38,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why It's a Strong Match Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          WHY IT'S A SUPER STRONG MATCH:
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Match Score Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 16,
                borderRadius: 8,
              }}
            >
              <div>
                <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 4px 0" }}>
                  PROFILE MATCH
                </p>
                <p style={{ fontSize: 15, color: "#0F172A", fontWeight: 700, margin: 0 }}>
                  92% of requirements
                </p>
              </div>
            </div>

            {/* Interview Timeline Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 16,
                borderRadius: 8,
              }}
            >
              <div>
                <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 4px 0" }}>
                  INTERVIEW SPEED
                </p>
                <p style={{ fontSize: 15, color: "#0F172A", fontWeight: 700, margin: 0 }}>
                  Interviewed in 2 weeks
                </p>
              </div>
            </div>

            {/* Experience Alignment Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 16,
                borderRadius: 8,
              }}
            >
              <div>
                <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 4px 0" }}>
                  YOUR STRENGTHS
                </p>
                <p style={{ fontSize: 15, color: "#0F172A", fontWeight: 700, margin: 0 }}>
                  Analytics perfectly aligned
                </p>
              </div>
            </div>

            {/* Competition Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 16,
                borderRadius: 8,
              }}
            >
              <div>
                <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 4px 0" }}>
                  LOW COMPETITION
                </p>
                <p style={{ fontSize: 15, color: "#0F172A", fontWeight: 700, margin: 0 }}>
                  Only 24 applicants
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Improve Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          HOW CAN YOU IMPROVE INTERVIEW SUCCESS:
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Tip 1 - Application */}
            <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    background: "#E0E7FF",
                    borderRadius: "50%",
                    color: "#2563EB",
                    fontSize: 16,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  1
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>
                    Craft a targeted cover letter
                  </p>
                  <p style={{ fontSize: 13, color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                    Highlight your quantitative projects and metrics you've achieved. Show them you understand their business and can deliver similar results.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 2 - Interview Prep */}
            <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    background: "#FEF3C7",
                    borderRadius: "50%",
                    color: "#D97706",
                    fontSize: 16,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  2
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>
                    Master your storytelling
                  </p>
                  <p style={{ fontSize: 13, color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                    Practice explaining your analytical approach with real examples. Use the STAR method to describe challenges you've solved and impact you've created.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 3 - Company Research */}
            <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    background: "#DCFCE7",
                    borderRadius: "50%",
                    color: "#16A34A",
                    fontSize: 16,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  3
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>
                    Deep dive on company intelligence
                  </p>
                  <p style={{ fontSize: 13, color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                    Research their recent product launches, funding rounds, and quarterly reports. Find 2-3 questions you can ask that show genuine interest.
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 4 - Examples */}
            <div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    background: "#F3E8FF",
                    borderRadius: "50%",
                    color: "#9333EA",
                    fontSize: 16,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  4
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>
                    Prepare data-driven examples
                  </p>
                  <p style={{ fontSize: 13, color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                    Have 3-5 concrete examples ready where you made data-driven decisions that resulted in measurable outcomes (increased efficiency, saved costs, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Information Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          JOB INFORMATION:
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#475569",
              margin: 0,
              maxHeight: isExpanded ? "none" : 150,
              overflow: "hidden",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            Safran is an international high-technology group operating in the fields of aeronautics (propulsion, equipment and interiors), space, and defense. Safran Aircraft Engines designs, manufactures, and markets civil and military aircraft engines with the highest levels of performance, reliability, and environmental compliance.

The Assistant Service Engineer (ASE) will provide leadership, technical direction, and support to the airframer and customers. Main responsibilities include acting as an interface with all levels of customer and company organizations, providing on-site assessments of operations, delivering comprehensive reports on engine issues, and contributing to product and service improvement by identifying operator needs and proposing corrective actions.

Required qualifications include strong knowledge of engine mechanics and operation, technical expertise in engine assembly and maintenance documentation, strong oral and written communication skills, and technical English proficiency. Experience in jet engine manufacturing or aircraft manufacturing is valuable.
          </p>
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              style={{
                marginTop: 12,
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: "#2563EB",
                background: "#F1F5F9",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
            >
              View more
            </button>
          )}
          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              style={{
                marginTop: 12,
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: "#2563EB",
                background: "#F1F5F9",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#E2E8F0"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#F1F5F9"}
            >
              View less
            </button>
          )}
        </div>

        {/* Sticky Apply Now Button */}
        <button
          className="flex items-center gap-2 cursor-pointer text-sm font-medium transition-colors rounded-lg px-3 py-2 whitespace-nowrap flex-shrink-0"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "#2563EB",
            color: "#FFFFFF",
            zIndex: 40,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1D4ED8"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#2563EB"
          }}
        >
          Apply now
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </main>
    </div>
  )
}
