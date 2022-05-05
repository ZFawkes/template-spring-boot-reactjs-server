'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
		    <article className="bg-dark min-vh-100">
		        <Router>
                    <Navigation />
                    <Switch>
                        <Route exact path="/app" component={Home} />
                        <Route path="/app/page" component={Page} />
                    </Switch>
                    <Footer/>
                </Router>
            </article>
        )
	}
}

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/app/">App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/app/page">Page</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

class Home extends React.Component {
	render() {
		return (
		    <section className="container bg-light">
                <div className="page-header">
                    <h1>App</h1>
                    <DevText />
                </div>
            </section>
		)
	}
}

class Footer extends React.Component {
    render () {
        return (
            <div>Footer</div>
        )
    }
}

class Page extends React.Component {
	render() {
		return (
		    <section className="container bg-light pb-3">
                <div className="page-header">
                    <h1>Page</h1>
                    <DevText />
                </div>
            </section>
		)
	}
}


class DevText extends React.Component {
    render() {
        return (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit dui a lectus dignissim aliquet. Maecenas iaculis volutpat dignissim. Cras vehicula facilisis tempus. Suspendisse laoreet tempus purus, at euismod arcu maximus in. Nullam dapibus quam vel gravida blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut mattis, sapien nec rhoncus pellentesque, erat lacus mattis quam, vitae ullamcorper felis justo nec enim. Sed porttitor justo lorem, id convallis augue tincidunt egestas. Curabitur ac mattis enim. Nulla id urna purus. Nullam id placerat nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla maximus justo sed diam rhoncus, ut laoreet enim porta. Maecenas vulputate convallis quam, sed tempus ligula pretium vel. Donec lacus nisi, molestie sit amet accumsan dictum, iaculis sed felis. In tellus turpis, mattis quis egestas sit amet, fringilla vel eros. Nulla facilisi. Nulla neque purus, sagittis ac lorem non, tincidunt vestibulum turpis. Sed tempus luctus nisi a venenatis. Sed blandit enim vel tortor tincidunt cursus. Ut id congue sapien. Vivamus urna lorem, placerat id commodo sit amet, aliquet eu nunc. Praesent iaculis malesuada mi, et tempus ipsum rutrum ut. Etiam in consequat orci. Morbi ut velit vitae ipsum dignissim dignissim. Fusce tempor nibh ac arcu cursus, sed hendrerit augue mattis. Sed ut rutrum sapien. Curabitur eget sapien non ex imperdiet eleifend vitae vel augue. Curabitur ultricies commodo rhoncus. Morbi ut arcu in ligula finibus pellentesque quis eleifend eros. Proin et nunc sem. Vestibulum a interdum neque. Proin consequat bibendum malesuada. Donec malesuada ex vitae quam volutpat, at varius ipsum lacinia. Nullam auctor sem vitae sem semper, eu interdum ante dignissim. Pellentesque auctor diam a rhoncus finibus. Nam tempus quis diam ut viverra. Mauris consequat convallis neque, vitae ultrices nisl facilisis rhoncus. Cras nec justo eu purus mattis viverra eget eu tellus. Etiam auctor, libero vitae fringilla elementum, augue sem gravida nisi, suscipit luctus elit ligula porta urna. Aenean sollicitudin, dolor dictum mollis condimentum, libero tortor gravida urna, ac malesuada ligula sapien et diam. In hac habitasse platea dictumst. Pellentesque ut massa non mauris auctor molestie nec eget magna. Donec in orci sit amet justo rhoncus lacinia id ac diam. Cras eleifend sodales interdum. Aliquam justo leo, pellentesque vitae maximus non, suscipit id nibh. Phasellus dapibus tellus id pulvinar tempor. Etiam sed orci vel sem aliquet malesuada id sodales ligula. Morbi urna purus, ullamcorper vel diam sit amet, laoreet egestas odio. Cras vulputate ex id odio aliquam, id ullamcorper massa cursus. Aenean sit amet congue leo, iaculis ornare justo. Pellentesque a tristique tortor, sit amet imperdiet erat. Aliquam vulputate ligula dui, sed dapibus nulla vehicula vitae. Pellentesque ligula nulla, consectetur in vehicula in, pellentesque in mi. Sed tellus mauris, hendrerit sed porta nec, tristique eget turpis. Morbi facilisis urna sagittis velit pellentesque, vitae pellentesque libero facilisis. Cras vel eleifend tellus, et condimentum urna. Donec dignissim, orci non scelerisque cursus, libero quam vehicula ipsum, interdum lacinia magna odio in ex. Nullam feugiat, tellus sit amet euismod efficitur, urna tellus porttitor elit, id consequat erat purus id nunc. Mauris nec felis vitae dui egestas finibus. Suspendisse vestibulum nisi tristique mauris placerat, vel blandit risus placerat. Pellentesque lacinia quam nibh, vitae pulvinar enim ultrices vel. Donec vel venenatis lectus. Phasellus porttitor feugiat mattis.</p>
        )
    }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

