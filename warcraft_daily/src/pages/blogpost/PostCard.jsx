import "./PostCard.scss";

const PostCard = (props) => {
  return (
    <div className="post-card-container">
      <div>
        <div className="post-image">
          <img src={props.data.image} alt="" />
        </div>
        <p className="post-card-author">
          By <span>{`${props.data.author} |`}</span> {props.data.date}
        </p>
        <h3 className="post-card-title">{props.data.title}</h3>
        <p className="post-card-description">{props.data.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
