import React, { useMemo, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import SearchFunc from "./searchFunc";

let id = 0;

// Recursive JSON → nodes + edges
function parseJSONtoFlow(obj, parent = null, x = 0, y = 0, depth = 0) {
  const nodes = [];
  const edges = [];

  Object.entries(obj).forEach(([key, value], index) => {
    const nodeId = `n-${id++}`;
    const position = { x: x + index * 200, y: depth * 100 };

    nodes.push({
      id: nodeId,
      data: { label: key },
      position,
      style: {
        background: "#4DB6AC",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #333",
        textAlign: "center",
      },
    });

    if (parent)
      edges.push({
        id: `e-${parent}-${nodeId}`,
        source: parent,
        target: nodeId,
        animated: true,
        style: { stroke: "#999" },
      });

    if (typeof value === "object" && value !== null) {
      const child = parseJSONtoFlow(value, nodeId, x + index * 200, y + 100, depth + 1);
      nodes.push(...child.nodes);
      edges.push(...child.edges);
    } else {
      const valueId = `n-${id++}`;
      nodes.push({
        id: valueId,
        data: { label: String(value) },
        position: { x: x + index * 200, y: (depth + 1) * 100 },
        style: {
          background: "#FFCC80",
          color: "#000",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #555",
          textAlign: "center",
        },
      });
      edges.push({
        id: `e-${nodeId}-${valueId}`,
        source: nodeId,
        target: valueId,
      });
    }
  });

  return { nodes, edges };
}

export default function TreeVisual({ value }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNodes, setFilteredNodes] = useState([]);

  const { nodes, edges } = useMemo(() => parseJSONtoFlow(value), [value]);

  // Handle search click
  function handleSearchFunc() {
    const updatedNodes = SearchFunc(nodes, searchTerm);
    setFilteredNodes(updatedNodes);
  }

  // Default to all nodes before any search
  const nodesToRender = filteredNodes.length > 0 ? filteredNodes : nodes;

  return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <input
        type="text"
        placeholder="Search key or value..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px 12px",
          marginBottom: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <button
        style={{
          width: "80px",
          margin: "4px",
          borderRadius: "8px",
          backgroundColor: "#FFCC80",
          cursor: "pointer",
        }}
        onClick={handleSearchFunc}
      >
        Search
      </button>

      <ReactFlow nodes={nodesToRender} edges={edges} fitView>
        <Background gap={16} color="#ccc" />
        <Controls />
      </ReactFlow>
    </div>
  );
}
