// import React, { useState } from 'react';
import { Modal } from 'antd';
import { ChangeEvent } from 'react';



const SigninModal = ({setIsSignInModalOpen}:{setIsSignInModalOpen : React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleOk = () => {
    setIsSignInModalOpen(false)
  };
  const handleCancel = () => {
    setIsSignInModalOpen(false)
      };

  return (
    <div className=''>
    <div className=''>
      <Modal
        title="Login Form"
        open={true}
        onOk={handleOk}
        okText="Login"
        onCancel={handleCancel}
        okButtonProps={{
          disabled: false,
          style: {
            background: '#000',  
            borderColor: '#1890ff',  
            color: '#fff', 
            fontSize: '16px'          
          },
        }}
        cancelButtonProps={{
          disabled: false,
         
        }}
       
      >
       <form>
        <div>
          <label className='text-lg font-bold'>USERNAME</label> <br />
          <input className='w-[120px] text-xl' type='text' placeholder='Enter Your Name' />
        </div>
        <div>
          <label className='text-lg font-bold'>EMAIL</label> <br />
          <input className='w-[120px] text-xl'  type='email' placeholder='Enter Your Email' />
        </div>
        <div>
          <label className='text-lg font-bold'>PASSWORD</label> <br />
          <input className='w-[120px] text-xl' type='password' placeholder='Enter Your Password' />
        </div>
        </form>
      </Modal>
      {/* <div className='bg-white max-w-[10rem]'>
        <div>
          <p>This is a modalform</p>
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default SigninModal;
