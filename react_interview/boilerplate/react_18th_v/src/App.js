import React, { useState } from "react";

const FileExplorer = () => {
  const [fileData, setFileData] = useState({
    name: "root",
    isFolder: true,
    items: [
      {
        name: "public",
        isFolder: true,
        items: [
          { name: "index.html", isFolder: false },
          { name: "favicon.ico", isFolder: false },
          {
            name: "assets",
            isFolder: true,
            items: [
              { name: "logo.png", isFolder: false },
              { name: "styles.css", isFolder: false },
            ],
          },
        ],
      },
      {
        name: "src",
        isFolder: true,
        items: [
          { name: "App.js", isFolder: false },
          { name: "index.js", isFolder: false },
          {
            name: "components",
            isFolder: true,
            items: [
              { name: "Header.js", isFolder: false },
              { name: "Footer.js", isFolder: false },
              {
                name: "utils",
                isFolder: true,
                items: [
                  { name: "helpers.js", isFolder: false },
                  { name: "constants.js", isFolder: false },
                ],
              },
            ],
          },
          {
            name: "styles",
            isFolder: true,
            items: [
              { name: "main.css", isFolder: false },
              { name: "variables.css", isFolder: false },
            ],
          },
        ],
      },
      { name: "package.json", isFolder: false },
      { name: "README.md", isFolder: false },
      { name: ".gitignore", isFolder: false },
    ],
  });

  const [expandedFolders, setExpandedFolders] = useState(new Set(["root"]));
  const [selectedItem, setSelectedItem] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [renameItem, setRenameItem] = useState(null);
  const [newItemName, setNewItemName] = useState("");

  const toggleFolder = (path) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const handleContextMenu = (e, item, path) => {
    e.preventDefault();
    setContextMenu({
      x: e.pageX,
      y: e.pageY,
      item,
      path,
    });
  };

  const closeContextMenu = () => {
    setContextMenu(null);
  };

  const findAndUpdateItem = (data, path, callback) => {
    const parts = path.split("/").filter((p) => p);
    let current = data;

    for (let i = 0; i < parts.length - 1; i++) {
      if (current.items) {
        current = current.items.find((item) => item.name === parts[i + 1]);
      }
    }

    callback(current);
    return { ...data };
  };

  const handleAddItem = (isFolder) => {
    if (!contextMenu) return;

    const newItem = {
      name: isFolder ? "New Folder" : "new-file.txt",
      isFolder,
      ...(isFolder && { items: [] }),
    };

    setFileData((prevData) =>
      findAndUpdateItem(prevData, contextMenu.path, (parent) => {
        if (!parent.items) parent.items = [];
        parent.items.push(newItem);
      })
    );

    closeContextMenu();
  };

  const handleDelete = () => {
    if (!contextMenu) return;

    const pathParts = contextMenu.path.split("/").filter((p) => p);
    const parentPath = pathParts.slice(0, -1).join("/");
    const itemName = pathParts[pathParts.length - 1];

    setFileData((prevData) =>
      findAndUpdateItem(prevData, parentPath || "root", (parent) => {
        if (parent.items) {
          parent.items = parent.items.filter((item) => item.name !== itemName);
        }
      })
    );

    closeContextMenu();
  };

  const handleRename = () => {
    if (!contextMenu) return;
    setRenameItem(contextMenu.path);
    setNewItemName(contextMenu.item.name);
    closeContextMenu();
  };

  const submitRename = () => {
    if (!renameItem || !newItemName.trim()) return;

    const pathParts = renameItem.split("/").filter((p) => p);
    const parentPath = pathParts.slice(0, -1).join("/");
    const oldName = pathParts[pathParts.length - 1];

    setFileData((prevData) =>
      findAndUpdateItem(prevData, parentPath || "root", (parent) => {
        if (parent.items) {
          const item = parent.items.find((i) => i.name === oldName);
          if (item) {
            item.name = newItemName.trim();
          }
        }
      })
    );

    setRenameItem(null);
    setNewItemName("");
  };

  const renderTree = (data, path = "") => {
    const currentPath = path ? `${path}/${data.name}` : data.name;
    const isExpanded = expandedFolders.has(currentPath);
    const isRenaming = renameItem === currentPath;

    return (
      <div key={currentPath} style={{ marginLeft: path ? "20px" : "0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px 8px",
            cursor: "pointer",
            backgroundColor:
              selectedItem === currentPath ? "#e0e0e0" : "transparent",
            borderRadius: "4px",
            marginBottom: "2px",
          }}
          onClick={() => {
            if (data.isFolder) {
              toggleFolder(currentPath);
            }
            setSelectedItem(currentPath);
          }}
          onContextMenu={(e) => handleContextMenu(e, data, currentPath)}
        >
          <span style={{ marginRight: "8px", fontSize: "18px" }}>
            {data.isFolder
              ? isExpanded
                ? "📂"
                : "📁"
              : getFileIcon(data.name)}
          </span>
          {isRenaming ? (
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              onBlur={submitRename}
              onKeyPress={(e) => e.key === "Enter" && submitRename()}
              autoFocus
              style={{
                border: "1px solid #007acc",
                padding: "2px 4px",
                borderRadius: "2px",
                outline: "none",
              }}
            />
          ) : (
            <span>{data.name}</span>
          )}
        </div>
        {data.isFolder && isExpanded && data.items && (
          <div>{data.items.map((item) => renderTree(item, currentPath))}</div>
        )}
      </div>
    );
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split(".").pop().toLowerCase();
    const icons = {
      js: "📄",
      jsx: "⚛️",
      css: "🎨",
      html: "🌐",
      json: "📋",
      md: "📝",
      png: "🖼️",
      jpg: "🖼️",
      gif: "🖼️",
      svg: "🖼️",
      ico: "🖼️",
      txt: "📄",
      gitignore: "🔒",
    };
    return icons[ext] || (fileName.startsWith(".") ? "⚙️" : "📄");
  };

  return (
    <div
      style={{
        width: "400px",
        background: "#f5f5f5",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        position: "relative",
      }}
      onClick={closeContextMenu}
    >
      <h3 style={{ margin: "0 0 16px 0", fontSize: "18px", color: "#333" }}>
        📁 File Explorer
      </h3>
      <div style={{ maxHeight: "500px", overflowY: "auto" }}>
        {renderTree(fileData)}
      </div>

      {contextMenu && (
        <div
          style={{
            position: "fixed",
            top: contextMenu.y,
            left: contextMenu.x,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 1000,
            minWidth: "150px",
            padding: "4px 0",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {contextMenu.item.isFolder && (
            <>
              <div
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  ":hover": { background: "#f0f0f0" },
                }}
                onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
                onMouseLeave={(e) =>
                  (e.target.style.background = "transparent")
                }
                onClick={() => handleAddItem(true)}
              >
                📁 New Folder
              </div>
              <div
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
                onMouseLeave={(e) =>
                  (e.target.style.background = "transparent")
                }
                onClick={() => handleAddItem(false)}
              >
                📄 New File
              </div>
              <div
                style={{
                  height: "1px",
                  background: "#e0e0e0",
                  margin: "4px 0",
                }}
              ></div>
            </>
          )}
          <div
            style={{
              padding: "8px 16px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#f0f0f0")}
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
            onClick={handleRename}
          >
            ✏️ Rename
          </div>
          {contextMenu.item.name !== "root" && (
            <div
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                color: "#d32f2f",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#ffebee")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
              onClick={handleDelete}
            >
              🗑️ Delete
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileExplorer;
