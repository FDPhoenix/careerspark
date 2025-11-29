import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 60 60"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const x1 = 30 + Math.cos(angle) * 18;
          const y1 = 30 + Math.sin(angle) * 18;
          const x2 = 30 + Math.cos(angle) * 26;
          const y2 = 30 + Math.sin(angle) * 26;

          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </svg>

      <div className="text-2xl font-serif leading-5 text-white">
        <div>Career</div>
        <div>Spark</div>
      </div>
    </div>
  );
}
