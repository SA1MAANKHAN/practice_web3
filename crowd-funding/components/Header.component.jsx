import React from 'react'
import { Menu } from 'semantic-ui-react'

function Header() {
    return (
                  <Menu style={{ marginTop: 'calc(1.5vh + 1.5vw)' }}>
        {/* <Link route="/"> */}
            <a className="item">CrowdCoin</a>
        {/* </Link> */}

        <Menu.Menu position="right">
            {/* <Link route="/"> */}
            <a className="item">Campaigns</a>
            {/* </Link> */}

            {/* <Link route="/campaigns/new"> */}
            <a className="item">+</a>
            {/* </Link> */}
        </Menu.Menu>
        </Menu>
    )
}

export default Header

