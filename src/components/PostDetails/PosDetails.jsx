import { useLoaderData, useNavigate } from "react-router-dom";

const PosDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate()
  const { id, title, body } = post;
  const handleGoBack=()=>{
    navigate(-1)
  }
  return (
    <div>
      <h2>Post details About: {id}</h2>
      <p>Title: {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PosDetails;
