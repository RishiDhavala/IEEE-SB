export const Leads = (props) => {
  return (
    <div id="leads" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Leads of our Student Branch</h2>
          <p>
          "A leader is one who knows the way, goes the way, and shows the way." — John Maxwell
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 leads">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="leads-img" />
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
