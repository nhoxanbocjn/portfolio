import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";

const posts = [
  {
    id: "first-post",
    title: "My First Blog Post",
    date: "2024-01-01",
    tags: ["React", "Web Dev"],
    content: `# My First Blog Post\n\nWrite your content here...`
  },
  {
    id: "python-tips",
    title: "Python Tips & Tricks",
    date: "2024-02-01",
    tags: ["Python", "Machine Learning"],
    content: `# Python Tips & Tricks\n\nWrite your content here...`
  },
];

const nodes = [
  { id: 0, label: "Me", x: 0, y: 0, r: 22, color: "#15cfe0", type: "core" },
  { id: 1, label: "React", x: -140, y: -100, r: 14, color: "#7F77DD", type: "skill" },
  { id: 2, label: "Python", x: 130, y: -110, r: 14, color: "#7F77DD", type: "skill" },
  { id: 3, label: "Docker", x: -160, y: 80, r: 14, color: "#7F77DD", type: "skill" },
  { id: 4, label: "Node.js", x: 150, y: 90, r: 14, color: "#7F77DD", type: "skill" },
  { id: 5, label: "My First Blog Post", x: -80, y: 170, r: 13, color: "#1D9E75", type: "post", postId: "first-post" },
  { id: 6, label: "Python Tips", x: 90, y: 160, r: 13, color: "#1D9E75", type: "post", postId: "python-tips" },
  { id: 7, label: "Dashboard", x: 0, y: -180, r: 13, color: "#1D9E75", type: "project" },
  { id: 8, label: "GitHub", x: -220, y: -20, r: 12, color: "#888780", type: "other" },
  { id: 9, label: "Machine Learning", x: 200, y: -30, r: 12, color: "#D85A30", type: "other" },
  { id: 10, label: "Web Dev", x: 0, y: 220, r: 12, color: "#378ADD", type: "other" },
];

const links = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],
  [1,5],[1,7],[1,10],[2,9],[2,6],[3,8],[4,10],[5,10],[6,9],[7,1],[7,2],
];

function GraphBlog() {
  const canvasRef = useRef(null);
  const nodesRef = useRef(nodes.map(n => ({ ...n })));
  const vx = useRef(nodes.map(() => 0));
  const vy = useRef(nodes.map(() => 0));
  const dragging = useRef(null);
  const hovered = useRef(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W * devicePixelRatio;
    canvas.height = H * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // center nodes
    nodesRef.current.forEach(n => {
      n.x += W / 2;
      n.y += H / 2;
    });

    function simulate() {
      const ns = nodesRef.current;
      const k = 0.012, repel = 3500, damp = 0.82;
      for (let i = 0; i < ns.length; i++) {
        if (dragging.current === i) continue;
        let fx = 0, fy = 0;
        for (let j = 0; j < ns.length; j++) {
          if (i === j) continue;
          const dx = ns[i].x - ns[j].x;
          const dy = ns[i].y - ns[j].y;
          const d = Math.max(Math.hypot(dx, dy), 1);
          fx += (dx / d) * repel / (d * d);
          fy += (dy / d) * repel / (d * d);
        }
        links.forEach(([a, b]) => {
          const other = a === i ? b : b === i ? a : -1;
          if (other < 0) return;
          const dx = ns[other].x - ns[i].x;
          const dy = ns[other].y - ns[i].y;
          const d = Math.hypot(dx, dy);
          fx += dx * (d - 130) * k;
          fy += dy * (d - 130) * k;
        });
        fx += (W / 2 - ns[i].x) * 0.003;
        fy += (H / 2 - ns[i].y) * 0.003;
        vx.current[i] = (vx.current[i] + fx) * damp;
        vy.current[i] = (vy.current[i] + fy) * damp;
        ns[i].x = Math.max(40, Math.min(W - 40, ns[i].x + vx.current[i]));
        ns[i].y = Math.max(40, Math.min(H - 40, ns[i].y + vy.current[i]));
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const ns = nodesRef.current;
      links.forEach(([a, b]) => {
        const isHov = hovered.current === a || hovered.current === b;
        ctx.beginPath();
        ctx.moveTo(ns[a].x, ns[a].y);
        ctx.lineTo(ns[b].x, ns[b].y);
        ctx.strokeStyle = isHov ? "rgba(21,207,224,0.7)" : "rgba(21,207,224,0.18)";
        ctx.lineWidth = isHov ? 1.5 : 0.8;
        ctx.stroke();
      });
      ns.forEach((n, i) => {
        const isHov = hovered.current === i;
        const r = isHov ? n.r + 3 : n.r;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = isHov ? 1 : 0.88;
        ctx.fill();
        ctx.globalAlpha = 1;
        if (isHov && n.type === "post") {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
          ctx.strokeStyle = n.color;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = 0.4;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        ctx.fillStyle = i === 0 ? "#042C53" : "#fff";
        ctx.font = `${i === 0 ? 500 : 400} ${i === 0 ? 13 : 11}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (i === 0) ctx.fillText("Me", n.x, n.y);
        ctx.fillStyle = "#fff";
        ctx.font = "11px sans-serif";
        ctx.fillText(n.label, n.x, n.y + r + 13);
      });
    }

    function loop() {
      simulate();
      draw();
      animRef.current = requestAnimationFrame(loop);
    }

    loop();

    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return [t.clientX - rect.left, t.clientY - rect.top];
    }

    function onMouseMove(e) {
      const [px, py] = getPos(e);
      hovered.current = null;
      nodesRef.current.forEach((n, i) => {
        if (Math.hypot(n.x - px, n.y - py) < n.r + 8) hovered.current = i;
      });
      canvas.style.cursor = dragging.current !== null ? "grabbing" : hovered.current !== null ? "pointer" : "grab";
      if (dragging.current !== null) {
        nodesRef.current[dragging.current].x = px;
        nodesRef.current[dragging.current].y = py;
      }
    }

    function onMouseDown(e) {
      const [px, py] = getPos(e);
      nodesRef.current.forEach((n, i) => {
        if (Math.hypot(n.x - px, n.y - py) < n.r + 8) dragging.current = i;
      });
    }

    function onMouseUp(e) {
      const [px, py] = getPos(e);
      // click = mousedown + mouseup on same node without dragging
      nodesRef.current.forEach((n, i) => {
        if (Math.hypot(n.x - px, n.y - py) < n.r + 8 && dragging.current === i) {
          if (n.type === "post") {
            const post = posts.find(p => p.id === n.postId);
            if (post) setSelectedPost(post);
          }
        }
      });
      dragging.current = null;
      canvas.style.cursor = "grab";
    }

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", () => { dragging.current = null; hovered.current = null; });

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <Container fluid style={{ minHeight: "100vh", paddingTop: "80px", color: "white" }}>
      {selectedPost ? (
        <Container>
          <button
            onClick={() => setSelectedPost(null)}
            style={{
              background: "transparent",
              border: "1px solid #15cfe0",
              color: "#15cfe0",
              padding: "8px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "30px"
            }}
          >
            ← Back to Graph
          </button>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "12px",
            padding: "40px",
            border: "1px solid rgba(21,207,224,0.3)"
          }}>
            <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
          </div>
        </Container>
      ) : (
        <>
          <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
            Knowledge <span className="purple">Graph</span>
          </h1>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: "20px", fontSize: "14px" }}>
            Drag nodes freely · Click green nodes to read blog posts
          </p>
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "600px",
              cursor: "grab",
              display: "block"
            }}
          />
        </>
      )}
    </Container>
  );
}

export default GraphBlog;