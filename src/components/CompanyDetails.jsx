import { useParams } from "react-router-dom";

const CompanyDetails = () => {
  const { ticker } = useParams(); // Access the ticker from the URL

  return (
    <div>
      <h1>Company Details for {ticker}</h1>
    </div>
  );
};

export default CompanyDetails;
