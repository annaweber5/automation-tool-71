# automation-tool-71

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight Node.js utility designed to automate place publishing, asset uploading, and DataStore synchronization via the Roblox Open Cloud API. It provides a clean programatic interface for developers to integrate automated CI/CD workflows into their Roblox Studio deployment pipelines.

## Features

- **Automated Place Publishing:** Deploy binary (`.rbxl`) or XML (`.rbxlx`) place files directly to live or staging Roblox universes.
- **DataStore Sync & Backup:** Programmatically fetch, update, and back up DataStore entries with automatic rate-limit handling and exponential backoff.
- **Asset Upload Pipeline:** Bulk upload decals, audio, and mesh assets while returning structured JSON output containing created Asset IDs.
- **API Key Security:** Native support for Roblox Open Cloud API keys, eliminating the security risks associated with legacy cookie-based authentication.

## Installation

Install the package via npm:

```bash
npm install automation-tool-71
```

## Usage Example

The following example demonstrates how to upload an updated place file to a specific universe using an Open Cloud API key:

```javascript
const { RobloxPublisher } = require('automation-tool-71');

const publisher = new RobloxPublisher({
  apiKey: process.env.ROBLOX_API_KEY,
  universeId: '1234567890',
  placeId: '0987654321'
});

async function runDeployment() {
  try {
    const response = await publisher.publishPlace('./build/place.rbxl', {
      versionType: 'Published'
    });
    console.log(`Successfully published version ${response.versionNumber}`);
  } catch (error) {
    console.error('Deployment failed:', error.message);
  }
}

runDeployment();
```

## License

This project is licensed under the MIT License.