import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="event">
        <Link to="/add-event">
          <Button className="btn-primary">Add Event</Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
