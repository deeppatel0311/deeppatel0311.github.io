import React from "react";

export default function RenderPage({ post }: { post: { content: string } }) {
  const lines = post.content.split("\n");
  const rendered: React.ReactNode[] = [];

  let tableBuffer: string[] = [];
  let codeBuffer: string[] = [];
  let inCodeBlock = false;

  const flushTable = () => {
    if (tableBuffer.length === 0) return;
    const tableRows = tableBuffer.map((line) =>
      line
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell !== "")
    );
    rendered.push(
      <div key={rendered.length} className="overflow-x-auto mb-6">
        <table className="table-auto border-collapse border border-gray-500 w-full text-left text-white text-lg">
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border border-gray-500 px-3 py-2 ${
                      rowIndex === 0 ? "font-bold text-cyan-300" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
  };

  // Function to render inline bold text properly
  const renderBold = (text: string) => {
    const regex = /\*\*(.*?)\*\*/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(text.slice(lastIndex, match.index));
      }
      elements.push(
        <span key={match.index} className="text-cyan-300 font-bold">
          {match[1]}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements;
  };

  lines.forEach((line, index) => {
    // Handle code block start/end
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        // End of code block, render it
        rendered.push(
          <pre
            key={index}
            className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6"
          >
            <code>{codeBuffer.join("\n")}</code>
          </pre>
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        // Start of code block
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    // Headings
    if (line.startsWith("# ")) {
      flushTable();
      rendered.push(
        <h1
          key={index}
          className="text-4xl font-black text-white mb-6 mt-8 leading-tight"
        >
          {line.slice(2)}
        </h1>
      );
      return;
    }
    if (line.startsWith("## ")) {
      flushTable();
      rendered.push(
        <h2
          key={index}
          className="text-3xl font-bold text-cyan-300 mb-4 mt-8 leading-tight"
        >
          {line.slice(3)}
        </h2>
      );
      return;
    }
    if (line.startsWith("### ")) {
      flushTable();
      rendered.push(
        <h3
          key={index}
          className="text-2xl font-bold text-purple-300 mb-3 mt-6 leading-tight"
        >
          {line.slice(4)}
        </h3>
      );
      return;
    }

    // Lists
    const listMatch = line.match(/^(\s*)- (.*)/);
    if (listMatch) {
      flushTable();
      const indentLevel = listMatch[1].length / 2; // 2 spaces per level
      rendered.push(
        <li
          key={index}
          className="text-white/90 mb-2 text-lg leading-relaxed list-disc"
          style={{ marginLeft: 24 + indentLevel * 16 }} // 24px base + 16px per nested level
        >
          {renderBold(listMatch[2])}
        </li>
      );
      return;
    }

    // Tables
    if (line.includes("|")) {
      tableBuffer.push(line);
      return;
    }

    flushTable();

    // Empty line
    if (line.trim() === "") {
      rendered.push(<div key={index} className="h-4" />);
      return;
    }

    // Paragraphs with inline bold
    rendered.push(
      <p key={index} className="text-white/90 mb-4 leading-relaxed text-lg">
        {renderBold(line)}
      </p>
    );
  });

  flushTable();

  // If code block was open but file ended, flush it
  if (inCodeBlock && codeBuffer.length > 0) {
    rendered.push(
      <pre
        key={rendered.length}
        className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6"
      >
        <code>{codeBuffer.join("\n")}</code>
      </pre>
    );
  }

  return <div>{rendered}</div>;
}
