import Input from '../Input';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiBaseUrl}/api/admin/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        // Redirection ou mise à jour de l'état de l'interface utilisateur
      } else {
        // Gérer l'erreur d'authentification
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
