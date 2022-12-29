import React from 'react';

const PostComments = ({comment}) => {
    // console.log(comment);
    return (
        <div className='border border-blue-100 bg-teal-50 shadow-sm rounded-lg p-3 flex gap-3 m-2'>
            <div>
                <img className='w-8 h-8 rounded-full' src={comment?.photoURL} alt="user" />
            </div>
            <p>{comment?.comment}</p>
        </div>
    );
};

export default PostComments;