import React from "react";
import { ICONS, IMAGES } from "./constants";
import SidebarRow from "./SidebarRow";

const Sidebar = () =>{
    return(
        <div>
            <SidebarRow src={IMAGES.user} title="Ab Sam"/>
            <SidebarRow Icon={ICONS.UsersIconS} title="Friends"/>
            <SidebarRow Icon={ICONS.UserGroupIconO} title="Group"/>
            <SidebarRow Icon={ICONS.ShoppingBagIconO} title="Marketplace"/>
            <SidebarRow Icon={ICONS.DesktopComputerIconS} title="Watch"/>
            <SidebarRow Icon={ICONS.CalendarIconS} title="Events"/>
            <SidebarRow Icon={ICONS.ClockIconS} title="Memories"/>
            <SidebarRow Icon={ICONS.ChevronDownIconO} title="See More"/>
            

        </div>
    )
}

export default Sidebar;