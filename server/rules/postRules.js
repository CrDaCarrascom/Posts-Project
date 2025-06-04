function validatePostData({ name, description }) {
  if (!name || !description) {
    return { valid: false, error: 'Name and description are required' };
  }
  return { valid: true };
}

module.exports = { validatePostData };