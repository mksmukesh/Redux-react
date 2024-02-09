const User = (props)=> {

  const test={name:"Mukesh",
              email:"mks@gmail.com",
            address:"abc"}


  return (
    <div>
      <div>
        <h2>User :</h2>
      </div>
      <button onClick={()=>props.data(test)}>Click ME</button>
    </div>
  );
};
export default User;
