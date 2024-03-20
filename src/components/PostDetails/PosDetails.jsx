import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PosDetails = () => {
  const post = useLoaderData();
  const {postId} = useParams()
  const navigate = useNavigate()
  const { id, title, body } = post;
  console.log(postId);
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
