# Grafana Embed POC

Embed [Grafana dashboards](https://grafana.com/docs/grafana/latest/dashboards/) in a React application using [Docker](https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/).

## Setup

Requirements: Docker, Node.js, npm

```bash
# Start Grafana
docker compose up -d

# Start frontend
cd frontend
npm install
npm run dev
```

Access:

- Grafana: <http://localhost:3000>
- Frontend: <http://localhost:5173>

## Structure

```text
grafana-embed-poc/
├── docker-compose.yml    # Grafana container setup
├── frontend/             # React application
│   ├── src/
│   │   ├── App.tsx      # Main component with iframe
│   │   └── main.tsx     # React entry point
│   ├── index.html       # HTML template
│   ├── package.json     # Dependencies
│   └── vite.config.ts   # Build config
├── grafana/
│   ├── README.md        # Detailed Grafana configuration guide
│   └── provisioning/    # Auto-configures Grafana on startup
│       ├── dashboards/  # Dashboard definitions and config
│       └── datasources/ # Data source connections
└── README.md
```

See `grafana/README.md` for detailed explanation of [provisioning files](https://grafana.com/docs/grafana/latest/administration/provisioning/).

## Configuration

Grafana runs with:

- [Anonymous access](https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-authentication/#anonymous-authentication) enabled
- [Embedding](https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/#allow-embedding) allowed
- No user registration

## Commands

```bash
# Stop containers
docker compose down

# View logs
docker compose logs grafana -f

# Restart with fresh data
docker compose down -v && docker compose up -d
```

For more Docker setup options, see [Grafana's Docker installation guide](https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/).

## Usage

1. [Create dashboards](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/) in Grafana at [http://localhost:3000](http://localhost:3000)
2. Get embed URL from [dashboard share button](https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/)
3. Add iframe to React component

Example:

```tsx
<iframe
  src="http://localhost:3000/d-solo/dashboard-uid/panel-name?orgId=1&panelId=1"
  width="800"
  height="400"
  style={{ border: "none" }}
/>
```

For more embedding options, see the [official embedding documentation](https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/#embed-a-panel-or-dashboard).

## Learn More

- **[Grafana Documentation](https://grafana.com/docs/grafana/latest/)** - Complete official documentation
- **[Docker Setup Guide](https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/)** - Official Docker installation guide
- **[Dashboard Creation](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/)** - How to build dashboards
- **[Embedding Dashboards](https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/)** - Complete embedding guide
- **[Provisioning](https://grafana.com/docs/grafana/latest/administration/provisioning/)** - Automate Grafana setup
