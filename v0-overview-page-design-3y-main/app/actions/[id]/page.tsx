"use client"

import { TopNav } from "@/components/top-nav"
import { useParams, useRouter } from "next/navigation"

interface ActionJob {
  id: string
  title: string
  company: string
  location: string
  workType: string
  appliedDate: string
  currentStage: number
  totalStages: number
  stages: {
    name: string
    status: "completed" | "current" | "upcoming"
    date?: string
  }[]
  tasks: {
    text: string
    completed: boolean
  }[]
}

const actionJobs: Record<string, ActionJob> = {
  "1": {
    id: "1",
    title: "Product Analyst Intern",
    company: "Acme Corp",
    location: "Paris",
    workType: "Hybrid",
    appliedDate: "3 days ago",
    currentStage: 1,
    totalStages: 4,
    stages: [
      { name: "Application Submitted", status: "completed", date: "Jan 28, 2026" },
      { name: "Application Review", status: "current" },
      { name: "Interview", status: "upcoming" },
      { name: "Decision", status: "upcoming" }
    ],
    tasks: [
      { text: "Follow up email", completed: false },
      { text: "Prepare interview questions", completed: false },
      { text: "Research company background", completed: true }
    ]
  },
  "2": {
    id: "2",
    title: "Data Analyst",
    company: "TechStart Inc",
    location: "London",
    workType: "Remote",
    appliedDate: "5 days ago",
    currentStage: 2,
    totalStages: 4,
    stages: [
      { name: "Application Submitted", status: "completed", date: "Jan 26, 2026" },
      { name: "Application Review", status: "completed", date: "Jan 28, 2026" },
      { name: "Technical Assessment", status: "current" },
      { name: "Final Interview", status: "upcoming" }
    ],
    tasks: [
      { text: "Complete coding challenge", completed: false },
      { text: "Schedule technical call", completed: false }
    ]
  },
  "3": {
    id: "3",
    title: "Business Analyst",
    company: "DataFlow",
    location: "New York",
    workType: "On-site",
    appliedDate: "2 days ago",
    currentStage: 1,
    totalStages: 3,
    stages: [
      { name: "Application Submitted", status: "completed", date: "Jan 29, 2026" },
      { name: "Screening Call", status: "current" },
      { name: "Final Round", status: "upcoming" }
    ],
    tasks: [
      { text: "Review job requirements", completed: false },
      { text: "Submit portfolio", completed: false }
    ]
  }
}

export default function ActionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const job = actionJobs[id] || actionJobs["1"]

  const progressPercentage = (job.currentStage / job.totalStages) * 100

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
            fontWeight: 400,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Actions
        </button>

        {/* Header Section */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 24,
            marginBottom: 24,
          }}
        >
          {/* Title */}
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
            {job.title}
          </h1>
          
          {/* Company Info */}
          <p style={{ fontSize: 14, color: "#64748B", margin: "0 0 16px 0" }}>
            {job.company} · {job.location} · {job.workType}
          </p>

          {/* Status Row */}
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                Current Status
              </p>
              <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                Stage {job.currentStage} of {job.totalStages}
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                Applied
              </p>
              <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                {job.appliedDate}
              </p>
            </div>
          </div>
        </div>

        {/* Stages Tracking Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          APPLICATION PROGRESS:
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
          {/* Stages List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {job.stages.map((stage, index) => (
              <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                {/* Stage Indicator */}
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background: stage.status === "completed" ? "#16A34A" : stage.status === "current" ? "#2563EB" : "#E5E7EB",
                    color: stage.status === "upcoming" ? "#64748B" : "#FFFFFF",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {stage.status === "completed" ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Stage Info */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 14,
                      color: stage.status === "upcoming" ? "#94A3B8" : "#0F172A",
                      margin: 0,
                      fontWeight: stage.status === "current" ? 600 : 400,
                    }}
                  >
                    {stage.name}
                    {stage.status === "current" && (
                      <span style={{ marginLeft: 8, fontSize: 12, color: "#2563EB", fontWeight: 400 }}>
                        (In Progress)
                      </span>
                    )}
                  </p>
                  {stage.date && (
                    <p style={{ fontSize: 12, color: "#64748B", margin: "4px 0 0 0" }}>
                      {stage.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div style={{ marginTop: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "#64748B" }}>Overall Progress</span>
              <span style={{ fontSize: 12, color: "#0F172A" }}>{Math.round(progressPercentage)}%</span>
            </div>
            <div style={{ height: 8, background: "#E5E7EB", borderRadius: 4 }}>
              <div
                style={{
                  width: `${progressPercentage}%`,
                  height: "100%",
                  background: "#2563EB",
                  borderRadius: 4,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>

        {/* Tasks Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          TASKS TO DO:
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
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {job.tasks.map((task, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 14,
                  color: task.completed ? "#94A3B8" : "#0F172A",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked={task.completed}
                  style={{ width: 20, height: 20, cursor: "pointer" }}
                />
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
