'use client';

import React, { useState } from 'react';
import {
  Layers,
  Lock,
  Activity,
  Cloud,
  CheckCircle2,
  Server,
  Database,
  ArrowRight,
  Shield,
  Zap,
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeBlueprint, setActiveBlueprint] = useState<'rbac' | 'telemetry' | 'cloud'>('rbac');

  return (
    <section id="architecture" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Under The Hood</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            System Design &amp; Architectural Blueprints
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Examining the structural design patterns behind Mohammed Irfan&apos;s enterprise software: multi-tier access security, high-throughput WebSocket streams, and containerized AWS infrastructure.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          <button
            onClick={() => setActiveBlueprint('rbac')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              activeBlueprint === 'rbac'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/15'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>1. Multi-Tier RBAC &amp; JWT Security</span>
          </button>

          <button
            onClick={() => setActiveBlueprint('telemetry')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              activeBlueprint === 'telemetry'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/15'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>2. Real-Time Telemetry Pipeline</span>
          </button>

          <button
            onClick={() => setActiveBlueprint('cloud')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              activeBlueprint === 'cloud'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/15'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Cloud className="w-4 h-4" />
            <span>3. Cloud &amp; Docker Infrastructure</span>
          </button>
        </div>

        {/* Interactive Blueprint Display */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
          {activeBlueprint === 'rbac' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Multi-Tier Role-Based Access Control (RBAC) &amp; Token Rotation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Architected for Safetik and enterprise compliance portals to isolate tenant data across hierarchical roles.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono self-start md:self-auto">
                  Zero Trust Architecture
                </span>
              </div>

              {/* Visual Pipeline Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Stage 01</span>
                  <h4 className="text-sm font-bold text-white">Client Authentication</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Credentials submitted over TLS. Server issues short-lived JWT in HTTP-Only, SameSite cookie with refresh token in Redis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Stage 02</span>
                  <h4 className="text-sm font-bold text-white">RBAC Middleware</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Express middleware decrypts payload and evaluates tenant permission matrix against requested route (Super Admin vs Inspector).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Stage 03</span>
                  <h4 className="text-sm font-bold text-white">Tenant Isolation</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Database queries automatically inject verified `organizationId`, guaranteeing zero cross-tenant data leaks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Stage 04</span>
                  <h4 className="text-sm font-bold text-white">Audit Event Logging</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Every sensitive mutation (batch creation, QR regenerate, role assignment) streams to an immutable audit ledger.
                  </p>
                </div>
              </div>

              {/* Technical Implementation Code / Spec Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-slate-500">// Example Middleware Verification Flow in Node.js / Express</div>
                <div className="text-cyan-400">
                  const requireRole = (allowedRoles) =&gt; (req, res, next) =&gt; &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  const userRole = req.user?.role; // Verified from cryptographically signed JWT
                </div>
                <div className="pl-4 text-slate-300">
                  if (!userRole || !allowedRoles.includes(userRole)) return res.status(403).json(&#123; error: &quot;FORBIDDEN_SCOPE&quot; &#125;);
                </div>
                <div className="pl-4 text-emerald-400">
                  req.tenantScope = &#123; orgId: req.user.orgId, level: userRole &#125;;
                </div>
                <div className="pl-4 text-slate-300">next();</div>
                <div className="text-cyan-400">&#125;;</div>
              </div>
            </div>
          )}

          {activeBlueprint === 'telemetry' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Industrial Telemetry Ingestion &amp; WebSocket Broadcast Stream
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Powering real-time OCEMS pollution compliance tracking (pH, BOD, TSS, temperature) with low-latency client rendering.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-mono self-start md:self-auto">
                  &lt; 50ms Socket Broadcast
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">Input</span>
                  <h4 className="text-sm font-bold text-white">Edge Sensor Ingestion</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Industrial optical and electrochemical sensors stream telemetry over MQTT/HTTP payloads to ingestion endpoints.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">Process</span>
                  <h4 className="text-sm font-bold text-white">Threshold Evaluation</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Microservice checks sensor readings against statutory CPCB/KSPCB parameters. Spikes immediately trigger notification queues.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">Stream</span>
                  <h4 className="text-sm font-bold text-white">WebSocket Fanout</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Socket.io cluster broadcasts time-series packets to active supervisory clients grouped by industrial facility rooms.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase">Output</span>
                  <h4 className="text-sm font-bold text-white">Reactive Dashboard</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Client Redux store ingests rolling frame buffers. SVG and canvas charts update smoothly without full page re-renders.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-slate-500">// Real-Time Telemetry Payload Structure (JSON)</div>
                <div className="text-slate-300">&#123;</div>
                <div className="pl-4 text-cyan-400">&quot;stationId&quot;: <span className="text-white">&quot;IND-KL-KZK-04&quot;</span>,</div>
                <div className="pl-4 text-cyan-400">&quot;timestamp&quot;: <span className="text-white">&quot;2026-10-05T01:45:00.000Z&quot;</span>,</div>
                <div className="pl-4 text-cyan-400">&quot;metrics&quot;: &#123;</div>
                <div className="pl-8 text-emerald-400">&quot;pH&quot;: 7.34, &quot;bod&quot;: 24.8, &quot;tss&quot;: 41.2, &quot;temp&quot;: 28.3, &quot;flowRate&quot;: 14.6</div>
                <div className="pl-4 text-cyan-400">&#125;,</div>
                <div className="pl-4 text-amber-400">&quot;complianceState&quot;: <span className="text-white">&quot;NOMINAL&quot;</span>,</div>
                <div className="pl-4 text-cyan-400">&quot;signature&quot;: <span className="text-white">&quot;sha256-d41d8cd98f00b204e9800998ecf8427e&quot;</span></div>
                <div className="text-slate-300">&#125;</div>
              </div>
            </div>
          )}

          {activeBlueprint === 'cloud' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    AWS Production Cloud &amp; Docker Container Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Multi-tier containerized deployment topology ensuring high availability, fast asset delivery, and database redundancy.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono self-start md:self-auto">
                  AWS + Docker Compose
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Layer 01</span>
                  <h4 className="text-sm font-bold text-white">Edge DNS &amp; CDN</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Route 53 latency routing feeds AWS CloudFront CDN, serving cached static Next.js assets with sub-50ms TTFB worldwide.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Layer 02</span>
                  <h4 className="text-sm font-bold text-white">Container Host (EC2)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Hardened Ubuntu server hosting multi-stage Docker containers with automated restart policies and Nginx reverse proxy.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Layer 03</span>
                  <h4 className="text-sm font-bold text-white">MongoDB Atlas Cluster</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Managed multi-region replica sets with VPC peering, automated daily backups, and compound index optimization.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase">Layer 04</span>
                  <h4 className="text-sm font-bold text-white">Asset S3 Storage</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Secured AWS S3 buckets storing batch QR labels, PDF compliance reports, and safety certificates with pre-signed URLs.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-slate-500">// Production Docker Compose Configuration</div>
                <div className="text-cyan-400">services:</div>
                <div className="pl-4 text-emerald-400">api-gateway:</div>
                <div className="pl-8 text-slate-300">image: node:22-alpine</div>
                <div className="pl-8 text-slate-300">restart: unless-stopped</div>
                <div className="pl-8 text-slate-300">environment: [NODE_ENV=production, MONGO_URI, JWT_SECRET]</div>
                <div className="pl-4 text-emerald-400">web-portal:</div>
                <div className="pl-8 text-slate-300">image: nextjs-app:latest</div>
                <div className="pl-8 text-slate-300">ports: [&quot;3000:3000&quot;]</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
