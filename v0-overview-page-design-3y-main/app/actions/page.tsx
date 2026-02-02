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
      nextTasks: [
        { text: "Follow up email", urgency: 3 },
        { text: "Prepare interview", urgency: 2 }
      ],
      urgency: "Very urgent"
    },
    {
      title: "Data Analyst",
      company: "TechStart Inc",
      location: "London",
      workType: "Remote",
      appliedDate: "5 days ago",
      nextTasks: [
        { text: "Coding challenge", urgency: 2 },
        { text: "Schedule call", urgency: 1 }
      ],
      urgency: "Urgent"
    },
    {
      title: "Business Analyst",
      company: "DataFlow",
      location: "New York",
      workType: "On-site",
      appliedDate: "2 days ago",
      nextTasks: [
        { text: "Review requirements", urgency: 2 },
        { text: "Submit portfolio", urgency: 3 }
      ],
      urgency: "Normal"
    },
    {
      title: "UX Designer",
      company: "Creative Studios",
      location: "Berlin",
      workType: "Remote",
      appliedDate: "1 day ago",
      nextTasks: [
        { text: "Portfolio review", urgency: 1 },
        { text: "Design test", urgency: 2 }
      ],
      urgency: "Urgent"
    },
    {
      title: "Senior Developer",
      company: "TechCorp",
      location: "San Francisco",
      workType: "Hybrid",
      appliedDate: "4 days ago",
      nextTasks: [
        { text: "Phone screen", urgency: 3 },
        { text: "Technical interview", urgency: 2 }
      ],
      urgency: "Very urgent"
    },
    {
      title: "Marketing Manager",
      company: "Growth Labs",
      location: "Boston",
      workType: "Remote",
      appliedDate: "6 days ago",
      nextTasks: [
        { text: "Case study", urgency: 1 },
        { text: "Final round", urgency: 2 }
      ],
      urgency: "Normal"
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
        <header style={{ marginBottom: 24 }}>
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

        {/* Banner Image */}
        <div 
          style={{ 
            width: '100%', 
            height: 100, 
            borderRadius: 12, 
            marginBottom: 24,
            overflow: 'hidden'
          }}
        >
          <img 
            src="/actions-banner.jpg" 
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Filter Section */}
        <div style={{ 
          display: 'flex', 
          gap: 12, 
          marginBottom: 32,
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Search by Name */}
          <input
            type="text"
            placeholder="Search by job title..."
            style={{
              padding: '8px 12px',
              fontSize: 13,
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              background: '#FFFFFF',
              color: '#0F172A',
              minWidth: 200,
              transition: 'border-color 120ms ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#2563EB'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />

          {/* Filter by Urgency */}
          <select
            style={{
              padding: '8px 12px',
              fontSize: 13,
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              background: '#FFFFFF',
              color: '#0F172A',
              cursor: 'pointer',
              transition: 'border-color 120ms ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#2563EB'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          >
            <option value="">Filter by urgency</option>
            <option value="very-urgent">Very urgent</option>
            <option value="urgent">Urgent</option>
            <option value="normal">Normal</option>
          </select>

          {/* Filter by Date */}
          <select
            style={{
              padding: '8px 12px',
              fontSize: 13,
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              background: '#FFFFFF',
              color: '#0F172A',
              cursor: 'pointer',
              transition: 'border-color 120ms ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#2563EB'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          >
            <option value="">Filter by date</option>
            <option value="1-day">Last 1 day</option>
            <option value="3-days">Last 3 days</option>
            <option value="7-days">Last 7 days</option>
            <option value="all">All time</option>
          </select>
        </div>

        {/* Job Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {jobCards.map((card, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0px 1px 3px rgba(15, 23, 42, 0.06)'
              }}
            >
              {/* Top Section: Title and Urgency Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                {/* Title */}
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#0F172A',
                    margin: 0
                  }}
                >
                  {card.title}
                </h3>
                
                {/* Urgency Badge */}
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#2563EB',
                    background: '#DBEAFE',
                    padding: '4px 10px',
                    borderRadius: 16,
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  {card.urgency}
                </span>
              </div>

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
                  marginBottom: 12
                }}
              >
                Applied {card.appliedDate}
              </p>

              {/* Progress Bar and View Tasks */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {/* Tasks Label */}
                <span style={{ fontSize: 14, fontWeight: 600, color: '#0F172A', flexShrink: 0 }}>Tasks:</span>
                
                {/* Progress Bar */}
                <div style={{ flex: 1, height: 6, background: '#E5E7EB', borderRadius: 3 }}>
                  <div 
                    style={{ 
                      width: card.urgency === 'Very urgent' ? '75%' : card.urgency === 'Urgent' ? '50%' : '25%',
                      height: '100%', 
                      background: '#2563EB', 
                      borderRadius: 3 
                    }} 
                  />
                </div>
                
                {/* Arrow Icon Button */}
                <button
                  className="flex items-center justify-center cursor-pointer transition-colors rounded-lg flex-shrink-0"
                  style={{
                    background: "#2563EB",
                    color: "#FFFFFF",
                    padding: "6px 8px",
                    border: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1D4ED8"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#2563EB"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
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
          </button>
        </div>
      </main>
    </div>
  )
}
