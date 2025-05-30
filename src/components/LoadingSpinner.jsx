const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="spinner-border text-primary" 
    style={{ width: '3rem', height: '3rem' }} role="status">
      
    <span className="visually-hidden">Loading...</span>
    
    </div>
  </div>
);

export default LoadingSpinner;
