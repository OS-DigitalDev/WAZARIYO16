import '../styles/Home.css';
import { Link } from 'react-router-dom'; 
export default function Home() {
  return (
    <div className="home">
      
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Wazariyo</h1>
          <p>Your journey starts here</p>
          <button className="cta-button">Get Started</button>
        </div>
        </header>
      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast & Reliable</h3>
            <p>Experience lightning-fast performance with our optimized platform</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data is protected with enterprise-grade security</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Enjoy a modern and intuitive user interface</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Join thousands of users already using our platform</p>
        <button className="primary-button"> <Link to="/signup">Sign Up Now</Link></button>
    
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </section>
    </div>
  );
}
