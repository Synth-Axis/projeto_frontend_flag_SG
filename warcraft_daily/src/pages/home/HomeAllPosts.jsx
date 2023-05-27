import "./HomeAllPosts.scss";

const HomeAllPosts = (props) => {
  const newData = props.data.slice(0, 4);

  return (
    <div className="all-post-wrapper">
      <div className="all-post-header">
        <span>All Posts</span>
        <span>View All</span>
      </div>
      {props.data &&
        props.data.map((element) => (
          <div key={element.id} className="all-post-inner">
            <p>
              By <span>{element.author}</span> | {element.date}
            </p>
            <h1 className="all-post-title">{element.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default HomeAllPosts;
