import { useEffect } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
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
          <span className='logo'>lamaadmin</span>
        </div>
        <div className='topRight'>
          {user && (
            <>
              <MenuItem onClick={handleSignOut}>SIGN OUT</MenuItem>
            </>
          )}
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
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
