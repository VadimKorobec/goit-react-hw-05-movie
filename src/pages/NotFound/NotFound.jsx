import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h2>NotFound</h2>
    </div>
  );
};

export default NotFound;
