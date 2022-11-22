import React from 'react';
import { NavLink } from 'react-router-dom';

const Feedtoggle = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className="inline-block bg-white border-b-2 border-conduit-green py-2 px-4"
            to="/">
            Global Feed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Feedtoggle;
