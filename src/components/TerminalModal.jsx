import React, { useState, useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import { Terminal as TermIcon, X, Minimize2, Maximize2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TerminalModal({ isOpen, onClose, toggleTheme, darkMode }) {
  const [history, setHistory] = useState([
    { text: "Abdul Rahoof OS [Version 2.5.0-ai-kernel]", type: "system" },
    { text: "Type 'help' to see available commands or 'sudo hire' to send an offer.", type: "system" }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const rawCmd = input.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();
    const newHistory = [...history, { text: `abdul@cluster:~$ ${rawCmd}`, type: "user" }];
    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    if (cmd === 'help') {
      newHistory.push({
        text: `Available Commands:
  • help        - Display this menu
  • whoami      - View Abdul's profile and background
  • skills      - List technical skills & competencies
  • projects    - View shipped production systems
  • solo        - Inspect Solo Leveling project
  • wip         - Inspect in-progress Multi-Agent AI Platform
  • contact     - Print contact credentials
  • theme       - Toggle UI theme (Dark/Light)
  • sudo hire   - Dispatch offer (Easter egg 🎉)
  • clear       - Clear terminal output
  • exit        - Close terminal session`,
        type: "output"
      });
    } else if (cmd === 'whoami' || cmd === 'bio') {
      newHistory.push({
        text: `${CONFIG.name} — ${CONFIG.title}
Location: ${CONFIG.telemetry.location}
Tagline: "${CONFIG.tagline}"
Focus: ${CONFIG.telemetry.currentFocus}`,
        type: "output"
      });
    } else if (cmd === 'skills') {
      const skillsTree = CONFIG.skills
        .map((s) => `  [${s.title}] (${s.level}%)\n    ${s.tags.join(', ')}`)
        .join('\n\n');
      newHistory.push({ text: `Skills Arsenal:\n${skillsTree}`, type: "output" });
    } else if (cmd === 'projects') {
      const projList = CONFIG.projects
        .map((p) => `  [#${p.num}] ${p.title} (${p.categoryLabel})\n      Tech: ${p.tech.join(', ')}\n      Link: ${p.live || p.code}`)
        .join('\n\n');
      newHistory.push({ text: `Shipped Projects:\n${projList}`, type: "output" });
    } else if (cmd === 'solo' || cmd === 'sololeveling') {
      const soloProj = CONFIG.projects.find((p) => p.title.toLowerCase().includes('solo'));
      if (soloProj) {
        newHistory.push({
          text: `⚔️ [#${soloProj.num}] ${soloProj.title} (${soloProj.categoryLabel})\nTech: ${soloProj.tech.join(', ')}\nLink: ${soloProj.live || soloProj.code}\nDesc: ${soloProj.desc}`,
          type: "output"
        });
      }
    } else if (cmd === 'wip' || cmd === 'upcoming') {
      newHistory.push({
        text: `Flagship Project: ${CONFIG.wip.name} (${CONFIG.wip.status} - ${CONFIG.wip.progress}%)
Tagline: ${CONFIG.wip.tagline}
Stack: ${CONFIG.wip.tech.join(', ')}`,
        type: "output"
      });
    } else if (cmd === 'contact') {
      newHistory.push({
        text: `Direct Email: ${CONFIG.contact.email}
GitHub:       ${CONFIG.contact.github}
LinkedIn:     ${CONFIG.contact.linkedin}`,
        type: "output"
      });
    } else if (cmd === 'theme') {
      toggleTheme();
      newHistory.push({
        text: `UI Theme switched to ${!darkMode ? 'Dark' : 'Light'} mode.`,
        type: "output"
      });
    } else if (cmd === 'sudo hire' || cmd === 'hire') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#10b981', '#a855f7', '#f59e0b']
      });
      newHistory.push({
        text: `ACCESS GRANTED! 🎉
Thank you for considering me! Directing to email client or shoot me a note at:
${CONFIG.contact.email}`,
        type: "success"
      });
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'exit' || cmd === 'quit') {
      onClose();
      return;
    } else {
      newHistory.push({
        text: `Command not found: "${rawCmd}". Type 'help' for available commands.`,
        type: "error"
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIdx);
          setInput(cmdHistory[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="terminal-overlay-backdrop" onClick={onClose}>
      <div
        className="terminal-modal-window"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Developer Interactive Terminal"
      >
        {/* Title Bar */}
        <div className="terminal-titlebar">
          <div className="terminal-traffic-lights">
            <button className="traffic-light red" onClick={onClose} aria-label="Close terminal" />
            <button className="traffic-light yellow" onClick={() => setHistory([])} aria-label="Clear screen" />
            <button className="traffic-light green" onClick={() => {}} aria-label="Maximize" />
          </div>

          <div className="terminal-titlebar-text">
            <TermIcon size={14} className="text-cyan" />
            <span>abdul@cluster: ~ (bash / zsh)</span>
          </div>

          <button className="terminal-exit-btn" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        {/* Content Area */}
        <div className="terminal-screen" onClick={() => inputRef.current?.focus()}>
          {history.map((h, i) => (
            <div key={i} className={`terminal-entry ${h.type}`}>
              <pre className="terminal-pre-text">{h.text}</pre>
            </div>
          ))}

          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="terminal-prompt-form">
            <span className="terminal-prompt-label">abdul@cluster:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-cmd-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

