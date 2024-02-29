const HomePage = () => {
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "100px",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1.2rem",
      marginBottom: "20px",
    },
    link: {
      color: "#007bff", // Bootstrap's primary color, change it according to your theme
      textDecoration: "none",
      fontWeight: "bold",
    },
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={styles.heading}>Welcome to My Website!</h1>
      <p style={styles.message}>
        It looks like there's nothing to do here. Why not check out our
        Assignments page?
      </p>
    </div>
  );
};

export default HomePage;
