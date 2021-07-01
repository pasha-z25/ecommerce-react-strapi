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
  const about = data?.about

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{`Error! ${error.message}`}</div>}
      {about && (
        <div className='container mx-auto px-4'>
          <p>{ about.title }</p>
          <p>{ about.description }</p>
          <div>
            <ReactMarkdown>{ about.content }</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}

export { AboutUs }