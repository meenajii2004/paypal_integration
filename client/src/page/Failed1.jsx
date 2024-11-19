import React from "react";
import { useNavigate } from "react-router-dom";

const Failed = (props) => {
    const navigate = useNavigate();

    

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Payment Failed</h1>
            <p style={styles.message}>
                Unfortunately, your payment could not be processed or was canceled. Please try again.
            </p>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => navigate("/")}>
                    Go to Homepage
                </button>
            </div>
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
        backgroundColor: "#fdf2f2",
    },
    heading: {
        fontSize: "2rem",
        color: "#d32f2f",
        marginBottom: "1rem",
    },
    message: {
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "2rem",
    },
    buttonContainer: {
        display: "flex",
        gap: "1rem",
    },
    button: {
        backgroundColor: "#d32f2f",
        color: "#fff",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Failed;
