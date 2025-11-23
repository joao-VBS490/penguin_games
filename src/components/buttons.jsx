export default function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: "12px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        background: "#1e90ff",
        color: "white",
        fontWeight: "600",
        width: "100%",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
