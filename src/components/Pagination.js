import React from 'react';
import { Pagination } from 'react-bootstrap';

export default ({ activePage, items, onSelect, component }) => {
  return (
    <div className="pagination-component">
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={+items}
        maxButtons={5}
        activePage={+activePage}
        onSelect={onSelect}
        buttonComponentClass={component}
      />
    </div>
  );
};