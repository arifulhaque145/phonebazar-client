export default function ThemeToggle() {
  return (
    <select
      className="select select-bordered theme-controller"
      defaultValue={localStorage.getItem("theme") || "dark"}
      onChange={(e) => {
        const theme = e.target.value;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }}
    >
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
}
