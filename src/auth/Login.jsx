import "../styles/Login.css";
export default function Login() {
  return (
    <div className="login-page">
        <video autoPlay muted loop className="background-video">
            <source src="/src/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    <div className="login-container">
        
        <form className="login-form">
            <h2 style={{textAlign:"center"}}> Login to Your Account</h2>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
                <label htmlFor="OTP">OTP:</label><input type="text" id="OTP" name="OTP" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    </div>
  );
}