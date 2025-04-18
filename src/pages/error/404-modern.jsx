import ErrorImage from "../../images/gfx/error-404.svg";
import { Link } from "react-router-dom";

const Error404Modern = () => {
  return (
    <div className=" min-h-screen w-full">
      <div className="flex flex-col text-center items-center justify-center">
        <img className="w-full object-contain" src={ErrorImage} alt="error" />
        <div className="w-full grid gap-3">
          <h3 className="text-3xl font-semibold font-sans">Oops! Why you’re here?</h3>
          <p className="text-lg font-normal  ">
            We are very sorry for inconvenience. It looks like you’re<br /> try to access a page that either has been
            deleted or never existed.
          </p>
          <Link to='/'>
            <button className="bg-orange-500 text-white  py-2 px-3 rounded-md font-medium ">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error404Modern;