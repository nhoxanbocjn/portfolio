import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const posts = [
  {
    id: "first-post",
    title: "My First Blog Post",
    date: "2024-01-01",
    tags: ["React", "Web Dev"],
    content: `# My First Blog Post\n\nWrite your content here...`
  },
  {
    id: "second-post",
    title: "Python Tips & Tricks",
    date: "2024-02-01",
    tags: ["Python", "Machine Learning"],
    content: `# Python Tips & Tricks\n\nWrite your content here...`
  },
];

const initNodes = [
  { id: 0, label: "Me",                ox: 0,    oy: 0,    r: 22, color: "#15cfe0", type: "core" },
  { id: 1, label: "React",             ox: -140, oy: -100, r: 14, color: "#7F77DD", type: "skill" },
  { id: 2, label: "Python",            ox: 130,  oy: -110, r: 14, color: "#7F77DD", type: "skill" },
  { id: 3, label: "Docker",            ox: -160, oy: 80,   r: 14, color: "#7F77DD", type: "skill" },
  { id: 4, label: "Node.js",           ox: 150,  oy: 90,   r: 14, color: "#7F77DD", type: "skill" },
  { id: 5, label: "My First Blog Post",ox: -90,  oy: 170,  r: 14, color: "#1D9E75", type: "post", postId: "first-post" },
  { id: 6, label: "Python Tips",       ox: 90,   oy: 160,  r: 14, color: "#1D9E75", type: "post", postId: "second-post" },
  { id: 7, label: "GitHub",            ox: -220, oy: -20,  r: 12, color: "#888780", type: "other" },
  { id: 8, label: "Machine Learning",  ox: 200,  oy: -30,  r: 12, color: "#D85A30", type: "other" },
  { id: 9, label: "Web Dev",           ox: 0,    oy: 220,  r: 12, color: "#378ADD", type: "other" },
];

const links = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
  [1,5],[1,9],[2,8],[2,6],[3,7],[4,9],[5,9],[6,8],
];

function Graph({ onSelectPost }) {
  const canvasRef = useRef(null);
  const nodesRef = useRef(initNodes.map(n => ({ ...n })));
  const dragging = useRef(null);
  const hovered = useRef(null);
  const initialized = useRef(false);

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
      if (!initialized.current) {
        nodesRef.current.forEach(n => { n.x = n.ox + W / 2; n.y = n.oy + H / 2; });
        initialized.current = true;
      }
      draw(W, H);
    }

    function draw(W, H) {
      const cW = W || canvas.offsetWidth;
      const cH = H || canvas.offsetHeight;
      ctx.clearRect(0, 0, cW, cH);
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

        if (i === 0) {
          ctx.fillStyle = "#042C53";
          ctx.font = "500 13px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("Me", n.x, n.y);
        }

        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.font = n.type === "post" ? "500 11px sans-serif" : "11px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.label, n.x, n.y + r + 14);
      });
    }

    function getPos(e) {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return [t.clientX - rect.left, t.clientY - rect.top];
    }

    let mouseDownNode = null;

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
        mouseDownNode = null;
      }
      draw();
    }

    function onMouseDown(e) {
      const [px, py] = getPos(e);
      nodesRef.current.forEach((n, i) => {
        if (Math.hypot(n.x - px, n.y - py) < n.r + 8) {
          dragging.current = i;
          mouseDownNode = i;
        }
      });
    }

    function onMouseUp(e) {
      const [px, py] = getPos(e);
      if (mouseDownNode !== null) {
        const n = nodesRef.current[mouseDownNode];
        if (Math.hypot(n.x - px, n.y - py) < n.r + 8 && n.type === "post") {
          const post = posts.find(p => p.id === n.postId);
          if (post) onSelectPost(post);
        }
      }
      dragging.current = null;
      mouseDownNode = null;
      canvas.style.cursor = "grab";
      draw();
    }

    function onMouseLeave() {
      dragging.current = null;
      hovered.current = null;
      draw();
    }

    // Use RAF to ensure layout is complete before measuring
    requestAnimationFrame(() => {
      resize();
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mousedown", onMouseDown);
      canvas.addEventListener("mouseup", onMouseUp);
      canvas.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onSelectPost]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "420px", display: "block", cursor: "grab" }}
    />
  );
}

function Blog() {
  const [selected, setSelected] = useState(null);

  return (
    <Container fluid className="blog-section" style={{ minHeight: "100vh", paddingTop: "100px", color: "white" }}>
      <Particle />
      {selected ? (
        <Container>
          <button
            onClick={() => setSelected(null)}
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
            ← Back to Blog
          </button>
          <div style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "12px",
            padding: "40px",
            border: "1px solid rgba(21,207,224,0.3)"
          }}>
            <ReactMarkdown>{selected.content}</ReactMarkdown>
          </div>
        </Container>
      ) : (
        <Container>
          <h1 style={{ textAlign: "center", color: "white", marginBottom: "10px" }}>
            Knowledge <span className="accent">Graph</span>
          </h1>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "13px", marginBottom: "20px" }}>
            Drag nodes freely · Click green nodes to open blog posts
          </p>

          <div style={{
            border: "1px solid rgba(21,207,224,0.2)",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "60px",
            background: "rgba(255,255,255,0.02)"
          }}>
            <Graph onSelectPost={setSelected} />
          </div>

          <h2 style={{ textAlign: "center", color: "white", marginBottom: "30px" }}>
            Blog <span className="accent">Posts</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {posts.map(post => (
              <div
                key={post.id}
                onClick={() => setSelected(post)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "24px",
                  border: "1px solid rgba(21,207,224,0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={e => e.currentTarget.style.border = "1px solid rgba(21,207,224,0.8)"}
                onMouseLeave={e => e.currentTarget.style.border = "1px solid rgba(21,207,224,0.2)"}
              >
                <p style={{ color: "#15cfe0", fontSize: "12px", marginBottom: "8px" }}>{post.date}</p>
                <h3 style={{ color: "white", marginBottom: "12px" }}>{post.title}</h3>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {post.tags.map(tag => (
                    <span key={tag} style={{
                      background: "rgba(21,207,224,0.1)",
                      color: "#15cfe0",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "12px"
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}
    </Container>
  );
}

export default Blog;