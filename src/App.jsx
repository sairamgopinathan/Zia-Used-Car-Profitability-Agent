import React, { useMemo, useState } from 'react';
import {
  BadgeCheck,
  Ban,
  Calculator,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Gauge,
  IndianRupee,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Wrench
} from 'lucide-react';

const cases = [
  {
    id: 'city-negotiate',
    label: 'Honda City',
    decision: 'NEGOTIATE',
    tagline: 'Good car, overpriced acquisition',
    vehicle: {
      title: '2019 Honda City VX CVT',
      make: 'Honda',
      model: 'City',
      variant: 'VX CVT',
      year: '2019',
      fuel: 'Petrol',
      transmission: 'CVT Automatic',
      city: 'Chennai',
      odometer: '58,000 km',
      ownership: '1st owner',
      askingPrice: '₹7,80,000',
      insurance: 'Valid for 7 months'
    },
    inputs: {
      inspection:
        'Exterior has minor scratches on rear bumper and left door. Front tyres show moderate wear. Interior is clean with normal seat wear. Engine bay looks clean. No visible flood signs. No dashboard warning lights. CVT test drive feels mostly smooth but should be checked before final acquisition.',
      documents:
        'RC details match vehicle details. Insurance is valid. Honda authorized service history mostly available until 2023. Last service record shows 52,000 km. Current odometer is 58,000 km. No odometer mismatch found. Hypothecation status needs final confirmation.',
      comparables:
        'Chennai comparables: 2019 City VX CVT at ₹8.25L, 2019 City V CVT at ₹7.70L, 2018 City VX CVT at ₹7.35L, 2020 City ZX CVT at ₹9.10L, 2019 City VX Manual at ₹7.60L.',
      dealerContext:
        'Target gross margin: 12%. Minimum acceptable margin: 8%. Holding cost: ₹15,000. Transfer/listing cost: ₹8,000. Honda first-owner cars with clean service history are preferred.'
    },
    output: {
      recommendation: 'NEGOTIATE',
      score: 76,
      grade: 'B',
      fit: 'Yes, subject to CVT workshop check and hypothecation confirmation. Not viable at seller asking price for target margin.',
      resale: '₹8,00,000-₹8,15,000',
      workingResale: '₹8,05,000',
      asking: '₹7,80,000',
      recon: '₹40,000',
      overhead: '₹23,000',
      profitAtAsk: '-₹38,000',
      marginAtAsk: '-4.9%',
      maxAcquisition: '₹6,77,600',
      recommendedOffer: '₹6,50,000',
      negotiationRange: '₹6,50,000-₹6,70,000',
      stretch: 'Do not exceed ₹6,77,600',
      profitAtCeiling: '₹64,400',
      marginAtCeiling: '9.5%',
      market:
        'Near lower-mid market on listing price, but not attractive enough after recon and required margin. Seller price is above workable acquisition ceiling by about ₹1.02L.',
      documentRisk:
        'Moderate. RC and insurance appear clean, odometer is broadly consistent, but hypothecation status is pending.',
      conditionRisk:
        'Low to moderate. Minor cosmetic work and front tyre wear. No flood signs or warning lights. CVT check is pending.',
      workshop:
        'Medium. Likely 2-4 days including cosmetic touch-up, tyre attention, detailing, and CVT diagnosis.',
      approval:
        'Used Car Manager approval recommended. Document Team confirmation required for hypothecation. Workshop Manager validation for CVT.',
      reasons: [
        'Honda City VX CVT has solid Chennai resale demand and a first-owner profile.',
        'Seller asking price is commercially not viable after recon and overheads.',
        'Conservative resale estimate does not support 12% target margin near asking price.',
        'Vehicle condition is manageable but tyre wear and CVT validation must be costed.',
        'Pending hypothecation and CVT validation prevent a BUY call now.'
      ],
      actions: [
        'Run workshop CVT diagnosis and fluid/health check before commitment.',
        'Confirm hypothecation closure from document team.',
        'Reconfirm tyre depth and replacement requirement.',
        'Open negotiation at ₹6.50L and stay within ₹6.50L-₹6.70L.',
        'Reject current asking price if seller does not soften materially.'
      ],
      summary:
        'This is a decent used Honda City and the profile is attractive for resale, but not at ₹7.80L. A practical buy zone is around ₹6.50L-₹6.70L with a hard ceiling at ₹6.77L. The right call is NEGOTIATE.'
    }
  },
  {
    id: 'amaze-buy',
    label: 'Honda Amaze',
    decision: 'BUY',
    tagline: 'Clean, profitable, low-risk acquisition',
    vehicle: {
      title: '2021 Honda Amaze VX Petrol Manual',
      make: 'Honda',
      model: 'Amaze',
      variant: 'VX Petrol Manual',
      year: '2021',
      fuel: 'Petrol',
      transmission: 'Manual',
      city: 'Bengaluru',
      odometer: '31,000 km',
      ownership: '1st owner',
      askingPrice: '₹5,80,000',
      insurance: 'Valid for 10 months'
    },
    inputs: {
      inspection:
        'Exterior is clean with only very minor swirl marks. No dents or repaint signs observed. Tyres are in good condition. Interior is clean with minimal wear. Engine bay is clean. No leaks, warning lights, smoke, flood signs, or accident signs. Test drive is smooth.',
      documents:
        'RC details match. Insurance valid for 10 months. Full Honda authorized service history is available. Last service at 30,200 km. Current odometer is 31,000 km. Hypothecation is closed. No claim history or accident repair record found.',
      comparables:
        'Bengaluru comparables: 2021 Amaze VX Petrol Manual at ₹7.05L, 2021 Amaze VX Petrol Manual at ₹7.20L, 2020 Amaze VX at ₹6.60L, 2022 Amaze VX at ₹7.65L, 2021 Amaze S at ₹6.50L.',
      dealerContext:
        'Target gross margin: 12%. Minimum acceptable margin: 8%. Holding cost: ₹12,000. Transfer/listing cost: ₹8,000. Honda first-owner cars with full service history are preferred.'
    },
    output: {
      recommendation: 'BUY',
      score: 89,
      grade: 'A',
      fit: 'Strong fit for Honda Cars India acquisition policy. Preferred profile: Honda, first owner, petrol manual, clean documents, full Honda authorized service history, and no major risk.',
      resale: '₹6,95,000',
      workingResale: '₹6,95,000',
      asking: '₹5,80,000',
      recon: '₹15,000',
      overhead: '₹20,000',
      profitAtAsk: '₹80,000',
      marginAtAsk: '13.8%',
      maxAcquisition: '₹6,04,400',
      recommendedOffer: 'Proceed near seller asking price',
      negotiationRange: '₹5,75,000-₹5,80,000',
      stretch: 'Not needed. Seller price is already below ceiling.',
      profitAtCeiling: '₹55,600',
      marginAtCeiling: '9.2%',
      market:
        'Seller asking price is materially below Bengaluru comparables for similar 2021 Amaze VX Petrol Manual cars.',
      documentRisk:
        'Low. RC matches, insurance valid, odometer consistent, hypothecation closed, full Honda service history available, no claim or accident repair record.',
      conditionRisk:
        'Low. Clean exterior/interior, no repaint signs, no warning lights, no leaks, no flood or accident signs, and healthy test-drive feedback.',
      workshop:
        'Low. Quick retail prep with basic detailing and minor cosmetic touch-up. No major mechanical intervention indicated.',
      approval: 'No mandatory exception approval indicated. Standard acquisition approval only.',
      reasons: [
        'Vehicle matches preferred Honda acquisition profile: first owner, petrol, clean service history.',
        'Documents are clean with strong confidence from full Honda authorized service records.',
        'Inspection notes show low-risk condition with no major red flags.',
        'Seller asking price is below calculated maximum acquisition price and leaves target margin.',
        'Low reconditioning and workshop impact support fast retail readiness.'
      ],
      actions: [
        'Complete final physical inspection and underbody/chassis check.',
        'Approve standard workshop retail-prep estimate.',
        'Verify transfer paperwork and closed hypothecation entry at documentation stage.',
        'Proceed near current seller asking price.',
        'Move quickly because price is favorable versus Bengaluru comparables.'
      ],
      summary:
        'This is a clean and attractive Honda Amaze acquisition. At ₹5.80L, the deal remains profitable with estimated gross profit of ₹80K and margin of 13.8%, supporting a clear BUY decision.'
    }
  },
  {
    id: 'wrv-reject',
    label: 'Honda WR-V',
    decision: 'REJECT',
    tagline: 'High-risk, poor retail stock fit',
    vehicle: {
      title: '2018 Honda WR-V VX Diesel',
      make: 'Honda',
      model: 'WR-V',
      variant: 'VX Diesel',
      year: '2018',
      fuel: 'Diesel',
      transmission: 'Manual',
      city: 'Delhi NCR',
      odometer: '92,000 km',
      ownership: '2nd owner',
      askingPrice: '₹5,40,000',
      insurance: 'Expired'
    },
    inputs: {
      inspection:
        'Exterior shows multiple repaint signs across left side panels and rear bumper. Underbody rust is visible. Suspension noise during test drive. Steering vibration at higher speed. Heavy interior wear. Oil seepage signs. Slight damp smell. Worn tyres. Intermittent dashboard warning light.',
      documents:
        'RC mostly matches, but insurance is expired. Service history is incomplete with long gaps. Last available service record shows 88,000 km two years ago, current odometer is 92,000 km. No recent Honda authorized service history. Claim history unavailable. Hypothecation unclear.',
      comparables:
        'Delhi NCR comparables: 2018 WR-V VX Diesel at ₹6.20L, 2018 WR-V VX Diesel at ₹5.90L, 2017 WR-V Diesel at ₹5.30L, 2019 WR-V VX Diesel at ₹6.75L, 2018 WR-V S Diesel at ₹5.60L.',
      dealerContext:
        'Target gross margin: 12%. Minimum acceptable margin: 8%. Holding cost: ₹18,000. Transfer/listing cost: ₹8,000. Dealership is cautious about high-mileage diesel cars, incomplete service history, expired insurance, rust, and possible flood indicators.'
    },
    output: {
      recommendation: 'REJECT',
      score: 41,
      grade: 'E',
      fit: 'Poor fit for Honda Cars India acquisition standards due to unresolved document risk, possible odometer inconsistency, possible flood indicator, poor condition, high workshop load, and weak commercial viability.',
      resale: '₹5,75,000',
      workingResale: '₹5,75,000',
      asking: '₹5,40,000',
      recon: '₹1,15,000',
      overhead: '₹26,000',
      profitAtAsk: '-₹1,06,000',
      marginAtAsk: '-19.6%',
      maxAcquisition: '₹3,88,000',
      recommendedOffer: 'Not recommended',
      negotiationRange: 'Do not negotiate unless rare senior override',
      stretch: 'None',
      profitAtCeiling: '₹46,000',
      marginAtCeiling: '11.9%',
      market:
        'Seller price looks below cleaner listings, but this vehicle is materially weaker due to mileage, expired insurance, repaint signs, rust, warning light, incomplete history, and unresolved document risk.',
      documentRisk:
        'High. Insurance expired, service history gaps, weak odometer confidence, recent Honda service history missing, hypothecation unclear, claim history unavailable.',
      conditionRisk:
        'High. Repaint signs, underbody rust, suspension noise, steering vibration, oil seepage, heavy interior wear, worn tyres, warning light, and damp smell.',
      workshop:
        'High. Likely needs suspension work, tyre replacement, diagnostics, oil leak inspection, body rectification, detailing, and rust assessment. Turnaround likely above 5 days.',
      approval:
        'Senior approval would be required, but standard recommendation is REJECT. Document Team and Workshop Manager reviews would be mandatory if explored.',
      reasons: [
        'Expired insurance, unclear hypothecation, incomplete service history, and weak odometer confidence.',
        'Poor retail condition with rust, repaint signs, suspension noise, steering vibration, oil seepage, worn tyres, and warning light.',
        'Possible flood and odometer risks cannot be ignored.',
        'At seller asking price, the deal is sharply loss-making.',
        'Even if a lower ceiling restores margin, policy and condition risks remain too high.'
      ],
      actions: [
        'Reject at current stage and do not approve purchase at seller asking price.',
        'Only if business insists, run deep workshop diagnosis.',
        'Verify hypothecation, insurance, claim history, and full service trail.',
        'Run odometer consistency validation.',
        'Proceed only if all risks are cleared and price drops substantially, but current recommendation remains REJECT.'
      ],
      summary:
        'This WR-V is not a safe acquisition for Honda retail stock. Documents are not fully clean, condition is weak, and commercial risk is high. Final call: REJECT.'
    }
  }
];


const ziaAgentConfig = JSON.stringify({
  orgId: '60072127247',
  entityId: '7583000000014061',
  customWelcomeMessage:
    'Hi. I can help evaluate a used car for Honda Cars India. Share the model, year, city, odometer, ownership, and seller asking price.',
  openChatOnInit: false
});

function decisionConfig(decision) {
  if (decision === 'BUY') return { className: 'buy', icon: CheckCircle2 };
  if (decision === 'NEGOTIATE') return { className: 'negotiate', icon: TrendingUp };
  return { className: 'reject', icon: Ban };
}

function StatCard({ label, value, icon: Icon, emphasis }) {
  return (
    <div className={`stat-card ${emphasis ? 'emphasis' : ''}`}>
      <div className="stat-icon">{Icon ? <Icon size={18} /> : <Sparkles size={18} />}</div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function InfoBlock({ title, children }) {
  return (
    <section className="info-block">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

function VehicleDetails({ vehicle }) {
  const rows = [
    ['Make / Model / Variant', `${vehicle.make} ${vehicle.model} ${vehicle.variant}`],
    ['Year', vehicle.year],
    ['Fuel / Transmission', `${vehicle.fuel} / ${vehicle.transmission}`],
    ['City', vehicle.city],
    ['Odometer', vehicle.odometer],
    ['Ownership', vehicle.ownership],
    ['Seller Asking Price', vehicle.askingPrice],
    ['Insurance', vehicle.insurance]
  ];
  return (
    <div className="details-grid">
      {rows.map(([label, value]) => (
        <div key={label} className="detail-row">
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [selectedId, setSelectedId] = useState(cases[0].id);
  const [hasRun, setHasRun] = useState(false);
  const selectedCase = useMemo(() => cases.find((item) => item.id === selectedId), [selectedId]);
  const config = decisionConfig(selectedCase.output.recommendation);
  const DecisionIcon = config.icon;

  function selectCase(id) {
    setSelectedId(id);
    setHasRun(false);
  }

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={16} /> Honda Cars India hackathon demo</div>
          <h1>Zia Used Car Profitability Agent</h1>
          <p>
            Acquisition intelligence for Honda dealerships: evaluate used cars before inventory entry, estimate margin,
            identify risk, and decide whether to buy, negotiate, or reject.
          </p>
          <div className="hero-actions">
            <a href="#demo" className="primary-link">Open demo cases</a>
            <a href="#result" className="secondary-link">View recommendation</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-logo">Z</div>
          <p>Decision engine</p>
          <h2>BUY / NEGOTIATE / REJECT</h2>
          <span>Powered by KB-grounded dealership policy</span>
        </div>
      </section>


      <section className="live-agent-section">
        <div className="live-agent-copy">
          <div className="section-heading compact">
            <p>Live Zia Agent</p>
            <h2>Talk to the actual Zia Agent</h2>
          </div>
          <p>
            This embedded ChatKit connects the demo page to your deployed Zia Used Car Profitability Agent. Use it
            for the live conversational workflow: intake, photo/document upload, inspection reasoning, and final
            acquisition recommendation.
          </p>
        </div>
        <div className="live-agent-widget">
          <agents-chat-bot-comp ziaAgents={ziaAgentConfig}></agents-chat-bot-comp>
        </div>
      </section>

      <section id="demo" className="case-selector">
        <div className="section-heading">
          <p>Step 1</p>
          <h2>Select a demo vehicle</h2>
        </div>
        <div className="case-grid">
          {cases.map((demoCase) => {
            const itemConfig = decisionConfig(demoCase.decision);
            const ItemIcon = itemConfig.icon;
            return (
              <button
                key={demoCase.id}
                className={`case-card ${selectedId === demoCase.id ? 'active' : ''}`}
                onClick={() => selectCase(demoCase.id)}
              >
                <div className={`decision-pill ${itemConfig.className}`}><ItemIcon size={15} /> {demoCase.decision}</div>
                <h3>{demoCase.vehicle.title}</h3>
                <p>{demoCase.tagline}</p>
                <span>View case <ChevronRight size={14} /></span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="workspace">
        <div className="input-panel">
          <div className="panel-header">
            <div>
              <p>Step 2</p>
              <h2>Vehicle intake</h2>
            </div>
            <Car />
          </div>
          <VehicleDetails vehicle={selectedCase.vehicle} />

          <InfoBlock title="Inspection Notes">
            <p>{selectedCase.inputs.inspection}</p>
          </InfoBlock>
          <InfoBlock title="Document Notes">
            <p>{selectedCase.inputs.documents}</p>
          </InfoBlock>
          <InfoBlock title="Market Comparables">
            <p>{selectedCase.inputs.comparables}</p>
          </InfoBlock>
          <InfoBlock title="Dealer Context">
            <p>{selectedCase.inputs.dealerContext}</p>
          </InfoBlock>

          <button className="run-button" onClick={() => setHasRun(true)}>
            Run Profitability Analysis <Calculator size={18} />
          </button>
        </div>

        <div id="result" className={`result-panel ${hasRun ? 'visible' : ''}`}>
          {!hasRun ? (
            <div className="empty-state">
              <Gauge size={42} />
              <h2>Recommendation preview</h2>
              <p>Select a vehicle and click “Run Profitability Analysis” to show the Honda acquisition recommendation.</p>
            </div>
          ) : (
            <>
              <div className="result-header">
                <div>
                  <p>Step 3</p>
                  <h2>Agent recommendation</h2>
                </div>
                <div className={`decision-badge ${config.className}`}>
                  <DecisionIcon size={18} /> {selectedCase.output.recommendation}
                </div>
              </div>

              <div className="score-row">
                <div className="score-card">
                  <span>Profitability Score</span>
                  <strong>{selectedCase.output.score}</strong>
                  <p>/100</p>
                </div>
                <div className="grade-card">
                  <span>Vehicle Grade</span>
                  <strong>{selectedCase.output.grade}</strong>
                  <p>{selectedCase.output.fit}</p>
                </div>
              </div>

              <div className="stats-grid">
                <StatCard label="Expected Resale" value={selectedCase.output.resale} icon={IndianRupee} emphasis />
                <StatCard label="Seller Asking" value={selectedCase.output.asking} icon={IndianRupee} />
                <StatCard label="Recommended Offer" value={selectedCase.output.recommendedOffer} icon={TrendingUp} emphasis />
                <StatCard label="Max Acquisition" value={selectedCase.output.maxAcquisition} icon={ShieldAlert} />
                <StatCard label="Recon Cost" value={selectedCase.output.recon} icon={Wrench} />
                <StatCard label="Overheads" value={selectedCase.output.overhead} icon={ClipboardCheck} />
                <StatCard label="Profit at Asking" value={selectedCase.output.profitAtAsk} icon={Calculator} />
                <StatCard label="Margin at Asking" value={selectedCase.output.marginAtAsk} icon={Gauge} />
                <StatCard label="Profit at Ceiling" value={selectedCase.output.profitAtCeiling} icon={Calculator} />
                <StatCard label="Margin at Ceiling" value={selectedCase.output.marginAtCeiling} icon={Gauge} />
              </div>

              <div className="risk-grid">
                <InfoBlock title="Relative Market Position"><p>{selectedCase.output.market}</p></InfoBlock>
                <InfoBlock title="Document Risk"><p>{selectedCase.output.documentRisk}</p></InfoBlock>
                <InfoBlock title="Condition Risk"><p>{selectedCase.output.conditionRisk}</p></InfoBlock>
                <InfoBlock title="Workshop Impact"><p>{selectedCase.output.workshop}</p></InfoBlock>
                <InfoBlock title="Approval Required"><p>{selectedCase.output.approval}</p></InfoBlock>
              </div>

              <div className="list-grid">
                <InfoBlock title="Main Reasons">
                  <ol>{selectedCase.output.reasons.map((reason) => <li key={reason}>{reason}</li>)}</ol>
                </InfoBlock>
                <InfoBlock title="Next Actions">
                  <ol>{selectedCase.output.actions.map((action) => <li key={action}>{action}</li>)}</ol>
                </InfoBlock>
              </div>

              <div className="summary-card">
                <BadgeCheck />
                <div>
                  <h3>Plain English Summary</h3>
                  <p>{selectedCase.output.summary}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
