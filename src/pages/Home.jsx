
export default function Home() {
  return (
    <>
      <h1 className="home-heading">Welcome back!</h1>

      <p className="home-subtext">
        Stay focused, stay organized —<br />
        your <strong>next step</strong> starts now.
      </p>

      <h2 className="home-section-title">What is NextStep?</h2>

      <p className="home-description">
        <strong>NextStep</strong> is your personal task manager designed to help you
        <em> plan</em>, <em>prioritize</em>, and <em>progress</em> with clarity and ease.
      </p>

      <p className="home-intro">NextStep offers these core features:</p>

      <ul className="home-features">
        <li><strong>Task Planning:</strong> Organize your daily, weekly, and long-term tasks efficiently.</li>
        <li><strong>Priority Management:</strong> Highlight what matters most to stay focused on key goals.</li>
        <li><strong>Progress Tracking:</strong> Monitor your task completion and celebrate your achievements.</li>
        <li><strong>Reminders & Deadlines:</strong> Never miss important due dates with timely alerts.</li>
      </ul>

      <p className="home-link">
        Click on the <strong>Side Bar - Tasks</strong>, or use this link <a href="/tasks">"Tasks"</a> to start managing your tasks now.
      </p>
    </>
  );
}
