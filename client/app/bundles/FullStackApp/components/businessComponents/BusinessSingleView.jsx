import React from 'react';
import Founders from '../foundersComponents/Founders';

const BusinessSingleView = ({
  business,
  closeViewCallback,
  editCallback,
  deleteCallback,
  founders
}) => {
  const editItem = id => editCallback(id);

  const deleteItem = id => deleteCallback(id);

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
    <div className='singleView'>
      <div>
        <h3>
          <em>{business.name}</em>
        </h3>
      </div>
      <br />
      <div>
        <i>Description: {business.longdesc}</i>
      </div>
      <br />
      <div>Location: {business.location}</div>
      <div>
        <br />
        Founded: <em>{formatDate(business.founded)}</em>
      </div>
      <br />
      <Founders businessid={business.id} founders={founders} />
      <br />
      <button onClick={() => editItem(business.id)}>Edit</button>
      <button onClick={() => deleteItem(business.id)}>Delete</button>
      <button onClick={() => closeViewCallback()}>Close</button>
    </div>
  );
};

export default BusinessSingleView;

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
