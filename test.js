const axios = require('axios');
(async () => {
  try {
    console.log('Starting manual verify...');
    const res = await axios.post('http://localhost:3000/api/auth/register', {
      name: 'Tester',
      email: 'tester@rehabconnect.app',
      password: 'password',
      role: 'patient'
    });
    console.log('Register:', res.data);

    const loginRes = await axios.post('http://localhost:3000/api/auth/login', {
      email: 'tester@rehabconnect.app',
      password: 'password'
    });
    console.log('Login:', loginRes.data.user.email);
    console.log('ALL PASSED!');
    process.exit(0);
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
    process.exit(1);
  }
})();
