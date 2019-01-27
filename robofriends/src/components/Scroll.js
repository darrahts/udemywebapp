import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '620px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;

//use:
//
//<Scroll>
//(what you want to scroll)
//<CardList robots={filteredRobots} />
//</Scroll>