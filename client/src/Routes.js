import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Activate from './pages/Activate';
import NewImage from './pages/NewImage';
import ImageList from './pages/ImageList';
import ImageEdit from './pages/ImageEdit';
import SlideShow from './pages/SlideShow';


// Pages
export default [
  // Index page
  {
    path: '/',
    component: Home,
  },
  // About page
  {
    path: '/about/',
    component: About,
  },
  {
    path: '/signup/',
    component: Signup,
  },
  {
    path: '/profile/',
    component: Profile,
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '/activate/',
    component: Activate,
  },
  {
    path: '/newimage/',
    component: NewImage,
  },
  {
    path: '/imagelist/',
    component: ImageList,
  },
  {
    path: '/imageedit/:imageid/',
    component: ImageEdit,
  },
  {
    path: '/slideshow/',
    component: SlideShow,
  }
]