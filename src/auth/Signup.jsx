import "../styles/Signup.css";
export default function Signup() {
  return (
    <div className="signup-page">
        <video autoPlay muted loop className="background-video">
            <source src="/src/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    <div className="signup-container">
        <form className="signup-form">
            <h2 style={{textAlign:"center"}}> Create Your Account</h2>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    </div>
  );
}