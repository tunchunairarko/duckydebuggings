import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';


export default function Sidebar({ collapsed, toggled, handleToggleSidebar }) {
    return (
        <>
            <ProSidebar
                breakPoint="md"
                collapsed={collapsed}
                toggled={toggled}
                onToggle={handleToggleSidebar}
                className="sidebar-main"
            >
                <SidebarHeader setstyle={{ border: 'none' }}>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Ducky Debugging                        
                    </div>
                    
                </SidebarHeader>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>
                        <Link className="nav-link" to={`/admin/dashboard`}>
                            Dashboard
                        </Link>
                    </MenuItem>
                    <SubMenu title="Members" icon={<FaHeart />}>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/members/new`}>
                                Create new members
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/members/`}>
                                Manage members
                            </Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Posts" icon={<FaHeart />}>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/posts/new`}>
                                Create new posts
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/posts/`}>
                                Manage posts
                            </Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Categories" icon={<FaHeart />}>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/categories/new`}>
                                Create post categories
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/categories/`}>
                                Manage post categories
                            </Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>
                        <Link className="nav-link" to={`/admin/manageroles`}>
                            Manage user roles
                        </Link>
                    </MenuItem>
                    <SubMenu title="Your Profile" icon={<FaHeart />}>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/members/new`}>
                                Edit your profile
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="nav-link" to={`/admin/availability/`}>
                                Manage availability
                            </Link>
                        </MenuItem>
                    </SubMenu>

                </Menu>
            </ProSidebar>
        </>
    )
}