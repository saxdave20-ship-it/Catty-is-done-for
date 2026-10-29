
import { useEffect, useState } from "react";
import "./App.css";

// ============================================
// PROJECT SETTINGS
// ============================================

// ONE GLOBAL DEADLINE FOR EVERYONE 🌍
// Format: YYYY-MM-DDTHH:mm:ss.sssZ
const TARGET_DATE = "2026-10-29T14:27:54.827Z";

// Your personal message
const FINAL_MESSAGE = `LMFAOOOOO, THANKS FOR WASTING YOUR TIME :)`;

// Project title
const PROJECT_NAME = "PROJECT SHIT`";

// Convert the shared timestamp to milliseconds
const getDeadline = () => new Date(TARGET_DATE).getTime();

function getTimeLeft(deadline) {
    const difference = deadline - Date.now();

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            finished: true,
        };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        finished: false,
    };
}

function App() {
    // Every visitor uses the SAME deadline
    const [deadline] = useState(() => getDeadline());
    const [time, setTime] = useState(() => getTimeLeft(deadline));
    const [revealed, setRevealed] = useState(
        () => getTimeLeft(deadline).finished
    );

    useEffect(() => {
        const update = () => {
            const nextTime = getTimeLeft(deadline);

            setTime(nextTime);
            setRevealed(nextTime.finished);
        };

        update();

        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    const units = [
        { label: "DAYS", value: time.days },
        { label: "HOURS", value: time.hours },
        { label: "MINUTES", value: time.minutes },
        { label: "SECONDS", value: time.seconds },
    ];

    return (
        <main className="page">
            <div className="ambient ambient-one" />
            <div className="ambient ambient-two" />
            <div className="grid-overlay" />

            <section className="content">
                <div className="topline">
                    <span className="status-dot" />
                    <span>{PROJECT_NAME}</span>
                    <span className="topline-tag">CLASSIFIED</span>
                </div>

                {!revealed ? (
                    <>
                        <div className="intro">
                            <p className="eyebrow">A MOMENT IS APPROACHING</p>

                            <h1>
                                Waste
                                <br />
                                <span>your fucking time.</span>
                            </h1>

                            <p className="subtitle">
                                This is so ass
                                <br className="desktop-break" /> that you should punch ts
                            </p>
                        </div>

                        <div className="countdown">
                            {units.map((unit) => (
                                <div className="time-unit" key={unit.label}>
                                    <div className="number-frame">
                                        <span className="number">
                                            {String(unit.value).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <span className="unit-label">
                                        {unit.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="progress-message">
                            <span className="pulse-dot" />
                            <span>COUNTDOWN IN PROGRESS</span>
                        </div>

                        <p className="hint">
                            BLA BLA BLA BLA BLA BLA BLA BLA
                        </p>
                    </>
                ) : (
                    <div className="reveal">
                        <div className="reveal-symbol">✳</div>
                        <p className="eyebrow">TRANSMISSION RECEIVED</p>

                        <h1>
                            The wait
                            <br />
                            <span>is over.</span>
                        </h1>

                        <div className="message-card">
                            <p className="message-label">AHH SHIT</p>
                            <p className="message-text">{FINAL_MESSAGE}</p>
                        </div>

                        <p className="reveal-footer">
                            WELL THAT'S A FUCKING SHAME <span>🎃</span>
                        </p>
                    </div>
                )}

                <footer className="footer">
                    <span>TS IS ASS</span>
                    <span>EST. 2026</span>
                </footer>
            </section>
        </main>
    );
}

export default App;
