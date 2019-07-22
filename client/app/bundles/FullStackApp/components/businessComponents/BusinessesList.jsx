import React from 'react';

const BusinessesList = ({
  item,
  editCallback,
  deleteCallback,
  viewItemCallback
}) => {
  const titleStyle = {
    fontSize: '17px'
  };

  const editItem = id => editCallback(id);

  const deleteItem = id => deleteCallback(id);

  const viewItem = item => viewItemCallback(item);

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
            <b>Founded:</b> {item.founded}
          </div>
        </div>
        <div className='buttonDiv'>
          <button onClick={() => viewItem(item)}>View</button>
          <button onClick={() => editItem(item.id)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

{
  /* <img
              src='https://images.unsplash.com/photo-1501755792080-cd51e405462c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2282&q=80'
              alt='Unsplash Photo'
            /> */
}

export default BusinessesList;
