import React from 'react'

type Props = {}

export default function Loading({}: Props) {
  return (
    <div className="spinner-border my-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
  )
}