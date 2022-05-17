import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function School() {
    const navigate=useNavigate();
  return (
    <div>School components
    <button onClick={()=>navigate('/college')}>College Component Page</button>
    </div>
  )
}
