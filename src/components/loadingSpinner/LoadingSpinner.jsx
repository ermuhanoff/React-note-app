const LoadingSpinner = ({width, height}) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{width: width, height: height}}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
