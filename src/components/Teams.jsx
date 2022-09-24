export const Teams = (props) => {
  return (
    <div id="teams" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the teams behind all the hard work</h2>
          <p>
            “The strength of the team is each individual member. The strength of
            each member is the team.” ― Phil Jackson
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 teams">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="teams-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
