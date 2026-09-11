import React, { useState, useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import {
  Bot,
  Search,
  FileCode2,
  ShieldCheck,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Terminal,
  Copy,
  Check,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AgentSimulator() {
  const scenarios = CONFIG.simulatorScenarios;
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [customQuery, setCustomQuery] = useState(scenarios[0].query);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1); // -1 = idle, 0 = search, 1 = summarize, 2 = writer, 3 = guardrail, 4 = done
  const [logs, setLogs] = useState([]);
  const [report, setReport] = useState('');
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState({ tokens: 0, latency: 0, safety: 100 });
  const timerRef = useRef(null);

  const agents = [
    { id: 0, name: 'Search Agent', role: 'Retriever Node', icon: Search, color: '#00f0ff' },
    { id: 1, name: 'Summarizer Agent', role: 'Context Reducer', icon: Sparkles, color: '#a855f7' },
    { id: 2, name: 'Writer Agent', role: 'Report Generator', icon: FileCode2, color: '#3b82f6' },
    { id: 3, name: 'Bedrock Guardrail', role: 'Policy & Safety', icon: ShieldCheck, color: '#10b981' },
  ];

  const handleSelectScenario = (index) => {
    if (isRunning) return;
    setSelectedScenarioIndex(index);
    setCustomQuery(scenarios[index].query);
    setActiveStep(-1);
    setLogs([]);
    setReport('');
  };

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setReport('');
    setCopied(false);

    const scenario = scenarios[selectedScenarioIndex] || scenarios[0];
    const newLogs = [];

    // Step 0: Search Agent
    newLogs.push(`[SYSTEM] Initializing 4-Agent LangGraph runtime... Query: "${customQuery}"`);
    newLogs.push(`[SEARCH_AGENT] Connecting to pgvector embeddings & live doc retrieval...`);
    newLogs.push(`[SEARCH_AGENT] ${scenario.agents[0].status}`);
    setLogs([...newLogs]);
    setStats({ tokens: 84, latency: 120, safety: 99.8 });

    // Step 1 after 900ms: Summarize Agent
    setTimeout(() => {
      setActiveStep(1);
      newLogs.push(`[SUMMARIZER] Clustering 12 retrieval nodes & eliminating hallucination noise...`);
      newLogs.push(`[SUMMARIZER] ${scenario.agents[1].status}`);
      setLogs([...newLogs]);
      setStats({ tokens: 236, latency: 290, safety: 99.6 });

      // Step 2 after 1900ms: Writer Agent
      setTimeout(() => {
        setActiveStep(2);
        newLogs.push(`[WRITER] Structuring report with Pydantic schema validation...`);
        newLogs.push(`[WRITER] ${scenario.agents[2].status}`);
        setLogs([...newLogs]);
        setStats({ tokens: 512, latency: 540, safety: 99.5 });

        // Step 3 after 2900ms: Bedrock Guardrail Agent
        setTimeout(() => {
          setActiveStep(3);
          newLogs.push(`[BEDROCK_GUARD] Executing AWS Bedrock content filters & PII redaction...`);
          newLogs.push(`[BEDROCK_GUARD] ${scenario.agents[3].status}`);
          setLogs([...newLogs]);
          setStats({ tokens: 684, latency: 780, safety: 99.4 });

          // Step 4 after 3800ms: Completion
          setTimeout(() => {
            setActiveStep(4);
            setIsRunning(false);
            newLogs.push(`[SYSTEM] Pipeline complete! Output verified & safe for production delivery.`);
            setLogs([...newLogs]);
            setReport(scenario.result);
            confetti({
              particleCount: 45,
              spread: 50,
              origin: { y: 0.7 },
              colors: ['#00f0ff', '#10b981', '#a855f7']
            });
          }, 900);
        }, 1000);
      }, 1000);
    }, 900);
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStep(-1);
    setLogs([]);
    setReport('');
    setStats({ tokens: 0, latency: 0, safety: 100 });
  };

  const handleCopyReport = () => {
    if (!report) return;
    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="agent-lab" className="agent-lab-section">
      <div className="section-eyebrow">
        <span className="eyebrow-num">01</span>
        <span className="eyebrow-line" />
        <span className="eyebrow-label">Interactive AI Laboratory</span>
      </div>

      <div className="agent-lab-header">
        <h2 className="section-title">Multi-Agent Pipeline Simulator</h2>
        <p className="section-desc">
          Test my autonomous <strong>4-Agent LangGraph Pipeline</strong> in real-time. Watch how prompts flow through specialized agent nodes, memory retrievers, and <strong>AWS Bedrock Guardrails</strong>.
        </p>
      </div>

      {/* Preset Topics Pill Selector */}
      <div className="scenario-chips-container">
        <span className="scenario-chips-label">Sample Architectures:</span>
        {scenarios.map((s, idx) => (
          <button
            key={idx}
            className={`scenario-chip ${selectedScenarioIndex === idx ? 'active' : ''}`}
            onClick={() => handleSelectScenario(idx)}
            disabled={isRunning}
          >
            <Sparkles size={13} />
            <span>Scenario {idx + 1}</span>
          </button>
        ))}
      </div>

      {/* Query Input Box */}
      <div className="agent-query-box">
        <div className="query-input-wrap">
          <Bot size={20} className="query-icon" />
          <input
            type="text"
            className="query-input"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            disabled={isRunning}
            placeholder="Type an AI engineering topic or choose a scenario above..."
          />
        </div>

        <div className="query-actions">
          <button
            className={`btn btn-primary run-pipeline-btn ${isRunning ? 'running' : ''}`}
            onClick={runSimulation}
            disabled={isRunning}
          >
            {isRunning ? (
              <>
                <span className="spinner-dot" />
                <span>Running Pipeline...</span>
              </>
            ) : (
              <>
                <Play size={16} fill="currentColor" />
                <span>Execute Pipeline</span>
              </>
            )}
          </button>

          {(activeStep >= 0 || logs.length > 0) && (
            <button
              className="btn btn-outline reset-btn"
              onClick={handleReset}
              disabled={isRunning}
              title="Reset Simulator"
            >
              <RotateCcw size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Node Graph */}
      <div className="agent-pipeline-graph">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          const isNodeActive = activeStep === index;
          const isNodeCompleted = activeStep > index;

          return (
            <React.Fragment key={agent.id}>
              <div
                className={`agent-node-card ${isNodeActive ? 'active' : ''} ${
                  isNodeCompleted ? 'completed' : ''
                }`}
                style={{ '--agent-accent': agent.color }}
              >
                <div className="node-status-indicator">
                  {isNodeCompleted ? (
                    <CheckCircle2 size={16} className="text-emerald" />
                  ) : isNodeActive ? (
                    <span className="pulsing-beacon" />
                  ) : (
                    <span className="idle-node-dot" />
                  )}
                  <span className="node-stage-label">Step 0{index + 1}</span>
                </div>

                <div className="node-icon-wrap">
                  <Icon size={22} color={agent.color} />
                </div>

                <div className="node-details">
                  <h4 className="node-name">{agent.name}</h4>
                  <span className="node-role">{agent.role}</span>
                </div>

                <div className="node-state-badge">
                  {isNodeCompleted
                    ? 'Verified'
                    : isNodeActive
                    ? 'Processing...'
                    : 'Standing By'}
                </div>
              </div>

              {/* Edge Cable between nodes */}
              {index < agents.length - 1 && (
                <div
                  className={`pipeline-edge ${
                    activeStep > index ? 'active-edge' : ''
                  }`}
                >
                  <div className="edge-pulse-dot" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Simulator Telemetry & Output Split */}
      <div className="simulator-output-grid">
        {/* Terminal Logs Window */}
        <div className="terminal-log-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="terminal-title">
              <Terminal size={14} />
              <span>langgraph_agent_cluster.log</span>
            </div>
            <div className="terminal-telemetry-pills">
              <span className="telemetry-pill">
                Latency: <strong>{stats.latency}ms</strong>
              </span>
              <span className="telemetry-pill">
                Safety: <strong>{stats.safety}%</strong>
              </span>
            </div>
          </div>

          <div className="terminal-body">
            {logs.length === 0 ? (
              <div className="terminal-placeholder">
                <code>$ ready &gt; Click &quot;Execute Pipeline&quot; to inspect agent execution traces...</code>
              </div>
            ) : (
              logs.map((log, i) => (
                <div key={i} className="log-line">
                  <code>{log}</code>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Structured Report Card */}
        <div className="report-output-card">
          <div className="report-header">
            <div className="report-title-wrap">
              <CheckCircle2 size={16} className="text-emerald" />
              <h4>Verified Synthesis Report</h4>
            </div>
            {report && (
              <button
                className="report-copy-btn"
                onClick={handleCopyReport}
                title="Copy Synthesis"
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            )}
          </div>

          <div className="report-content-body">
            {report ? (
              <div className="report-text-block">
                <p>{report}</p>
                <div className="report-meta-footer">
                  <span className="meta-badge">AWS Bedrock: Filter Passed</span>
                  <span className="meta-badge">Guardrail Score: 99.4%</span>
                  <span className="meta-badge">Memory: Redis + pgvector</span>
                </div>
              </div>
            ) : (
              <div className="report-waiting-state">
                <Bot size={28} className="waiting-bot-icon" />
                <p>Waiting for agent pipeline execution to compile verified findings.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

