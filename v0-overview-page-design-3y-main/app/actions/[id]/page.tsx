"use client"

import { TopNav } from "@/components/top-nav"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"

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
    duration: "15" | "30-45"
    impact: string
  }[]
  nextAction?: {
    title: string
    icon: string
    recommendation: boolean
  }
  recruiterSignals?: {
    reviewTime: string
    profileView: string
    ghostingProbability: string
  }
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
      { text: "Send follow-up email", completed: false, duration: "15", impact: "Increases response rate by 25%" },
      { text: "Prepare 2-3 interview questions", completed: false, duration: "30-45", impact: "Candidates who prepare increase success rate by ~30%" },
      { text: "Research company background", completed: true, duration: "30-45", impact: "Shows genuine interest to recruiters" },
      { text: "Tailor CV for this role", completed: false, duration: "30-45", impact: "+6% impact on Application Health" },
      { text: "Prepare 'Tell me about yourself' answer", completed: false, duration: "15", impact: "First impression matters most" }
    ],
    nextAction: {
      title: "Send follow-up email in 2 days",
      icon: "✉️",
      recommendation: true
    },
    recruiterSignals: {
      reviewTime: "5–7 days average",
      profileView: "Likely within 48 hours",
      ghostingProbability: "Low"
    }
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
      { text: "Complete coding challenge", completed: false, duration: "30-45", impact: "Critical for advancement" },
      { text: "Schedule technical call", completed: false, duration: "15", impact: "Shows promptness and interest" }
    ],
    nextAction: {
      title: "Complete coding challenge",
      icon: "💻",
      recommendation: true
    },
    recruiterSignals: {
      reviewTime: "2–3 days for assessments",
      profileView: "Already confirmed",
      ghostingProbability: "Very Low"
    }
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
      { text: "Review job requirements", completed: false, duration: "15", impact: "Foundation for all prep" },
      { text: "Submit portfolio", completed: false, duration: "30-45", impact: "Differentiates you from 80% of candidates" }
    ],
    nextAction: {
      title: "Submit portfolio link",
      icon: "📂",
      recommendation: true
    },
    recruiterSignals: {
      reviewTime: "4–5 days for screening",
      profileView: "Likely today",
      ghostingProbability: "Low"
    }
  }
}

export default function ActionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const job = actionJobs[id] || actionJobs["1"]
  const [planBOpen, setPlanBOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "30-45-expanded": false,
    "interview-format": false,
    "interview-questions": false,
    "interview-points": false,
  })
  const [completedTasks, setCompletedTasks] = useState<Record<number, boolean>>(
    job.tasks.reduce((acc, task, idx) => ({ ...acc, [idx]: task.completed }), {})
  )

  const progressPercentage = (job.currentStage / job.totalStages) * 100
  const completedTaskCount = Object.values(completedTasks).filter(Boolean).length
  const taskCompletionPercent = (completedTaskCount / job.tasks.length) * 100

  // Application Health Score logic
  const getHealthScore = () => {
    const stageBonus = (job.currentStage / job.totalStages) * 50
    const taskBonus = taskCompletionPercent * 0.3
    const score = stageBonus + taskBonus
    if (score > 75) return { score: "Strong — can be excellent", improvement: "(+5%)", color: "#2563EB" }
    if (score > 50) return { score: "Good — can be stronger", improvement: "(+10%)", color: "#2563EB" }
    if (score > 25) return { score: "Fair — opportunity to improve", improvement: "(+15%)", color: "#2563EB" }
    return { score: "Needs Work — quick wins available", improvement: "(+20%)", color: "#2563EB" }
  }

  const health = getHealthScore()

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
          Back to Application
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
          {/* Status Row - Above Title */}
          <div style={{ display: "flex", gap: 24, alignItems: "center", marginBottom: 16 }}>
            <div>
              <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
                Current Status
              </p>
              <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
                {job.currentStage === 1 ? "You're early — this is when smart candidates take the lead" : `Stage ${job.currentStage} of ${job.totalStages}`}
              </p>
              <p style={{ fontSize: 12, color: "#64748B", margin: "4px 0 0 0" }}>
                ⏳ Most rejections happen after this stage — staying active matters
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

          {/* Title */}
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
            {job.title}
          </h1>
          
          {/* Company Info */}
          <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
            {job.company} · {job.location} · {job.workType}
          </p>
        </div>

        {/* Next Best Action - CRITICAL */}
        {job.nextAction && (
          <div
            style={{
              background: "#F0F4F8",
              border: `2px solid ${health.color}`,
              borderRadius: 12,
              padding: 20,
              marginBottom: 24,
            }}
          >
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
              Your Next Best Action
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 20 }}>{job.nextAction.icon}</span>
              <h3 style={{ fontSize: 16, color: "#0F172A", margin: 0 }}>
                {job.nextAction.title}
              </h3>
              {job.nextAction.recommendation && (
                <span style={{ fontSize: 11, background: health.color, color: "#FFFFFF", padding: "4px 8px", borderRadius: 4, fontWeight: 600 }}>
                  RECOMMENDED
                </span>
              )}
            </div>
            <p style={{ fontSize: 13, color: "#475569", margin: "0 0 16px 0" }}>
              Doing this at the right moment significantly increases your chances.
              <br />
              Most candidates hesitate here — taking action now helps you stand out.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                style={{
                  padding: "10px 16px",
                  fontSize: 13,
                  fontWeight: 500,
                  background: "#2563EB",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#1D4ED8"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#2563EB"}
              >
                Primary action
              </button>
              <button
                style={{
                  padding: "10px 16px",
                  fontSize: 13,
                  fontWeight: 500,
                  background: "#FFFFFF",
                  color: "#2563EB",
                  border: "1px solid #2563EB",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#F0F4F8"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#FFFFFF"}
              >
                Secondary action
              </button>
            </div>
          </div>
        )}

        {/* Application Signals */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          <div>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
              Application Health
            </p>
            <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
              {health.score} {health.improvement}
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: "4px 0 0 0" }}>
              Two quick improvements available
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
              Competition Level
            </p>
            <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
              Low (24 applicants)
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: "4px 0 0 0" }}>
              You're competing in a smaller-than-average pool for this role.
            </p>
          </div>
        </div>

        {/* Recruiter Reality Signals */}
        {job.recruiterSignals && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 20,
              marginBottom: 24,
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
              What Usually Happens at This Stage
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 12 }}>
                <span>⏳</span>
                <div>
                  <p style={{ fontSize: 13, color: "#0F172A", margin: "0 0 2px 0" }}>Average Review Time</p>
                  <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>{job.recruiterSignals.reviewTime}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <span>👀</span>
                <div>
                  <p style={{ fontSize: 13, color: "#0F172A", margin: "0 0 2px 0" }}>Recruiter Profile View</p>
                  <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>{job.recruiterSignals.profileView}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <span>📊</span>
                <div>
                  <p style={{ fontSize: 13, color: "#0F172A", margin: "0 0 2px 0" }}>Ghosting Probability</p>
                  <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>{job.recruiterSignals.ghostingProbability}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* APPLICATION PROGRESS - Narrative Timeline */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 8px 0" }}>
          APPLICATION PROGRESS
        </p>
        <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 16px 0" }}>
          Where you are in the process
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
                    background: stage.status === "completed" ? "#2563EB" : stage.status === "current" ? "#2563EB" : "#E5E7EB",
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
                    {stage.status === "completed" && "✅ You "}
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
                  {stage.status === "upcoming" && index === job.currentStage && (
                    <p style={{ fontSize: 12, color: "#2563EB", margin: "4px 0 0 0" }}>
                      Estimated: {new Date(Date.now() + (4 + index * 3) * 24 * 60 * 60 * 1000).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar - Between Application Progress and Tasks */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <span style={{ fontSize: 12, color: "#64748B", display: "block", marginBottom: 4 }}>Process Progress</span>
              <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 500 }}>You're past the hardest part: applying</span>
            </div>
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

        {/* Tasks Section - Effort-based grouping */}
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
          {/* 15-minute actions */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 12, color: "#64748B", fontWeight: 600, margin: "0 0 12px 0", textTransform: "uppercase" }}>
              15-minute actions
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {job.tasks.filter(t => t.duration === "15").map((task, taskIdx) => {
                const actualIndex = job.tasks.indexOf(task)
                return (
                  <div
                    key={actualIndex}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: completedTasks[actualIndex] ? "#94A3B8" : "#0F172A",
                      padding: "10px 12px",
                      background: completedTasks[actualIndex] ? "#F1F5F9" : "transparent",
                      borderRadius: 8,
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={completedTasks[actualIndex] || false}
                      onChange={(e) => setCompletedTasks({ ...completedTasks, [actualIndex]: e.target.checked })}
                      style={{ width: 20, height: 20, cursor: "pointer", marginTop: 2 }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: "0 0 4px 0", textDecoration: completedTasks[actualIndex] ? "line-through" : "none" }}>
                        {task.text}
                      </p>
                      <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                        💡 {task.impact}
                      </p>
                      {completedTasks[actualIndex] && (
                        <p style={{ fontSize: 12, color: "#2563EB", margin: "4px 0 0 0" }}>
                          ✅ This improved your application quality
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 30-45 minute actions - Collapse by default */}
          <div>
            <button
              onClick={() => setExpandedSections({ ...expandedSections, "30-45-expanded": !expandedSections["30-45-expanded"] })}
              style={{
                fontSize: 12,
                color: "#64748B",
                fontWeight: 600,
                margin: "0 0 12px 0",
                textTransform: "uppercase",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              30–45 minute actions
              <span style={{ transition: "transform 0.2s", display: "inline-block", transform: expandedSections["30-45-expanded"] ? "rotate(0deg)" : "rotate(-90deg)" }}>
                ▼
              </span>
            </button>
            {expandedSections["30-45-expanded"] && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {job.tasks.filter(t => t.duration === "30-45").map((task) => {
                  const actualIndex = job.tasks.indexOf(task)
                  return (
                    <div
                      key={actualIndex}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        fontSize: 14,
                        color: completedTasks[actualIndex] ? "#94A3B8" : "#0F172A",
                        padding: "10px 12px",
                        background: completedTasks[actualIndex] ? "#F1F5F9" : "transparent",
                        borderRadius: 8,
                        transition: "all 0.2s",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedTasks[actualIndex] || false}
                        onChange={(e) => setCompletedTasks({ ...completedTasks, [actualIndex]: e.target.checked })}
                        style={{ width: 20, height: 20, cursor: "pointer", marginTop: 2 }}
                      />
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: "0 0 4px 0", textDecoration: completedTasks[actualIndex] ? "line-through" : "none" }}>
                          {task.text}
                        </p>
                        <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                          💡 {task.impact}
                        </p>
                        {completedTasks[actualIndex] && (
                          <p style={{ fontSize: 12, color: "#2563EB", margin: "4px 0 0 0" }}>
                            ✅ This improved your application quality
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: "0 0 4px 0", textDecoration: completedTasks[index] ? "line-through" : "none" }}>
                      {task.text}
                    </p>
                    <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                      💡 {task.impact}
                    </p>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#2563EB", margin: "16px 0 0 0", fontStyle: "italic" }}>
              Silence at this stage is normal — it's not a negative signal.
            </p>
              ))}
            </div>
          </div>

          {/* 30-45 minute actions */}
          <div>
            <p style={{ fontSize: 12, color: "#64748B", fontWeight: 600, margin: "0 0 12px 0", textTransform: "uppercase" }}>
              30–45 minute actions
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {job.tasks.filter(t => t.duration === "30-45").map((task, index) => {
                const actualIndex = job.tasks.indexOf(task)
                return (
                  <div
                    key={actualIndex}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: completedTasks[actualIndex] ? "#94A3B8" : "#0F172A",
                      padding: "10px 12px",
                      background: completedTasks[actualIndex] ? "#F1F5F9" : "transparent",
                      borderRadius: 8,
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={completedTasks[actualIndex] || false}
                      onChange={(e) => setCompletedTasks({ ...completedTasks, [actualIndex]: e.target.checked })}
                      style={{ width: 20, height: 20, cursor: "pointer", marginTop: 2 }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: "0 0 4px 0", textDecoration: completedTasks[actualIndex] ? "line-through" : "none" }}>
                        {task.text}
                      </p>
                      <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                        💡 {task.impact}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Interview Readiness Pack */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          WHEN YOU GET AN INTERVIEW:
        </p>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ cursor: "pointer", padding: "8px 0" }} onClick={() => setExpandedSections({ ...expandedSections, "interview-format": !expandedSections["interview-format"] })}>
              <p style={{ fontSize: 13, color: "#0F172A", fontWeight: 600, margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                📋 Likely Interview Format
                <span style={{ transition: "transform 0.2s", display: "inline-block", transform: expandedSections["interview-format"] ? "rotate(0deg)" : "rotate(-90deg)", fontSize: 12 }}>
                  ▼
                </span>
              </p>
              {expandedSections["interview-format"] && (
                <p style={{ fontSize: 12, color: "#64748B", margin: "8px 0 0 0" }}>
                  HR screening call (20–30 min) → Behavioral interview
                </p>
              )}
            </div>
            <div style={{ cursor: "pointer", padding: "8px 0" }} onClick={() => setExpandedSections({ ...expandedSections, "interview-questions": !expandedSections["interview-questions"] })}>
              <p style={{ fontSize: 13, color: "#0F172A", fontWeight: 600, margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                ❓ Common Questions for Product Analyst Roles
                <span style={{ transition: "transform 0.2s", display: "inline-block", transform: expandedSections["interview-questions"] ? "rotate(0deg)" : "rotate(-90deg)", fontSize: 12 }}>
                  ▼
                </span>
              </p>
              {expandedSections["interview-questions"] && (
                <ul style={{ fontSize: 12, color: "#64748B", margin: "8px 0 0 20px", paddingLeft: 0 }}>
                  <li>Walk us through your approach to analyzing a dataset</li>
                  <li>Describe a time you influenced a decision with data</li>
                  <li>How would you measure success for [company product]?</li>
                </ul>
              )}
            </div>
            <div style={{ cursor: "pointer", padding: "8px 0" }} onClick={() => setExpandedSections({ ...expandedSections, "interview-points": !expandedSections["interview-points"] })}>
              <p style={{ fontSize: 13, color: "#0F172A", fontWeight: 600, margin: 0, display: "flex", alignItems: "center", gap: 8 }}>
                💼 2 Company-Specific Talking Points
                <span style={{ transition: "transform 0.2s", display: "inline-block", transform: expandedSections["interview-points"] ? "rotate(0deg)" : "rotate(-90deg)", fontSize: 12 }}>
                  ▼
                </span>
              </p>
              {expandedSections["interview-points"] && (
                <ul style={{ fontSize: 12, color: "#64748B", margin: "8px 0 0 20px", paddingLeft: 0 }}>
                  <li>Acme's focus on B2B analytics aligns with my interest in data-driven decision-making</li>
                  <li>Your recent expansion into Europe interests me — I'd love to help optimize that expansion with data</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Plan B Section - Collapsible */}
        <div
          style={{
            background: "#DBEAFE",
            border: "1px solid #2563EB",
            borderRadius: 12,
            padding: 20,
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => setPlanBOpen(!planBOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontSize: 14,
              fontWeight: 600,
              color: "#0F172A",
            }}
          >
            <div>
              <div>If This Application Doesn't Work Out</div>
              <p style={{ fontSize: 12, color: "#2563EB", margin: "4px 0 0 0", fontWeight: 400 }}>
                You'll still be ahead — here's what to do next.
              </p>
            </div>
            <span style={{ fontSize: 12, color: "#64748B" }}>
              {planBOpen ? "−" : "+"}
            </span>
          </button>

          {planBOpen && (
            <div style={{ marginTop: 16 }}>
              <div style={{ marginBottom: 12 }}>
                <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  2–3 similar roles you should apply to next
                </p>
                <ul style={{ fontSize: 13, color: "#0F172A", margin: 0, paddingLeft: 20 }}>
                  <li>Junior Data Analyst at DataFlow (NYC)</li>
                  <li>Analytics Associate at TechStart (London)</li>
                  <li>Business Intelligence Intern at InsightCorp (Paris)</li>
                </ul>
              </div>
              <div style={{ marginBottom: 12 }}>
                <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  One Skill to Strengthen This Week
                </p>
                <p style={{ fontSize: 13, color: "#0F172A", margin: 0 }}>
                  Advanced SQL: Focus on window functions and CTEs (commonly asked in interviews)
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  One Mistake to Avoid Next Time
                </p>
                <p style={{ fontSize: 13, color: "#0F172A", margin: 0 }}>
                  Don't apply without tailoring your CV first. Generic applications have 70% lower response rates.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Micro-copy */}
        <div style={{ textAlign: "center", padding: "24px 0", color: "#64748B", fontSize: 12 }}>
          <p>You don't need to do everything today.</p>
          <p>One small, intentional action is enough.</p>
        </div>
      </main>
    </div>
  )
}
