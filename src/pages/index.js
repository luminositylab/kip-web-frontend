// TODO: newsletter might be mailchip - could connect to shopify (if we decide to do that vs. amazon)
// research how much it costs to put a product on amazon vs. shopify
// newsletter and creator community - keep them both! They will exist

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import kipRender3 from '../assets/images/kip.render.3.png'
import blinkingKip from '../assets/images/blinking-kip.gif'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="KiP | Learn Robotics" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />
        <br/> {/*using this makes the header separate cleanly from the body,
        but it forces the nav bar to stick to the top when user focuses on header*/}
        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content"> 
                <header className="major">
                  <h2>Robot - <i>simplified</i></h2>
                </header>
                <p>
                Discover the how and why of every step in the process of building your own robot.
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={kipRender3} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Learn Diverse Skills</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style3 fa-bolt" />
                <h3>Electrical Design</h3>
                <p>
                Master the principles of electrical design, from power electronics to digital motion control.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-code" />
                <h3>Software</h3>
                <p>
                Program new functionalities and customize pre-built ones,
                from your robot’s first steps to machine learning algorithms.
                </p>
              </li>
              <li>
                <span className="icon major style1 fa-print" />
                <h3>3D Printing</h3>
                <p>
                Take Kip to the next level by designing new parts and watch them take shape on your 3D printer.
                </p>
              </li>
            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="second" className="main special">
            {/* <header className="major">
              <h2>Create and Build</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork" />
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o" />
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal" />
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop" />
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond" />
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer> */}

            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Creator Community</h2>
                </header>
                <p>
                Share your designs with other Kip creators and be inspired by their ideas and discussion.
                </p>
                <Link to="/download" className="button special">
                    <span/>
                    &nbsp; Link here?
                  </Link>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span>
                <img src={blinkingKip} alt="" />
              </span>
            </div>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Stay Updated</h2>
              <p>
              Join the Kip newsletter to follow development milestones
              and be the first to learn about future release dates.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    <span className="icon fa-mobile" />
                    {'  '}
                    &nbsp; iOS
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="button special">
                    <span className="icon fa-android" />
                    &nbsp; Android
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
