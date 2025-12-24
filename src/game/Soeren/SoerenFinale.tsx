import StarConfetti from "../../components/StarConfetti";
import bgStars from "../../assets/Sternenbild.png";
import starImg from "../../assets/Stern3.png";

export default function SoerenFinale() {
  return (
    <div
      className="screen"
      style={{
        position: "relative",
        padding: 0,
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${bgStars})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dunkler Schleier, damit Text lesbar bleibt */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />

      <StarConfetti starSrc={starImg} count={70} />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: 18,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "min(520px, 92vw)",
            borderRadius: 18,
            padding: "18px 16px",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(0,0,0,0.30)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            textAlign: "center",
          }}
        >
          <img
  src={starImg}
  alt=""
  style={{
    width: 56,
    height: 56,
    marginBottom: 12,
    animation: "pulse 3s ease-in-out infinite",
    filter: "drop-shadow(0 0 12px rgba(255, 235, 120, 0.7))",
  }}
/>

<style>{`
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.95; }
    50% { transform: scale(1.06); opacity: 1; }
  }
`}</style>

          <h1 style={{ margin: 0, fontSize: 22 }}>
            Herzlichen Glückwunsch – du hast es geschafft!
          </h1>

          <p style={{ margin: "10px 0 0", opacity: 0.92 }}>
            Lieben Dank fürs Mitmachen.
          </p>

          <hr
            style={{
              margin: "16px 0",
              border: "none",
              height: 1,
              background: "rgba(255,255,255,0.16)",
            }}
          />

          <p style={{ margin: 0, fontSize: 14, opacity: 0.95, lineHeight: 1.35 }}>
            <strong>Hinweis:</strong> Dein <strong>Fundstück</strong> wartet jetzt auf dich. <br />
            Es ist versteckt <strong>unter der Behausung der Meeresbewohner</strong>. <br />
            Ab jetzt darf gesucht werden ✨
          </p>
        </div>
      </div>
    </div>
  );
}
