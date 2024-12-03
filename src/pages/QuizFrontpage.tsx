import { NavLink } from "react-router-dom";
import quizBackground from "../assets/images/QuizFrontPage.jpg";

// Styles for the button
const buttonStyle: React.CSSProperties = {
  backgroundColor: "#000000", // Orange background
  color: "white", // White text
  border: "none",
  padding: "100px 110px", // Button padding
  fontSize: "22px", // Button text size
  fontFamily: "ModernAntiqua",
  cursor: "pointer", // Pointer cursor on hover
  borderRadius: "22px", // Rounded corners
  transition: "background-color 0.3s ease", // Smooth hover effect
};

const QuizFrontpage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${quizBackground})`, // Background image
        height: "100vh", // Full viewport height
        backgroundSize: "cover", // Cover the container
        backgroundPosition: "center", // Center the image
      }}
    >
      {/* Central content */}
      <div className="flex items-center justify-center flex-col h-full">
        <NavLink to="/quiz-page">
          <button style={buttonStyle}>CLICK TO START THE QUIZ</button>
        </NavLink>
        <NavLink
          to="/"
          className="text-center font-modernAntiqua text-white bg-black mt-3 rounded-lg w-64"
        >
          Go back
        </NavLink>
      </div>
    </div>
  );
};

// Export the component
export { QuizFrontpage };
