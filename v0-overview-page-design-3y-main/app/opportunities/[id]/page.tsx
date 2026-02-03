"use client"

import { TopNav } from "@/components/top-nav"
import { useParams } from "next/navigation"
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
        {/* Top Section: Match Circle + Job Info */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, gap: 24 }}>
          {/* Match Circle and Percentile */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ position: "relative", width: 130, height: 130 }}>
              <svg width="130" height="130" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
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
                <span style={{ fontSize: 32, fontWeight: 700, color: "#2563EB" }}>
                  {job.fitStrength}%
                </span>
                <span style={{ fontSize: 13, fontWeight: 500, marginTop: 4, color: "#64748B", textAlign: "center" }}>
                  Strong fit
                </span>
              </div>
            </div>
          </div>

          {/* Job Title and Company Info */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: 0 }}>
                {job.roleTitle}
              </h1>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#2563EB",
                  background: "#DBEAFE",
                  padding: "6px 12px",
                  borderRadius: 16,
                  whiteSpace: "nowrap",
                }}
              >
                {job.workStyle}
              </span>
            </div>
            <p style={{ fontSize: 16, color: "#64748B", margin: 0, fontWeight: 500 }}>
              {job.company} • {job.location}
            </p>
          </div>
        </div>

        {/* Estimated Salary Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          ESTIMATED SALARY:
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 32,
          }}
        >
          <p style={{ fontSize: 14, color: "#475569", margin: 0 }}>
            {job.estimatedSalary}
          </p>
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
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          JOB INFORMATION:
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
            {jobDescription}
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
            marginBottom: 24,
          }}
        >
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
    </div>
  )
}
