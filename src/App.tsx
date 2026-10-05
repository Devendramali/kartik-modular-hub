import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Instagram, Mail, MapPin, Menu, Phone, X } from 'lucide-react';

const images = {
  hero: 'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchen: 'https://images.pexels.com/photos/39829584/pexels-photo-39829584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kitchenAlt: 'https://images.pexels.com/photos/6489104/pexels-photo-6489104.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  living: 'https://images.pexels.com/photos/33559373/pexels-photo-33559373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bedroom: 'https://images.pexels.com/photos/39829559/pexels-photo-39829559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bedroomAlt: 'https://images.pexels.com/photos/8135416/pexels-photo-8135416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  material: 'https://images.pexels.com/photos/5089125/pexels-photo-5089125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  grain: 'https://images.pexels.com/photos/314071/pexels-photo-314071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const services = [
  { number: '01', title: 'Modular Kitchens', text: 'Thoughtful planning, refined finishes and everyday ease.', image: images.kitchen },
  { number: '02', title: 'Living Spaces', text: 'Furniture that brings people together, beautifully.', image: images.living },
  { number: '03', title: 'Bedroom Furniture', text: 'Quietly luxurious spaces designed around you.', image: images.bedroom },
  { number: '04', title: 'Custom Wardrobes', text: 'Intelligent storage, tailored to your rhythm.', image: images.bedroomAlt },
];

const projects = [
  { title: 'The Olive Kitchen', location: 'Nandurbar · 2024', category: 'Modular Kitchen', image: images.kitchen },
  { title: 'Warmth In Frame', location: 'Shahada · 2024', category: 'Living Room', image: images.living },
  { title: 'The Calm Suite', location: 'Nandurbar · 2023', category: 'Bedroom', image: images.bedroom },
  { title: 'Quiet Geometry', location: 'Dhule · 2023', category: 'Wardrobes', image: images.bedroomAlt },
];


const galleryItems = [
  {
    id: 1,
    title: 'Modern Olive Kitchen',
    category: 'Modular Kitchen',
    location: 'Nandurbar',
    image: images.kitchen,
  },
  {
    id: 2,
    title: 'Warm Living Space',
    category: 'Living Room',
    location: 'Shahada',
    image: images.living,
  },
  {
    id: 3,
    title: 'Calm Bedroom',
    category: 'Bedroom',
    location: 'Nandurbar',
    image: images.bedroom,
  },
  {
    id: 4,
    title: 'Custom Wardrobe',
    category: 'Wardrobes',
    location: 'Dhule',
    image: images.bedroomAlt,
  },
  {
    id: 5,
    title: 'Contemporary Kitchen',
    category: 'Modular Kitchen',
    location: 'Nandurbar',
    image: images.kitchenAlt,
  },
  {
    id: 6,
    title: 'Material & Finish',
    category: 'Details',
    location: 'Kartik Modular Hub',
    image: images.material,
  },
  {
    id: 7,
    title: 'Natural Wood Detail',
    category: 'Details',
    location: 'Kartik Modular Hub',
    image: images.grain,
  },
  {
    id: 8,
    title: 'Elegant Interior',
    category: 'Living Room',
    location: 'Maharashtra',
    image: images.hero,
  },
];

const testimonials = [
  { quote: 'They understood our lifestyle before they designed our kitchen. Every detail feels considered, and the finish is exceptional.', name: 'Riya & Amit Patil', place: 'Nandurbar, Maharashtra' },
  { quote: 'From the first sketch to installation, the team was thoughtful, transparent and genuinely invested in getting it right.', name: 'Neha Joshi', place: 'Shahada, Maharashtra' },
  { quote: 'Our living room finally feels like us. Beautiful work, honest guidance and craftsmanship we can see every day.', name: 'Kunal Deshmukh', place: 'Nandurbar, Maharashtra' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [activeGallery, setActiveGallery] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextProject = () => setActiveProject((current) => (current + 1) % projects.length);
  const previousProject = () => setActiveProject((current) => (current - 1 + projects.length) % projects.length);
  const nextTestimonial = () => setActiveTestimonial((current) => (current + 1) % testimonials.length);

  const galleryCategories = ['All', 'Modular Kitchen', 'Living Room', 'Bedroom', 'Wardrobes', 'Details'];

  const filteredGallery =
    galleryFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryFilter);

  const closeGallery = () => setActiveGallery(null);

  return (
    <div className="site-shell">
      <div className={`loader ${scrolled ? 'loader-hidden' : ''}`} aria-hidden="true"><img src="/images/download.jpg" alt="" /><span>KMH / 2026</span></div>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="Kartik Modular Hub home"><img src="/images/logo.png" alt="Kartik Modular Hub" /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {['About', 'Services', 'Projects', 'Gallery', 'Process', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="header-cta" href="tel:+917620661692"><Phone size={15} /> <span>Call us</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <span className="menu-kicker">KARTIK MODULAR HUB / NAVIGATION</span>
        <div className="mobile-links">{['Home', 'About', 'Services', 'Projects', 'Gallery', 'Process', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight /></a>)}</div>
        <p>Nandurbar, Maharashtra<br /><a href="tel:+917620661692">+91 76206 61692</a></p>
      </div>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src={images.hero} alt="Elegant modern modular kitchen interior" />
          <div className="hero-overlay" />
          <div className="hero-copy reveal-up">
            <div className="eyebrow light"><span /> Premium modular furniture</div>
            <h1>Design your<br /><em>dream space.</em></h1>
            <p>Premium kitchens and custom furniture, crafted around the way you live.</p>
            <div className="hero-actions"><a className="button button-light" href="#projects">Explore our work <ArrowDownRight size={17} /></a><a className="text-link light-link" href="#contact">Get a free consultation <ArrowRight size={16} /></a></div>
          </div>
          <div className="hero-foot"><span>01 — 04</span><span className="line" /><span>Scroll to explore <ArrowDownRight size={15} /></span></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-label">01 / The studio</div>
          <div className="intro-grid">
            <div className="intro-image image-wrap"><img src={images.kitchenAlt} alt="Open contemporary kitchen and living interior" /><span className="image-note">A home, made personal.<br />Nandurbar / India</span></div>
            <div className="intro-copy"><div className="eyebrow"><span /> A considered approach</div><h2>Crafting spaces<br />that <em>feel like you.</em></h2><p>At Kartik Modular Hub, we transform everyday spaces into beautifully designed, functional environments. Every project is designed around your lifestyle, made with precision, and finished with care.</p><a className="text-link" href="#contact">Discover our approach <ArrowRight size={17} /></a><div className="stats"><div><strong>10<span>+</span></strong><small>Years experience</small></div><div><strong>100<span>+</span></strong><small>Spaces transformed</small></div><div><strong>100<span>%</span></strong><small>Made with care</small></div></div></div>
          </div>
        </section>

        <section className="services section-pad" id="services"><div className="section-label">02 / What we make</div><div className="section-heading"><div><div className="eyebrow"><span /> Our expertise</div><h2>Designed beautifully.<br /><em>Built to last.</em></h2></div><p>From the first conversation to the final detail, we make furniture that works harder and lives better.</p></div><div className="service-grid">{services.map((service) => <a className="service-card" href="#contact" key={service.number}><img src={service.image} alt={service.title} /><div className="service-shade" /><div className="service-content"><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight className="service-arrow" /></div></a>)}</div></section>

        <section className="projects section-pad" id="projects"><div className="section-label">03 / Selected work</div><div className="section-heading project-head"><div><div className="eyebrow"><span /> Spaces we've transformed</div><h2>Made for living.<br /><em>Made to last.</em></h2></div><div className="project-controls"><button onClick={previousProject} aria-label="Previous project"><ChevronLeft /></button><span>0{activeProject + 1} <i>/</i> 0{projects.length}</span><button onClick={nextProject} aria-label="Next project"><ChevronRight /></button></div></div><div className="project-stage"><div className="project-image image-wrap"><img src={projects[activeProject].image} alt={projects[activeProject].title} /><span className="project-index">0{activeProject + 1}</span></div><div className="project-info"><span className="eyebrow">{projects[activeProject].category}</span><h3>{projects[activeProject].title}</h3><p>{projects[activeProject].location}</p><a className="text-link" href="#contact">View project <ArrowRight size={17} /></a></div></div></section>


        <section className="gallery section-pad" id="gallery">
          <div className="section-label">04 / Visual collection</div>

          <div className="gallery-heading">
            <div>
              <div className="eyebrow">
                <span /> Our gallery
              </div>
              <h2>
                Spaces worth<br />
                <em>remembering.</em>
              </h2>
            </div>

            <p>
              Explore kitchens, living rooms, bedrooms and custom furniture
              crafted by Kartik Modular Hub.
            </p>
          </div>

          <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={galleryFilter === category ? 'active' : ''}
                onClick={() => setGalleryFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item, index) => (
              <button
                type="button"
                className={`gallery-card gallery-card-${(index % 6) + 1}`}
                key={item.id}
                onClick={() => setActiveGallery(item)}
                aria-label={`Open ${item.title}`}
              >
                <img src={item.image} alt={item.title} />
                <span className="gallery-card-overlay" />
                <span className="gallery-card-number">
                  0{index + 1}
                </span>
                <span className="gallery-card-content">
                  <small>{item.category}</small>
                  <strong>{item.title}</strong>
                  <span>{item.location}</span>
                </span>
                <span className="gallery-card-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </button>
            ))}
          </div>
        </section>

        {activeGallery && (
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeGallery.title}
            onClick={closeGallery}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              <X />
            </button>

            <div
              className="gallery-lightbox-inner"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="gallery-lightbox-image">
                <img src={activeGallery.image} alt={activeGallery.title} />
              </div>

              <div className="gallery-lightbox-info">
                <span>{activeGallery.category}</span>
                <h3>{activeGallery.title}</h3>
                <p>{activeGallery.location}</p>
                <a className="button button-light" href="#contact" onClick={closeGallery}>
                  Start a similar project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}

        <section className="feature feature-kitchen"><div className="feature-image image-wrap"><img src={images.kitchen} alt="Green and wood modular kitchen" /></div><div className="feature-copy"><div className="eyebrow light"><span /> The kitchen collection</div><h2>The heart of<br /><em>every home.</em></h2><p>Where morning rituals, long conversations and everyday life come together. Designed around your rhythm, down to the last hinge.</p><a className="button button-outline-light" href="#contact">Design your kitchen <ArrowRight size={16} /></a></div><div className="hotspot hotspot-one"><b>01</b><span>Premium materials</span></div><div className="hotspot hotspot-two"><b>02</b><span>Smart storage</span></div></section>

        <section className="editorial section-pad"><div className="section-label">05 / The collection</div><div className="editorial-grid"><div className="editorial-copy"><div className="eyebrow"><span /> Living, thoughtfully</div><h2>Comfort meets<br /><em>character.</em></h2><p>Spaces with a point of view. Warm timber, quiet colours and furniture that lets the room breathe.</p><div className="feature-list">{['TV units & display', 'Sofas & seating', 'Storage systems', 'Custom furniture'].map((item) => <span key={item}><Check size={14} /> {item}</span>)}</div><a className="text-link" href="#contact">Explore living spaces <ArrowRight size={17} /></a></div><div className="editorial-images"><img className="editorial-main" src={images.living} alt="Warm contemporary living room" /><img className="editorial-small" src={images.material} alt="Wood material detail" /><span>Layered textures / considered details</span></div></div></section>

        <section className="dark-section why" id="process"><div className="section-label">06 / The difference</div><div className="dark-heading"><div><div className="eyebrow light"><span /> Why Kartik?</div><h2>A better way<br />to <em>live in.</em></h2></div><p>Good design is not decoration. It is the feeling of everything being in the right place.</p></div><div className="why-grid">{[['01', 'Experience & expertise'], ['02', 'Premium materials'], ['03', 'Custom design'], ['04', 'Quality craftsmanship']].map(([number, title]) => <div className="why-card" key={number}><span>{number}</span><h3>{title}</h3><ArrowUpRight /></div>)}</div></section>

        <section className="process section-pad"><div className="section-label">07 / How it works</div><div className="process-heading"><div className="eyebrow"><span /> From idea to reality</div><h2>One clear process.<br /><em>Beautiful results.</em></h2></div><div className="timeline">{[['01', 'Consultation', 'We listen to how you live.'], ['02', 'Site measurement', 'Every dimension, considered.'], ['03', '3D design', 'See your space take shape.'], ['04', 'Making & install', 'Crafted, delivered, finished.']].map(([num, title, text]) => <div className="timeline-item" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

        <section className="testimonial section-pad"><div className="section-label">08 / Kind words</div><div className="testimonial-grid"><div><div className="eyebrow"><span /> What our clients say</div><h2>Spaces that<br /><em>stay with you.</em></h2><div className="quote-mark">“</div></div><div className="quote-content"><div className="stars">★★★★★</div><blockquote>{testimonials[activeTestimonial].quote}</blockquote><p><strong>{testimonials[activeTestimonial].name}</strong><br />{testimonials[activeTestimonial].place}</p><div className="quote-controls"><button onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}><ChevronLeft /></button><button onClick={nextTestimonial}><ChevronRight /></button></div></div></div></section>

        <section className="cta" id="contact"><img src={images.bedroomAlt} alt="Refined modern bedroom interior" /><div className="cta-overlay" /><div className="cta-copy"><div className="eyebrow light"><span /> Begin your project</div><h2>Let's create<br /><em>your dream space.</em></h2><p>Tell us what you're imagining. We'll help turn your idea into a beautifully designed reality.</p><a className="button button-light" href="https://wa.me/917620661692">WhatsApp us <ArrowRight size={16} /></a></div></section>

        <section className="contact section-pad"><div className="section-label">09 / Contact</div><div className="contact-grid"><div><div className="eyebrow"><span /> Let's talk about your space</div><h2>Bring your<br /><em>vision home.</em></h2><div className="contact-details"><p><MapPin size={16} /> Nandurbar, Maharashtra</p><p><Phone size={16} /><a href="tel:+917620661692">+91 76206 61692</a></p><p><Instagram size={16} /><a href="https://www.instagram.com/kartik_furniture_9/" target="_blank" rel="noreferrer">@kartik_furniture_9</a></p><p><Mail size={16} /><a href="mailto:hello@kartikmodularfurniture.com">hello@kartikmodularfurniture.com</a></p></div></div><form onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}><div className="form-row"><label>Name<input required placeholder="Your name" /></label><label>Phone<input required placeholder="Your number" /></label></div><label>Email<input type="email" placeholder="you@email.com" /></label><label>What can we help with?<select defaultValue=""><option value="" disabled>Select a service</option><option>Modular kitchen</option><option>Living room furniture</option><option>Bedroom furniture</option><option>Complete interiors</option></select></label><label>Tell us a little about your space<textarea rows={3} placeholder="A few words about your project..." /></label><button className="button button-dark" type="submit">{formSent ? 'Thank you — we’ll be in touch' : 'Request a consultation'} <ArrowRight size={16} /></button></form></div></section>
      </main>

      <footer><div className="footer-top"><a className="brand footer-brand" href="#home"><img src="/images/logo.png" alt="Kartik Modular Hub" /></a><p>Premium modular kitchens<br />& furniture, made personal.</p><div className="footer-links"><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a><a href="#gallery">Gallery</a></div></div><div className="footer-bottom"><span>© 2026 Kartik Modular Hub</span><span>Nandurbar · Maharashtra · India</span><span>Made for the way you live.</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/917620661692" aria-label="Chat on WhatsApp"><span>WhatsApp</span><ArrowUpRight size={18} /></a>
    </div>
  );
}

export default App;
