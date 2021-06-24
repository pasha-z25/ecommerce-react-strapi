import React from 'react'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const AboutUs = () => {
  const { loading, error, data } = useQuery(gql`
      query Categories {
          about {
              id
              title
              description
              content
          }
      }
  `)

  if (data) {
    console.log(data.about)
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{`Error! ${error.message}`}</div>}
      {data && (
        <>
          <p>{ data.about.title }</p>
          <p>{ data.about.description }</p>
          <div>
            <ReactMarkdown>{ data.about.content }</ReactMarkdown>
          </div>
        </>
      )}
    </div>
  )
}

export { AboutUs }