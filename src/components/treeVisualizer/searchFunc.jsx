//SearchFunc.jsx
export default function SearchFunc(nodes, searchTerm) {
  if (!searchTerm.trim()) return nodes;

  const lower = searchTerm.toLowerCase();

  return nodes.map((n) => {
    const isMatch = n.data.label.toLowerCase().includes(lower);
    return {
      ...n,
      style: {
        ...n.style,
        border: isMatch ? "3px solid #FF5722" : n.style.border,
        boxShadow: isMatch ? "0 0 12px 3px #FF9800" : "none",
        background: n.style.background,
      },
    };
  });
}
