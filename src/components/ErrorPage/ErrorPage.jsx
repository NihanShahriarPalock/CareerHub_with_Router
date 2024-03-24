import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div>
        <h2>Currently Working on this page</h2>
        <button className='btn'>
          <Link to='/'>Go back to home</Link>
        </button>
      </div>
    );
};

export default ErrorPage;