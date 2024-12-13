import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import ProfileCard from "./ProfileCard"; // Import ProfileCard
import saxena from "./saxena.jpg"; // Import saxena.jpg
import Login from "./LoginPage"; // Import Login component
import "./Inauguration.css"; // Import the CSS for fire effect

const Inauguration = () => {
  const [isRibbonCut, setIsRibbonCut] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showScissors, setShowScissors] = useState(false);
  const [showCuttingScissors, setShowCuttingScissors] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleRibbonCut = () => {
    setShowScissors(true);

    setTimeout(() => {
      setShowScissors(false);
      setShowCuttingScissors(true);

      setTimeout(() => {
        setIsRibbonCut(true);
        setShowCuttingScissors(false);

        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);

        setTimeout(() => {
          setShowMainContent(true);
        }, 5000);
      }, 2000);
    }, 1500);
  };

  if (showMainContent) {
    return <Login />; // Render the Login component after ribbon cutting
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f4f4f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // Stack elements vertically
      }}
    >
      {!isRibbonCut ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundImage: showCuttingScissors
              ? "none"
              : "url('/ribbon.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: 10,
          }}
          onClick={handleRibbonCut}
        >
          {showScissors && (
            <motion.img
              src="/scissors.png"
              alt="Scissors"
              initial={{ x: "-150%" }}
              animate={{ x: "80%" }}
              transition={{ duration: 1.5 }}
              style={{
                position: "absolute",
                top: "10%",
                transform: "translate(-50%, -50%)",
                height: "60%",
                zIndex: 20,
                backgroundColor: "transparent",
              }}
            />
          )}
          {showCuttingScissors && (
            <motion.img
              src="/scissor2.png"
              alt="Cutting Scissors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                zIndex: 20,
                backgroundColor: "transparent",
                objectFit: "cover",
              }}
            />
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
            zIndex: 50,
            textAlign: "center",
          }}
        >
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={300}
              recycle={false}
            />
          )}

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              color: "red",
              fontSize: "3rem",
              textShadow: "0px 0px 20px #FFF, 0px 0px 30px #FF4500",
              marginBottom: "1rem",
            }}
            className="glowing-text"
          >
            🎉 Thank You, Sir 🎉
          </motion.h1>
          <p
            style={{
              fontSize: "1.8rem",
              color: "brown",
              textShadow: "0px 0px 10px #FFF",
            }}
          >
            Inaugurating the KSR Textile Testing Online Service
          </p>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              marginTop: "20px",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "white", // Added background color for debugging
            }}
          >
            <ProfileCard
              photo={saxena} // Check image path
              name="Shri. Rajeev Saxena, IRSS"
              title="Joint Secretary"
              description="Ministry of Textiles, New Delhi"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Inauguration;
