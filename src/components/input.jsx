export default function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: "16px", width: "100%" }}>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontWeight: "500",
        }}
      >
        {label}
      </label>

      <input
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #aaa",
        }}
        {...props}
      />
    </div>
  );
}
