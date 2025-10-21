function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Grafana Embed POC</h1>
      <iframe
        title="Grafana panel - pocdash panel 1"
        aria-label="Grafana embedded panel: pocdash panel 1"
        src="http://localhost:3000/d-solo/pocdash/embed-poc-dashboard?orgId=1&panelId=1"
        width="800"
        height="400"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default App;
