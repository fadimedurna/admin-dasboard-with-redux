import { useEffect } from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/apiCalls";

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 10px;
`;

export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleSignOut = () => {
    logout(dispatch);
  };

  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>thunderbolt admin</span>
        </div>
        <div className='topRight'>
          {user && (
            <>
              <MenuItem onClick={handleSignOut}>SIGN OUT</MenuItem>
            </>
          )}
          <div className='topbarIconContainer'>
            <NotificationsNoneIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <LanguageIcon />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <SettingsIcon />
          </div>
          <img
            src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
}
