import { Button, AppBar, Toolbar, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "./Modal";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
    return (
      <div className="landingPage">
        <h1>Your Digital Bookshelf.</h1>
        <h2>Anytime. Anywhere.</h2>
        <Button
          onClick={() => navigate("/register")}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "black",
            borderRadius: "8px",
            textTransform: "none",
            padding: "8px 24px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              boxShadow: "none",
            },
          }}
          startIcon={<ArrowForwardIcon/> }
        >
          Get Started
        </Button>
      </div>
    );
  }
  