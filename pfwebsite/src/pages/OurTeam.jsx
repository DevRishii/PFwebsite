import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurTeam = () => {
    
    const navigate = useNavigate();
    
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-5xl font-bold'>Our Team</h1>
                <button className='px-4 py-2 mt-4 text-white bg-black border-2 border-white rounded-md hover:bg-white hover:text-black' onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    );
}

export default OurTeam;
