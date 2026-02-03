"use client"

import { TopNav } from "@/components/top-nav"
import { useParams } from "next/navigation"

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

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 100 }}>
      <TopNav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 16px" }}>
        {/* Top Section: Match Circle + Job Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, gap: 24 }}>
          {/* Match Circle and Percentile */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 100 }}>
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span style={{ fontSize: 40, fontWeight: 700, color: "#FFFFFF" }}>
                {job.fitStrength}%
              </span>
            </div>
            <p style={{ fontSize: 12, color: "#64748B", textAlign: "center", fontWeight: 500 }}>
              Match
            </p>
          </div>

          {/* Job Title and Company Info */}
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
              {job.roleTitle}
            </h1>
            <p style={{ fontSize: 16, color: "#64748B", margin: "0 0 4px 0", fontWeight: 500 }}>
              {job.company} • {job.location}
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#2563EB",
                  background: "#DBEAFE",
                  padding: "6px 12px",
                  borderRadius: 16,
                }}
              >
                {job.workStyle}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#059669",
                  background: "#D1FAE5",
                  padding: "6px 12px",
                  borderRadius: 16,
                }}
              >
                Strong fit
              </span>
            </div>
          </div>
        </div>

        {/* Estimated Salary Section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 8px 0", fontWeight: 500 }}>
            ESTIMATED SALARY
          </p>
          <p style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: 0 }}>
            {job.estimatedSalary}
          </p>
        </div>

        {/* Why It's a Strong Match Section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <h2 style={{ fontSize: 18, fontWeight: 600, color: "#0F172A", marginBottom: 16, margin: 0, marginBottom: 16 }}>
            Why it's a super strong match
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {strongMatchReasons.map((reason, index) => (
              <li
                key={index}
                style={{
                  fontSize: 14,
                  color: "#475569",
                  marginBottom: index < strongMatchReasons.length - 1 ? 12 : 0,
                  paddingLeft: 24,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#2563EB",
                    fontWeight: 600,
                  }}
                >
                  •
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Job Information Section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <h2 style={{ fontSize: 18, fontWeight: 600, color: "#0F172A", margin: "0 0 20px 0" }}>
            Job information
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 8px 0" }}>
                LOCATION
              </p>
              <p style={{ fontSize: 14, color: "#0F172A", fontWeight: 500, margin: 0 }}>
                {job.location}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 8px 0" }}>
                WORK STYLE
              </p>
              <p style={{ fontSize: 14, color: "#0F172A", fontWeight: 500, margin: 0 }}>
                {job.workStyle}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 8px 0" }}>
                COMPANY
              </p>
              <p style={{ fontSize: 14, color: "#0F172A", fontWeight: 500, margin: 0 }}>
                {job.company}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#64748B", fontWeight: 500, margin: "0 0 8px 0" }}>
                POSTED
              </p>
              <p style={{ fontSize: 14, color: "#0F172A", fontWeight: 500, margin: 0 }}>
                {job.metaSignals[0]}
              </p>
            </div>
          </div>
        </div>

        {/* How to Improve Section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <h2 style={{ fontSize: 18, fontWeight: 600, color: "#0F172A", marginBottom: 16, margin: "0 0 16px 0" }}>
            How can you improve interview success
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {improvementTips.map((tip, index) => (
              <li
                key={index}
                style={{
                  fontSize: 14,
                  color: "#475569",
                  marginBottom: index < improvementTips.length - 1 ? 12 : 0,
                  paddingLeft: 24,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#2563EB",
                    fontWeight: 600,
                  }}
                >
                  •
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Sticky Bottom Buttons */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          gap: 12,
          padding: 16,
          background: "#FFFFFF",
          borderTop: "1px solid #E5E7EB",
          maxWidth: "100%",
          zIndex: 50,
        }}
      >
        <button
          style={{
            flex: 1,
            padding: "12px 24px",
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
          Open job link
        </button>
        <button
          style={{
            flex: 1,
            padding: "12px 24px",
            fontSize: 14,
            fontWeight: 500,
            color: "#FFFFFF",
            background: "#2563EB",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "#1D4ED8"}
          onMouseLeave={(e) => e.currentTarget.style.background = "#2563EB"}
        >
          Apply now
        </button>
      </div>
    </div>
  )
}
