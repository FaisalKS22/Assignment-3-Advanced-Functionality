import { useState, useEffect, useRef, useMemo } from 'react'
import volunteerImg from '../assets/image copy.png'
import kashetImg from '../assets/ChatGPT Image Feb 14, 2026, 11_46_25 PM.png'
import taskManagerImg from '../assets/rbnx-task-manager.png'

const projectsData = [
  {
    title: 'Volunteer Work Unit Web',
    description:
      'A streamlined web application designed to bridge the gap between enthusiastic volunteers and impactful events. The platform simplifies the recruitment process by providing a centralized hub for event discovery, role selection, and instant registration.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    image: volunteerImg,
    alt: 'Volunteer Work unit web screenshot',
    date: '2025-09-15',
    level: 'Advanced',
  },
  {
    title: 'Kashet App',
    description:
      'Kashet is a mobile app that helps users discover, book, and manage camping trips in Saudi Arabia. It offers reservable camping spots, essential services, interactive maps, and safety features to ensure a convenient and secure outdoor experience.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    image: kashetImg,
    alt: 'Kashet App screenshot',
    date: '2025-11-20',
    level: 'Advanced',
  },
  {
    title: 'RoboNexus App',
    description:
      'RoboNexus is a student-led initiative that unites students, researchers, and companies to advance robotics through challenges, hands-on modules, exhibitions, and interactive zones. It functions as a collaborative ecosystem driving innovation and real-world problem-solving.',
    tags: ['Flutter', 'Dart', 'Supabase'],
    image: taskManagerImg,
    alt: 'Task Manager screenshot',
    date: '2026-01-10',
    level: 'Beginner',
  },
]

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'name-az', label: 'Name A–Z' },
  { value: 'name-za', label: 'Name Z–A' },
]

const filterOptions = ['All', 'Next.js', 'Flutter', 'React', 'Python']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [levelFilter, setLevelFilter] = useState('All')
  const sectionRef = useRef(null)

  // Scroll fade-in observer
  useEffect(() => {
    const fadeElements = sectionRef.current?.querySelectorAll('.fade-in')
    if (!fadeElements) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    fadeElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()

    const filtered = projectsData.filter((project) => {
      const matchesTag =
        activeFilter === 'All' ||
        project.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()))

      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query))

      const matchesLevel = levelFilter === 'All' || project.level === levelFilter

      return matchesTag && matchesSearch && matchesLevel
    })

    // Sort the filtered results
    const sorted = [...filtered]
    switch (sortBy) {
      case 'newest':
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      case 'oldest':
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date))
        break
      case 'name-az':
        sorted.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'name-za':
        sorted.sort((a, b) => b.title.localeCompare(a.title))
        break
    }

    return sorted
  }, [activeFilter, searchQuery, sortBy, levelFilter])

  const handleClearSearch = () => {
    setSearchQuery('')
    setActiveFilter('All')
    setLevelFilter('All')
    setSortBy('newest')
  }

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A few things I've been working on</p>

        {/* Search & Filter Controls */}
        <div className="project-controls fade-in">
          <div className="search-wrapper" id="search-wrapper">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              id="project-search"
              className="search-input"
              placeholder="Search projects…"
              aria-label="Search projects"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-tags" id="filter-tags">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                data-filter={filter === 'All' ? 'all' : filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sort & Level Controls */}
          <div className="sort-level-controls">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort projects"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            <select
              className="sort-select"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              aria-label="Filter by difficulty level"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" id="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="project-card fade-in"
              data-tags={project.tags.join(',')}
            >
              <div className="card-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                  <span className="tag tag-level">{project.level}</span>
                </div>
                <p className="card-date">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="empty-state" id="empty-state">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <p>No projects found matching your search.</p>
            <button className="btn btn-outline" id="clear-search-btn" onClick={handleClearSearch}>
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
