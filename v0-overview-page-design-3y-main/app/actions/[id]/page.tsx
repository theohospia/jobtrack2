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
    if (score > 75) return { score: "Strong", color: "#2563EB" }
    if (score > 50) return { score: "Good", color: "#2563EB" }
    if (score > 25) return { score: "Fair", color: "#2563EB" }
    return { score: "Needs Work", color: "#2563EB" }
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
          Back to Applications
        </button>

        {/* Job Summary Section */}
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 8px 0" }}>
            Job Summary
          </p>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: 24,
            }}
          >
            {/* Title */}
            <h1 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 8px 0" }}>
              {job.title}
            </h1>

            {/* Company info + Applied on same row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ fontSize: 14, color: "#64748B", margin: 0 }}>
                {job.company} · {job.location} · {job.workType}
              </p>
              <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
                Applied {job.appliedDate}
              </p>
            </div>

            {/* Status messages - both in black */}
            <p style={{ fontSize: 14, color: "#0F172A", margin: "0 0 4px 0" }}>
              You're early — this is when smart candidates take the lead
            </p>
            <p style={{ fontSize: 14, color: "#0F172A", margin: 0 }}>
              Most successful candidates stay active at this stage — you're right on time.
            </p>
          </div>
        </div>

        {/* APPLICATION PROGRESS */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 4px 0" }}>
          Application Progress
        </p>
        <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
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
          {/* Delivery-tracker style timeline */}
          {(() => {
            const lastCompletedIdx = job.stages.reduce(
              (acc: number, s: { status: string }, i: number) => (s.status === "completed" ? i : acc),
              -1
            )
            const segments = job.stages.length - 1
            // Blue line stops ~70% of the way between the last completed and next circle
            const bluePct =
              lastCompletedIdx >= 0
                ? ((lastCompletedIdx + 0.7) / segments) * 100
                : 0

            return (
              <div>
                {/* Circles + connecting lines */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 8px",
                  }}
                >
                  {/* Grey baseline between first and last circle centres */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 24,
                      right: 24,
                      height: 3,
                      background: "#E5E7EB",
                      transform: "translateY(-50%)",
                      borderRadius: 2,
                    }}
                  />
                  {/* Blue progress overlay */}
                  {lastCompletedIdx >= 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 24,
                        height: 3,
                        background: "#2563EB",
                        transform: "translateY(-50%)",
                        borderRadius: 2,
                        zIndex: 1,
                        width: `calc(${Math.min(bluePct, 100)}% - 48px)`,
                        transition: "width 0.5s ease",
                      }}
                    />
                  )}

                  {/* Numbered circles */}
                  {job.stages.map(
                    (stage: { status: string; name: string; date?: string }, index: number) => (
                      <div
                        key={index}
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          zIndex: 2,
                          background:
                            stage.status === "completed" ? "#2563EB" : "#FFFFFF",
                          border:
                            stage.status === "completed"
                              ? "2px solid #2563EB"
                              : stage.status === "current"
                                ? "2px solid #2563EB"
                                : "2px solid #E5E7EB",
                          color:
                            stage.status === "completed"
                              ? "#FFFFFF"
                              : stage.status === "current"
                                ? "#2563EB"
                                : "#94A3B8",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {index + 1}
                      </div>
                    )
                  )}
                </div>

                {/* Labels below circles */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 12,
                  }}
                >
                  {job.stages.map(
                    (stage: { status: string; name: string; date?: string }, index: number) => (
                      <div
                        key={index}
                        style={{
                          textAlign: "center",
                          flex: 1,
                          minWidth: 0,
                          padding: "0 2px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 12,
                            color:
                              stage.status === "upcoming" ? "#94A3B8" : "#0F172A",
                            margin: 0,
                            fontWeight: stage.status === "current" ? 600 : 400,
                            lineHeight: 1.3,
                          }}
                        >
                          {stage.status === "completed" ? "Your " : ""}
                          {stage.name}
                        </p>
                        {stage.date && (
                          <p
                            style={{
                              fontSize: 11,
                              color: "#64748B",
                              margin: "4px 0 0 0",
                            }}
                          >
                            {stage.date}
                          </p>
                        )}
                        {stage.status === "current" && (
                          <p
                            style={{
                              fontSize: 11,
                              color: "#2563EB",
                              margin: "4px 0 0 0",
                              fontWeight: 500,
                            }}
                          >
                            In progress
                          </p>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          })()}
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", display: "block", marginBottom: 4 }}>Process Progress</span>
              <span style={{ fontSize: 13, color: "#0F172A", fontWeight: 500 }}>You're past the hardest part: applying.</span>
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
            <p style={{ fontSize: 14, color: "#0F172A", margin: "0 0 4px 0" }}>
              Good — can be stronger (+10%)
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
              Two quick improvements can meaningfully increase your chances.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 4px 0", textTransform: "uppercase" }}>
              Competition Level
            </p>
            <p style={{ fontSize: 14, color: "#0F172A", margin: "0 0 4px 0" }}>
              Low (24 applicants)
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
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
                <span style={{ fontSize: 12, color: "#64748B", flex: "0 0 120px" }}>Average review time</span>
                <span style={{ fontSize: 12, color: "#0F172A", fontWeight: 500 }}>{job.recruiterSignals.reviewTime}</span>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <span style={{ fontSize: 12, color: "#64748B", flex: "0 0 120px" }}>Recruiter profile view</span>
                <span style={{ fontSize: 12, color: "#0F172A", fontWeight: 500 }}>{job.recruiterSignals.profileView}</span>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <span style={{ fontSize: 12, color: "#64748B", flex: "0 0 120px" }}>Ghosting probability</span>
                <span style={{ fontSize: 12, color: "#0F172A", fontWeight: 500 }}>{job.recruiterSignals.ghostingProbability}</span>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#2563EB", margin: "16px 0 0 0", fontStyle: "italic" }}>
              Silence at this stage is normal — it's not a negative signal.
            </p>
          </div>
        )}

        {/* Tasks Section */}
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", margin: "0 0 12px 0" }}>
          Tasks to Do
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
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
              Quick wins that improve visibility and confidence
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {job.tasks.filter(t => t.duration === "15").map((task, index) => {
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
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <p style={{ margin: 0, textDecoration: completedTasks[actualIndex] ? "line-through" : "none" }}>
                          {task.text}
                        </p>
                        {index === 0 && !completedTasks[actualIndex] && (
                          <span style={{ fontSize: 10, fontWeight: 600, color: "#2563EB", background: "#EFF6FF", padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                            Next best move
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                        {task.impact}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 30-45 minute actions */}
          <div>
            <p style={{ fontSize: 12, color: "#64748B", fontWeight: 600, margin: "0 0 12px 0", textTransform: "uppercase" }}>
              30–45 minute actions
            </p>
            <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
              Higher-impact preparation
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
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                        <p style={{ margin: 0, textDecoration: completedTasks[actualIndex] ? "line-through" : "none" }}>
                          {task.text}
                        </p>
                        {index === 0 && !completedTasks[actualIndex] && (
                          <span style={{ fontSize: 10, fontWeight: 600, color: "#2563EB", background: "#EFF6FF", padding: "2px 8px", borderRadius: 4, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                            Next best move
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 12, color: "#2563EB", margin: 0 }}>
                        {task.impact}
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
          When You Get an Interview
        </p>
        <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 12px 0" }}>
          You won't need all of this at once — prepare gradually.
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
            <div>
              <p style={{ fontSize: 13, color: "#0F172A", fontWeight: 600, margin: "0 0 4px 0" }}>
                Likely interview format
              </p>
              <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>
                HR screening call (20–30 min)<br />
                → Behavioral interview
              </p>
            </div>
            <div>
              <p style={{ fontSize: 13, color: "#0F172A", fontWeight: 600, margin: "0 0 4px 0" }}>
                Common questions for Product Analyst roles
              </p>
              <ul style={{ fontSize: 12, color: "#64748B", margin: "0 0 0 20px", paddingLeft: 0 }}>
                <li>Walk me through how you would analyze a dataset</li>
                <li>Describe a time you influenced a decision using data</li>
                <li>How would you measure success for one of our products?</li>
              </ul>
            </div>
            <div>
              <p style={{ fontSize: 13, color: "#0F172A", fontWeight: 600, margin: "0 0 4px 0" }}>
                Company-specific talking points
              </p>
              <ul style={{ fontSize: 12, color: "#64748B", margin: "0 0 0 20px", paddingLeft: 0 }}>
                <li>Acme's focus on B2B analytics aligns with my interest in data-driven decision-making</li>
                <li>Your recent expansion into Europe stands out — I'd love to help optimize that growth with data</li>
              </ul>
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
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0F172A", marginBottom: 4 }}>
                If This Application Doesn't Work Out
              </div>
              <p style={{ fontSize: 12, color: "#2563EB", margin: 0, fontWeight: 400 }}>
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
              <div>
                <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  One skill worth strengthening this week
                </p>
                <p style={{ fontSize: 13, color: "#0F172A", margin: 0 }}>
                  SQL fundamentals or data visualization with Tableau will increase your competitiveness.
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: "#64748B", margin: "0 0 8px 0", textTransform: "uppercase" }}>
                  One common mistake to avoid next time
                </p>
                <p style={{ fontSize: 13, color: "#0F172A", margin: 0 }}>
                  Don't apply without tailoring your CV first. Generic applications have 70% lower response rates.
                </p>
              </div>
              <p style={{ fontSize: 12, color: "#64748B", margin: "12px 0 0 0", fontStyle: "italic" }}>
                Rejection becomes iteration, not a setback.
              </p>
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
