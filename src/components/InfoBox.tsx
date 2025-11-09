import { type ReactElement } from "react";
import { Link } from "react-router";

const InfoBox = ({ title, description, linkText, linkTo, children }:{
    title:string,
    description?:string,
    linkText?:string,
    linkTo?:string,
    children?:ReactElement
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 text-center max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-200 mb-4">{description}</p>

      {/* You can pass optional children (e.g. custom content or icons) */}
      {children && <div className="mb-4">{children}</div>}

      {linkTo && (
        <Link
          to={linkTo}
          className="text-blue-400 font-semibold underline hover:text-blue-300 transition"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default InfoBox;
