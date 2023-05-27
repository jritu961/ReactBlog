import React, { useState } from "react";
import Modal from "react-modal";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";

import Contact from "../../component/Contact";
import blogger from "../../assets/Images/blogger.png"
import {
  Navbarmain,
  Rightnav,
  Leftnavbar,
  Midnav,
  Navdata,
  PowerImg,
  Icon,
  IconAndDAta,
  Header,
  ModalContainer,
  NavbarToggler,
  Bar,
  TogglerNavbar,
  BlogImg
} from "../../styles/Navbar";
import power from "../../assets/Images/power.png";
import { FaBlog } from 'react-icons/fa';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Navbar = () => {
  let subtitle: any;
  const [isopen, setIsopen] = React.useState(false);
  const [humberger, setHumberger] = useState(false);
  console.log("humberger", humberger);

  console.log("isopen", isopen);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  const handleClick = () => {
    setIsopen(true);
  };

  function closeModal() {
    setIsopen(false);
  }
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MyContext);

  function scrollDown() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  const logOut = () => {
    localStorage.clear();
    dispatch({ type: "USER", payload: false });
  };

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <Header>
            <TogglerNavbar>
              <Leftnavbar>Blog</Leftnavbar>
              <NavbarToggler
                onClick={() => setHumberger(!humberger)}
                humberger={humberger}
              >
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
              </NavbarToggler>
            </TogglerNavbar>
            <Midnav humberger={humberger}>
              <IconAndDAta>
                <Icon>
                  <FcHome size={25}/>
                </Icon>
                <Navdata onClick={() => {
                  navigate("/");
                }}>Home</Navdata>
              </IconAndDAta>
              {/* <IconAndDAta>
                <Icon>
                  <FcAbout size={25}/>
                </Icon>
                <Navdata onClick={handleClick}>About</Navdata>
              </IconAndDAta> */}
              <IconAndDAta>
                <Icon>
                  <FcBusinessContact size={25}/>
                </Icon>
                <Navdata onClick={scrollDown}>Contact</Navdata>
                <Modal
                  isOpen={isopen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                  <button onClick={closeModal}>close</button>
                  <div>I am a modal</div>
                  <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                  </form>
                </Modal>
              </IconAndDAta>
            </Midnav>
            <Rightnav humberger={humberger}>
              <Navdata
                onClick={() => {
                  navigate("/profile");
                }}
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#212121",
                  color: "#fff",
                  margin: "1px",
                }}
              >
                Create Post
              </Navdata>

              <PowerImg onClick={logOut}>
                <img
                  src={power}
                  alt="logout"
                  style={{ borderStyle: "none" }}
                ></img>
              </PowerImg>
            </Rightnav>{" "}
          </Header>
        </>
      );
    } else {
      return (
        <>
          <Header>
            <TogglerNavbar>
              <Leftnavbar>Blog</Leftnavbar>
              <BlogImg><FaBlog style={{ transform: 'scale(2)' }}/></BlogImg>
              <NavbarToggler
                onClick={() => setHumberger(!humberger)}
                humberger={humberger}
              >
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
              </NavbarToggler>
            </TogglerNavbar>
            <Midnav humberger={humberger}>
              <IconAndDAta>
                <Icon>
                  <FcHome size={25} />
                </Icon>
                <Navdata onClick={() => {
                  navigate("/");
                }}>Home</Navdata>
              </IconAndDAta>
              {/* <IconAndDAta>
                <Icon>
                  <FcAbout size={25}/>
                </Icon>
                <Navdata onClick={handleClick}>About</Navdata>
              </IconAndDAta> */}
              <IconAndDAta>
                <Icon>
                  <FcBusinessContact size={25}/>
                </Icon>
                <Navdata onClick={scrollDown}>Contact</Navdata>
                <Modal
                  isOpen={isopen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <ModalContainer>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                  </ModalContainer>
                </Modal>
              </IconAndDAta>
            </Midnav>
            <Rightnav humberger={humberger}>
              <Navdata
                onClick={() => {
                  navigate("/signup");
                }}
                style={{
                  border: "2px solid black",
                  borderRadius: "15px",
                  backgroundColor: "#212121",
                  color: "#fff",
                  margin: "1px",
                
                }}
              >
                SignUp
              </Navdata>
              <Navdata
              style={{ marginRight:"20px"}}
                onClick={() => {
                  navigate("/signin");
                }}
              >
                SignIn
              </Navdata>
            </Rightnav>
          </Header>
        </>
      );
    }
  };
  return (
    <Navbarmain>
      <RenderMenu />
    </Navbarmain>
  );
};

export default Navbar;
