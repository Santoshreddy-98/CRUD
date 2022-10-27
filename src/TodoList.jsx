import React from 'react'

const TodoList = ({deletehandler,edithandler,store}) => {
  return (
    <div>
        <div className='container mt-3'>
<div className='row'>
<div className='col col-md-12'>
<table className='table table-hover'>
    <thead>
        <tr>
            <th>ID</th>
            <th>Email</th>
            <th>password</th>
        </tr>
    </thead>
    <tbody>
{
    store.map((elem,index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{elem.email}</td>
                <td>{elem.password}</td>
                <td>
                    <input type='button' value='edit' onClick={()=>edithandler(index)}/>
                    <input type='button' value='delete' onClick={()=>deletehandler(index)}/>
                
                </td>
            </tr>
        )
    })
}
    </tbody>
</table>
</div>
</div>
</div>
    </div>
  )
}

export default TodoList