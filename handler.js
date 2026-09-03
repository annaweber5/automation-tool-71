class RobloxRequestHandler {
  constructor(cookie = '') {
    this.cookie = cookie;
    this.csrfToken = '';
  }

  async request(url, options = {}) {
    if (!this.cookie || !this.cookie.includes('_|WARNING:-Secure-by-default-Roblox-cookie')) {
      throw new Error('invalid_cookie_format');
    }

    const headers = {
      'Cookie': `.ROBLOSECURITY=${this.cookie}`,
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.csrfToken,
      ...options.headers
    };

    try {
      let response = await fetch(url, { ...options, headers });

      if (response.status === 403 && response.headers.has('x-csrf-token')) {
        this.csrfToken = response.headers.get('x-csrf-token');
        headers['X-CSRF-Token'] = this.csrfToken;
        response = await fetch(url, { ...options, headers });
      }

      if (response.status === 429) {
        const retryAfter = parseInt(response.headers.get('retry-after') || '5', 10);
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        return this.request(url, options);
      }

      if (!response.ok) {
        throw new Error(`roblox_api_error_${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('request_timeout');
      }
      throw error;
    }
  }
}

module.exports = { RobloxRequestHandler };