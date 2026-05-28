import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { incrementAge, setFirstname, setLastname } from './UserSlice'

function User() {
  const dispatch = useDispatch<AppDispatch>()
  const { firstname, lastname, age } = useSelector((state: RootState) => state.user)

  return (
    <div>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Age: {age}</p>
      <button type="button" onClick={() => dispatch(incrementAge())}>
        Increment Age
      </button>
      <div>
        <input
          type="text"
          value={firstname}
          onChange={(e) => dispatch(setFirstname(e.target.value))}
          placeholder="First name"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => dispatch(setLastname(e.target.value))}
          placeholder="Last name"
        />
      </div>
    </div>
  )
}

export default User
