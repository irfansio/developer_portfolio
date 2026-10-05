'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Activity, AlertTriangle, CheckCircle2, RefreshCw, Radio, FileText, QrCode, Shield, Download } from 'lucide-react';

interface TelemetryPoint {
  time: string;
  pH: number;
  bod: number;
  tss: number;
  temp: number;
  flow: number;
}

export const TelemetryStreamSimulator: React.FC = () => {
  const [activeParam, setActiveParam] = useState<'pH' | 'bod' | 'tss' | 'temp'>('pH');
  const [intervalMode, setIntervalMode] = useState<'live' | 'hourly' | 'daily'>('live');
  const [isSimulatingBreach, setIsSimulatingBreach] = useState(false);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'qrVerifier'>('telemetry');
  const [scannedSerial, setScannedSerial] = useState('bt-800-7J66Z3');
  const [qrStatus, setQrStatus] = useState<'idle' | 'valid' | 'verified'>('verified');

  // Real-time telemetry data buffer
  const [dataPoints, setDataPoints] = useState<TelemetryPoint[]>([
    { time: '10:00:00', pH: 7.2, bod: 24.2, tss: 42.1, temp: 28.1, flow: 14.5 },
    { time: '10:00:02', pH: 7.3, bod: 24.8, tss: 41.8, temp: 28.2, flow: 14.6 },
    { time: '10:00:04', pH: 7.1, bod: 25.1, tss: 43.0, temp: 28.3, flow: 14.4 },
    { time: '10:00:06', pH: 7.4, bod: 24.5, tss: 42.5, temp: 28.1, flow: 14.7 },
    { time: '10:00:08', pH: 7.3, bod: 25.4, tss: 44.1, temp: 28.4, flow: 14.8 },
    { time: '10:00:10', pH: 7.2, bod: 24.9, tss: 43.5, temp: 28.2, flow: 14.5 },
    { time: '10:00:12', pH: 7.5, bod: 26.0, tss: 45.0, temp: 28.5, flow: 15.0 },
    { time: '10:00:14', pH: 7.3, bod: 25.2, tss: 43.8, temp: 28.3, flow: 14.6 },
  ]);

  // Telemetry stream generator
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      setDataPoints((prev) => {
        const last = prev[prev.length - 1];
        // Calculate new values with natural random jitter or breach spike
        let newPH = isSimulatingBreach
          ? +(9.4 + Math.random() * 0.4).toFixed(2)
          : +(7.0 + Math.random() * 0.6).toFixed(2);
        let newBod = isSimulatingBreach
          ? +(48.5 + Math.random() * 4.0).toFixed(1)
          : +(23.0 + Math.random() * 3.5).toFixed(1);
        let newTss = isSimulatingBreach
          ? +(85.0 + Math.random() * 8.0).toFixed(1)
          : +(40.0 + Math.random() * 5.0).toFixed(1);
        let newTemp = +(28.0 + Math.random() * 0.8).toFixed(1);
        let newFlow = +(14.0 + Math.random() * 1.2).toFixed(1);

        const newPoint: TelemetryPoint = {
          time: timeStr,
          pH: newPH,
          bod: newBod,
          tss: newTss,
          temp: newTemp,
          flow: newFlow,
        };

        const updated = [...prev.slice(1), newPoint];
        return updated;
      });
    }, 1600);

    return () => clearInterval(timer);
  }, [isSimulatingBreach]);

  const currentVal = dataPoints[dataPoints.length - 1];

  // Parameter configuration
  const paramConfig = {
    pH: {
      name: 'pH Effluent Level',
      unit: 'pH',
      safeRange: '6.5 - 8.5',
      min: 5.0,
      max: 11.0,
      isBreached: currentVal.pH < 6.5 || currentVal.pH > 8.5,
      color: '#06b6d4',
    },
    bod: {
      name: 'Biochemical Oxygen Demand',
      unit: 'mg/L',
      safeRange: '< 30.0 mg/L',
      min: 10,
      max: 60,
      isBreached: currentVal.bod > 30.0,
      color: '#10b981',
    },
    tss: {
      name: 'Total Suspended Solids',
      unit: 'mg/L',
      safeRange: '< 50.0 mg/L',
      min: 20,
      max: 100,
      isBreached: currentVal.tss > 50.0,
      color: '#f59e0b',
    },
    temp: {
      name: 'Effluent Temperature',
      unit: '°C',
      safeRange: '< 40.0 °C',
      min: 20,
      max: 50,
      isBreached: currentVal.temp > 40.0,
      color: '#a855f7',
    },
  };

  const currentConfig = paramConfig[activeParam];

  // Normalized SVG points for line chart
  const svgPoints = useMemo(() => {
    const width = 600;
    const height = 180;
    const padding = 20;

    const values = dataPoints.map((d) => d[activeParam]);
    const minVal = currentConfig.min;
    const maxVal = currentConfig.max;

    const coords = values.map((val, idx) => {
      const x = padding + (idx / (values.length - 1)) * (width - padding * 2);
      const normalized = (val - minVal) / (maxVal - minVal);
      const y = height - padding - normalized * (height - padding * 2);
      return { x, y, val };
    });

    const pathD = coords.reduce((acc, pt, i) => {
      return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
    }, '');

    return { pathD, coords };
  }, [dataPoints, activeParam, currentConfig.min, currentConfig.max]);

  return (
    <div className="w-full glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              Live Industrial Telemetry Engine
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-300 rounded border border-slate-700">
              KSPCB / CPCB Protocol V2.4
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Real-Time Parameter Telemetry &amp; Compliance Hub
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Simulated live feed of industrial effluent sensors architected with WebSockets, Redux state buffering, and instant threshold evaluation.
          </p>
        </div>

        {/* Tab switch: Telemetry vs Safetik QR */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'telemetry'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            OCEMS Stream
          </button>
          <button
            onClick={() => setActiveTab('qrVerifier')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'qrVerifier'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            Safetik QR Validator
          </button>
        </div>
      </div>

      {activeTab === 'telemetry' ? (
        <div className="pt-6 space-y-6">
          {/* Controls Bar: Parameter Picker, Intervals, Breach Simulation */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Parameter tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800/80 rounded-xl">
              {(['pH', 'bod', 'tss', 'temp'] as const).map((param) => {
                const isSelected = activeParam === param;
                const hasBreach = paramConfig[param].isBreached;
                return (
                  <button
                    key={param}
                    onClick={() => setActiveParam(param)}
                    className={`relative px-3 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-slate-800 text-white font-semibold border border-slate-700 shadow'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {hasBreach && (
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    )}
                    <span>{param.toUpperCase()}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulation & Filter Controls */}
            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-900/60 px-2.5 py-1.5 rounded-lg border border-slate-800">
                <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>Socket Ping: 18ms</span>
              </div>

              <button
                onClick={() => setIsSimulatingBreach(!isSimulatingBreach)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                  isSimulatingBreach
                    ? 'bg-red-500/20 text-red-300 border-red-500/50 shadow-lg shadow-red-500/10'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <AlertTriangle className={`w-3.5 h-3.5 ${isSimulatingBreach ? 'text-red-400 animate-bounce' : 'text-amber-400'}`} />
                <span>{isSimulatingBreach ? 'Reset Safe Stream' : 'Simulate Breach Spike'}</span>
              </button>
            </div>
          </div>

          {/* Metric Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className={`p-4 rounded-xl border transition-all ${
              currentConfig.isBreached 
                ? 'bg-red-950/20 border-red-500/40 text-red-200' 
                : 'bg-slate-900/60 border-slate-800/80 text-slate-200'
            }`}>
              <div className="text-[11px] font-mono text-slate-400">Current Value</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight mt-1 flex items-baseline gap-1">
                <span>{currentVal[activeParam]}</span>
                <span className="text-xs font-normal text-slate-400">{currentConfig.unit}</span>
              </div>
              <div className="mt-2 text-[11px] flex items-center gap-1 font-mono">
                {currentConfig.isBreached ? (
                  <span className="text-red-400 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> THRESHOLD BREACH
                  </span>
                ) : (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Nominal Compliance
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-[11px] font-mono text-slate-400">Statutory Tolerance</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-slate-200 mt-1">
                {currentConfig.safeRange}
              </div>
              <div className="mt-2 text-[11px] text-slate-400 font-mono">
                CPCB Schedule VI Standard
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-[11px] font-mono text-slate-400">Effluent Flow Rate</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300 mt-1">
                {currentVal.flow} <span className="text-xs font-normal text-slate-400">m³/hr</span>
              </div>
              <div className="mt-2 text-[11px] text-slate-400 font-mono">
                Ultrasonic Flowmeter #02
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="text-[11px] font-mono text-slate-400">Last Synced Frame</div>
              <div className="text-lg sm:text-xl font-bold font-mono text-slate-200 mt-1">
                {currentVal.time}
              </div>
              <div className="mt-2 text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Stream Active (1600ms)
              </div>
            </div>
          </div>

          {/* Live SVG Graph Visualization */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: currentConfig.color }} />
                <span className="text-white font-medium">{currentConfig.name}</span>
                <span>({currentConfig.unit})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500">Live Buffer: 8 Packets</span>
              </div>
            </div>

            {/* SVG Render */}
            <div className="w-full h-44 sm:h-52 relative">
              <svg
                viewBox="0 0 600 180"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                {/* Horizontal reference threshold line */}
                <line
                  x1="20"
                  y1={activeParam === 'pH' ? '45' : '65'}
                  x2="580"
                  y2={activeParam === 'pH' ? '45' : '65'}
                  stroke="rgba(239, 68, 68, 0.4)"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />
                <text
                  x="520"
                  y={activeParam === 'pH' ? '40' : '60'}
                  fill="rgba(239, 68, 68, 0.8)"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  Limit
                </text>

                {/* Gradient area fill */}
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={currentConfig.color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={currentConfig.color} stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Polyline / Curve */}
                <path
                  d={`${svgPoints.pathD} L ${svgPoints.coords[svgPoints.coords.length - 1].x} 160 L 20 160 Z`}
                  fill="url(#areaGradient)"
                />
                <path
                  d={svgPoints.pathD}
                  fill="none"
                  stroke={currentConfig.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data point circles */}
                {svgPoints.coords.map((pt, i) => (
                  <g key={i}>
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={i === svgPoints.coords.length - 1 ? 5 : 3}
                      fill={i === svgPoints.coords.length - 1 ? '#ffffff' : currentConfig.color}
                      stroke={currentConfig.color}
                      strokeWidth="2"
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Time labels below chart */}
            <div className="flex justify-between mt-2 pt-2 border-t border-slate-900 text-[10px] font-mono text-slate-500">
              {dataPoints.map((dp, i) => (
                <span key={i} className={i % 2 !== 0 ? 'hidden sm:inline' : ''}>
                  {dp.time}
                </span>
              ))}
            </div>
          </div>

          {/* Breach Notification Banner (if spiked) */}
          {currentConfig.isBreached && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-red-200">
                    Statutory Parameter Violation Detected
                  </div>
                  <div className="text-[11px] text-red-300/80">
                    {currentConfig.name} breached legal limit ({currentVal[activeParam]} {currentConfig.unit} vs {currentConfig.safeRange}). Automated audit ticket created.
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono px-3 py-1 rounded bg-red-900/60 text-red-300 border border-red-700/50">
                Action: SMS/Email Alert Dispatched to Plant Officer
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Safetik QR & Asset Validator Tab */
        <div className="pt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Scanned Card Simulation */}
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  Safetik Asset Cryptographic Validator
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Verified In Registry
                </span>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Asset Name:</span>
                  <span className="text-white font-semibold">SAFE Fire Extinguisher (6KG)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Batch Code:</span>
                  <span className="text-amber-400">bt-800 (Silver Batch)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Unit Serial:</span>
                  <span className="text-cyan-400">{scannedSerial}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned Facility:</span>
                  <span className="text-slate-200">Kozhikode Plant #3 (2nd Floor)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Inspection Due:</span>
                  <span className="text-emerald-400">11/21/2026 (Valid)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Geo-Coordinates:</span>
                  <span className="text-slate-400">11.2588° N, 75.7804° E</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => {
                    const sampleSerials = ['bt-800-7J66Z3', 'bt-800-2D9M2W', 'bt-800-AGLFLX'];
                    const next = sampleSerials[(sampleSerials.indexOf(scannedSerial) + 1) % sampleSerials.length];
                    setScannedSerial(next);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
                >
                  <RefreshCw className="w-3 h-3 text-cyan-400" />
                  Cycle Batch Unit
                </button>
                <span className="text-[11px] text-slate-500 font-mono">
                  Super-Admin RBAC Level 1
                </span>
              </div>
            </div>

            {/* Visual QR Label Display */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 via-slate-900/60 to-slate-950 border border-amber-500/20 text-center flex flex-col items-center justify-center">
              <div className="p-3 bg-white rounded-xl shadow-xl inline-block mb-3">
                <div className="w-28 h-28 bg-slate-900 rounded-lg flex flex-col items-center justify-center p-2 text-white">
                  <QrCode className="w-16 h-16 text-slate-100" />
                  <span className="text-[9px] font-mono text-slate-400 mt-1">{scannedSerial}</span>
                </div>
              </div>
              <h4 className="text-sm font-semibold text-white">Downloadable Batch Label</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Generated via Safetik Batch Engine with automated PDF label export and tamper-evident cryptographic checksum.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Physical Label Ready for Field Deployment
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
