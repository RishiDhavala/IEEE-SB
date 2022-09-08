export const Mentors = (props) => {
  return (
    <div id='mentors'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>OUR MENTORS</h2>
          <p>"A mentor empowers a person to see a possible future, and believe it can be obtained." — Shawn Hitchcock</p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='mentor'>
                    <div className='mentor-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='mentor-content'>
                      <p>"{d.text}"</p>
                      <div className='mentor-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
