📘 JSON Tree Visualizer

A simple, interactive JSON Tree Visualizer built with React, Vite, and React Flow.
It helps visualize any JSON data as a connected node graph — making nested structures easier to understand.


🚀 Features

✅ Live JSON parsing — paste or type your JSON data
✅ Error detection — see syntax errors instantly
✅ Tree visualization — view JSON as a parent–child node graph
✅ Search support — find keys or values (by - Node Name or Key Name)
✅ Node highlighting — searched nodes get visually highlighted with borders
✅ Default example — sample JSON shown initially
✅ Interactive UI — zoom, pan, and explore with React Flow controls

----------------------------------------------------------------------------------------------------!


🧩 Tech Stack
Technology	Purpose
React + Vite	Frontend Framework & Bundler
React Flow	Node graph visualization
CSS / Tailwind (optional)	Styling & Layout
JavaScript (ES6)	Logic & Component Development

----------------------------------------------------------------------------------------------------!

📁 src
 ┣ 📂 components
 ┃ ┣ 📂 inputComp
 ┃ ┃ ┣ inputComp.jsx         # Handles JSON input & validation
 ┃ ┃ ┗ input.css             # Styling for input UI
 ┃ ┣ 📂 treeVisualizer
 ┃ ┃ ┣ treeVisual.jsx        # Renders React Flow Tree
 ┃ ┃ ┗ searchFunc.js         # Handles search & node highlighting
 ┃ ┗ App.jsx
 ┣ main.jsx
 ┗ index.css

----------------------------------------------------------------------------------------------------!


💡 How to Use

Open the app in your browser.

You’ll see a sample JSON tree by default.

Paste your own JSON data in the text box.

Click Submit to visualize it as a tree.

Use the search bar to find any key or value — matching nodes will highlight with a colored border.

Use mouse drag / zoom to explore complex trees.

----------------------------------------------------------------------------------------------------!

🧠 Example JSON

{
  "user": {
    "name": "Alice",
    "age": 28,
    "address": {
      "city": "London",
      "zip": "E1 6AN"
    },
    "skills": ["React", "Node.js", "Python"]
  }
}


🔍 Search Examples
  Search by Key Name or Value Name 
  Like From above you search for Age or City -> London
  Search is Basically helpfull for big size of Data .



  👨‍💻 Author

Akash Mishra
📧 akashmishra983963@gmail.com
🌐 www.linkedin.com/in/akash-mishra-6b75bb197
