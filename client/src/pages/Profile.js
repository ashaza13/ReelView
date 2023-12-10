import React, { useState, useEffect } from "react";
import { Spinner } from "../components";
import styles from "../style";
import { ScrollableMovies } from "../components";

const Profile = ({ }) => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userId = localStorage.getItem('userId');
    
            if (userId) {
              const response = await fetch(`http://localhost:3001/api/user/${userId}`);
              if (response.ok) {
                const data = await response.json();
                setUserData(data);
              } else {
                console.error('Failed to fetch user data:', response.statusText);
              }
            } else {
              console.error('User ID not found in localStorage');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUserData();
      }, []);

    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div>
                <div className="bg-gray-800 w-full">
                    <div className={`${styles.paddingY} ${styles.paddingX} grid grid-cols-8`}>
                        <div className={`col-span-1 flex items-center`}>
                            <h1 className={`rounded-full bg-orange-500 text-white text-6xl flex items-center justify-center w-32 h-32 shadow-md`}>
                                A
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row">
                                <h1 className="text-white font-bold text-2xl">{userData.username}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col`}>
                    <div>
                        <h1 className="text-black font-bold text-2xl">Stats</h1>
                    </div>
                    <div className="flex flex-row space-x-20">
                        <div>
                            <h2 className="text-black">Total Reviews</h2>
                            <p className="text-orange-500 py-2 text-6xl font-bold">{userData.userReviews.length}</p>
                        </div>
                        <div>
                            <h2 className="text-black">Total Reviews</h2>
                            <p className="text-orange-500 py-2 text-6xl font-bold">0</p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <ScrollableMovies /> */}
                </div>
            </div>
        );
    }
};

export default Profile;