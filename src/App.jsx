import EventCard from './EventCard'
import './App.css'

const events = [
  {
    id: 1,
    name: "Houston Livestock Show & Rodeo",
    category: "Annual Festival",
    date: "March 2-21, 2027",
    location: "NRG Stadium, Houston",
    description: "One of the world's largest livestock exhibitions and rodeos featuring live concerts, carnival rides, and Texas BBQ.",
    link: "https://www.rodeohouston.com",
    image: "/images/rodeo.jpg"
  },
  {
    id: 2,
    name: "Space Center Houston",
    category: "Attraction",
    date: "Open Daily, 10AM - 5/6PM",
    location: "1601 NASA Pkwy, Houston",
    description: "Explore NASA's real mission control, touch a moon rock, and see astronaut suits from historic space missions.",
    link: "https://spacecenter.org",
    image: "/images/nasa.jpg"
  },
  {
    id: 3,
    name: "Houston Art Car Parade",
    category: "Parade & Festival",
    date: "April 10, 2027",
    location: "Downtown Houston",
    description: "The world's largest art car parade featuring over 250 wildly decorated vehicles rolling through downtown streets.",
    link: "https://www.thehoustonartcarparade.com/",
    image: "/images/parade.png"
  },
  {
    id: 4,
    name: "Houston Farmers Market",
    category: "Market",
    date: "Open Daily, 6AM–7PM",
    location: "Urban Harvest, East End",
    description: "Shop fresh local produce, handmade goods, and hot food from over 100 local vendors every weekend.",
    link: "https://thehoustonfarmersmarket.com/",
    image: "/images/market.jpg"
  },
  {
    id: 5,
    name: "Houston Museum of Natural Science",
    category: "Museum",
    date: "Open Daily, 9AM–4:30/5:30/7:30PM",
    location: "5555 Hermann Park Dr",
    description: "Dinosaur skeletons, a butterfly center, ancient Egypt exhibit, and a full planetarium all under one roof.",
    link: "https://www.hmns.org",
    image: "/images/museum.jpg"
  },
  {
    id: 6,
    name: "The Woodlands Waterway Arts Festival",
    category: "Arts Festival",
    date: "APRIL 9-11, 2027",
    location: "The Woodlands Town Center",
    description: "Over 200 juried artists display fine art and crafts along the scenic waterway just north of Houston.",
    link: "https://www.visitthewoodlands.com/events/art-events/waterway-arts-festival/",
    image: "/images/waterway.jpg"
  },
  {
    id: 7,
    name: "Houston Zoo Lights",
    category: "Holiday Event",
    date: "Mid-November to Mid-January",
    location: "6200 Hermann Park Dr",
    description: "Over two million twinkling lights transform the Houston Zoo into a magical holiday wonderland after dark.",
    link: "https://tickets.houstonzoo.org/webstore/shop/viewitems.aspx?cg=zoolights&c=zoolightsdisc",
    image: "/images/zoo.jpg"
  },
  {
    id: 8,
    name: "Minute Maid Park Tour",
    category: "Sports Tour",
    date: "Daily Tours are available year-round where available.",
    location: "501 Crawford St, Houston",
    description: "Go behind the scenes at the Houston Astros' home stadium — see the dugout, press box, and warning track.",
    link: "https://www.mlb.com/astros/ballpark/tours",
    image: "/images/minute.jpg"
  },
  {
    id: 9,
    name: "Buffalo Bayou Park Trails",
    category: "Outdoor Activity",
    date: "Open Daily, Sunrise–Sunset",
    location: "Buffalo Bayou Park, Houston",
    description: "160 acres of trails, art installations, and kayak rentals along the bayou in the heart of the city.",
    link: "https://buffalobayou.org",
    image: "/images/bayou.jpg"
  },
  {
    id: 10,
    name: "Houston Greek Festival",
    category: "Cultural Festival",
    date: "May 2027",
    location: "Annunciation Greek Orthodox Cathedral",
    description: "Authentic Greek food, live dancing, cooking demos, and pastries at one of Houston's most beloved cultural festivals.",
    link: "https://www.houstongreekfest.com",
    image: "/images/greek.png"
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <span className="header-star">★</span>
          <div>
            <p className="header-eyebrow">Your Guide to the Bayou City</p>
            <h1 className="header-title">Houston Community Events</h1>
            <p className="header-subtitle">10 things to do, see, and experience in & around Houston, TX</p>
          </div>
          <span className="header-star">★</span>
        </div>
      </header>

      <main className="main">
        <div className="grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Made with ❤️ for the Houston community · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App