import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { bgRecords } from './bgData';
import './styles.css';
import './compliance.css';
import './theme.css';
import './v2.css';
import './real-data.css';

const v2Columns = ['New Template', 'Standard Template', 'Approved-1', 'Approved-2', 'Approved-3', 'Approved-4', 'Approved-5', 'Approved-N'];
const templateLabels = {
  'New Template': 'New Template',
  'Standard Template': 'Standard Template',
  'Approved-1': 'DFL-BG',
  'Approved-2': 'TATA-BG',
  'Approved-3': 'Amrita-BG',
  'Approved-4': 'Capacite-BG',
  'Approved-5': 'Shapoorji-BG',
  'Approved-N': 'Man Vastucon-BG',
};
const v2Clauses = [
  ['Beneficiary', 'match', 'DCM Shriram Ltd.'],
  ['Guarantee amount', 'match', '₹ 18,40,00,000'],
  ['Effective date', 'match', '15 Sep 2026'],
  ['Expiry date', 'modified', '14 Sep 2027'],
  ['Claim period', 'missing', '3 months after expiry'],
  ['Invocation', 'match', 'Written claim + proof of default'],
  ['Governing law', 'match', 'Laws of India · Delhi courts'],
  ['Amendment / variation', 'modified', 'Prior written consent required'],
  ['Assignment', 'missing', 'Not expressly stated'],
  ['Notice of claim', 'added', 'Notice by email and courier'],
].map(([title, status, text], index) => ({
  id: `Clause-${index + 1}`,
  title,
  cells: Object.fromEntries(v2Columns.map((column, columnIndex) => [column, [columnIndex === 0 ? status : columnIndex === 1 ? 'match' : (index === 3 && columnIndex > 3 ? 'match' : status), text]])),
}));

function getV2Stats(column, clauses = v2Clauses) {
  const counts = { match: 0, missing: 0, modified: 0, added: 0 };
  clauses.forEach(clause => { counts[clause.cells[column][0]] += 1; });
  return { ...counts, total: clauses.length, percentage: clauses.length ? Math.round((counts.match / clauses.length) * 100) : 0 };
}

function Icon({ name, size = 16 }) {
  const paths = {
    search: <><circle cx="10.8" cy="10.8" r="6.7"/><path d="m16 16 5 5"/></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></>,
    help: <><circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.5 1.5c-.9 1-2.1 1.2-2.1 2.7M12 16.7h.01"/></>,
    chevron: <path d="m7 9 5 5 5-5"/>,
    arrow: <><path d="M4 12h16M13 5l7 7-7 7"/></>,
    refresh: <><path d="M20 11a8 8 0 0 0-14.5-4L4 9"/><path d="M4 4v5h5M4 13a8 8 0 0 0 14.5 4L20 15"/><path d="M20 20v-5h-5"/></>,
    grid: <><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></>,
    sidebar: <><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M9 5v14"/><path d="m6.5 9 1.5 1.5L6.5 12"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
    moon: <path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function validationFor(record) {
  return record.comparison?.validation || {};
}

function findingsFor(record) {
  const validation = validationFor(record);
  const findings = [...(validation.key_findings || [])];
  const known = findings.map(f => String(f.category || '').toLowerCase());
  (validation.missing_clauses || []).forEach((clause, index) => {
    const label = String(clause);
    if (!known.some(category => category.includes(label.toLowerCase()) || label.toLowerCase().includes(category))) {
      findings.push({
        category: label,
        status: 'MISSING',
        standard_clause: label,
        submitted_clause: 'Not identified in the submitted BG',
        approved_precedent: false,
        precedent_source: null,
        impact: 'HIGH',
        recommendation: 'Add or confirm this clause against the standard template.',
        generated: true,
        id: `generated-${index}`,
      });
    }
  });
  return findings.map((finding, index) => ({ ...finding, id: finding.id || `${record.id}-${index}` }));
}

function metricsFor(record) {
  const validation = validationFor(record);
  const findings = findingsFor(record);
  const modified = findings.filter(f => f.status === 'MODIFIED').length;
  const missing = findings.filter(f => f.status === 'MISSING').length;
  const aligned = findings.filter(f => f.status === 'COMPLIANT' || f.approved_precedent).length;
  return { findings, modified, missing, aligned, total: findings.length, score: validation.score ?? record.overallScore, risk: validation.risk_level || record.riskLevel, status: validation.overall_status || record.status };
}

function formatDate(value) {
  if (!value) return '—';
  return new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(value));
}

function compactClause(value) {
  const text = String(value || 'Not provided').replace(/\s+/g, ' ').trim();
  if (text.length <= 185) return text;
  return `${text.slice(0, 182).replace(/\s+\S*$/, '')}…`;
}

function humanizeClause(value) {
  return String(value || '').replace(/[_-]+/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase());
}

function v1MatchEntries(record, metrics) {
  const validation = validationFor(record);
  const aliases = {
    beneficiary_details: ['beneficiary'],
    guarantee_amount: ['amount'],
    validity_period: ['expiry', 'validity'],
    invocation_clause: ['invocation', 'invoking'],
    governing_law: ['governing'],
    dispute_resolution: ['dispute'],
    payment_terms: ['payment'],
    unconditional_clause: ['unconditional'],
  };
  return Object.entries(validation.detailed_comparison || {}).map(([key, value]) => {
    const related = metrics.findings.find(finding => (aliases[key] || []).some(alias => String(finding.category).toLowerCase().includes(alias)));
    const matched = !/non-compliant|not aligned|missing/i.test(String(value));
    const standardMatches = matched ? 1 : 0;
    const approvedMatches = matched && related?.approved_precedent ? 1 : 0;
    const displayStatus = related?.status === 'ADDED' ? 'added' : related?.status === 'MISSING' || !matched ? 'missing' : related?.status === 'MODIFIED' ? 'modified' : 'matched';
    return {
      key,
      clause: related?.category || humanizeClause(key),
      clauseText: related?.submitted_clause || related?.standard_clause || value,
      standardMatches,
      approvedMatches,
      status: matched ? 'MATCHED' : 'REVIEW',
      displayStatus,
    };
  });
}

function detailedComparisonFindings(record, metrics) {
  const validation = validationFor(record);
  const entries = v1MatchEntries(record, metrics);
  const aliases = {
    beneficiary_details: ['beneficiary'],
    guarantee_amount: ['amount'],
    validity_period: ['expiry', 'validity'],
    invocation_clause: ['invocation', 'invoking'],
    governing_law: ['governing'],
    dispute_resolution: ['dispute'],
    payment_terms: ['payment'],
    unconditional_clause: ['unconditional'],
  };
  return entries.map(entry => {
    const related = metrics.findings.find(finding => (aliases[entry.key] || []).some(alias => String(finding.category).toLowerCase().includes(alias)));
    const standardMatched = entry.status === 'MATCHED';
    return {
      ...(related || {}),
      id: `${record.id}-${entry.key}`,
      category: entry.clause,
      status: related?.status || (standardMatched ? 'COMPLIANT' : 'MISSING'),
      standard_clause: related?.standard_clause || validation.detailed_comparison?.[entry.key] || 'Standard clause available in source validation.',
      submitted_clause: related?.submitted_clause || validation.detailed_comparison?.[entry.key] || 'Submitted clause available in source validation.',
      approved_precedent: entry.approvedMatches > 0,
      standardMatched,
      approvedMatch: entry.approvedMatches > 0,
    };
  });
}

function backwardMatchEntries(record, metrics) {
  const comparisonFindings = detailedComparisonFindings(record, metrics);
  const standardOnlyClauses = [
    {
      id: `${record.id}-standard-claim-notice`,
      category: 'Claim Submission Notice',
      standard_clause: 'Any claim under this Guarantee shall be submitted to the Bank in writing before the expiry date, together with the supporting notice of default.',
      submitted_clause: 'Not identified in the submitted BG.',
      recommendation: 'Add the standard written claim-notice requirement to the submitted BG.',
    },
    {
      id: `${record.id}-standard-assignment`,
      category: 'Assignment and Transfer',
      standard_clause: 'This Guarantee shall not be assigned or transferred without the prior written consent of the Bank and the Employer.',
      submitted_clause: 'Not identified in the submitted BG.',
      recommendation: 'Add the standard assignment and transfer restriction.',
    },
  ];
  return [
    ...comparisonFindings.map(finding => ({
      ...finding,
      clauseText: finding.standard_clause,
      standardMatches: finding.standardMatched ? 1 : 0,
      approvedMatches: 0,
      status: finding.standardMatched ? 'MATCHED' : 'MISSING',
      displayStatus: finding.standardMatched ? 'matched' : 'missing',
    })),
    ...standardOnlyClauses.map(finding => ({
      ...finding,
      status: 'MISSING',
      displayStatus: 'missing',
      clauseText: finding.standard_clause,
      standardMatches: 0,
      approvedMatches: 0,
      standardMatched: false,
      approvedMatch: false,
      impact: 'HIGH',
      approved_precedent: false,
    })),
  ];
}

function realV2Clauses(record, metrics) {
  const validation = validationFor(record);
  const entries = v1MatchEntries(record, metrics);
  const aliases = {
    beneficiary_details: ['beneficiary'],
    guarantee_amount: ['amount'],
    validity_period: ['expiry', 'validity'],
    invocation_clause: ['invocation', 'invoking'],
    governing_law: ['governing'],
    dispute_resolution: ['dispute'],
    payment_terms: ['payment'],
    unconditional_clause: ['unconditional'],
  };
  return entries.map((entry, index) => {
    const related = metrics.findings.find(finding => (aliases[entry.key] || []).some(alias => String(finding.category).toLowerCase().includes(alias)));
    const baseStatus = related?.status === 'MISSING' ? 'missing' : related?.status === 'MODIFIED' ? 'modified' : entry.status === 'REVIEW' ? 'missing' : 'match';
    const standardStatus = entry.status === 'MATCHED' ? 'match' : 'missing';
    const submitted = related?.submitted_clause || validation.detailed_comparison?.[entry.key] || 'Submitted clause available in source validation.';
    const standard = related?.standard_clause || validation.detailed_comparison?.[entry.key] || 'Standard clause available in source validation.';
    const cells = { 'New Template': [baseStatus, compactClause(submitted)], 'Standard Template': [standardStatus, compactClause(standard)] };
    v2Columns.slice(2).forEach(column => {
      const approvedStatus = entry.approvedMatches > 0 ? 'match' : entry.status === 'MATCHED' ? 'modified' : 'missing';
      cells[column] = [approvedStatus, approvedStatus === 'match' ? 'Approved precedent match' : compactClause(standard)];
    });
    return { id: `Real-Clause-${index + 1}`, title: entry.clause, cells };
  });
}

function TemplateMatchSummary({ entries, totalClauses, checkedClauses = totalClauses, title = 'New Template clause summary', mode = 'forward' }) {
  const backward = mode === 'backward';
  const matched = entries.filter(entry => entry.status === 'MATCHED').length;
  const standardMatches = entries.reduce((total, entry) => total + entry.standardMatches, 0);
  const approvedMatches = entries.reduce((total, entry) => total + entry.approvedMatches, 0);
  const summaryDescription = backward ? `Compare ${checkedClauses} new-template clauses against all ${totalClauses} standard-template clauses.` : 'See how many standard and approved BG templates match each new-template clause.';
  const summaryCount = backward ? `${matched}/${checkedClauses} new-template clauses matched · ${totalClauses} standard total` : `${matched}/${totalClauses} clauses matched`;
  return <section className="template-match-summary"><div className="template-match-head"><div><h2>{title}</h2><p>{backward ? 'See every standard-template clause and whether it is matched in the new template.' : 'See how many standard and approved BG templates match each new-template clause.'}</p></div><span>{matched}/{totalClauses} {backward ? 'standard clauses matched' : 'clauses matched'}</span></div><div className="template-match-stats">{backward ? <><div><small>STANDARD TEMPLATE</small><strong>{totalClauses}</strong><span>Total clauses</span></div><div><small>NEW TEMPLATE MATCHES</small><strong>{matched}</strong><span>Matched in submitted BG</span></div><div><small>STANDARD-ONLY GAPS</small><strong>{totalClauses - matched}</strong><span>Not found in new template</span></div></> : <><div><small>NEW TEMPLATE</small><strong>{totalClauses}</strong><span>Total clauses</span></div><div><small>STANDARD MATCHES</small><strong>{standardMatches}</strong><span>Clause matches</span></div><div><small>APPROVED BG MATCHES</small><strong>{approvedMatches}</strong><span>Clause-to-BG matches</span></div></>}</div><div className="template-match-list">{entries.map((entry, index) => { const totalFound = backward ? entry.standardMatches : entry.standardMatches + entry.approvedMatches; const status = entry.displayStatus || (entry.status === 'MATCHED' ? 'matched' : 'missing'); return <div className={`template-match-row template-match-${status}`} key={`${entry.clause}-${index}`}><div className="template-match-copy"><strong>{entry.clause}</strong><small>{compactClause(entry.clauseText)}</small></div><span className="template-match-count">{totalFound} found</span></div>; })}</div></section>;
}

function BackwardTemplateMatchSummary({ entries, checkedClauses }) {
  const matched = entries.filter(entry => entry.status === 'MATCHED').length;
  const totalClauses = entries.length;
  return <section className="template-match-summary"><div className="template-match-head"><div><h2>Standard Template clause summary</h2><p>Compare {checkedClauses} new-template clauses against all {totalClauses} standard-template clauses.</p></div><span>{matched}/{checkedClauses} new-template clauses matched · {totalClauses} standard total</span></div><div className="template-match-stats template-match-stats-backward"><div><small>STANDARD TEMPLATE</small><strong>{totalClauses}</strong><span>Total clauses</span></div><div><small>NEW TEMPLATE CHECKED</small><strong>{checkedClauses}</strong><span>Clauses compared</span></div><div><small>MATCHED IN NEW TEMPLATE</small><strong>{matched}</strong><span>Clauses aligned</span></div><div><small>STANDARD-ONLY GAPS</small><strong>{totalClauses - matched}</strong><span>Not found in new template</span></div></div><div className="template-match-list">{entries.map((entry, index) => <div className={`template-match-row template-match-${entry.displayStatus || 'missing'}`} key={`${entry.clause}-${index}`}><div className="template-match-copy"><strong>{entry.clause}</strong><small>{compactClause(entry.clauseText)}</small></div><span className="template-match-count">{entry.standardMatches} found</span></div>)}</div></section>;
}

function App() {
  const [viewMode, setViewMode] = useState('v1');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [direction, setDirection] = useState('forward');
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState('');

  const record = bgRecords[0];
  const bgType = record.bgType;
  const metrics = metricsFor(record);
  const validation = validationFor(record);

  const showToast = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2200); };

  const lightTheme = theme === 'light';
  return <div className={`workspace ${sidebarCollapsed ? 'sidebar-collapsed' : ''} ${lightTheme ? 'light-theme' : 'dark-theme'}`}>
    <aside className="sidebar-static">
      <div className="sidebar-brand"><div className="sidebar-logo">DCM</div><div><strong>DCM Shriram</strong><span>BG Validator</span></div></div>
      <div className="sidebar-section-label">WORKSPACE</div>
      <nav className="sidebar-nav-static"><div className={`sidebar-nav-item bg-nav-item ${viewMode === 'v1' ? 'active' : ''}`} onClick={() => { setViewMode('v1'); setSelected(null); }}><Icon name="grid" size={17}/><span>BG Comparison</span><b>LIVE</b></div><div className={`sidebar-nav-item bg-nav-item ${viewMode === 'v2' ? 'active' : ''}`} onClick={() => { setViewMode('v2'); setSelected(null); }}><Icon name="grid" size={17}/><span>BG Comparison v2</span><b>NEW</b></div></nav>
      <div className="sidebar-status"><span className="status-dot"></span><span>Real data preview</span></div>
    </aside>

    <div className="app-shell-content">
      <header className="app-header">
        <div className="header-center"><button className="sidebar-toggle" onClick={() => setSidebarCollapsed(value => !value)} aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}><Icon name="sidebar" size={16}/></button><span className="header-path">Finance &amp; Secretarial</span><span className="path-slash">/</span><strong>{viewMode === 'v1' ? 'BG Comparison' : 'BG Comparison v2'}</strong></div>
        <div className="header-actions"><button className="theme-toggle" onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${lightTheme ? 'dark' : 'light'} theme`} title={`Switch to ${lightTheme ? 'dark' : 'light'} theme`}><Icon name={lightTheme ? 'moon' : 'sun'} size={15}/><span>{lightTheme ? 'Dark' : 'Light'}</span></button><div className="avatar">RM</div></div>
      </header>

      <main className="main-content">{viewMode === 'v1' ? <>
        <div className="page-top"><div><div className="eyebrow">DOCUMENT ANALYSIS · REAL BG DATA</div><h1>Bank Guarantee comparison</h1><p>Review the submitted BG against the standard template and approved precedent signals.</p></div><div className="page-actions"><button className="outline-button" onClick={() => showToast('Real BG comparison refreshed')}><Icon name="refresh" size={15}/> Refresh</button><button className="blue-button" onClick={() => showToast('Comparison export prepared')}><Icon name="download" size={15}/> Export comparison</button></div></div>

        <div className="top-tabs"><button className={direction === 'forward' ? 'active' : ''} onClick={() => { setDirection('forward'); setSelected(null); }}><span className="tab-index">01</span><span><strong>Forward tracing</strong><small>Submitted BG → Standard Template</small></span></button><button className={direction === 'backward' ? 'active' : ''} onClick={() => { setDirection('backward'); setSelected(null); }}><span className="tab-index">02</span><span><strong>Backward tracing</strong><small>Standard Template → Submitted BG</small></span></button></div>

        {direction === 'backward' ? <BackwardTemplateMatchSummary entries={backwardMatchEntries(record, metrics)} checkedClauses={Object.keys(validation.detailed_comparison || {}).length || metrics.total} /> : <TemplateMatchSummary entries={v1MatchEntries(record, metrics)} totalClauses={Object.keys(validation.detailed_comparison || {}).length || metrics.total} />}

        <ComparisonSummary record={record} metrics={metrics} validation={validation} direction={direction} selected={selected} onSelect={setSelected}/>
        {selected ? <ClauseDetails record={record} metrics={metrics} direction={direction} selected={selected} onClear={() => setSelected(null)} /> : <div className="empty-details"><div className="empty-mark"><Icon name="grid" size={22}/></div><div><strong>Clause details will appear here</strong><p>Select a summary cell to inspect the real submitted and standard wording.</p></div><Icon name="arrow" size={17}/></div>}
      </> : <ComparisonV2 bgType={bgType} initialDirection={direction} record={record} metrics={metrics} />}
      </main>
      {toast && <div className="toast"><span>✓</span>{toast}</div>}
    </div>
  </div>;
}

function ComparisonV2({ bgType, initialDirection, record, metrics }) {
  const [traceDirection, setTraceDirection] = useState(initialDirection);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const directionLabel = traceDirection === 'forward' ? 'Forward tracing' : 'Backward tracing';
  const clauses = realV2Clauses(record, metrics);
  const summaryColumns = traceDirection === 'backward' ? ['New Template', 'Standard Template'] : v2Columns.slice(1);
  const matrixColumns = traceDirection === 'backward' ? v2Columns.slice(0, 2) : v2Columns;
  return <>
    <div className="page-top"><div><div className="eyebrow">DOCUMENT ANALYSIS · V2</div><h1>Bank Guarantee comparison v2</h1><p>Review every template in one row, then compare clause status and match percentage below.</p></div><div className="page-actions"><button className="outline-button"><Icon name="refresh" size={15}/> Refresh</button><button className="blue-button"><Icon name="download" size={15}/> Export comparison</button></div></div>
    <div className="top-tabs"><button className={traceDirection === 'forward' ? 'active' : ''} onClick={() => { setTraceDirection('forward'); setSelectedTemplate(null); }}><span className="tab-index">01</span><span><strong>Forward tracing</strong><small>New Template → Standard Template</small></span></button><button className={traceDirection === 'backward' ? 'active' : ''} onClick={() => { setTraceDirection('backward'); setSelectedTemplate(null); }}><span className="tab-index">02</span><span><strong>Backward tracing</strong><small>Standard Template → New Template</small></span></button></div>
    <TemplateMatchSummary entries={v1MatchEntries(record, metrics)} totalClauses={clauses.length} />
    <section className="v2-summary-card"><div className="v2-summary-title"><div><h2>{directionLabel} summary</h2><p>{record.fileName} · real validation findings grouped in the v2 comparison layout.</p></div><span>{bgType} · {clauses.length} clauses</span></div><div className="v2-summary-scroll"><table className="v2-summary-table"><thead><tr><th>COMPARISON</th>{summaryColumns.map((column, index) => <th key={column} className={column === 'Standard Template' ? 'v2-standard-col' : ''}><span>{column === 'Standard Template' ? 'REFERENCE' : traceDirection === 'backward' ? 'SUBMITTED' : 'APPROVED PRECEDENT'}</span><strong>{templateLabels[column] || column}</strong></th>)}</tr></thead><tbody><tr><th><strong>Clause status</strong><span>Click a column to inspect</span></th>{summaryColumns.map(column => { const stats = getV2Stats(column, clauses); return <td key={column}><button className={`v2-summary-cell ${selectedTemplate === column ? 'selected' : ''}`} onClick={() => setSelectedTemplate(column)}><div className="v2-metric-row"><span className="v2-metric-match">Matched <b>{stats.match}</b></span><span className="v2-metric-modified">Modified <b>{stats.modified}</b></span><span className="v2-metric-missing">Missing <b>{stats.missing}</b></span><span className="v2-metric-added">Added <b>{stats.added}</b></span></div><div className="v2-score-line"><strong>{stats.percentage}%</strong><span>match</span><i><b style={{ width: `${stats.percentage}%` }}></b></i></div></button></td>; })}</tr></tbody></table></div></section>
    {selectedTemplate ? <V2ClauseMatrix selectedTemplate={selectedTemplate} columns={matrixColumns} clauses={clauses} /> : <div className="v2-empty"><Icon name="grid" size={21}/><span>Click any template column above to display its clause-level comparison.</span></div>}
  </>;
}

function V2ClauseMatrix({ selectedTemplate, columns, clauses }) {
  return <section className="v2-clause-section"><div className="v2-clause-head"><div><h2>Clause comparison</h2><p>{templateLabels[selectedTemplate] || selectedTemplate} selected · green matched, yellow modified, red missing or not matched.</p></div><span className="v2-selected-label">{getV2Stats(selectedTemplate, clauses).percentage}% total match</span></div><div className="v2-clause-scroll"><table className="v2-clause-table"><thead><tr><th className="v2-new-template-header"><span>New Template</span></th>{columns.slice(1).map(column => { const stats = getV2Stats(column, clauses); return <th key={column} className={column === selectedTemplate ? 'selected-column' : ''}><span>{templateLabels[column] || column}</span><strong>{stats.percentage}%</strong><small>{stats.match}/{stats.total} matched</small></th>; })}</tr></thead><tbody>{clauses.map(clause => <tr key={clause.id}><th className="v2-new-template-clause"><span>{clause.id}</span><strong>{clause.cells['New Template'][1]}</strong></th>{columns.slice(1).map(column => { const [status, text] = clause.cells[column]; const matchPercentage = status === 'match' ? 100 : status === 'modified' ? 60 : status === 'added' ? 40 : 0; return <td key={column} className={`v2-status-cell v2-${status} ${column === selectedTemplate ? 'selected-column' : ''}`}><strong>{text}</strong><small>{status === 'match' ? 'MATCHED' : status === 'modified' ? 'MODIFIED' : status === 'missing' ? 'MISSING' : 'ADDED'} · {matchPercentage}%</small></td>; })}</tr>)}</tbody></table></div></section>;
}

function ComparisonSummary({ record, metrics, validation, direction, selected, onSelect }) {
  const detailedEntries = v1MatchEntries(record, metrics);
  const backwardEntries = direction === 'backward' ? backwardMatchEntries(record, metrics) : [];
  const backwardMatchedCount = backwardEntries.filter(entry => entry.status === 'MATCHED').length;
  const backwardGapCount = backwardEntries.length - backwardMatchedCount;
  const standardMatchCount = detailedEntries.reduce((total, entry) => total + entry.standardMatches, 0);
  const approvedMatchCount = detailedEntries.reduce((total, entry) => total + entry.approvedMatches, 0);
  const approvedColumns = v2Columns.slice(2).map(column => ({ id: column, eyebrow: 'APPROVED PRECEDENT', title: templateLabels[column] || column }));
  const columns = (direction === 'backward' ? [
    { id: 'submitted', eyebrow: 'NEW TEMPLATE', title: record.bgReferenceId },
  ] : [
    { id: 'standard', eyebrow: 'REFERENCE', title: 'Standard Template' },
    ...approvedColumns,
  ]);
  const valuesFor = (rowId, columnId) => {
    if (columnId === 'submitted') {
      return { aligned: `${metrics.aligned} findings`, modified: `${metrics.modified} clauses`, missing: `${metrics.missing} clauses`, result: `${metrics.score}% · ${metrics.risk}` }[rowId];
    }
    if (columnId === 'standard') {
      return direction === 'backward'
        ? { aligned: `${backwardMatchedCount} matched`, modified: `${metrics.modified} to review`, missing: `${backwardGapCount} gaps`, result: validation.overall_status || record.status }[rowId]
        : { aligned: `${standardMatchCount} matched`, modified: `${metrics.modified} to review`, missing: `${metrics.missing} gaps`, result: validation.overall_status || record.status }[rowId];
    }
    return { aligned: `${approvedMatchCount} matches`, modified: `${metrics.modified} reviewed`, missing: `${metrics.missing} gaps`, result: `${metrics.score}% · ${metrics.risk}` }[rowId];
  };
  const rows = [
    { id: 'aligned', label: 'Approved / aligned', hint: 'Precedent-supported findings', tone: 'match' },
    { id: 'modified', label: 'Modified clauses', hint: 'Wording differs from reference', tone: 'new' },
    { id: 'missing', label: 'Missing clauses', hint: 'Not found or incomplete', tone: 'different' },
    { id: 'result', label: 'Validation result', hint: 'Score and workflow state', tone: 'compliance', compliance: true },
  ];
  return <section className="summary-card"><div className="summary-card-head"><div><h2>{record.bgType} comparison summary <span className="summary-record-id">{record.bgReferenceId}</span></h2><p>{validation.summary || 'Comparison generated from the submitted BG validation record.'}</p></div><div className="summary-help"><span className="click-icon">⌁</span> Select a cell to inspect</div></div><div className="summary-scroll"><table className="summary-table real-summary-table"><thead><tr><th className="summary-label-col"><span>COMPARISON SUMMARY</span><strong>Clause status</strong></th>{columns.map((column, index) => <th key={column.id} className={index === 0 ? 'new-column' : index === 1 ? 'standard-column' : ''}><span>{column.eyebrow}</span><strong>{column.title}</strong></th>)}</tr></thead><tbody>{rows.map(row => <tr key={row.id}><th><strong>{row.label}</strong><span>{row.hint}</span></th>{columns.map(column => <td key={`${row.id}-${column.id}`}><button className={`summary-cell ${row.tone} ${row.compliance ? `compliance-${String(metrics.risk).toLowerCase()}` : ''} ${selected?.rowId === row.id && selected?.columnId === column.id ? 'selected' : ''}`} onClick={() => onSelect({ rowId: row.id, columnId: column.id })}><span>{valuesFor(row.id, column.id)}</span><small>{row.compliance ? 'View validation' : 'View clauses'}</small></button></td>)}</tr>)}</tbody></table></div><div className="summary-foot"><span><strong>{record.fileName}</strong> · v{record.version || 1}</span><span>Updated {formatDate(record.updatedAt)} · {record.uploadedByName || 'Uploaded by system'}</span></div></section>;
}

function ClauseDetails({ record, metrics, direction, selected, onClear }) {
  const [detailFinding, setDetailFinding] = useState(null);
  const sourceComparisonFindings = detailedComparisonFindings(record, metrics);
  const comparisonFindings = direction === 'backward' ? backwardMatchEntries(record, metrics) : sourceComparisonFindings;
  const backwardStandardContext = direction === 'backward' && selected.columnId === 'standard';
  const approvedContext = selected.columnId.startsWith('Approved-');
  const filterByRow = (finding) => {
    if (selected.rowId === 'aligned') return finding.status === 'COMPLIANT' || finding.approved_precedent;
    if (selected.rowId === 'modified') return finding.status === 'MODIFIED';
    if (selected.rowId === 'missing') return finding.status === 'MISSING';
    return true;
  };
  const filterByColumn = (finding) => !selected.columnId.startsWith('Approved-') || finding.status === 'COMPLIANT' || finding.approved_precedent;
  const findings = backwardStandardContext
    ? selected.rowId === 'aligned'
      ? comparisonFindings.filter(finding => finding.standardMatched)
      : selected.rowId === 'missing'
        ? comparisonFindings.filter(finding => !finding.standardMatched)
        : selected.rowId === 'result'
          ? comparisonFindings
          : sourceComparisonFindings.filter(finding => finding.status === 'MODIFIED')
    : selected.rowId === 'aligned'
      ? selected.columnId === 'standard'
        ? comparisonFindings.filter(finding => finding.standardMatched)
        : approvedContext
          ? comparisonFindings.filter(finding => finding.approvedMatch)
          : metrics.findings.filter(finding => finding.status === 'COMPLIANT' || finding.approved_precedent)
      : selected.rowId === 'missing'
        ? metrics.findings.filter(finding => finding.status === 'MISSING')
        : metrics.findings.filter(finding => filterByRow(finding) && filterByColumn(finding));
  const title = backwardStandardContext && selected.rowId === 'aligned' ? 'Standard clauses matched in new template' : backwardStandardContext && selected.rowId === 'missing' ? 'Standard clauses missing from new template' : selected.rowId === 'aligned' ? 'Matched clauses' : selected.rowId === 'result' ? 'Validation findings' : selected.rowId.charAt(0).toUpperCase() + selected.rowId.slice(1) + ' clauses';
  const isMatchedView = selected.rowId === 'aligned';
  return <><section className="clause-card-grid real-clause-grid"><div className="real-details-head"><div><div className="eyebrow">{record.bgReferenceId} · {record.bgType}</div><h2>{title} <span>({findings.length})</span></h2><p>{record.fileName} · {record.status.replaceAll('_', ' ')} · {record.riskLevel} risk</p></div><button className="close-details" onClick={onClear}>Close details</button></div>{findings.length ? findings.map((finding, index) => <FindingCard key={finding.id || index} finding={finding} direction={direction} isMatchedView={isMatchedView} onView={() => setDetailFinding(finding)} />) : <div className="empty-details"><div className="empty-mark"><Icon name="grid" size={22}/></div><div><strong>No findings in this view</strong><p>This comparison cell has no matching clauses in the supplied validation data.</p></div></div>}</section>{detailFinding && <FindingDetailPanel finding={detailFinding} direction={direction} isMatchedView={isMatchedView} onClose={() => setDetailFinding(null)} />}</>;
}

function FindingCard({ finding, direction, isMatchedView, onView }) {
  const missing = finding.status === 'MISSING';
  const compliant = finding.status === 'COMPLIANT' || isMatchedView;
  const kind = missing ? 'missing' : compliant ? 'added' : 'modified';
  const status = missing ? 'MISSING' : compliant ? 'MATCHED' : 'MODIFIED';
  const impact = String(finding.impact || (missing ? 'HIGH' : 'MEDIUM')).toUpperCase();
  const precedent = finding.approved_precedent ? `✓ ${finding.precedent_source || 'Approved precedent'}` : '⚠ New deviation';
  const note = finding.recommendation || (missing ? 'Add the missing clause to align with the standard template.' : 'Review the wording against the standard template.');
  return <article className={`clause-card clause-card-${kind}`}><div className="clause-card-header"><div><span className="real-clause-index">CLAUSE</span><h3>{finding.category}</h3></div><div className="clause-card-badges"><span>{status}</span><span>{impact}</span><span className="precedent-pill">{precedent}</span></div></div><div className="clause-card-comparison"><div><label>{direction === 'forward' ? 'STANDARD TEMPLATE' : 'SUBMITTED BG'}</label><p>{compactClause(direction === 'forward' ? finding.standard_clause : finding.submitted_clause)}</p></div><div><label>{direction === 'forward' ? 'SUBMITTED BG' : 'STANDARD TEMPLATE'}</label><p>{compactClause(direction === 'forward' ? finding.submitted_clause : finding.standard_clause)}</p></div></div><div className="clause-card-note">💡 {compactClause(note)}</div><button className="finding-view-button" onClick={onView}>View details <Icon name="arrow" size={13}/></button></article>;
}

function FindingDetailPanel({ finding, direction, isMatchedView, onClose }) {
  const missing = finding.status === 'MISSING';
  const status = missing ? 'MISSING' : finding.status === 'COMPLIANT' || isMatchedView ? 'MATCHED' : 'MODIFIED';
  const impact = String(finding.impact || (missing ? 'HIGH' : 'MEDIUM')).toUpperCase();
  const precedent = finding.approved_precedent ? `✓ ${finding.precedent_source || 'Approved precedent'}` : '⚠ New deviation';
  const recommendation = finding.recommendation || (missing ? 'Add the missing clause to align with the standard template.' : 'Review the wording against the standard template.');
  return <><div className="finding-detail-backdrop" onClick={onClose}></div><aside className="finding-detail-panel" aria-label="Clause details"><div className="finding-detail-head"><div><span className="real-clause-index">FULL CLAUSE DETAILS</span><h2>{finding.category}</h2></div><button className="close-details" onClick={onClose}>Close</button></div><div className="finding-detail-badges"><span>{status}</span><span>{impact}</span><span>{precedent}</span></div><section><label>{direction === 'forward' ? 'STANDARD TEMPLATE' : 'SUBMITTED BG'}</label><p>{direction === 'forward' ? finding.standard_clause : finding.submitted_clause}</p></section><section><label>{direction === 'forward' ? 'SUBMITTED BG' : 'STANDARD TEMPLATE'}</label><p>{direction === 'forward' ? finding.submitted_clause : finding.standard_clause}</p></section><section className="finding-detail-recommendation"><label>RECOMMENDATION</label><p>{recommendation}</p></section></aside></>;
}

createRoot(document.getElementById('root')).render(<App />);
