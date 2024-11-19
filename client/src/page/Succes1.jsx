import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Payment Successful!</h1>
            <p style={styles.message}>
                Thank you for your purchase. Your payment has been successfully processed.
            </p>
            <button style={styles.button} onClick={() => navigate("/")}>
                Go to Homepage
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f4f4f9",
    },
    heading: {
        fontSize: "2rem",
        color: "#2d6a4f",
        marginBottom: "1rem",
    },
    message: {
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "2rem",
    },
    button: {
        backgroundColor: "#1b4332",
        color: "#fff",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Success;
