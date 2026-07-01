import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

// ──────────────────────────────────────────────────
//  Data generators (stable across renders)
// ──────────────────────────────────────────────────

const complexityNodes = [
  { id: 1, cx: 110, cy: 140, r: 20, label: "Revenue", color: "#0ea5e9" },
  { id: 2, cx: 200, cy: 190, r: 24, label: "Cash Flow", color: "#6366f1" },
  { id: 3, cx: 140, cy: 280, r: 18, label: "Supply Chain", color: "#8b5cf6" },
  { id: 4, cx: 70, cy: 220, r: 16, label: "Invoices", color: "#06b6d4" },
  { id: 5, cx: 250, cy: 270, r: 22, label: "Growth", color: "#6366f1" },
  { id: 6, cx: 230, cy: 130, r: 14, label: "Debt", color: "#0ea5e9" },
  { id: 7, cx: 170, cy: 350, r: 16, label: "Trade Finance", color: "#8b5cf6" },
];

const capitalTiers = [
  { y: 120, h: 28, w: 72, label: "Senior", color: "#6366f1" },
  { y: 158, h: 28, w: 90, label: "Mezzanine", color: "#7c3aed" },
  { y: 196, h: 28, w: 108, label: "Growth Equity", color: "#8b5cf6" },
  { y: 234, h: 28, w: 126, label: "Structured", color: "#a78bfa" },
];

const flowLabels = [
  "CASH FLOW", "ANALYSIS", "STRUCTURING", "CAPITAL DEPLOYMENT", "GROWTH",
] as const;

// ──────────────────────────────────────────────────
//  Particle factory
// ──────────────────────────────────────────────────

const useFlowingParticles = (count: number) =>
  useMemo(() => {
    const lanes = [
      { startY: 80, endY: 90, count: 0 },
      { startY: 160, endY: 170, count: 0 },
      { startY: 240, endY: 250, count: 0 },
      { startY: 320, endY: 330, count: 0 },
      { startY: 400, endY: 410, count: 0 },
    ];
    return Array.from({ length: count }, (_, i) => {
      const laneIdx = i % lanes.length;
      const lane = lanes[laneIdx];
      const yBase = lane.startY + Math.random() * 30;
      const yDrift = (Math.random() - 0.5) * 20;
      return {
        id: i,
        startX: -20 - Math.random() * 80,
        startY: yBase,
        endX: 1020 + Math.random() * 60,
        endY: yBase + yDrift,
        size: 0.8 + Math.random() * 1.8,
        duration: 10 + Math.random() * 18,
        delay: Math.random() * 12,
        maxOpacity: 0.12 + Math.random() * 0.28,
        color: ["#0ea5e9", "#6366f1", "#8b5cf6", "#a78bfa", "#06b6d4"][laneIdx],
        blur: Math.random() > 0.75 ? 1.5 : 0,
      };
    });
  }, [count]);

// ──────────────────────────────────────────────────
//  Sub-components
// ──────────────────────────────────────────────────

/** Zone 1: Business Complexity — left 32 % */
const BusinessComplexity = () => {
  // Stable random data — pre-computed once per mount
  const stableData = useMemo(() => {
    const pairs: [typeof complexityNodes[0], typeof complexityNodes[0]][] = [];
    for (let i = 0; i < complexityNodes.length; i++)
      for (let j = i + 1; j < complexityNodes.length; j++)
        if (Math.random() > 0.45) pairs.push([complexityNodes[i], complexityNodes[j]]);

    const scatter = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      cx: 30 + Math.random() * 280,
      cy: 30 + Math.random() * 440,
      r: 0.8 + Math.random() * 1.2,
      color: ["#0ea5e9", "#6366f1", "#8b5cf6"][i % 3],
      opacity: 0.08 + Math.random() * 0.15,
    }));

    return { pairs, scatter };
  }, []);

  return (
    <g>
      {/* Interconnection web */}
      {stableData.pairs.map(([a, b]) => (
        <line
          key={`conn-${a.id}-${b.id}`}
          x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
          stroke="#6366f1" strokeWidth="0.4" opacity={0.06}
        />
      ))}

      {/* Scatter dots (data points) — stable positions */}
      {stableData.scatter.map((d) => (
        <circle
          key={`scatter-${d.id}`}
          cx={d.cx} cy={d.cy} r={d.r}
          fill={d.color} opacity={d.opacity}
        />
      ))}

      {/* Nodes with orbiting motion */}
      {complexityNodes.map((node, idx) => (
        <g key={node.id}>
          {/* Glow */}
          <motion.circle
            cx={node.cx} cy={node.cy} r={node.r * 1.6}
            fill={node.color} opacity={0.04}
            animate={{ r: [node.r * 1.4, node.r * 1.8, node.r * 1.4] }}
            transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Ring */}
          <motion.circle
            cx={node.cx} cy={node.cy} r={node.r}
            fill="none" stroke={node.color} strokeWidth="1.2" opacity={0.25}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
          />
          {/* Inner fill */}
          <circle cx={node.cx} cy={node.cy} r={node.r * 0.25} fill={node.color} opacity={0.15} />
          {/* Label */}
          <text
            x={node.cx} y={node.cy + node.r + 10}
            textAnchor="middle" fill={node.color} fontSize="6.5"
            fontWeight="700" opacity={0.35} letterSpacing="1.2"
          >
            {node.label}
          </text>
        </g>
      ))}
    </g>
  );
};

/** Zone 2: Intelligence Engine — centre 36 % */
const IntelligenceEngine = () => {
  const dotAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <g>
      {/* Radial glow */}
      <circle cx={500} cy={250} r={140} fill="url(#engineGlow)" />

      {/* Outer ring — clockwise */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        style={{ originX: "500px", originY: "250px" }}
      >
        <circle cx={500} cy={250} r={110} fill="none" stroke="#6366f1" strokeWidth="0.8" opacity={0.12} strokeDasharray="3 7" />
        <circle cx={500} cy={250} r={100} fill="none" stroke="#6366f1" strokeWidth="0.4" opacity={0.08} />
      </motion.g>

      {/* Middle ring — counter-clockwise */}
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        style={{ originX: "500px", originY: "250px" }}
      >
        <circle cx={500} cy={250} r={72} fill="none" stroke="#8b5cf6" strokeWidth="1" opacity={0.15} strokeDasharray="2 5" />
        {/* Orbiting signal dots */}
        {dotAngles.map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <motion.circle
              key={angle}
              cx={500 + 72 * Math.cos(rad)}
              cy={250 + 72 * Math.sin(rad)}
              r={2.5}
              fill="#8b5cf6"
              opacity={0.35}
              animate={{ opacity: [0.15, 0.55, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: angle / 180 }}
            />
          );
        })}
      </motion.g>

      {/* Inner ring — clockwise (fast) */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        style={{ originX: "500px", originY: "250px" }}
      >
        <circle cx={500} cy={250} r={42} fill="none" stroke="#a78bfa" strokeWidth="1.2" opacity={0.18} strokeDasharray="1.5 4" />
      </motion.g>

      {/* Central pulsing core */}
      <motion.circle
        cx={500} cy={250} r={28}
        fill="#6366f1" opacity={0.06}
        animate={{ r: [28, 38, 28], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx={500} cy={250} r={14}
        fill="#6366f1" opacity={0.15}
        animate={{ r: [14, 18, 14], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <circle cx={500} cy={250} r={5} fill="#6366f1" opacity={0.45} />

      {/* Data streams converging */}
      {[
        { d: "M 320 180 Q 410 240 470 235", color: "#0ea5e9", delay: 0.3 },
        { d: "M 320 250 Q 410 250 470 250", color: "#6366f1", delay: 0.6 },
        { d: "M 320 320 Q 410 260 470 265", color: "#8b5cf6", delay: 0.9 },
      ].map((s) => (
        <motion.path
          key={s.d}
          d={s.d}
          stroke={s.color} strokeWidth="1.5" fill="none" opacity={0.2}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: s.delay, ease: "easeOut" }}
        />
      ))}

      {/* Data streams diverging */}
      {[
        { d: "M 530 235 Q 590 240 680 180", color: "#8b5cf6", delay: 0.8 },
        { d: "M 530 250 Q 590 250 680 250", color: "#7c3aed", delay: 1.1 },
        { d: "M 530 265 Q 590 260 680 320", color: "#a78bfa", delay: 1.4 },
      ].map((s) => (
        <motion.path
          key={s.d}
          d={s.d}
          stroke={s.color} strokeWidth="1.5" fill="none" opacity={0.2}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: s.delay, ease: "easeOut" }}
        />
      ))}
    </g>
  );
};

/** Zone 3: Structured Capital — right 32 % */
const StructuredCapital = () => {
  return (
    <g>
      {/* Growth trajectory */}
      <motion.path
        d="M 720 380 Q 770 310 820 270 T 920 160 L 950 120"
        stroke="#8b5cf6" strokeWidth="2" fill="none" opacity={0.35}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
      />

      {/* Growth area fill */}
      <motion.path
        d="M 720 380 Q 770 310 820 270 T 920 160 L 950 120 L 950 380 Z"
        fill="url(#growthFill)" opacity={0.04}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Capital tiers */}
      {capitalTiers.map((tier, i) => (
        <g key={tier.label}>
          <motion.rect
            x={750 - tier.w / 2} y={tier.y}
            width={tier.w} height={tier.h} rx="3"
            fill="none" stroke={tier.color} strokeWidth="1.2" opacity={0.3}
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
          />
          <motion.rect
            x={750 - tier.w / 2} y={tier.y}
            width={tier.w * 0.35} height={tier.h} rx="3"
            fill={tier.color} opacity={0.08}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.08 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4 + i * 0.15 }}
          />
          <text
            x={750} y={tier.y + tier.h / 2 + 2.5}
            textAnchor="middle" fill={tier.color} fontSize="7"
            fontWeight="700" opacity={0.45}
          >
            {tier.label}
          </text>
        </g>
      ))}

      {/* Precision concentric circles */}
      <motion.circle
        cx={920} cy={100} r={32}
        fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity={0.15}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1.8, type: "spring", stiffness: 80 }}
      />
      <motion.circle
        cx={920} cy={100} r={22}
        fill="none" stroke="#8b5cf6" strokeWidth="0.8" opacity={0.2}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 2, type: "spring", stiffness: 80 }}
      />
      <motion.circle
        cx={920} cy={100} r={12}
        fill="#8b5cf6" opacity={0.1}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 2.2, type: "spring", stiffness: 80 }}
      />

      {/* Upward arrow indicator */}
      <motion.path
        d="M 940 70 L 950 45 L 960 70 M 950 45 L 950 85"
        stroke="#a78bfa" strokeWidth="1.5" fill="none" opacity={0.4}
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 2.5 }}
      />
      <text x={950} y={38} textAnchor="middle" fill="#a78bfa" fontSize="6"
        fontWeight="800" opacity={0.3} letterSpacing="1"
      >
        GROWTH
      </text>
    </g>
  );
};

// ──────────────────────────────────────────────────
//  Main component
// ──────────────────────────────────────────────────

const ComplexityToOrder = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const flowingParticles = useFlowingParticles(50);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center justify-center py-2">
      <motion.div
        style={{ scale: scrollScale }}
        className="relative w-full aspect-[21/9] bg-gradient-to-br from-white/[0.72] via-white/[0.55] to-[#f0eeff]/40 backdrop-blur-2xl rounded-3xl border border-white/[0.55] shadow-[0_40px_100px_-50px_rgba(31,53,95,0.15)] overflow-hidden group"
      >
        {/* ── Noise grain ── */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none noise-bg" />

        {/* ── Ambient glows ── */}
        <div className="absolute -top-[30%] -left-[10%] w-[55%] h-[55%] bg-primary/[0.06] blur-[130px] rounded-full" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[45%] h-[45%] bg-violet-500/[0.05] blur-[130px] rounded-full" />
        <div className="absolute top-[30%] left-[30%] w-[40%] h-[60%] bg-indigo-500/[0.04] blur-[160px] rounded-full" />

        {/* ── Main SVG ── */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full relative z-10 select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="complexityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="clarityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <radialGradient id="engineGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#6366f1" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="growthFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Architectural grid ── */}
          <g opacity="0.025">
            {Array.from({ length: 21 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={500}
                stroke="#000" strokeWidth="0.5"
              />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={`h${i}`} x1={0} y1={i * 50} x2={1000} y2={i * 50}
                stroke="#000" strokeWidth="0.5"
              />
            ))}
          </g>

          {/* ── Zone divider lines (subtle) ── */}
          <line x1={320} y1={40} x2={320} y2={460} stroke="#6366f1" strokeWidth="0.5" opacity={0.04} strokeDasharray="2 6" />
          <line x1={680} y1={40} x2={680} y2={460} stroke="#8b5cf6" strokeWidth="0.5" opacity={0.04} strokeDasharray="2 6" />

          {/* ── Zone 1: Business Complexity ── */}
          <BusinessComplexity />

          {/* ── Zone 2: Intelligence Engine ── */}
          <IntelligenceEngine />

          {/* ── Zone 3: Structured Capital ── */}
          <StructuredCapital />

          {/* ── Flowing particles ── */}
          {flowingParticles.map((p) => (
            <motion.circle
              key={p.id}
              r={p.size}
              fill={p.color}
              initial={{ cx: p.startX, cy: p.startY, opacity: 0 }}
              animate={{
                cx: p.endX,
                cy: p.endY,
                opacity: [0, p.maxOpacity, p.maxOpacity, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
              style={p.blur ? { filter: `blur(${p.blur}px)` } : undefined}
            />
          ))}
        </svg>

        {/* ── Bottom flow labels ── */}
        <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex items-center justify-center gap-1 sm:gap-3 md:gap-4 px-4">
          {flowLabels.map((label, i) => (
            <div key={label} className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <motion.span
                className="text-[6px] sm:text-[7px] md:text-[8px] tracking-[0.25em] font-bold uppercase whitespace-nowrap"
                style={{
                  color: i < 1 ? "#0ea5e9" : i < 3 ? "#6366f1" : "#8b5cf6",
                  opacity: 0.35,
                }}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 0.35, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5 + i * 0.12, duration: 0.4 }}
              >
                {label}
              </motion.span>
              {i < flowLabels.length - 1 && (
                <motion.span
                  className="text-[6px] sm:text-[7px]"
                  style={{ color: "#6366f1", opacity: 0.15 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ delay: 3 + i * 0.12 }}
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>

        {/* ── Top-left title ── */}
        <motion.div
          className="absolute top-3 left-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.3em] uppercase text-indigo-400/40">
            From Complexity to Capital Clarity
          </span>
        </motion.div>

        {/* ── Zone badges ── */}
        <motion.div
          className="absolute top-3 right-4 flex gap-3 sm:gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {["Complexity", "Engine", "Clarity"].map((z) => (
            <span
              key={z}
              className="text-[6px] sm:text-[7px] font-bold tracking-[0.15em] uppercase"
              style={{
                color:
                  z === "Complexity"
                    ? "#0ea5e9"
                    : z === "Engine"
                    ? "#6366f1"
                    : "#8b5cf6",
                opacity: 0.3,
              }}
            >
              {z}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        .noise-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default ComplexityToOrder;
