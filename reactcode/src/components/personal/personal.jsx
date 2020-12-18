import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, uploadImg } from '../../redux/authAction'

export default function Personal() {
  const { id, userName, number, avatar } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [file, setFile] = useState('')
  const [img, setImg] = useState(avatar)
  const imgStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover'
  }
  const uploadFile = (e) => {
    setFile(e.target.files[0])
    const reader = new FileReader()
    reader.onloadend = function () {
      setImg(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      setImg('')
    }
    dispatch(uploadImg(img, id))
  }

  return (
    <div className="main_personal">
      <div className="title">Личный кабинет</div>
      <div className="title name">{ userName }</div>
      <div className="numberProfile">{ number }</div>
      <div className="avatar" style={imgStyle} />
      <div className="center">
        <label htmlFor="upload-photo">
          <input hidden onChange={uploadFile} id="upload-photo" name="upload-photo" type="file" />
          <Button color="secondary" variant="contained" component="span">сменить аватар</Button>
        </label>
      </div>
      <NavLink to="/authorization"><Button variant="outlined" onClick={() => dispatch(logout())} color="primary">выйти</Button></NavLink>
    </div>
  )
}
