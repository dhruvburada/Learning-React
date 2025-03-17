import React from 'react'
import { useGithubData } from './useGithubData';
const CustomHooksDemo = () => {
const { data, loading, error } = useGithubData("https://api.github.com/users/dhruvburada");

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
    <div>Github Stats</div>
    <div>Followers :{data.followers}</div>
    <div>Following : {data.following}</div>
    </>
  )
  }

export default CustomHooksDemo;