export default function Home() {
    return (
        <div className="greeting-container">
            <h1 className="greeting-heading">Welcome back!</h1>

            <p className="greeting-subtext">
                Stay focused, stay organized —<br />
                your <strong>next step</strong> starts now.
            </p>

            <h2 className="description-heading">What is NextStep?</h2>

            <p className="description-text">
                <strong>NextStep</strong> is your personal task manager —<br />
                helping you <em>plan</em>, <em>prioritize</em>, and <em>progress</em> with clarity.
            </p>

            <p className="navigation-text">
                Click on the <strong>Side Bar - Tasks</strong>, or use this link <a href="/tasks">"Tasks"</a>.
            </p>
        </div>
        
    )
}