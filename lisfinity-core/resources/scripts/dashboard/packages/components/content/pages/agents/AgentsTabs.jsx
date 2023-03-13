/* global lc_data, React */
/**
 * External dependencies.
 */
import { findDOMNode, useRef } from '@wordpress/element';
import { Route, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import ReactSVG from 'react-svg';
import shiftRightIcon from '../../../../../../../images/icons/shift-right.svg';
import { sideScroll } from '../../../../../../theme/vendor/functions';
import AgentsNew from './AgentNew';
import AgentsList from './AgentsList';

const AgentsTabs = (props) => {
  const { productId } = props;
  const data = useSelector(state => state);
  const { loading, business, product } = data;
  const toScroll = useRef(null);

  let url = `${lc_data.myaccount}agents`;

  const scrollLeft = () => {
    const container = findDOMNode(toScroll.current);
    sideScroll(container, 'right', '25', 100, 10);
  };

  return [
    <div key={0} className="w-full bg:w-11/16">
      <nav className="flex flex-end items-center mb-30 p-20 bg-white rounded shadow-theme">
        <ScrollContainer ref={toScroll}>
          <ul className="flex items-center w-full">
            <li>
              <NavLink
                exact
                to={`${lc_data.site_url}${url}`}
                className="flex-center py-4 px-20 rounded font-bold text-grey-900 text-lg whitespace-no-wrap"
                activeClassName="bg-grey-100"
              >
                {lc_data.jst[777]}
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`${lc_data.site_url}${url}/new`}
                className="flex-center py-4 px-20 rounded font-bold text-grey-900 text-lg whitespace-no-wrap"
                activeClassName="bg-grey-100"
              >
                {lc_data.jst[779]}
              </NavLink>
            </li>
          </ul>
        </ScrollContainer>
        <button type="button" className="ml-auto pl-20" onClick={() => scrollLeft()}>
          <ReactSVG
            src={`${lc_data.dir}dist/${shiftRightIcon}`}
            className={`ml-10 w-24 h-24 fill-filter-icon`}
          />
        </button>
      </nav>

      <Route exact path={`${lc_data.site_url}${url}`} component={() => <AgentsList/>}/>
      <Route exact path={`${lc_data.site_url}${url}/new`} component={() => <AgentsNew/>}/>

    </div>,
  ];
};

export default AgentsTabs;
