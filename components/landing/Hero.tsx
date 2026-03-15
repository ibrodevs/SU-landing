import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import { IconArrowRight, IconSpark } from "@/components/icons";
import { Stat } from "@/components/landing/SectionPrimitives";

const heroChips = [
  "Sprint-based delivery",
  "Clean architecture",
  "Observability from day one"
] as const;

const heroStats = [
  { value: "Senior-led", label: "Execution model" },
  { value: "< 24h", label: "Typical response" },
  { value: "Weekly", label: "Delivery rhythm" }
] as const;

const consoleMetrics = [
  { label: "Design", value: "Systemized" },
  { label: "Backend", value: "Typed" },
  { label: "Release", value: "Calm" }
] as const;

const pipeline = [
  { label: "Discovery", value: "Risk mapped", width: "88%" },
  { label: "Build", value: "Visible scope", width: "76%" },
  { label: "Launch", value: "Monitored", width: "92%" }
] as const;

export default function Hero() {
  return (
    <BackgroundMeteors>
      <section className="heroSection">
        <div className="container heroLayout">
          <div>
            <div className="pill heroPill">
              <IconSpark />
              <span>Technology partner for teams under real delivery pressure</span>
            </div>

            <h1 className="heroTitle">
              Modern technology systems
              <span className="heroTitleAccent">for teams that need serious execution.</span>
            </h1>

            <p className="heroLead">
              We design, build, and scale web platforms, mobile products, and backend
              infrastructure with the visual polish and engineering discipline expected
              from mature technology teams.
            </p>

            <div className="btnRow">
              <a className="btnPrimary" href="#contact">
                Start a Project <IconArrowRight />
                <span className="kbd">24h reply</span>
              </a>
              <a className="btnSecondary" href="#portfolio">
                View Case Studies <IconArrowRight />
              </a>
            </div>

            <div className="heroStatGrid">
              {heroStats.map((item) => (
                <Stat key={item.label} value={item.value} label={item.label} />
              ))}
            </div>

            <div className="heroChipRow">
              {heroChips.map((item) => (
                <span key={item} className="heroChip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="heroVisual">
            <div className="heroConsole">
              <div className="heroConsoleHeader">
                <div>
                  <div className="panelBadge">Delivery cockpit</div>
                  <h2>Architecture, release flow, and signal visibility.</h2>
                </div>
                <div className="heroConsoleStatus">
                  <span className="statusDot" />
                  Production-ready thinking
                </div>
              </div>

              <div className="heroConsoleStage">
                <div className="orbitalCore">
                  <div className="orbitalRing" />
                  <div className="orbitalRing orbitalRingB" />
                  <div className="orbitalCenter">
                    <span>Core platform</span>
                    <strong>Build / Ship / Observe</strong>
                  </div>
                </div>

                <div className="signalNode signalNodeTop">
                  <span>Latency budget</span>
                  <strong>120ms</strong>
                </div>

                <div className="signalNode signalNodeLeft">
                  <span>QA coverage</span>
                  <strong>91%</strong>
                </div>

                <div className="signalNode signalNodeRight">
                  <span>Rollback plan</span>
                  <strong>Active</strong>
                </div>
              </div>

              <div className="heroConsoleFooter">
                <div className="stageMetrics">
                  {consoleMetrics.map((item) => (
                    <div key={item.label} className="stageMetric">
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="pipelineList">
                  {pipeline.map((item) => (
                    <div key={item.label} className="pipelineItem">
                      <div className="pipelineItemHeader">
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                      <div className="pipelineBar">
                        <span className="pipelineFill" style={{ width: item.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundMeteors>
  );
}
