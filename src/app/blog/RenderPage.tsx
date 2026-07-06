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
      <div key={rendered.length} className="overflow-x-auto mb-8">
        <table className="w-full text-left border-collapse">
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-white/15">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 ${
                      rowIndex === 0
                        ? "font-mono text-xs uppercase tracking-wider text-acid"
                        : "text-paper/80"
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

  const flushCode = (key: React.Key) => {
    rendered.push(
      <pre
        key={key}
        className="bg-ink-soft border border-white/10 text-paper/90 font-mono text-sm p-5 overflow-x-auto mb-8 leading-relaxed"
      >
        <code>{codeBuffer.join("\n")}</code>
      </pre>
    );
    codeBuffer = [];
  };

  // Render **bold** inline segments
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
        <span key={match.index} className="text-acid font-semibold">
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
        flushCode(index);
        inCodeBlock = false;
      } else {
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
          className="display-heading text-3xl md:text-4xl text-paper mb-6 mt-10"
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
          className="text-2xl md:text-3xl font-bold text-paper mb-4 mt-12 flex items-baseline gap-3"
        >
          <span className="text-acid font-mono text-lg" aria-hidden>
            ##
          </span>
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
          className="text-xl md:text-2xl font-bold text-acid mb-3 mt-8"
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
      const indentLevel = listMatch[1].length / 2;
      rendered.push(
        <li
          key={index}
          className="text-paper/80 mb-2 leading-relaxed list-none flex gap-3"
          style={{ marginLeft: indentLevel * 20 }}
        >
          <span className="text-acid font-mono text-sm mt-0.5" aria-hidden>
            →
          </span>
          <span>{renderBold(listMatch[2])}</span>
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
      <p key={index} className="text-paper/80 mb-4 leading-relaxed text-lg">
        {renderBold(line)}
      </p>
    );
  });

  flushTable();

  // If code block was open but file ended, flush it
  if (inCodeBlock && codeBuffer.length > 0) {
    flushCode(rendered.length);
  }

  return <div>{rendered}</div>;
}
