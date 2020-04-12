// import React from 'react'; 
// import { Link } from 'react-router-dom'; 

// const HomepageHeader = ( { currentUser, logout } ) => {
//     debugger
//     return (
//     <div>

//         <div className="header-btns">
//             <div className="header-btns-left">
//                 <p className="btn-write-a-review"><Link to="/businesses">Write a Review</Link></p>
//                 <p className="btn-events">LinkedIn</p>
//                 <p className="btn-talk">GitHub</p>
//             </div>

//             <div className="header-btns-right">
//                 <p className="btn-login" ><Link to="/businesses"><i className="far fa-user" /> {currentUser.first_name}</Link></p>
//                 <p className="btn-signup" onClick={logout}>Log Out</p>
//             </div>

//         </div>

//         <div className="header-main">
//             <div className="header-logo">
//                 <Link to="/">Yelper</Link>
//             </div>

//             <div className="header-search-box">
//                 <label className="search-bar-find">Find
//                     <input type="text" placeholder="parks, takeout..." />
//                 </label>

//                 <label className="search-bar-near">Near
//                     <input type="text" placeholder="Manhattan, NY" />
//                 </label>

//                 <label className="search-bar-search">
//                     <i className="fas fa-search"></i>
//                 </label>
//             </div>

//             <div className="header-nav">
//                 <ul className="header-links">
//                     <li className="header-accountants"><i className="fas fa-calculator"></i><a href="/">Accountants</a></li>
//                     <li className="header-restaurants"><i className="fas fa-utensils"></i><a href="/">Restaurants</a></li>
//                     <li className="header-home-services"><i className="fas fa-home"></i><a href="/">Home Services</a></li>
//                     <li className="header-delivery"><i className="fas fa-bicycle"></i><a href="/">Delivery</a></li>
//                 </ul>
//             </div>
//         </div>

//     </div>
//     )
// }

// export default HomepageHeader;