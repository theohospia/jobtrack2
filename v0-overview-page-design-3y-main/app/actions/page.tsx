"use client"

import { TopNav } from "@/components/top-nav"

export default function ActionsPage() {
  const secondaryActions = [
    {
      title: "Follow up with TechStart Inc",
      subtext: "10 days since application"
    },
    {
      title: "Follow up with DataFlow",
      subtext: "7 days since application"
    },
    {
      title: "Update resume for Product roles",
      subtext: "Increases match rate by ~15%"
    },
    {
      title: "Add portfolio link to LinkedIn",
      subtext: "Boosts profile visibility"
    }
  ]

  const jobCards = [
    {
      title: "Product Analyst Intern",
      company: "Acme Corp",
      location: "Paris",
      workType: "Hybrid",
      appliedDate: "3 days ago",
      nextTasks: ["Follow up email", "Prepare interview"]
    },
    {
      title: "Data Analyst",
      company: "TechStart Inc",
      location: "London",
      workType: "Remote",
      appliedDate: "5 days ago",
      nextTasks: ["Coding challenge", "Schedule call"]
    },
    {
      title: "Business Analyst",
      company: "DataFlow",
      location: "New York",
      workType: "On-site",
      appliedDate: "2 days ago",
      nextTasks: ["Review requirements", "Submit portfolio"]
    }
  ]

  return (
    <div 
      className="min-h-screen min-w-[1280px]"
      style={{ backgroundColor: '#F8FAFC' }}
    >
      <TopNav />
      
      <main 
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '32px 24px 64px 24px'
        }}
      >
        {/* Page Header */}
        <header style={{ marginBottom: 32 }}>
          <h1 
            style={{
              fontSize: 24,
              fontWeight: 600,
              lineHeight: '32px',
              color: '#0F172A'
            }}
          >
            Actions
          </h1>
        </header>

        {/* Job Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 32 }}>
          {jobCards.map((card, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: 20,
                boxShadow: '0px 1px 3px rgba(15, 23, 42, 0.06)'
              }}
            >
              {/* LinkedIn Logo */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7yd2UOOPK7AFKDClB4EMzt6XQxalPO.png"
                alt="LinkedIn"
                style={{
                  width: 48,
                  height: 48,
                  marginBottom: 12,
                  borderRadius: 8
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#0F172A',
                  marginBottom: 8
                }}
              >
                {card.title}
              </h3>

              {/* Job Info */}
              <p
                style={{
                  fontSize: 13,
                  color: '#64748B',
                  marginBottom: 12
                }}
              >
                {card.company} · {card.location} · {card.workType}
              </p>

              {/* When Applied */}
              <p
                style={{
                  fontSize: 12,
                  color: '#94A3B8',
                  marginBottom: 16,
                  paddingBottom: 16,
                  borderBottom: '1px solid #E5E7EB'
                }}
              >
                Applied {card.appliedDate}
              </p>

              {/* Next Tasks */}
              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#0F172A',
                    marginBottom: 8
                  }}
                >
                  Next tasks
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {card.nextTasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      style={{
                        fontSize: 13,
                        color: '#64748B',
                        marginBottom: taskIndex < card.nextTasks.length - 1 ? 6 : 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                      }}
                    >
                      <span style={{ color: '#2563EB' }}>·</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
