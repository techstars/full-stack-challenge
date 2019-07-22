import React from 'react';

const BusinessesList = ({ item, viewItemCallback }) => {
  const titleStyle = {
    fontSize: '17px'
  };

  const viewItem = item => viewItemCallback(item);

  const formatDate = date => {
    //1945-02-10
    let month;
    let year = date.split('-')[0];
    let monthNum = date.split('-')[1];
    for (let i = 0; i < monthArr.length; i++) {
      if (+monthNum - 1 === i) {
        month = monthArr[i];
      }
    }
    let day = date.split('-')[2];

    let dateReturn = `${month} ${day}, ${year}`;
    return dateReturn;
  };

  return (
    <div>
      <div className='businessesList'>
        <span className='avatar'>
          <img src={item.photo} alt='Unsplash Photo' />
        </span>
        <div className='businessesDisplay'>
          <div style={titleStyle}>
            <b> {item.name}</b>
          </div>
          <div>
            <i>{item.shortdesc}</i>
          </div>

          <div>
            <b>Location:</b> {item.location}
          </div>

          <div>
            <b>Founded:</b> {formatDate(item.founded)}
          </div>
        </div>
        <div className='buttonDiv'>
          <h2 className='more' onClick={() => viewItem(item)}>
            more...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessesList;

const monthArr = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
