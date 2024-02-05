import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import style from './Users.module.scss'


const Users = ({ value }) => {
  const [values, setValues] = useState() //state of props
  const [items, setItems] = useState([]) //state of array users
  const [page, setPage] = useState(1) // state of page
  const [data, setData] = useState() // object user
  const [isLoading,setIsLoading] = useState(true) // spinner



  //put props in state
  useEffect(() => {
    setItems(value)
    setValues(value)
    setPage(1)
  }, [value])

  //get users

  useEffect(() => {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    )
      .then(res => res.json())
      .then(data => {addItems(data); setIsLoading(false) })
  }, [page, values])

  // put users next page in array with users
  const addItems = data => {
    setData(data)
    setItems(items.concat(data.users))
    setIsLoading(false)
  }

  return (
    <section className={style.div} id='user'>
      <h1 className={style.contents}>Working with GET request</h1>
      <div className={style.main_container}>
        {items?.map(users => (
          <div key={users.id} className={style.container_user}>
            <div className={style.circle_image}>
              <img src={users.photo} alt='logo' className={style.img} />
            </div>
            <h1 className={style.h1}>{users.name}</h1>
            <p className={style.position}>{users.position}</p>
            <a title={users.email} className={style.a}>
              {users.email}
            </a>
            <p className={style.position}>{users.phone}</p>
          </div>
        ))}
      </div>
      <ClipLoader color='#00BDD3' cssOverride={{color:'#F8F8F8',marginTop:'20px'}} loading={isLoading}  size={50}/>

      {data && data.links.next_url !== null ? (
        <button
          className={style.button}
          onClick={() => {setPage(+page + 1); setIsLoading(true)}} //can put link from next page(data.links.next_url)
        >
          show more
        </button>
      ) : (
        <button className={style.button2}>show more</button>
      )}
    </section>
  )
}

export default Users
