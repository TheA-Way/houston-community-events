import './EventCard.css'

function EventCard({ event }) {
  return (
    <div className="card">
        <div className="card-img-wrap">
            <img src={event.image} alt={event.name} className="card-img" />
        </div>
        <div className="card-body">
            <span className="card-category">{event.category}</span>
            <h2 className="card-name">{event.name}</h2>
            <div className="card-meta">
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
            </div>
            <p className="card-description">{event.description}</p>
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="card-button">
                Learn More →
            </a>
        </div>
    </div>
  )
}

export default EventCard