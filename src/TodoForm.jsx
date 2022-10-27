import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'

const TodoForm = () => {
    const [form,setForm]=useState({email:'',password:''})
    const [formerrors,setFormerrors]=useState({})
    const [isSubmit,setIssubmit]=useState(false)
    const [store,setStore]=useState([])
    const changehandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const submithandler=(e)=>{
        e.preventDefault()
        console.log(form)
        setFormerrors(validate(form))
        setIssubmit(true)
        const newstore=[...store,form]
        setStore(newstore)
       }
       const deletehandler=(indexvalue)=>{
        const filteredstore=store.filter((elem,index)=>index!==indexvalue)
        setStore(filteredstore)
       }
       const edithandler=(editindexvalue)=>{
        const filteredstore=store.filter((elem,index)=>index!==editindexvalue)
        setStore(filteredstore)
        const editselector=store.find((elem,index)=>index===editindexvalue)
        setForm({
            email:editselector.email,
            password:editselector.password
        })
       }
    useEffect(()=>{
        if(Object.keys(formerrors).length===0&& isSubmit){
            console.log(form)
        }
    },[formerrors])
    const validate=(values)=>{
        const errors={}
        const isemail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
        if(!values.email){
    errors.email='This is field is required'
}   
else if(!values.email.match(isemail)){
    errors.email='This is not valid email format'
}
if(!values.password){
    errors.password='This is field is required'
}
else if(values.password.length<6){
    errors.password='password must be 6 numbers'
}
else if(values.password.length>6){
    errors.password='password cannot be more than 6 numbers'
}
return errors
    } 
  return (
    <div className='container mt-5'>
  <div className='row'>
  <div className='col col-md-8'>
<div className='card'>
  <div className='card-header'>
   <h1 className='text-center'>To Do list</h1>
  </div>
  <div className='card-body'>
<form onSubmit={submithandler}>
    <div className='form-group'>
   <input type='text' className='form-control' placeholder='Enter @Email' name='email' value={form.email} onChange={changehandler}/>
    <p className='text-danger'>{formerrors.email}</p>
    </div>
    
    <div className='form-group'>
   <input type='password' className='form-control' placeholder='Enter password' name='password' value={form.password} onChange={changehandler}/>
   <p className='text-danger'>{formerrors.password}</p>
    </div>
    <button className='btn btn-success'>submit</button>
</form>
  </div>
</div>
<TodoList deletehandler={deletehandler} edithandler={edithandler} store={store}/>


  </div>
  </div>
    </div>
  )
}

export default TodoForm