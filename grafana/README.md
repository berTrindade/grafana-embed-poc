# Grafana Configuration

## Overview

**What is Grafana?**  
According to the [official Grafana documentation](https://grafana.com/docs/grafana/latest/introduction/), Grafana open source software enables you to query, visualize, alert on, and explore your metrics, logs, and traces wherever they are stored. Grafana provides tools to turn your time-series database (TSDB) data into insightful graphs and visualizations.

**In simple terms:**  
Think of Grafana like Excel charts, but much prettier, more interactive, real-time, and designed to be embedded in web applications like our React app.

**What this setup provides:**

- Working dashboard with sample charts
- Fake data that updates over time (realistic-looking charts)
- Everything pre-configured for React embedding
- Zero manual setup required

## Quick Start

1. **Start Grafana**

   ```bash
   docker compose up
   ```

2. **View Dashboard**  
   Open <http://localhost:3000> in your browser

3. **Embed in React**

   ```tsx
   <iframe src="http://localhost:3000/d-solo/pocdash/..." />
   ```

## How It Works

When you run `docker compose up`, Grafana automatically uses its [provisioning system](https://grafana.com/docs/grafana/latest/administration/provisioning/) to:

1. **Starts the application** in [Docker container](https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/)
2. **Reads configuration** from `/etc/grafana/provisioning/` folder
3. **Sets up data source** by reading `testdata-source.yml` (creates fake data generator using Grafana's [TestData DB](https://grafana.com/docs/grafana/latest/datasources/testdata/))
4. **Configures dashboard provider** by reading `dashboard-provider.yml` (tells where to find [dashboards](https://grafana.com/docs/grafana/latest/dashboards/))
5. **Imports dashboard** by reading `embed-poc-dashboard.json` (creates the actual charts and [visualizations](https://grafana.com/docs/grafana/latest/panels-visualizations/))
6. **Ready to use** at <http://localhost:3000>

## Configuration Files

```text
grafana/provisioning/
├── datasources/
│   └── testdata-source.yml     # Creates fake data generator
├── dashboards/
│   ├── dashboard-provider.yml  # Tells Grafana where to find dashboards
│   └── embed-poc-dashboard.json # The actual dashboard definition
```

**File purposes:**

- **testdata-source.yml** - Sets up [fake data](https://grafana.com/docs/grafana/latest/datasources/testdata/) that changes over time
- **dashboard-provider.yml** - [Configuration for dashboard loading](https://grafana.com/docs/grafana/latest/administration/provisioning/#dashboards)
- **embed-poc-dashboard.json** - Complete [dashboard definition](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/) with charts and layout

## Result

The setup creates a live [dashboard](https://grafana.com/docs/grafana/latest/dashboards/) with updating [charts](https://grafana.com/docs/grafana/latest/panels-visualizations/) that can be [embedded](https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/#embed-a-panel-or-dashboard) in your React app using a simple iframe. No manual Grafana configuration required.

## Official Grafana Resources

- **[Grafana Documentation](https://grafana.com/docs/grafana/latest/)** - Complete official documentation
- **[What is Grafana?](https://grafana.com/docs/grafana/latest/introduction/)** - Official introduction and overview
- **[Provisioning](https://grafana.com/docs/grafana/latest/administration/provisioning/)** - How to automate Grafana configuration
- **[Dashboard Embedding](https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/)** - Official guide to embedding dashboards
- **[Data Sources](https://grafana.com/docs/grafana/latest/datasources/)** - Complete list of supported data sources
- **[TestData DB](https://grafana.com/docs/grafana/latest/datasources/testdata/)** - Documentation for the fake data generator we use
- **[Grafana Community](https://community.grafana.com/)** - Get help from the Grafana community

_This POC demonstrates Grafana's embedding capabilities using official Docker images and configuration methods documented on [grafana.com](https://grafana.com/)._
