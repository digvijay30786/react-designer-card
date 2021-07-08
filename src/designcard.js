import "./card.css";

export default function Designer(props) {
  return (
    <div className="card">
      <div className="fix">
        <div>
          <div className="img">
            <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" height="100%" width="100%" alt="img"/>
            </div>
          <div className="intro">
            <p className="name">{props.name}</p>
            <p className="location">{props.location}</p>
          </div>
          <div className="desc">
            <p>{ props.desc}</p>
          </div>
          <div className="btn">
            <button className="msg">Message</button>
            <button className="follow">Following</button>
          </div>
        </div>
        <div>
          <p>Skills</p>
          <div>
            {props.skills.map((el) => {
              return <span>{el}</span>
           })}
          </div>
          

        </div>
      </div>
    </div>
  );
}
