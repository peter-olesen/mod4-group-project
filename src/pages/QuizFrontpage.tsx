import background from "../assets/images/QuizFrontpage.jpg";


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
        backgroundImage: `url(${background})`, // Background image
        height: "100vh", // Full viewport height
        backgroundSize: "cover", // Cover the container
        backgroundPosition: "center", // Center the image
      }}
    >
      {/* Central content */}
      <div className="grid place-content-center h-full">
        <button style={buttonStyle}>WELCOME TO QUIZ</button>
      </div>
    </div>
  );
};

// Export the component
export { QuizFrontpage };
