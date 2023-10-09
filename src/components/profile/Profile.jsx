import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import "./profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";

function Profile() {
	const navigate = useNavigate();

	const handleLogout = () => {
		// Remove the JWT token from localStorage
		localStorage.removeItem("jwtToken");
		console.log("Logged Out");
		toast.success("Logged Out")
		
		setTimeout(() => {
			navigate('/');
		  }, 2000); 
	};

	

	return (
		<div className='profilecontainer'>
			<ToastContainer/>
			<nav
				id='sidebar'
				className='col-md-3 col-lg-2 d-md-block  '
				>
				<div className='position-sticky'>
					<ul className='nav flex-column profilesidebar'>
						<li className='navsidebaropt'>
							<a className=' sidebaropt'>
								 <i class="fa-solid fa-user fa-lg" style={{color:'white'}}></i>Edit Profile</a>
							
						</li>
						<li className='navsidebaropt'>
							<a className=' sidebaropt'> 
							<i class="fa-solid fa-book fa-lg " style={{color:'white'}}></i>My Courses</a>
						</li>
						<li className='navsidebaropt'>
							<a className=' sidebaropt'>
								<i class="fa-solid fa-heart fa-lg " style={{color:'white'}}></i>Wishlist</a>
						</li>
						<li className='navsidebaropt'>
							<a className=' sidebaropt'>
							<i class="fa-solid fa-cart-shopping fa-lg" style={{color:'white'}}></i>My Cart</a>
						</li>
						
						<li className='navsidebaropt'>
							<a className=' sidebaropt'>
							<i class="fa-solid fa-chalkboard-user fa-lg" style={{color:'white'}}></i>Tests</a>
						</li>
						<li className='navsidebaropt'>
							<a className=' sidebaropt' onClick={handleLogout}>
							<i class="fa-solid fa-right-from-bracket  fa-lg" style={{color:'white'}}></i>Logout
							
							</a>

						</li>
					</ul>
				</div>
			</nav>
			<div className='container '>
				<div className='id-photo my-4'>
					<div
						className=' mt-4'
						style={{ width: "120px", height: "120px"}}>
						<img src='./images/profile.webp' alt='' />
					</div>
				</div>

				<div  >
					<div className="statbox">
						<div>Courses</div>
						<div>Points</div>
						<div>Certificates</div>
					</div>
					<div className="stats">
						<div>Courses</div>
						<div>Points</div>
						<div>Certificates</div>
					</div>
				</div>
				
				<h2>
					My Progress
				</h2>
				<div className='id-course mt-2 position-relative'>
					
				</div>
			</div>
		</div>
	);
}

export default Profile;
